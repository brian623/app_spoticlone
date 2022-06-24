import { useEffect,useState } from 'react'
import PodcastsCard from '../components/cards/PodcastsCard'
import getChanelsRecomended from '../Controllers/getChannelsRecomended'

const PodcastsRecomended = () => {
      //states
  const [recomendedChannels,setRecomendedChannels]=useState([])
  // what happend whne component in mounted
  useEffect(()=>{
    getChanelsRecomended(setRecomendedChannels)
  },[])
    return (
        <div className='bg-[#121212] h-[100vh] min-w-full pl-8 pt-24 overflow-y-scroll scrollbarBrown pr-4' id="scrollcontainer">
            <h2 className='text-2xl text-white font-[Gotham-bold] mb-5'>Podcasts recomendados</h2>
            <div className='grid grid-cols-5 gap-5 h-full max-w-[1200px]'>
      {
        recomendedChannels.length>0&&recomendedChannels.map((channel,idx)=>{
          return(
            <PodcastsCard key={idx} channel={channel} />
          )
        })
      }
      </div>
        </div>
    );
}

export default PodcastsRecomended;