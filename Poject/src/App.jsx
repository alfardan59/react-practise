import { fetchPhotos, fetchVideos } from "./api/mediaApi"

const App = () => {


  return (
    <div className="h-screen w-full bg-gray-700 text-white">
      <button className="bg-green-400 px-4 py-2 m-5" onClick={async()=>{
        const data = await fetchPhotos('cat')
        console.log(data.results);
      }}>Get Photos</button>

      <button className="bg-green-400 px-4 py-2 m-5" onClick={async()=>{
        const data = await fetchVideos('cat')
        console.log(data.videos);
      }}>Get Videos</button>
    </div>
  )
}

export default App