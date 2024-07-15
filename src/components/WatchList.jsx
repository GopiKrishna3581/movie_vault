import React from "react";

function WatchList() {
  return (
    <div>
      <>

        <div className="flex flex-wrap m-4 justify-center">
          <div className="flex justify-center h-[2rem] w-[8rem] bg-blue-400 items-center rounded-lg text-white font-bold mx-4">Action</div>
          <div className="flex justify-center h-[2rem] w-[8rem] bg-gray-400/50 items-center rounded-lg text-white font-bold">Action</div>
        </div>
        

        <div className="flex justify-center my-4">
          <input
            placeholder="Search Movies"
            className="px-4 h-[2.5rem] w-[16rem] bg-gray-200 outline-none"
            type="text"
          />
        </div>

        <div className="overflow-hidden rounded-lg border border-gray-200 m-8">
          <table className="w-full text-gray-500 text">
            <thead className="border-b-2">
              <tr>
                <th>Name</th>
                <th>Year</th>
                <th>Genre</th>
                <th>Run time</th>
              </tr>
            </thead>
            <tbody >
              <tr className="border-b-2">
                <td className="flex items-center px-5 py-4">
                  <img className="h-[4rem] w-[7rem]" src="https://imgs.search.brave.com/MU5-wowYFtQZjpQwkyr3HHz09wN-Swy1sGdjdV9y9H0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2MyLzlh/L2E0L2MyOWFhNDQ5/NmE0NjZiNWVmNTMw/NTFjYTRhYmQwYjM1/LmpwZw" alt="" />
                  <div className="mx-10">Movie Name</div>
                </td>

                <td className="px-5 py-4 text-center">2019</td>
                <td className="px-5 py-4 text-center">Thriller</td>
                <td className="px-5 py-4 text-center">160 min</td>
                <td className= "px-5 py-4 text-center text-red-900">Delete</td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </>
    </div>
  );
}

export default WatchList;
