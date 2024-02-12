import { FaCheckSquare, FaEye, FaRegStar } from "react-icons/fa";
import { Footer } from "../../components/UI/Footer/Footer";
import { Header } from "../../components/UI/Header/Header";
import { Navbar } from "../../components/UI/Navbar/Navbar";
import { Container } from "../../components/UI/container/Container.style";
import {
  StyledArtistPage,
  StyledComponentWithBackgroundImage,
} from "./ArtistPage.style";
import { useParams } from "react-router-dom";
import {
  useGetArtistAlbumsByIdQuery,
  useGetArtistByIdQuery,
  useGetArtistLeaderboardByIdQuery,
  useGeyArtistSongsByIdQuery,
} from "../../store/API/artistApi";
import { useState } from "react";

export const ArtistPage = () => {
  const [isFull, setIsFull] = useState(false);
  const { artistId } = useParams();
  const { data: artist } = useGetArtistByIdQuery(artistId);
  const { data: artistLeaderboard } =
    useGetArtistLeaderboardByIdQuery(artistId);
  const { data: artistSongs } = useGeyArtistSongsByIdQuery(artistId);
  const { data: artistAlbums } = useGetArtistAlbumsByIdQuery(artistId);

  const artistData = artist?.artist;
  const artistLeaderboardData = artistLeaderboard?.leaderboard;
  const artistSongsData = artistSongs?.songs;
  const artistAlbumsData = artistAlbums?.albums;

  const maxLength = 435;

  const handleText = () => {
    setIsFull(!isFull);
  };

  const imageurl = `${artistData?.header_image_url}`;

  return (
    <>
      <Header />
      <Navbar />
      <StyledComponentWithBackgroundImage imageurl={imageurl} />
      <Container>
        <StyledArtistPage>
          <div className="container">
            <div className="artistHeader flex justify-center gap-40">
              <img
                className="w-72 h-72 rounded-full"
                src={artistData?.image_url}
                alt=""
              />
              <div className="artistHeaderActivity flex gap-10 items-end text-white mb-10">
                <div className="headerFeatured flex">
                  <FaRegStar className="m-1" />
                  <p>Featured</p>
                </div>
                <p>Earn IQ</p>
                <div className="followers flex gap-2">
                  <p className="text-red-500">{artistData?.followers_count}</p>
                  <p>Followers</p>
                </div>
                <p>ALl activity</p>
              </div>
            </div>

            <div className="featured flex justify-center gap-10 mt-10">
              <div className="artistInfo w-5/12 flex flex-col">
                <div className="artistName flex gap-4 justify-center">
                  <h2 className="text-xl">{artistData?.name}</h2>
                  <p className="self-center w-fit h-fit px-1 pt-0.5 text-s bg-yellow-200">
                    {artistData?.iq}
                  </p>
                </div>
                <p className="text-center text-s text-gray-500">
                  AKA: {artistData?.alternate_names.join(", ")}
                </p>
                <div className="verifuedArtist text-s flex justify-center text-gray-500">
                  <p>{artistData?.instagram_name} |</p>
                  {artistData?.is_verified ? (
                    <div className="flex gap-1">
                      <FaCheckSquare className="m-1 text-green-600" />
                      <p className="text-green-600">Verified Artist</p>
                    </div>
                  ) : (
                    <div className="flex gap-1">
                      <FaCheckSquare className="m-1 text-red-600" />
                      <p className="text-red-600">Unverified Artist</p>
                    </div>
                  )}
                </div>
                <button className="w-fit self-center font-semibold my-4 px-3 py-1 border-2 border-black">
                  Follow
                </button>
                <div className="aboutArtist p-6 bg-white mb-4">
                  <h4 className="mb-4 text-s font-semibold">
                    About {artistData?.name}
                  </h4>
                  {isFull ? (
                    <div>
                      <p>
                        {artistData?.description_preview}
                        <span onClick={handleText} className="cursor-pointer font-semibold"> Read less</span>
                      </p>
                    </div>
                  ) : (
                    <div>
                      <p>
                        {artistData?.description_preview.length !== undefined &&
                        artistData?.description_preview.length > maxLength
                          ? `${artistData?.description_preview.substring(
                              0,
                              maxLength
                            )}...`
                          : artistData?.description_preview}
                        <span onClick={handleText} className="cursor-pointer font-semibold"> Read more</span>
                      </p>
                    </div>
                  )}
                </div>
                <p className="p-4 text-gray-500">Top artist scholars</p>
                <div className="artistScholars h-fit bg-white p-6 ">
                  {artistLeaderboardData && artistLeaderboardData.map((elem: any, i: number) => ( // eslint-disable-line
                    <div key={elem.user.id} className="flex border-b border-black my-2 pb-2">
                      <p className="basis-1/12 text-s">{i + 1}</p>
                      <div className="basis-8/12 flex gap-3">
                        <img
                          className="w-4 h-4 rounded-full m-1"
                          src={elem.user.avatar.tiny.url}
                          alt=""
                        />
                        <p>{elem.user.name}</p>
                        <p className="text-xs self-center">{elem.user.iq}</p>
                      </div>
                      <p className="attributionValue basis-3/12 self-center text-xs">
                      {elem.attribution_value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="artistWorks ">
                <p className="uppercase text-gray-500 text-s">
                  popular {artistData?.name} songs
                </p>
                <div className="artistSongsList grid grid-cols-2 grid-rows-3 gap-2 p-1 mb-2">
                  {artistSongsData && artistSongsData.map((elem: any) => ( // eslint-disable-line
                    <div key={elem.id} className="song w-64 bg-white flex gap-2">
                      <img
                        className="w-20 h-20"
                        src={elem.song_art_image_url}
                        alt=""
                      />
                      <div className="artistSongInfo">
                        <p>{elem.title}</p>
                        <p className="text-xs">{elem.primary_artist.name}</p>
                        <div className="songView flex gap-1 text-xs mt-4">
                          <FaEye className="mt-1" />
                          <p>
                          {elem.stats.pageviews > 1_000_000
                              ? (elem.stats.pageviews / 1_000_000)
                                  .toFixed(1)
                                  .replace(/\.0+$/, "") + "M"
                              : (elem.stats.pageviews / 1_000)
                                  .toFixed(1)
                                  .replace(/\.0+$/, "") + "k"}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="uppercase text-gray-500 text-s mb-2">
                  {artistData?.name} top album
                </p>
                <div className="arttistAlbums bg-white ml-2 p-6 grid grid-cols-3 grid-rows-2 gap-2">
                  {artistAlbumsData && artistAlbumsData.map((elem: any) => ( //eslint-disable-line
                    <div key={elem.id} className="artistAlbumsInfo text-center text-xs">
                      <img
                        className="w-40 h-40"
                        src={elem.cover_art_url}
                        alt=""
                      />
                      <p className="my-1 w-36 font-semibold">{elem.name}</p>
                      <p className="text-gray-500">{elem.release_date_components.year}</p>
                    </div>

                  ))}
                </div>
              </div>
            </div>
          </div>
        </StyledArtistPage>
      </Container>
      <Footer />
    </>
  );
};
