import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} font-[family-name:var(--font-geist-sans)] bg-blue-500 flex justify-center place-items-center h-screen px-5 py-14`}
    >
      <main className="bg-[#FEEFE2] h-full w-full md:w-[768]">
        <div className="w-full min-h-96 relative flex justify-">
          <Image
            src={"/assets/background/path5.svg"}
            alt="bg"
            fill
            className="object-fill"
          />
          <Image
            src={"/assets/background/path7.svg"}
            alt="bg"
            fill
            className="object-fill"
          />
          <Image
            src={"/assets/background/path9.svg"}
            alt="bg"
            fill
            className="object-fill"
          />
          <Image
            src={"/assets/background/path11.svg"}
            alt="bg"
            fill
            className="object-fill"
          />
          <Image
            src={"/assets/background/path11.svg"}
            alt="bg"
            fill
            className="object-fill"
          />
        </div>

        <div className="w-full h-1/2 relative">
          
          <Image
            src={"/assets/background/path13.svg"}
            alt="bg"
            fill
            className="object-cover"
          />
          <Image
            src={"/assets/background/path15.svg"}
            alt="bg"
            fill
            className="object-cover"
          />
          <Image
            src={"/assets/background/path17.svg"}
            alt="bg"
            fill
            className="object-cover"
          />
        </div>
      </main>
    </div>
  );
}
