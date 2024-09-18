import "./App.css";

import FiveStarts from "./assets/illustration-five-stars.webp";
import MultiplePlatforms from "./assets/illustration-multiple-platforms.webp";
import ConsistentSchedule from "./assets/illustration-consistent-schedule.webp";
import ScheduePosts from "./assets/illustration-schedule-posts.webp";
import GrowFollowers from "./assets/illustration-grow-followers.webp";
import AudienceGrowth from "./assets/illustration-audience-growth.webp";
import CreatePost from "./assets/illustration-create-post.webp";
import AiContent from "./assets/illustration-ai-content.webp";

const Card = ({ className, children }) => {
  return <article className={`card ${className}`}>{children}</article>;
};

function App() {
  return (
    <main className="bento">
      <Card className="card1">
        <h1 className="title">
          Social Media <span className="t-yellow-500">10x</span> <i>Faster</i>
          &nbsp; with AI
        </h1>
        <img src={FiveStarts} alt="" />
        <p>Over 4,000 5-star reviews</p>
      </Card>

      <Card className="card2">
        <img src={MultiplePlatforms} alt="" className="card__img" />
        <h3 className="card__subtitle">
          Manage multiple accounts and platforms.
        </h3>
      </Card>

      <Card className="card3">
        <h3 className="card__subtitle">
          Maintain a consistent posting schedule.
        </h3>
        <img src={ConsistentSchedule} alt="" />
      </Card>

      <Card className="card4">
        <h3 className="card__subtitle">Schedule to social media.</h3>
        <img src={ScheduePosts} alt="" className="card__img" />
        <p className="card__text">
          Optimize post timings to publish content at the perfect time for your
          audience.
        </p>
      </Card>

      <Card className="card5">
        <img src={GrowFollowers} alt="" className="card__img" />
        <h2 className="card__title">Grow followers with non-stop content.</h2>
      </Card>

      <Card className="card6">
        <div>
          <h2 className="card__title card__title--h1">>56% </h2>
          <p className="card__text">faster audience growth</p>
        </div>
        <img src={AudienceGrowth} alt="" className="card__img" />
      </Card>

      <Card className="card7">
        <h2 className="card__title">
          Create and schedule content <span>quicker</span>.
        </h2>
        <img src={CreatePost} alt="" className="card__img" />
      </Card>

      <Card className="card8">
        <h2 className="card__title">Write your content using AI.</h2>
        <img src={AiContent} alt="" className="card__img" />
      </Card>
    </main>
  );
}

export default App;
