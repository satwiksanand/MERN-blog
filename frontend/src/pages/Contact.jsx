import ContactHeader from "../components/ContactHeader";

import { TiSocialTwitter } from "react-icons/ti";
import { FaLinkedin } from "react-icons/fa6";
import { TiSocialYoutube } from "react-icons/ti";
import { FaForumbee } from "react-icons/fa";
import ContactFooter from "../components/ContactFooter";

const contactHeader = [
  {
    title: "General Inquiries",
    content: ["contact@ai-podcast.com", "+1(123) 456-7890"],
  },
  {
    title: "Technical Support",
    content: ["contact@ai-podcast.com", "+1(123) 456-7890"],
  },
  {
    title: "Our Office",
    content: ["Address: 123 AI tech avenue, Techvile", "Get Directions"],
  },
];

function Contact() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-6 bg-[#141414] p-12 sm:grid-cols-4 sm:gap-12">
        {contactHeader.map((cont, ind) => {
          return (
            <ContactHeader
              title={cont.title}
              content={cont.content}
              key={ind}
            />
          );
        })}
        <div className="flex flex-col gap-2 justify-self-start sm:justify-self-end">
          <span className="mb-4 font-bold text-white">Connect with us</span>
          <div className="flex items-center justify-evenly p-4">
            <TiSocialTwitter className="cursor-pointer" />
            <TiSocialYoutube className="cursor-pointer" />
            <FaLinkedin className="cursor-pointer" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3">
        <div className="m-auto box-border flex flex-col items-center justify-start gap-3 p-6">
          <FaForumbee size={32} fill="yellow" />
          <p className="text-wrap text-lg font-bold sm:text-3xl">
            Get In Touch with AI Podcast.
          </p>
        </div>
        <div className="box-border p-6 sm:col-span-2 sm:col-start-2">
          <form>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-3 p-4">
                <label htmlFor="firstName" className="text-lg font-semibold">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="placeholder:text[#b3b3b3] rounded-lg bg-[#262626] p-4 font-thin placeholder:font-thin"
                  placeholder="Enter first name"
                />
              </div>
              <div className="flex flex-col gap-3 p-4">
                <label htmlFor="lastName" className="text-lg font-semibold">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="placeholder:text[#b3b3b3] rounded-lg bg-[#262626] p-4 font-thin placeholder:font-thin"
                  placeholder="Enter last name"
                />
              </div>
              <div className="flex flex-col gap-3 p-4">
                <label htmlFor="useremail" className="text-lg font-semibold">
                  Email
                </label>
                <input
                  type="text"
                  id="useremail"
                  className="placeholder:text[#b3b3b3] rounded-lg bg-[#262626] p-4 font-thin placeholder:font-thin"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex flex-col gap-3 p-4">
                <label htmlFor="phoneNumber" className="text-lg font-semibold">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  className="placeholder:text[#b3b3b3] rounded-lg bg-[#262626] p-4 font-thin placeholder:font-thin"
                  placeholder="Enter Phone Number"
                />
              </div>
            </div>
            <div className="flex flex-col gap-3 p-4">
              <label htmlFor="message" className="text-lg font-semibold">
                Message
              </label>
              <textarea
                id="message"
                className="placeholder:text[#b3b3b3] rounded-lg bg-[#262626] p-4 font-thin placeholder:font-thin"
                placeholder="Enter your message"
                rows={6}
              />
            </div>
            <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
              <div className="flex w-full items-center justify-center gap-3 p-4 sm:w-auto">
                <input
                  type="checkbox"
                  id="check"
                  className="rounded-sm bg-[#262626] p-2 hover:cursor-pointer"
                />
                <label htmlFor="check">
                  I agree with terms of use and privacy policy
                </label>
              </div>
              <div className="w-full p-4 sm:w-auto">
                <button
                  type="submit"
                  className="w-full rounded-lg bg-yellow-400 p-2 px-8 text-white"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ContactFooter />
    </div>
  );
}

export default Contact;
