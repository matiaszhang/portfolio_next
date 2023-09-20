import { BsAwardFill, BsCodeSlash, BsGlobe } from "react-icons/bs";
import Fact from "./Fact";

export default function Facts() {
  return (
    <ul className="grid grid-cols-2 mb-12 logos sm:grid-cols-3">
      <Fact Icon={BsAwardFill} desc="17+ Awards Won" border />
      <Fact Icon={BsCodeSlash} desc="500K+ Lines Written" border />
      <Fact Icon={BsGlobe} desc="6+ Countries Visited" />
    </ul>
  );
}
