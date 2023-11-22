import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

export default function KontaktBokser() {
  const gridboxStyles =
    "flex items-center gap-5 w-30 h-30 border border-white pl-2 p-3 rounded-md";
  const iconStyle = "w-16 h-16";
  const mailIcons = "w-8 h-8 hover:text-green-400";
  const nameStyles = "text-3xl mt-7";
  return (
    <div className={gridboxStyles}>
      <div className="h-full flex flex-col justify-center">
        <FaUser className={iconStyle} />{" "}
      </div>

      <div className="flex flex-col gap-1 mt">
        <span className={nameStyles}>Jonas</span>
        <span>kontakt på:</span>
        <span className="h-[1px] w-11/12 bg-white"></span>

        <div className="flex gap-2 items-center ">
          <Link href="mailto:jonia005@osloskolen.no">
            <MdEmail className={mailIcons} />
          </Link>{" "}
          <span>jonia005@osloskolen.no</span>
        </div>
      </div>
    </div>
  );
}
