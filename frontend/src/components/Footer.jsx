import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-2 bg-[#1a1a1a] p-4 text-white md:flex-row">
      <div>Terms & Coditions {"  "} Privacy Policy</div>
      <div className="flex items-center justify-center gap-3">
        <FaTwitter fill="white" size={16} />
        <FaLinkedin fill="white" size={16} />
        <FaMedium fill="white" size={16} />
      </div>
      <div>{"@2024 futureTech. All rights reserved"}</div>
    </footer>
  );
}

export default Footer;
