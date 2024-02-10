import { useState } from "react";
import { useParams } from "react-router-dom";

import { Heading } from "../../components/Tepography/Heading";
import { Header } from "../../components/UI/Header/Header";
import { Navbar } from "../../components/UI/Navbar/Navbar";
import { Container } from "../../components/UI/container/Container.style";
import {
  useGetAlbumByIdQuery,
  useGetAppearanceByIdQuery,
} from "../../store/API/albumApi";
import {
  StyledAlbumPage,
  StyledComponentWithBackgroundImage,
} from "./AlbumPage.style";

export const AlbumPage = () => {
  const [isFull, setIsFull] = useState(false);

  const { albumId } = useParams();

  const {
    data: album,
    isLoading: albumLoading,
    isError: albumError,
  } = useGetAlbumByIdQuery(albumId);
  const {
    data: appearance,
    isLoading: appearanceLoading,
    isError: appearanceError,
  } = useGetAppearanceByIdQuery(albumId);

  const albumData = album?.album;
  const appearanceData = appearance?.album_appearances;
  const maxLength = 435;

  const imageUrl = `${albumData?.header_image_url}`;

  const handleText = () => {
    setIsFull(!isFull);
  };

  return (
    <>
      <Header />
      <Navbar />
      <StyledComponentWithBackgroundImage imageUrl={imageUrl} />
      <Container>
        <StyledAlbumPage>
          <div className={`container`}>
            <div className="albumInfo flex gap-10 flex-wrap justify-center">
              {albumLoading && <p>Loading</p>}
              {albumError && <p>Error</p>}
              <img className="albumImg" src={albumData?.cover_art_url} alt="" />
              <div className="albumDescription">
                <p className="text-xs">{albumData?._type}</p>
                <h2 className="font-medium text-36">{albumData?.name}</h2>
                <h3 className="font-medium text-21">
                  {albumData?.artist.name}
                </h3>
                <p className="text-14">
                  Released {albumData?.release_date_for_display}
                </p>
              </div>
              <div className="chartViewContainer flex">
                <svg
                  className="chartViewIcon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 9"
                  fill="gray"
                >
                  <path d="M11 2c4 0 7.26 3.85 8.6 5.72-1.34 1.87-4.6 5.73-8.6 5.73S3.74 9.61 2.4 7.73C3.74 5.86 7 2 11 2m0-2C4.45 0 0 7.73 0 7.73s4.45 7.73 11 7.73 11-7.73 11-7.73S17.55 0 11 0z"></path>
                  <path d="M11 5a2.73 2.73 0 1 1-2.73 2.73A2.73 2.73 0 0 1 11 5m0-2a4.73 4.73 0 1 0 4.73 4.73A4.73 4.73 0 0 0 11 3z"></path>
                </svg>
                <span className="chartView m-1">
                  {albumData?.song_pageviews !== undefined
                    ? albumData?.song_pageviews > 1000000
                      ? (albumData?.song_pageviews / 1000000)
                          .toFixed(1)
                          .replace(/\.0+$/, "") + "M"
                      : (albumData?.song_pageviews / 1000)
                          .toFixed(1)
                          .replace(/\.0+$/, "") + "k"
                    : "N/A"}
                </span>
              </div>
              <div className="albumInfoBtn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  fill="gray"
                >
                  <path d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z" />
                </svg>
              </div>
            </div>
            <div className="albumList flex gap-20 flex-wrap mx-auto justify-center">
              <div className="albumTracks w-5/12">
                <Heading headingText="music tracklist" headingType="h3" />
                {appearanceLoading && <p>Loading</p>}
                {appearanceError && <p>Error</p>}
                {appearanceData &&
                  appearanceData.map(
                    (
                      elem: any, // eslint-disable-line
                      i: number
                    ) => (
                      <div
                        key={elem.song.id}
                        className="albumTracksInfo flex mt-2 border-b-2 p-2"
                      >
                        <p className="basis-10 font-medium text-gray-500">
                          {i + 1}
                        </p>
                        <p className="albumTracksTitle basis-30 font-semibold">
                          {elem.song.title} <span>lyrics</span>
                        </p>
                        <p className="albumTracksViews flex gap-1 ml-auto">
                          <svg
                            className="chartViewIcon mt-1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 9"
                            fill="gray"
                          >
                            <path d="M11 2c4 0 7.26 3.85 8.6 5.72-1.34 1.87-4.6 5.73-8.6 5.73S3.74 9.61 2.4 7.73C3.74 5.86 7 2 11 2m0-2C4.45 0 0 7.73 0 7.73s4.45 7.73 11 7.73 11-7.73 11-7.73S17.55 0 11 0z"></path>
                            <path d="M11 5a2.73 2.73 0 1 1-2.73 2.73A2.73 2.73 0 0 1 11 5m0-2a4.73 4.73 0 1 0 4.73 4.73A4.73 4.73 0 0 0 11 3z"></path>
                          </svg>
                          {elem.song.stats.pageviews > 1000000
                            ? (elem.song.stats.pageviews / 1000000)
                                .toFixed(1)
                                .replace(/\.0+$/, "") + "M"
                            : (elem.song.stats.pageviews / 1000)
                                .toFixed(1)
                                .replace(/\.0+$/, "") + "k"}
                        </p>
                      </div>
                    )
                  )}
              </div>
              <div className="albumDetails">
                <div className="albumTracksDiscription w-96">
                  <h5 className="mb-1">{`About ${albumData?.name}`}</h5>
                  <div className="bg-white p-4">
                    {isFull ? (
                      <div>
                        <p>
                          {albumData?.description_preview}
                          <span onClick={handleText}>Less</span>
                        </p>
                      </div>
                    ) : (
                      <div>
                        <p>
                          {albumData?.description_preview &&
                          albumData?.description_preview.length > maxLength
                            ? `${albumData?.description_preview.substring(
                                0,
                                maxLength
                              )}...`
                            : albumData?.description_preview}
                          <span onClick={handleText}>More</span>
                        </p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="albumScholars">
                  <h5 className="my-2">top album scholars</h5>
                  <div className="bg-white p-4">
                    <div className="artistLeaderboardList flex p-2 border-b-2">
                      <p className="basis-10">1</p>
                      <div className="flex gap-2 basis-40">
                        <img
                          className="w-4 h-4 rounded-full mt-1"
                          src="../../public/IMG_6270.JPG"
                          alt=""
                        />
                        <p>alex</p>
                        <p>123.123</p>
                      </div>
                      <p className="attributionValue ml-auto">123.123</p>
                    </div>
                    <div className="artistLeaderboardList flex p-2 border-b-2">
                      <p className="basis-10">1</p>
                      <div className="flex gap-2 basis-40">
                        <img
                          className="w-4 h-4 rounded-full mt-1"
                          src="../../public/IMG_6270.JPG"
                          alt=""
                        />
                        <p>alex</p>
                        <p>123.123</p>
                      </div>
                      <p className="attributionValue ml-auto">123.123</p>
                    </div>
                    <div className="artistLeaderboardList flex p-2 border-b-2">
                      <p className="basis-10">1</p>
                      <div className="flex gap-2 basis-40">
                        <img
                          className="w-4 h-4 rounded-full mt-1"
                          src="../../public/IMG_6270.JPG"
                          alt=""
                        />
                        <p>alex</p>
                        <p>123.123</p>
                      </div>
                      <p className="attributionValue ml-auto">123.123</p>
                    </div>
                    <div className="artistLeaderboardList flex p-2 border-b-2">
                      <p className="basis-10">1</p>
                      <div className="flex gap-2 basis-40">
                        <img
                          className="w-4 h-4 rounded-full mt-1"
                          src="../../public/IMG_6270.JPG"
                          alt=""
                        />
                        <p>alex</p>
                        <p>123.123</p>
                      </div>
                      <p className="attributionValue ml-auto">123.123</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </StyledAlbumPage>
      </Container>
    </>
  );
};
