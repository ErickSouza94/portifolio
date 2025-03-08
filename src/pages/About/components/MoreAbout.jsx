import Connect from "../../Connect/Connect";
import Capabilites from "./Capabilites";
import Experience from "./Experience";
import Formation from "./Formation";
import MoreAboutTop from "./MoreAboutTop";

const MoreAbout = () => {
  return (
    <div className="mais-sobre ">
      <MoreAboutTop />
      <Capabilites />
      <Experience />
      <Formation/>
      <Connect />
    </div>
  );
};

export default MoreAbout;
