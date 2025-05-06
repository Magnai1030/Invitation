import useData from "@/hooks/useData";
import { PERSON_TYPE_DATE, PERSON_TYPE_TIME } from "@/types";
import Image from "next/image";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

const InfoView = () => {
  const { personType } = useData();
//   const el = useRef(null);

//   useEffect(() => {
//     const typed = new Typed(el.current, {
//       strings: [
//         "ШИНЭ БАЙРНЫ ЦАЙЛЛАГА",
//       ],
//       typeSpeed: 50,
//       startDelay: 1000,
//       backSpeed: 10,
//       backDelay: 500,
//       loop: false,
//       showCursor: false,
//     });

//     return () => {
//       typed.destroy();
//     };
//   }, []);
  return (
    <div className="top-16 bottom-16 w-[416] z-20 absolute bg-blue-400 flex flex-col justify-between place-items-center py-10 px-1">
      <Image
        src={"/assets/icons/info-1.svg"}
        alt="info-1"
        width={208}
        height={31}
      />
      {/* <span ref={el} className={`text-white text-4xl text-center`} /> */}
      <p className="text-5xl text-white text-center">ШИНЭ БАЙРНЫ ЦАЙЛЛАГА</p>
      <p className="text-2xl text-white text-center">
        GLOBAL GARDEN 1 <br /> 1273 - 12 ТООТ
      </p>
      <Image
        src={"/assets/icons/info-signature.svg"}
        alt="info-sign"
        width={310}
        height={184}
      />
      <Image
        src={"/assets/icons/info-qr.svg"}
        alt="info-qr"
        width={100}
        height={100}
      />
      <div className="flex justify-center place-items-center flex-col">
        <p className="text-2xl text-white text-center">
          {PERSON_TYPE_DATE[personType!]}
        </p>
        <p className="text-base text-white text-center">
          {PERSON_TYPE_TIME[personType!]}
        </p>
      </div>

      <Image
        src={"/assets/icons/info-2.svg"}
        alt="info-2"
        width={186}
        height={34}
      />
    </div>
  );
};
export default InfoView;
