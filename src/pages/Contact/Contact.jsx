import { GrMap } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import MarkerMap from "./components/MarkerMap";

import Forms from "../Connect/components/Forms";

const Contact = () => {
  return (
    <div className="flex flex-row justify-around items-center text-2xl">
      <div className="contato flex flex-col gap-10">
        <h1 className="flex justify-center items-center">Contato</h1>
        <h3 className="flex flex-row items-center gap-5">
          <GrMap />
          Leiria, Portugal
        </h3>
        <h3 className="flex flex-row items-center justify-items-start gap-5">
          <MdEmail />
          erick.ssouza94@gmail.com
        </h3>
        <h3 className="flex flex-row items-center justify-items-start gap-5">
          <FaWhatsapp /> +55 (21)969096183
        </h3>

        <div className="mapa flex flex-col justify-items-center text-center">
          <MarkerMap />
        </div>
      </div>

      <div className="email flex flex-col justify-center items-center">
        <Forms initialData={{name: "", email: "", subject: "", message: "" }}/>
      </div>
    </div>
  );
};

export default Contact;
