import LeftIntro from "../components/LeftIntro";
import RightIntro from "../components/RightIntro";
import { AiOutlineAim } from "react-icons/ai";
import { RiBubbleChartFill } from "react-icons/ri";
import { TbBubbleFilled } from "react-icons/tb";
import { PiDiamondsFourThin } from "react-icons/pi";
import { FaBoxOpen } from "react-icons/fa";
import { IoNavigateSharp } from "react-icons/io5";
import BottomCards from "../components/BottomCards";
import SectionTitle from "../components/SectionTitle";
import FeatureContent from "../components/FeatureContent";
import BlogExample from "../components/BlogExample";
import TestimonialCard from "../components/TestimonialCard";

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

const blogExamples = [
  {
    user: {
      image: "https://randomuser.me/api/portraits/men/44.jpg",
      name: "Nathan Elliott",
      field: "Quantum Computing",
    },
    blogData: {
      date: "11/24/2027",
      title: "The Quantum leap in Computing",
      intro:
        "Explore the revolution in quantum computing, its applications, and its potential impact on various industries.",
      likes: 24,
      comments: 50,
      shares: 23,
    },
  },
  {
    user: {
      image: "https://randomuser.me/api/portraits/men/26.jpg",
      name: "Melvin Rogers",
      field: "AI Ethics",
    },
    blogData: {
      date: "4/1/2088",
      title: "The Ethical Dilemmas of Al",
      intro:
        "A deep dive into ethical challenges posed by Al, including bias, privacy, and transparency.",
      likes: 24,
      comments: 50,
      shares: 23,
    },
  },
  {
    user: {
      image: "https://randomuser.me/api/portraits/men/52.jpg",
      name: "Joseph Roberson",
      field: "Space Exploration",
    },
    blogData: {
      date: "1/17/2087",
      title: "The Mars Colonization Challenge",
      intro:
        "Exploring the technical and logistical challenges of human colonization on Mars.",
      likes: 24,
      comments: 50,
      shares: 23,
    },
  },
];

const testimonials = [
  {
    image: "https://randomuser.me/api/portraits/women/60.jpg",
    name: "Sarah Thompson",
    address: "San Fransisco, USA",
    feedback:
      "The ebooks on Al in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated.",
  },
  {
    image: "https://randomuser.me/api/portraits/men/69.jpg",
    name: "Raj Patel",
    address: "Mumbai, India",
    feedback:
      "The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis, helping me make informed decisions.",
  },
  {
    image: "https://randomuser.me/api/portraits/women/51.jpg",
    name: "Emily Adams",
    address: "London, UK",
    feedback:
      "The Al in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care-",
  },
  {
    image: "https://randomuser.me/api/portraits/men/88.jpg",
    name: "Alan Jackson",
    address: "Houston, USA",
    feedback:
      "The reports on space mining prospects have fueled my passion for space exploration. They provide a comprehensive view of what lies beyond Earth.",
  },
  {
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Jessica Miller",
    address: "Boston, USA",
    feedback:
      "The research papers on genomic breakthroughs have been a goldmine Of information. They've shaped the direction of my research in genomics.",
  },
  {
    image: "https://randomuser.me/api/portraits/men/26.jpg",
    name: "Diego Lopez",
    address: "Barcelona, Spain",
    feedback:
      "The ebooks on renewable energy strategies have given me the insights I needed to pivot our startup toward sustainability, improvement and readiness!",
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
      <div id="Blogs" className="flex min-w-full flex-col">
        <SectionTitle
          intro={"A Knowledge Treasure Trove"}
          title={"Explore FutureTech's In-Depth Blog Posts"}
          logo={<IoNavigateSharp fill="yellow" size={32} />}
          buttonText="View AI Blogs"
        />
        {blogExamples.map((blog, ind) => {
          return <BlogExample blogExample={blog} key={ind} />;
        })}
      </div>
      <div id="testimonials" className="flex min-w-full flex-col">
        <SectionTitle
          intro={"What our Readers Say"}
          title={"Real Words from Real Readers"}
          logo={<IoNavigateSharp fill="yellow" size={32} />}
          buttonText="View AI Testimonials"
        />
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
          {testimonials.map((curr, ind) => {
            return (
              <TestimonialCard
                image={curr.image}
                name={curr.name}
                address={curr.address}
                feedback={curr.feedback}
                key={ind}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
