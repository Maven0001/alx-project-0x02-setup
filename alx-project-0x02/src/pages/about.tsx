import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

function About() {
  return (
    <div>
      <Header />
      <h1>This is the ABout Us page</h1>

      <button size="small" shape="rounded-sm">
        Small Button
      </button>

      <button size="medium" shape="rounded-md">
        Medium Button
      </button>

      <button size="large" shape="rounded-full">
        Large Pill Button
      </button>
    </div>
  );
}

export default About;
