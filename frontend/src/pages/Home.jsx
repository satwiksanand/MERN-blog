import LeftIntro from "../components/Home_Components/LeftIntro";
import RightIntro from "../components/Home_Components/RightIntro";
import { AiOutlineAim } from "react-icons/ai";
import { RiBubbleChartFill } from "react-icons/ri";
import { TbBubbleFilled } from "react-icons/tb";
import { PiDiamondsFourThin } from "react-icons/pi";
import { FaBoxOpen } from "react-icons/fa";
import BottomCards from "../components/Home_Components/BottomCards";
import SectionTitle from "../components/Home_Components/SectionTitle";
import FeatureContent from "../components/Home_Components/FeatureContent";

const bottomCards = [
  {
    logo: <AiOutlineAim size={32} fill="yellow" />,
    title: "Latest News Updates",
    description: "Stay Current",
    stats: "Over 1,000 articles published monthly",
  },
  {
    logo: <RiBubbleChartFill size={32} fill="yellow" />,
    title: "Expert Contributors",
    description: "Trusted Insights",
    stats: "50+ Renowned AI experts on our team",
  },
  {
    logo: <TbBubbleFilled size={32} fill="yellow" />,
    title: "Global Readership",
    description: "Worldwide Impact",
    stats: "2 Million monthly Readers",
  },
];

const featureCardDetails1 = [
  {
    title: "Quantity",
    description: "over 1000 articles on emerging tech trends and breakthroughs",
  },
  {
    title: "Variety",
    description:
      "Articles covers fields like AI, robotics, Biotechnology and more",
  },
  {
    title: "Frequency",
    description: "Fresh added content daily to keep you up to date",
  },
  {
    title: "Authoritative",
    description:
      "Written by our team of tech experts and industry professionals",
  },
];

const featureCardDetails2 = [
  {
    title: "Depth",
    description: "500+ research articles for in-depth understanding",
  },
  {
    title: "Graphics",
    description: "Visual aids and infographics to enhance comprehension",
  },
  {
    title: "Trends",
    description: "Explore emerging trends in future technology research",
  },
  {
    title: "Contributors",
    description: "Contributors from tech researchers and academics",
  },
];

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-[#141414]">
      <div className="flex flex-col">
        <div className="flex flex-col sm:flex-row">
          <LeftIntro />
          <RightIntro />
        </div>
        <div className="flex flex-col sm:flex-row">
          {bottomCards.map((card, ind) => {
            return (
              <BottomCards
                logo={card.logo}
                title={card.title}
                description={card.description}
                stats={card.stats}
                key={ind}
              />
            );
          })}
        </div>
      </div>
      <div id="features" className="flex min-w-full flex-col">
        <SectionTitle
          intro={"unlock the power of"}
          title={"FutureTech Features"}
        />
        <FeatureContent
          title={"Future Technology and Blog"}
          description={
            "Stay informed with our blog section dedicated for future technologies"
          }
          logo={<PiDiamondsFourThin size={32} fill="yellow" />}
          cardDetails={featureCardDetails1}
        />
        <FeatureContent
          title={"Research Insights Blogs"}
          description={
            "Dive deep into future technology concept with our research section"
          }
          logo={<FaBoxOpen size={32} fill="yellow" />}
          cardDetails={featureCardDetails2}
        />
      </div>
    </div>
  );
};

export default Home;
