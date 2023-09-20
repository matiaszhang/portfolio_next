import Title from "../Title";
import MyResume from "./MyResume";
import Skills from "./Skills";

export default function Resume() {
  return (
    <section className="h-full overflow-y-scroll myScroll">
      <Title name="resume" />
      <MyResume />

      <Title name="skills" />
      <Skills />
    </section>
  );
}
