import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { CiCalendar, CiViewTimeline } from "react-icons/ci";
import { FaEye, FaRegCheckCircle } from "react-icons/fa";
import { MdOutlineTranslate } from "react-icons/md";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { VscSettings } from "react-icons/vsc";
import { LuPencil } from "react-icons/lu";
import { PiArrowElbowRightDown } from "react-icons/pi";

import { Header } from "../../components/UI/Header/Header";
import { Navbar } from "../../components/UI/Navbar/Navbar";
import { Container } from "../../components/UI/container/Container.style";
import {
  StyledComponentWithBackgroundImage,
  StyledSongPage,
} from "./SongPage.style";
import { Footer } from "../../components/UI/Footer/Footer";
import {
  useGetLyricsQuery,
  useLazyGetSongByIdQuery,
} from "../../store/API/songApi";
import { SongLyrics } from "../../components/Tepography/songLyrics";

export const SongPage = () => {
  const { songId } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [fetchTrigger, { data: song }] = useLazyGetSongByIdQuery();
  const {
    data: lyrics,
    isLoading: lyricsLoading,
    isError: lyricsError,
  } = useGetLyricsQuery(songId);

  const songData = song?.song;
  const lyricsData = lyrics?.lyrics;

  useEffect(() => {
    if (songId) {
      fetchTrigger(songId);
    }
  }, [songId]);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const imageBack = `${songData?.custom_header_image_url}`;
  return (
    <>
      <Header />
      <Navbar />
      <StyledComponentWithBackgroundImage imageurl={imageBack} />
      <Container>
        <StyledSongPage>
          <div className="container">
            <div className="songInfo flex gap-10 text-white">
              <img
                className="w-72 h-72"
                src={songData?.custom_song_art_image_url}
                alt=""
              />
              <div className="artistInfo ">
                <h2 className="title text-xxl">{songData?.title}</h2>
                <h3 className="artistName text-xl">{songData?.artist_names}</h3>
                <p className="text-m">produced by</p>
                <p>
                  {songData?.producer_artists.length > 0 ? (
                    songData.producer_artists.length === 1 ? (
                      <span className="text-xl">
                        {songData.producer_artists[0].name}
                      </span>
                    ) : (
                      <span className="text-xl">{`${songData.producer_artists[0].name} & ${songData.producer_artists[1].name}`}</span>
                    )
                  ) : (
                    <span>"No producer information"</span>
                  )}
                </p>
                <p className="songDiscription text-m mt-6">
                  {songData?.description_preview.length > 35 &&
                    songData?.description_preview.substring(0, 135) + " ..."}
                  <a href="#songDescriptionAbout">
                    <span className="flex underline text-white">
                      Read more
                      <PiArrowElbowRightDown className="text-white m-2" />
                    </span>
                  </a>
                </p>
                <div className="intDataSong flex gap-2 text-xs mt-4">
                  <CiCalendar className="text-s" />
                  <p>
                    {songData?.release_date_with_abbreviated_month_for_display}
                  </p>
                  <FaEye className="text-s mt-0.5" />
                  <p>
                    {songData?.stats.pageviews > 1000000
                      ? (songData?.stats.pageviews / 1000000)
                          .toFixed(1)
                          .replace(/\.0+$/, "") + "M"
                      : (songData?.stats.pageviews / 100000)
                          .toFixed(1)
                          .replace(/\.0+$/, "") + "k"}
                  </p>
                </div>
              </div>
            </div>
            <div className="songLyrics mt-20">
              <div className="songLyricsHeader flex gap-5">
                <div className="songLyricsTitle flex gap-2">
                  <IoMdInformationCircleOutline className="mt-0.5" />
                  <p>{songData?.title} lyrics</p>
                </div>
                <div className="translationLyrics flex gap-2">
                  <MdOutlineTranslate className="mt-0.5" />
                  <p>Translation</p>
                </div>
              </div>
              <div className="songLyricsAndDescription mt-4 flex justify-between gap-40">
                {lyricsLoading && <p>Loading</p>}
                {lyricsError && <p>Error</p>}
                <SongLyrics lyricsHTML={lyricsData?.lyrics.body.html} />
                <div
                  className={`songLyricsDescription h-fit px-8 py-2 border-l border-gray`}
                >
                  <div className="flex gap-3 text-l text-green-500 mb-4">
                    <FaRegCheckCircle className="mt-1" />
                    <p>Complete the song</p>
                    <p
                      onClick={handleOpen}
                      className="openClose text-s text-black cursor-pointer ml-auto mt-1"
                    >
                      {isOpen ? "Open" : "Close"}
                    </p>
                  </div>
                  {songData?.lyrics_state === "complete" ? (
                    <div
                      className={`flex gap-3 text-l text-green-500 pb-4 ${
                        isOpen ? "close" : ""
                      }`}
                    >
                      <FaRegCheckCircle className="mt-1" />
                      <p>Lyrics</p>
                    </div>
                  ) : (
                    <div
                      className={`flex gap-3 text-l text-red-500 pb-4 ${
                        isOpen ? "close" : ""
                      }`}
                    >
                      <IoMdInformationCircleOutline className="mt-1" />
                      <p>Lyrics</p>
                    </div>
                  )}
                  <div
                    className={`border-t border-gray py-4 ${
                      isOpen ? "close" : ""
                    }`}
                  >
                    <div className="flex gap-3 text-l text-green-500 mb-4">
                      <FaRegCheckCircle className="mt-1" />
                      <p className="">Song info</p>
                    </div>
                    <div className="songLyricsReleas flex justify-between">
                      <div className="flex flex-1 gap-2">
                        <CiCalendar className="mt-1" />
                        <p>Released on</p>
                      </div>
                      <div>
                        <p>{songData?.release_date_for_display}</p>
                      </div>
                    </div>
                    <div className="songLyricsReleas flex justify-between gap-10">
                      <div className="flex gap-2">
                        <VscSettings />
                        <p>Produced by</p>
                      </div>
                      <div>
                        <p>
                          {songData?.producer_artists.length > 0 ? (
                            songData.producer_artists.length === 1 ? (
                              <span>{songData.producer_artists[0].name}</span>
                            ) : (
                              <span>{`${songData.producer_artists[0].name} & ${songData.producer_artists[1].name}`}</span>
                            )
                          ) : (
                            <span>"No producer information"</span>
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="songLyricsReleas flex justify-between">
                      <div className="flex gap-2">
                        <LuPencil />
                        <p>Written by</p>
                      </div>
                      <div>
                        <p>
                          {songData?.writer_artists.map(
                            (
                              artist: any // eslint-disable-line
                            ) => (
                              <span key={artist.id}>{artist.name}</span>
                            )
                          )}
                        </p>
                      </div>
                    </div>
                    <div className="songLyricsReleas flex justify-between">
                      <div className="flex gap-2">
                        <CiViewTimeline />
                        <p>On Album</p>
                      </div>
                      <div>
                        <p>
                          {songData?.albums.map(
                            (
                              name: any, // eslint-disable-line
                              i: number
                            ) => i === 0 && name.name
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="songDescriptionAbout" className="py-10">
                <h2 className="text-xxxl">About</h2>
                <p className="text-l">{songData?.description_preview}</p>
              </div>
            </div>
          </div>
        </StyledSongPage>
      </Container>
      <Footer />
    </>
  );
};
