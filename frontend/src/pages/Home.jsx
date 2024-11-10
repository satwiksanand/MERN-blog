import LeftIntro from "../components/Home_Components/LeftIntro";
import RightIntro from "../components/Home_Components/RightIntro";
import { AiOutlineAim } from "react-icons/ai";
import { RiBubbleChartFill } from "react-icons/ri";

const bottomCards = [
  {
    logo: <AiOutlineAim />,
    title: "Latest News Updates",
    description: "Stay Current",
    stats: "Over 1,000 articles published monthly",
  },
  {
    logo: <RiBubbleChartFill />,
    title: "Expert Contributors",
    description: "Trusted Insights",
    stats: "50+ Renowned AI experts on our team",
  },
];

const Home = () => {
  return (
    <div className="bg-[#141414] p-12">
      <div className="flex">
        <LeftIntro />
        <RightIntro />
      </div>
    </div>
  );
};

export default Home;
