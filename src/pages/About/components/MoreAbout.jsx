import Connect from "../../Connect/Connect";
import Capabilites from "./Capabilites";
import Experience from "./Experience";
import MoreAboutTop from "./MoreAboutTop";

const MoreAbout = () => {
  return (
    <div className="mais-sobre ">
      <MoreAboutTop />
      <Capabilites />
      <Experience />
      <Connect />
    </div>
  );
};

export default MoreAbout;
