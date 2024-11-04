import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="flex justify-between p-4 bg-[#1a1a1a] text-white">
      <div>Terms & Coditions {"  "} Privacy Policy</div>
      <div className="flex gap-3 justify-center items-center">
        <FaTwitter fill="white" size={16} />
        <FaLinkedin fill="white" size={16} />
        <FaMedium fill="white" size={16} />
      </div>
      <div>{"@2024 futureTech. All rights reserved"}</div>
    </footer>
  );
}

export default Footer;
