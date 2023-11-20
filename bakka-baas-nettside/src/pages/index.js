import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <main className="flex flex-col gap-20 w-screen h-full">
      <Navbar />

      <section className=" w-full">
        <div className="h-9"></div>
        <h1 className="flex justify-center items-center text-6xl w-full">
          Bakka bås booking
        </h1>
      </section>
      <div className=""></div>
      {/* hvilke båser er ledige del av nettsiden */}
      <section className="flex justify-center">
        <div className="grid grid-cols-2 gap-32">
          <div className="flex flex-col gap-3">
            <div>Bås 1</div>
            Bås 1 er ledig
          </div>{" "}
          <div className="flex flex-col gap-3">
            <div>Bås 2</div>
            Bås 2 er ledig
          </div>{" "}
          <div className="flex flex-col gap-3">
            <div>Bås 3</div>
            Bås 3 er ledig
          </div>{" "}
          <div className="flex flex-col gap-3">
            <div>Bås 4</div>
            Bås 4 er ledig
          </div>{" "}
        </div>
      </section>
    </main>
  );
}
