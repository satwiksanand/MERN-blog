import AboutColumn from "./AboutColumn";
import Footer from "./Footer";
import { FaExternalLinkAlt } from "react-icons/fa";

//the structure of the about component
const aboutInfo = [
  {
    title: "Home",
    items: [
      "Features",
      "Blogs",
      "Resources",
      "Testimonials",
      "Contact us",
      "Newsletters",
    ],
  },
  {
    title: "News",
    items: [
      "Trending Videos",
      "Featured Videos",
      "Technology",
      "Policies",
      "Health",
      "Environment",
    ],
  },
  {
    title: "Blogs",
    items: [
      "Quantum Computing",
      "AI Ethics",
      "Space Exploration",
      "Biotechnology",
      "Renewable Energy",
      "BioHacking",
    ],
  },
  {
    title: "Podcast",
    items: [
      "AI Revolution",
      "Tech Talk AI",
      "AI Conversations",
      "Generative AI",
      "Voice AI",
    ],
  },
  {
    title: "Resources",
    items: ["Wallpapers", "Ebooks", "Reports", "Research Papers"],
  },
];

function About() {
  return (
    <div className="bg-[#1a1a1a] px-12 pt-6">
      <div className="mb-6 grid grid-cols-2 gap-2 md:flex md:justify-between">
        {aboutInfo.map((info, ind) => {
          return (
            <AboutColumn
              title={info.title}
              items={info.items}
              logo={info.title === "Resources" ? <FaExternalLinkAlt /> : null}
              key={ind}
            />
          );
        })}
      </div>
      <hr color="#7e7e81" />
      <Footer />
    </div>
  );
}

export default About;
