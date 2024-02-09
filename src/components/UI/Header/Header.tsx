import { useState } from "react";
import { StyledHeader } from "./Header.style";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const handleLogOut = () => {
    navigate('/')
  }

  return (
    <StyledHeader>
      <header className="bg-yellow-300 flex justify-between px-20 pb-2">
        <div className="headerInput flex gap-4 mt-2">
          <div className={`burger-menu self-center ${isOpen ? 'active' : ''}`} onClick={() => setIsOpen(!isOpen)}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div className={`bergerMenuOpened p-4 ${isOpen ? 'active' : ''}`}>
            <p>THE 50TH</p>
            <p>FEATURED</p>
            <p>CHARTS</p>
            <p>VIDEOS</p>
            <p>PROMOTE YOUR MUSIC</p>
            <p className={`userAuth ${isOpen ? 'active' : ''}`}>Sign in</p>
            <p className={`userAuth ${isOpen ? 'active' : ''}`}>Sign up</p>
          </div>
          <input className="px-3 py-2 self-center" type="text" placeholder="Search" />
        </div>
        <div className="headerLogo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="40"
            viewBox="0 -8 100 50"
          >
            <text x="0" y="30" fontFamily="Arial" fontSize="30" fill="black">
              NoMus
            </text>
          </svg>
        </div>
        <div className="userLogin mt-3 ">
          <button onClick={handleLogOut} className="mr-3">Log out</button>
          <Link to={'/'}>
            <button className="mr-3">Sign in</button>
          </Link>
          <button>Sign up</button>
        </div>
      </header>
    </StyledHeader>
  );
};
