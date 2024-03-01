import { useEffect, useState } from "react";
import { StyledHeader } from "./Header.style";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "../input/Input";
import { useDebounce } from "../../../hooks/useDebounce";
import { useSearchLyricsQuery } from "../../../store/API/searchApi";
import { logout, selectIsAuth } from "../../../store/slices/userSlices";
import { useDispatch, useSelector } from "react-redux";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [dropDown, setDropDown] = useState(false);
  const debounced = useDebounce(searchValue);
  const { data: searchData } = useSearchLyricsQuery(debounced, {
    skip: debounced.length < 3,
    refetchOnFocus: true,
  });

  const searchResult = searchData?.sections;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isAuth = useSelector(selectIsAuth);

  useEffect(() => {
    setDropDown(debounced.length > 3 && searchResult?.length > 0);
  }, [debounced, searchResult]);

  const handleLogOut = () => {
    if (window.confirm("Are you sure you want to log out")) {
      dispatch(logout());
      window.localStorage.removeItem('token')
    }
  };
  const handleToMain = () => {
    navigate("/");
  };

  return (
    <StyledHeader>
      <div className="bg-yellow-300 flex justify-between px-20 pb-2">
        <div className="headerInput flex gap-4 mt-2">
          <div
            className={`burger-menu self-center ${isOpen ? "active" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div className={`bergerMenuOpened p-4 ${isOpen ? "active" : ""}`}>
            <p>THE 50TH</p>
            <p>FEATURED</p>
            <p>CHARTS</p>
            <p>VIDEOS</p>
            <p>PROMOTE YOUR MUSIC</p>
            <p className={`userAuth ${isOpen ? "active" : ""}`}>
              <Link to={"/login"} className={`mr-3`}>
                Sign in
              </Link>
            </p>
            <p className={`userAuth ${isOpen ? "active" : ""}`}>
              <Link to={"/registration"} className={`mr-3 ${isOpen ? "active" : ""}`}>
                Sign up
              </Link>
            </p>
            {/* <p className={`userAuth ${isOpen ? "active" : ""}`}>Sign in</p>
            <p className={`userAuth ${isOpen ? "active" : ""}`}>Sign up</p> */}
          </div>
          <Input
            placeholder="Search"
            type="text"
            isError={false}
            onChange={(e) => setSearchValue(e.target.value)}
            className="px-2"
          />
          {dropDown && (
            <div
              className={`searchResult absolute top-12 bg-gray-200 w-96 h-header overflow-y-scroll z-10`}
            >
              <h3 className="p-3 text-gray-500 uppercase">Search result</h3>
              <p className="topResultText text-gray-500 pt-5 pb-2 pl-4 uppercase">
                Top result
              </p>
              {searchResult.map((elem: any) => {// eslint-disable-line
                
                if (elem.type == "top_hit") {
                  return elem.hits.map(
                    (
                      hit: any // eslint-disable-line
                    ) =>
                      hit.index === "song" && (
                        <Link
                          key={hit.id}
                          to={`/song-details/${hit.result.id}`}
                        >
                          <div
                            key={hit.result.id}
                            className="songInfo flex gap-4 mb-5"
                          >
                            <img
                              className="w-20"
                              src={hit.result.song_art_image_thumbnail_url}
                              alt=""
                            />
                            <div className="songDetails">
                              <p className="songTitle">{hit.result.title}</p>
                              <p className="songArtist ">
                                {hit.result.artist_names}
                              </p>
                              <p>
                                {hit.result.stats.pageviews > 1000000
                                  ? (hit.result.stats.pageviews / 1000000)
                                      .toFixed(1)
                                      .replace(/\.0+$/, "") + "M"
                                  : (hit.result.stats.pageviews / 100000)
                                      .toFixed(1)
                                      .replace(/\.0+$/, "") + "k"}
                              </p>
                            </div>
                          </div>
                        </Link>
                      )
                  );
                }
              })}
              <div>
                <p className="topResultText text-gray-500 pt-5 pb-2 pl-4 uppercase">
                  Top songs
                </p>
                {searchResult.map((elem: any) => {// eslint-disable-line
                  if (elem.type == "song") {
                    return elem.hits.map(
                      (
                        hit: any // eslint-disable-line
                      ) =>
                        hit.index === "song" && (
                          <Link
                            key={hit.id}
                            to={`/song-details/${hit.result.id}`}
                          >
                            <div
                              key={hit.result.id}
                              className="songInfo flex gap-4 mb-5"
                            >
                              <img
                                className="w-20"
                                src={hit.result.song_art_image_thumbnail_url}
                                alt=""
                              />
                              <div className="songDetails">
                                <p className="songTitle">{hit.result.title}</p>
                                <p className="songArtist">
                                  {hit.result.artist_names}
                                </p>
                                <p>
                                  {hit.result.stats.pageviews > 1000000
                                    ? (hit.result.stats.pageviews / 1000000)
                                        .toFixed(1)
                                        .replace(/\.0+$/, "") + "M"
                                    : (hit.result.stats.pageviews / 100000)
                                        .toFixed(1)
                                        .replace(/\.0+$/, "") + "k"}
                                </p>
                              </div>
                            </div>
                          </Link>
                        )
                    );
                  }
                })}
              </div>
              <div>
                <p className="topResultText text-gray-500 pt-5 pb-2 pl-4 uppercase">
                  Top artists
                </p>
                {searchResult.map((elem: any) => {// eslint-disable-line
                  
                  if (elem.type == "artist") {
                    return elem.hits.map(
                      (
                        hit: any // eslint-disable-line
                      ) =>
                        hit.index === "artist" && (
                          <Link
                            key={hit.id}
                            to={`/artist-details/${hit.result.id}`}
                          >
                            <div
                              key={hit.result.id}
                              className="songInfo flex gap-4 mb-5"
                            >
                              <img
                                className="w-20"
                                src={hit.result.image_url}
                                alt=""
                              />
                              <div className="songDetails">
                                <p className="songTitle">{hit.result.name}</p>
                              </div>
                            </div>
                          </Link>
                        )
                    );
                  }
                })}
              </div>
              <div>
                <p className="topResultText text-gray-500 pt-5 pb-2 pl-4 uppercase">
                  Top albums
                </p>
                {searchResult.map((elem: any) => {// eslint-disable-line
                  
                  if (elem.type == "album") {
                    return elem.hits.map(
                      (
                        hit: any // eslint-disable-line
                      ) =>
                        hit.index === "album" && (
                          <Link
                            key={hit.id}
                            to={`/album-details/${hit.result.id}`}
                          >
                            <div
                              key={hit.result.id}
                              className="songInfo flex gap-4 mb-5"
                            >
                              <img
                                className="w-20"
                                src={hit.result.cover_art_url}
                                alt=""
                              />
                              <div className="songDetails">
                                <p className="songTitle">{hit.result.name}</p>
                              </div>
                            </div>
                          </Link>
                        )
                    );
                  }
                })}
              </div>
            </div>
          )}
        </div>
        <div onClick={handleToMain} className="headerLogo cursor-pointer">
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
        {isAuth ? (
          <button onClick={handleLogOut} className="mr-3">
            Log out
          </button>
        ) : (
          <div className="userLogin mt-3 ">
            <Link to={"/login"} className="mr-3">
              Sign in
            </Link>
            <Link to={"/registration"} className="mr-3">
              Sign up
            </Link>
          </div>
        )}
      </div>
    </StyledHeader>
  );
};
