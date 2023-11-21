import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "./components/navbar";
import { FcCheckmark } from "react-icons/fc";

export default function Home() {
  const checkmarkStyles = "w-7 h-7";
  const parentDivBaasStyles =
    "flex flex-col gap-3 border-2 p-3 border-white justify-center items-start pl-8 h-36  ";
  const childDivBaasStyles =
    "flex flex-row gap-4 w-full h-16 items-center items-start";
  return (
    <main className="flex flex-col gap-20 w-screen h-screen bg-1 ">
      <Navbar />

      <section className=" w-full">
        <div className="h-9"></div>
        <h1 className="flex justify-center items-center text-6xl w-full">
          Ledige båser
        </h1>
        <div className="h-5"></div>
      </section>

      {/* hvilke båser er ledige del av nettsiden */}
      <section className="flex justify-center items-center">
        <div className=" grid grid-cols-2 gap-6 w-1/3 grid-pl">
          <div className={parentDivBaasStyles}>
            {/*denne diven går rundt hver bås boks*/}
            <span>Bås 1</span>
            <div className={childDivBaasStyles}>
              <span> Bås 1 er ledig</span>
              <FcCheckmark className={checkmarkStyles} />
            </div>
          </div>{" "}
          <div className={parentDivBaasStyles}>
            <span>Bås 2</span>
            <div className={childDivBaasStyles}>
              <span> Bås 2 er ledig</span>
              <FcCheckmark className={checkmarkStyles} />
            </div>
          </div>{" "}
          <div className={parentDivBaasStyles}>
            <span>Bås 3</span>
            <div className={childDivBaasStyles}>
              <span> Bås 3 er ledig</span>
              <FcCheckmark className={checkmarkStyles} />
            </div>
          </div>{" "}
          <div className={parentDivBaasStyles}>
            <span>Bås 4</span>
            <div className={childDivBaasStyles}>
              <span> Bås 4 er ledig</span>
              <FcCheckmark className={checkmarkStyles} />
            </div>
          </div>{" "}
        </div>
      </section>
    </main>
  );
}
