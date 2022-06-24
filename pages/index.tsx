import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import PodcastsCard from "../components/cards/PodcastsCard";
import getChanelsRecomended from "../Controllers/getChannelsRecomended";

const Home: NextPage = () => {
  //states
  const [recomendedChannels, setRecomendedChannels] = useState([]);
  // what happend whne component in mounted
  useEffect(() => {
    getChanelsRecomended(setRecomendedChannels);
  }, []);
  return (
    <div
      className="bg-[#121212] h-screen overflow-y-scroll min-w-full pl-8 pt-12 pr-4 scrollbarBrown"
      id="scrollcontainer"
    >
      <Head>
        <title>Spotify</title>
        <meta name="description" content="Spotify clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="mt-10">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl text-white font-[Gotham-bold] mb-5">
            Podcasts recomendados
          </h2>
          <Link href="/podcasts-recomended" passHref>
            <a className="text-gray-default font-[Gotham-bold] text-[13px] hover:underline">
              VER TODO
            </a>
          </Link>
        </div>
        <div className="grid grid-cols-5 gap-5">
          {recomendedChannels.length > 0 &&
            recomendedChannels.slice(0, 5).map((channel, idx) => {
              return <PodcastsCard key={idx} channel={channel} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
