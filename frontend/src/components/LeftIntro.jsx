import HomeCards from "./HomeCards";

const homeCards = [
  {
    title: "300",
    description: "Resources Available",
  },
  {
    title: "12k",
    description: "Total Downloads",
  },
  {
    title: "10k",
    description: "Active Downloads",
  },
];

function LeftIntro() {
  return (
    <div className="mt-12 box-border max-w-[548px] py-8">
      <div>
        <p className="text-lg font-bold capitalize text-[#7e7e81]">
          Your Journey to tomorrow begins here!
        </p>
        <p className="mb-12 text-4xl font-thin text-white">
          Explore the frontiers of Artificial Intelligence
        </p>
        <p className="mb-12 text-[#7e7e81]">
          Welcome to the epicenter of AI innovation. Blogzy AI news is your
          passport to world where machines think, learn and reshape future. Join
          us in the visionary expedition into the heart of AI
        </p>
      </div>
      <div className="flex">
        {homeCards.map((card, ind) => {
          return (
            <HomeCards
              title={card.title}
              description={card.description}
              key={ind}
            />
          );
        })}
      </div>
    </div>
  );
}

export default LeftIntro;
