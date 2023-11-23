import Navbar from "../components/Navbar";
import MaxKontaktBoks from "@/pages/kontakt/maxkontaktboks.jsx";
import AttilaKontaktBoks from "@/pages/kontakt/attilakontaktboks.jsx";
import CarlAntonKontaktBoks from "@/pages/kontakt/carlantonkontaktboks.jsx";
import JonasKontaktBoks from "@/pages/kontakt/jonaskontaktboks.jsx";

export default function Kontakt() {
  return (
    <div className="bg-1 h-screen lg:overflow-y-hidden">
      <Navbar />
      <div className="flex flex-col w-screen  justify-center items-center gap-20 mt-24 ">
        {" "}
        <h1 className="text-5xl md:text-7xl lg:text-8xl ">Team members</h1>
        <section className="flex flex-col w-10/12 sm:w-2/3 md:w-2/3 h-1/2  lg:w-2/3 lg:h-[300px] lg:grid lg:grid-cols-2 gap-8  ">
          <MaxKontaktBoks />
          <AttilaKontaktBoks />
          <CarlAntonKontaktBoks />
          <JonasKontaktBoks />
        </section>
      </div>
    </div>
  );
}
