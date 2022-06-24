import Image from "next/image";
import Link from "next/link";

const PodcastsCard = ({channel}:any) => {
    return (
        <Link href={`/channel/${channel.id}`}>
        <div className="rounded-lg px-4 pt-4 pb-7 drop-shadow-sm bg-[#161616] hover:bg-brown-light transition duration-300 cursor-pointer text-white">
            <div className="drop-shadow-3xl">
            <Image src={channel.urls.logo_image.original} width={200} height={200} className="rounded"/>
            </div>
           <h3 className="font-[Gotham-medium] mt-4 truncate ">{channel?.title}</h3>
        </div>
        </Link>
    );
}

export default PodcastsCard;