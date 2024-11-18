import { GiVineFlower } from "react-icons/gi";
import AboutTopBox from "./AboutTopBox";

const aboutTopContent = [
  {
    title: "Resource Access",
    description:
      "Visitors can access a Vide range of resources,including ebooks, whitepapers, reports",
  },
  {
    title: "Community Forum",
    description:
      "Join our active community forum to discuss industry trends, share insights, and collaborate with peers.",
  },
  {
    title: "Tech Events",
    description:
      "Stay updated on upcoming tech events, webinars, and conferences to enhance your knowledge.",
  },
];

function FooterTop() {
  return (
    <div className="bg-[#262626] p-4 sm:p-12">
      <div className="mb-3 grid grid-cols-5 grid-rows-3 p-2 sm:grid-rows-3">
        <div className="row-span-1 flex items-center justify-start p-2 sm:row-span-3 sm:justify-center sm:p-8">
          <GiVineFlower fill="yellow" className="size-14 sm:size-24" />
        </div>
        <div className="col-span-4 flex items-center justify-start">
          <p className="text-md rounded-sm bg-[#7e7e81] px-4 py-1 text-white">
            Learn, Connect and Innovate
          </p>
        </div>
        <p className="col-span-4 text-xl font-thin text-white sm:col-start-2 sm:text-3xl">
          Be part of the future tech revolution
        </p>
        <p className="col-span-4 text-sm text-[#7e7e81] sm:col-start-2">
          Immerse yourself in the world of future technology. Explore our
          comprehensive resources, connect with fellow tech enthusiasts, and
          dive innovation in the industry. Join a dynamic community of
          forward-thinkers.
        </p>
      </div>
      <div className="flex flex-col gap-2 bg-[#1a1a1a] p-2 sm:flex-row">
        {aboutTopContent.map((curr, ind) => {
          return (
            <AboutTopBox
              title={curr.title}
              description={curr.description}
              key={ind}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FooterTop;
