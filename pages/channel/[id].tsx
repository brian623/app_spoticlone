import { useEffect, useState } from "react";
import getChannelById from "../../Controllers/getChannelById";
import { useRouter } from "next/router";
import { apiUrl } from "../../globalVaribles";
import axios from "axios";
import { useCtx } from "../../contexts/context";
import { reproducirIcon } from "../../public/Svgs";
import getAudiosPodcastsList from "../../Controllers/getAudiosPodcastsList";
const Chanel = () => {
  //states
  const [episodios, setEpisodios] = useState([]);
  const [channel, setChannel] = useState({
    id: "",
    channel_id: "",
    stream_id: "",
    channel_style: "",
    public_read: "",
    created_at: "",
    updated_at: "",
    title: "",
    description: "",
    formatted_description: "",
    urls: {
      logo_image: {
        original: "",
      },
      banner_image: {
        original: "",
      },
    },
    category: {
      id: "",
      title: "",
    },
    channel_clips_count: "",
  });
  const { setReproductor }: any = useCtx();
  // id router
  const router = useRouter();

  useEffect(() => {
    getChannelById(setChannel, router.query.id);
   getAudiosPodcastsList(setEpisodios,router.query.id)
  }, [router]);
  return (
    <div className="bg-[#121212] h-screen overflow-y-scroll scrollbarBrown"id="scrollcontainer">
      {channel && (
        <div className="">
          <div
            className={`relative w-full min-h-[340px]  bg-cover bg-no-repeat`}
            style={{
              backgroundImage: `url(${channel.urls.banner_image.original})`,
            }}
          >
            <div className="bg-black/50 w-full h-full absolute top-0 left-0 pt-24 pl-8 pb-5 pr-4 flex items-center ">
              <div className="drop-shadow-2xl">
                {channel.id && (
                  <img
                    src={channel.urls.logo_image.original}
                    className="drop-shadow-2xl shadow-2xl rounded-xl w-[232px] h-[232px]"
                    alt="prfile img"
                  />
                )}
              </div>
              <div className="text-white ml-5 font-[Gotham-bold]">
                <p className="drop-shadow-xl"> {channel.channel_style} </p>
                <h3 className="text-7xl my-3 truncate drop-shadow-xl w-[790px]">
                  {channel.title}
                </h3>
                <p className="drop-shadow-xl"> {channel.category.title} </p>
              </div>
            </div>
          </div>
          <div className="flex text-white pl-8 p-4 max-w-[1200px] mt-10">
            <div className="w-[70%] pr-5">
              <h2 className="text-2xl text-white font-[Gotham-bold] mb-5">
                Todos los episodios
              </h2>
              {episodios.length > 0 && (
                <div>
                  {episodios.map((epi: any, idx) => {
                    return (
                      <div
                        key={idx}
                        className="flex w-full mb-2 border-t-2 py-3  border-[#464646]"
                      >
                        <img
                          src={
                            epi.urls.image
                              ? epi.urls.image
                              : epi.channel.urls.logo_image.original
                          }
                          alt="profile img"
                          className="w-[112px] h-[112px] rounded-lg mr-5 drop-shadow-xl"
                        />
                        <div>
                          <h3 className="truncate w-[550px] font-[Gotham-bold]">
                            {epi.title}
                          </h3>
                          <p className="truncate w-[550px] text-gray-default mt-2">
                            {epi.description}
                          </p>
                          <div className="flex items-center">
                            <button
                              onClick={() => setReproductor(epi.urls.high_mp3)}
                              className="bg-white rounded-full flex justify-center items-center h-8 w-8 text-black cursor-default hover:scale-105 mt-5"
                            >
                              {reproducirIcon}
                            </button>
                            <p className="text-gray-default ml-5 mt-5">
                              {(epi.duration / 60).toFixed(0)} min
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <div className="w-[30%] pl-5">
              <h2 className="text-2xl text-white font-[Gotham-bold] mb-5">
                Acerca de
              </h2>
              <p className="text-gray-default text-sm">{channel.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chanel;
