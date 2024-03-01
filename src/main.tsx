import ReactDOM from "react-dom/client";

import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { GlobalStyle } from "./theme/globalStyle.ts";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme/theme.ts";
import AuthProvider from "react-auth-kit";
import { authStore } from "./store/authStore.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
    <AuthProvider store={authStore}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </Provider>
    </AuthProvider>
  // </React.StrictMode>
);
