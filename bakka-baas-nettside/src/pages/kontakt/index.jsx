import Navbar from "../components/Navbar";
import MaxKontaktBoks from "@/pages/kontakt/maxkontaktboks.jsx";
import AttilaKontaktBoks from "@/pages/kontakt/attilakontaktboks.jsx";
import CarlAntonKontaktBoks from "@/pages/kontakt/carlantonkontaktboks.jsx";
import JonasKontaktBoks from "@/pages/kontakt/jonaskontaktboks.jsx";

export default function Kontakt() {
  return (
    <div className="bg-1 h-screen">
      <Navbar />

      <div className="flex flex-col w-screen h-full justify-center items-center gap-20">
        {" "}
        <h1 className="text-8xl">Team members</h1>
        <section className="grid grid-cols-2 gap-8 w-1/2 h-1/2">
          <MaxKontaktBoks />
          <AttilaKontaktBoks />
          <CarlAntonKontaktBoks />
          <JonasKontaktBoks />
        </section>
      </div>
    </div>
  );
}
