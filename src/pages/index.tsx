import SEO from "@/components/SEO";
import InfoContainer from "@/Containers/InfoContainer";
import TextContainer from "@/Containers/TextContainer";
import TypeContainer from "@/Containers/TypeContainer";
import useData from "@/hooks/useData";
import { PageType } from "@/types";
import { Philosopher, Montserrat_Alternates } from "next/font/google";
import { ReactNode } from "react";

const philosopherSans = Philosopher({
  variable: "--font-philosopher-sans",
  weight: "700",
  subsets: ["cyrillic"],
});

const montserratMono = Montserrat_Alternates({
  variable: "--font-montserrat-alternates",
  weight: "600",
  subsets: ["cyrillic"],
});

const Home = () => {
  const { pageType } = useData();
  const PAGE_RENDER: { [key in PageType]: ReactNode | null } = {
    INFO_PAGE: <InfoContainer />,
    TEXT_PAGE: <TextContainer />,
    TYPE_PAGE: <TypeContainer />
  };
  return (
    <div
      className={`${philosopherSans.variable} ${montserratMono.className} font-[var(--font-montserrat-alternates)]`}
    >
      <SEO />
      <main className="w-full h-screen">
        {PAGE_RENDER[pageType]}
      </main>
    </div>
  );
}
export default Home;
