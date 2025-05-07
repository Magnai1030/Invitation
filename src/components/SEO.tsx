import Head from "next/head";
import { FC } from "react";

type Props = {
  title?: string;
  description?: string;
  image?: string;
};
const InitialData = {
  title: "Invitation",
  description: "House warming invitation from Batmagnai and Ariunjargal",
  image: '/invite.png',
};
const SEO: FC<Props> = ({ title, description, image }) => {
  return (
    <Head>
      <title>{title ? title : InitialData.title}</title>
      <meta
        name="description"
        content={description ? description : InitialData.description}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:image" content={image ? image : InitialData.image} />
    </Head>
  );
};

export default SEO;