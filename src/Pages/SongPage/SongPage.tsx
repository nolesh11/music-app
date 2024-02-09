import { useState } from "react";

import { Header } from "../../components/UI/Header/Header";
import { Navbar } from "../../components/UI/Navbar/Navbar";
import { Container } from "../../components/UI/container/Container.style";
import {
  StyledComponentWithBackgroundImage,
  StyledSongPage,
} from "./SongPage.style";

import { CiCalendar, CiViewTimeline } from "react-icons/ci";
import { FaEye, FaRegCheckCircle } from "react-icons/fa";
import { MdOutlineTranslate } from "react-icons/md";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { VscSettings } from "react-icons/vsc";
import { LuPencil } from "react-icons/lu";
import { Footer } from "../../components/UI/Footer/Footer";

export const SongPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Header />
      <Navbar />
      <StyledComponentWithBackgroundImage />
      <Container>
        <StyledSongPage>
          <div className="container">
            <div className="songInfo flex gap-10 text-white">
              <img
                className="w-72 h-72"
                src="../../public/IMG_6270.JPG"
                alt=""
              />
              <div className="artistInfo ">
                <h2 className="title text-xxl">Song name</h2>
                <h3 className="artistName text-xl">Alex</h3>
                <p className="text-m">produced by</p>
                <span className="text-xl">Name & </span>
                <span className="text-xl">Name</span>
                <p className="songDiscription text-m mt-6">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
                  repudiandae molestiae eaque! Animi dolorum est, sed nesciunt
                  consequatur commodi quisquam quam sint, fugiat ipsum quia
                  aperiam? Soluta excepturi perferendis eius?{" "}
                  <span className="underline">Read More</span>
                </p>
                <div className="intDataSong flex gap-2 text-xs mt-4">
                  <CiCalendar className="text-s" />
                  <p>Nov 15, 2005 </p>
                  <FaEye className="text-s mt-0.5" />
                  <p>12,5 M views</p>
                </div>
              </div>
            </div>
            <div className="songLyrics mt-20">
              <div className="songLyricsHeader flex gap-5">
                <div className="songLyricsTitle flex gap-2">
                  <IoMdInformationCircleOutline className="mt-0.5" />
                  <p>Title lyrics</p>
                </div>
                <div className="translationLyrics flex gap-2">
                  <MdOutlineTranslate className="mt-0.5" />
                  <p>Translation</p>
                </div>
              </div>
              <div className="songLyricsAndDescription mt-4 flex gap-40">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolorum consequatur non voluptas debitis a, quisquam,
                  voluptates deleniti ipsum ad molestias similique. Voluptatum
                  nesciunt expedita quam voluptatibus animi perferendis ipsa
                  aliquam eos quis voluptatem ullam temporibus autem facere
                  doloremque dolorem illum, excepturi veniam inventore
                  necessitatibus voluptas culpa consectetur. Possimus unde
                  labore ipsum quibusdam soluta asperiores error quis sit magni?
                  Impedit et ut unde dolores. Nisi sunt cupiditate minima
                  delectus perferendis sed voluptates, recusandae molestiae
                  aliquid quisquam nulla reprehenderit temporibus vitae nesciunt
                  quos fugiat labore illo, laboriosam laudantium ipsam eius.
                  Modi sunt pariatur nulla iusto, est laudantium numquam? Soluta
                  atque itaque alias!
                </p>
                <div
                  className={`songLyricsDescription px-8 py-2 border-l border-gray ${
                    isOpen ? "border" : ""
                  }`}
                >
                  <div className="flex gap-3 text-l text-green-500 mb-4">
                    <FaRegCheckCircle className="mt-1" />
                    <p>
                      Complete the song
                      <span
                        onClick={handleOpen}
                        className="openClose ml-8 text-s text-black cursor-pointer"
                      >
                        {isOpen ? "Open" : "Close"}
                      </span>
                    </p>
                  </div>
                  <div
                    className={`flex gap-3 text-l text-green-500 pb-4 ${
                      isOpen ? "close" : ""
                    }`}
                  >
                    <FaRegCheckCircle className="mt-1" />
                    <p>Lyrics</p>
                  </div>
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
                        <p>Feb 9, 2001</p>
                      </div>
                    </div>
                    <div className="songLyricsReleas flex justify-between">
                      <div className="flex gap-2">
                        <VscSettings />
                        <p>Produced by</p>
                      </div>
                      <div>
                        <p>Eminem</p>
                      </div>
                    </div>
                    <div className="songLyricsReleas flex justify-between">
                      <div className="flex gap-2">
                        <LuPencil />
                        <p>Written by</p>
                      </div>
                      <div>
                        <p>Alex</p>
                      </div>
                    </div>
                    <div className="songLyricsReleas flex justify-between">
                      <div className="flex gap-2">
                        <CiViewTimeline />
                        <p>On Album</p>
                      </div>
                      <div>
                        <p>Bluebird</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </StyledSongPage>
      </Container>
      <Footer />
    </>
  );
};
