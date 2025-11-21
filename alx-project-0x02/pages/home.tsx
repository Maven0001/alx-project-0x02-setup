import Header from "../components/layout/Header";
import Card from "../components/common/Card";
import PostModal from "../components/common/PostModal";

function Home() {
  return (
    <div>
      <Header />
      <h1>This is the Homepage</h1>

      <Card
        title="Interfaces in Typescript"
        content="Leaning to become a better Front-end engineer"
      />
      <PostModal />
    </div>
  );
}

export default Home;
