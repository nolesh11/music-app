export const Navbar = () => {
  return (
    <nav className="flex justify-center py-2 bg-black text-white">
      <a href="http://the50th.genius.com" target="_blanc">
        <span className="border-r-2 px-10">THE 50TH</span>
      </a>
      <a href="https://genius.com/#featured-stories">
        <span className="border-r-2 px-10">FEATURED</span>
      </a>
      <a href="#">
        <span className="border-r-2 px-10">CHARTS</span>
      </a>
      <a href="#">
        <span className="border-r-2 px-10">VIDEO</span>
      </a>
      <a href="#">
        <span className="border-r-2 px-10">PROMOTE</span>
      </a>
      <a href="https://genius.com/forums">
        <span className="border-r-2 px-10">FORUMS</span>
      </a>
      <a href="https://genius.com/new">
        <span className="px-10">ADD SONG</span>
      </a>
    </nav>
  )
}