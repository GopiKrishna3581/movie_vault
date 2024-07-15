import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import WatchList from "./components/WatchList";
import Banner from "./components/Banner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
export default function App() {
   let [watchlist, setWatchList] = useState([])

   let handleAddWatchlist = (movieObj) => {
    let newWatchlist = [...watchlist, movieObj]
    setWatchList(newWatchlist)
    console.log(newWatchlist)
   }

   let removeFromWatchlist = (movieObj) => {
    let filteredWatchlist = watchlist.filter((movie)=> {
      return movie.id != movieObj.id
    }); setWatchList(filteredWatchlist)
   }
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<><Banner/> <Movies handleAddWatchlist={handleAddWatchlist} removeFromWatchlist = {removeFromWatchlist}/></>} />
          <Route path="/watchlist" element={ <WatchList />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
