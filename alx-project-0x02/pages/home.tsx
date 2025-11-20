import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";

function Home() {
  return (
    <div>
      <Header />
      <h1>This is the Homepage</h1>
      <span>
        {(Card.title = "Typescript is stressful")} <br />
        {(Card.content = "But we got no choice than to learn")}
      </span>
    </div>
  );
}

export default Home;
