import { fetchPhotos } from "./api/mediaApi"

const App = () => {


  return (
    <div className="h-screen w-full bg-gray-700 text-white">
      <button onClick={async()=>{
        const data = await fetchPhotos('cat')
        console.log(data.results);
      }}>Get Photos</button>
    </div>
  )
}

export default App