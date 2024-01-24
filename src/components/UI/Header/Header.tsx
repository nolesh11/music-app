export const Header = () => {
  return (
    <header className="bg-yellow-300 flex justify-between px-20 pb-2">
      <div className="headerInput mt-2">
        <input className="px-2 py-1" type="text" placeholder="Search" />
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
        <button className="mr-3">Sign in</button>
        <button>Sign up</button>
      </div>
    </header>
  );
};
