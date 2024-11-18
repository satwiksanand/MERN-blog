import NewsHeadlines from "../components/NewsHeadlines";
import NewsHighlights from "../components/NewsHighlights";

const newsBar = [
  {
    image:
      "https://t3.ftcdn.net/jpg/08/57/99/86/240_F_857998638_qlpErUrFT6abWkeNeMIk8YhYMvFHEEQe.jpg",
    title: "A decisive victory for progressive policies!",
    tag: "Politics",
    likes: 63,
    shares: 21,
  },
  {
    image:
      "https://t4.ftcdn.net/jpg/03/35/96/91/240_F_335969170_GChD521IEQXHCkf3y1HcakPT53zLbVni.jpg",
    title: "Tech Giants unveil cutting edge AI Innovations",
    tag: "Technology",
    likes: 63,
    shares: 21,
  },
  {
    image:
      "https://t4.ftcdn.net/jpg/03/27/37/89/240_F_327378972_WgQfzTKSSULblukY5LhUuib2wyCY3goP.jpg",
    title: "Covid-19 variants",
    tag: "Health",
    likes: 63,
    shares: 21,
  },
];

const newsHot = [
  {
    image:
      "https://t3.ftcdn.net/jpg/09/67/82/92/240_F_967829281_IWQ9hTJGjYGIuvDokrJIxx0p4C14V96v.jpg",
    headline: "Global Climate Summit Addresses Urgent Climate Action",
    introduction:
      "VVorld leaders gathered at the Global Clirnate Summit to discuss urgent clirnate action, emissions reductions. and renewable energy targets.",
    category: "Environment",
    publicationDate: "October 10, 2023",
    author: "Jane Smith",
    likes: 21,
    shares: 43,
  },
];

function News() {
  return (
    <div className="flex flex-col justify-center gap-4 bg-[#1a1a1a] p-4 sm:p-12">
      <div className="p-4 sm:p-8">
        <p className="mb-4 text-3xl font-thin text-white sm:text-5xl sm:font-semibold">
          Today{`'`}s Headlines stay Informed
        </p>
        <p className="text-sm font-light text-[#7e7e81] sm:text-lg">
          Explore the latest news from around the world. We bring you
          up-to-the-minute updates on the most significant events, trends, and
          stories. Discover the world through our news coverage.
        </p>
      </div>
      <div>
        {newsHot.map((news, ind) => {
          return <NewsHeadlines news={news} key={ind} />;
        })}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {newsBar.map((news, ind) => {
          return <NewsHighlights news={news} key={ind} />;
        })}
      </div>
    </div>
  );
}

export default News;
