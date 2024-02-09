import express from "express";
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mydatabase';
const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

app.use(express.json());

mongoose.connect(MONGODB_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
} as any); //eslint-disable-line

const User = mongoose.model('User', new mongoose.Schema({
  username: String,
  password: String,
}));

// Регистрация пользователя
app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  // Проверка, что пользователь с таким именем не существует
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    return res.status(400).json({ message: 'User with this username already exists' });
  }

  // Хэширование пароля
  const hashedPassword = await bcrypt.hash(password, 10);

  // Создание нового пользователя
  const newUser = new User({
    username,
    password: hashedPassword,
  });

  // Сохранение пользователя в базе данных
  await newUser.save();

  res.json({ message: 'User registered successfully' });
});

// Вход пользователя
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Поиск пользователя в базе данных
  const user = await User.findOne({ username });

  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Проверка пароля
  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Генерация JWT
  const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '1h' });

  res.json({ token });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});