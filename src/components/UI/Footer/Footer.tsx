import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { StyledFooter } from "./Footer.style";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <StyledFooter>
      <div className="footerFirstBlock w-2/5">
        <p className="text-xxxl mb-4">
          Genius is the world’s biggest collection of song lyrics and musical
          knowledge
        </p>
        <div className="footerLinks flex gap-8 text-xl">
          <FaFacebook />
          <FaXTwitter />
          <FaInstagram />
          <FaYoutube />
        </div>
      </div>
      <div className="footerSecondBlock w-1/6 flex flex-col gap-4 text-l">
        <p>About</p>
        <p>Contributers</p>
        <p>Press</p>
        <p>Shop</p>
        <p>Advertise</p>
        <p>Provacy Policy</p>
        <p>Delete account</p>
        <p className="copyRight text-gray-500">&copy; 2024 ML Genius Holdings, LLC</p>
      </div>
      <div className="footerThirdBlock w-1/6 flex flex-col gap-4 text-l">
        <p>Licensing</p>
        <p>Job</p>
        <p>Developers</p>
        <p>Copyright policy</p>
        <p>Contact us</p>
        <p>Sign out</p>
        <p>Do not shell my personal information</p>
        <p className="copyRight text-gray-500">Terms of use</p>
      </div>
      <div className="mobileCopyright text-center">
        <p className="text-gray-500 text-m">&copy; 2024 ML Genius Holdings, LLC</p>
        <p className="text-gray-500">Terms of use</p>
      </div>
    </StyledFooter>
  );
};
