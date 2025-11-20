import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

function About() {
  return (
    <div>
      <Header />
      <h1>This is the ABout Us page</h1>

      <Button size="small" shape="rounded-sm">
        Small Button
      </Button>

      <Button size="medium" shape="rounded-md">
        Medium Button
      </Button>

      <Button size="large" shape="rounded-full">
        Large Pill Button
      </Button>
    </div>
  );
}

export default About;
