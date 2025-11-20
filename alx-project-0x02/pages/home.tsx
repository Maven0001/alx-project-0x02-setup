import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";

function Home() {
  return (
    <div>
      <Header />
      <h1>This is the Homepage</h1>

      <Card
        title="Interfaces in Typescript"
        content="Leaning to become a better Front-end engineer"
      />
    </div>
  );
}

export default Home;
