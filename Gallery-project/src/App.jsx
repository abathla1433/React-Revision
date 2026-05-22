import { useEffect, useState } from "react";
import axios from "axios"
import User from "./components/User"
const App=()=>{

  const[userData,setUserData]=useState([]);

  const [curPage,setCurPage]=useState(0);


  const getData=async()=>{
    const response=await axios.get(`https://picsum.photos/v2/list?page=${curPage}&limit=20`)
    setUserData(response.data);
  }

  useEffect(function(){
    getData();
  },[curPage])

  let printUserData=<h3 className="absolute top-1/2 left-1/2 text-gray-400 text-xs -translate-x-1/2 -translate-y-1/2 font-semibold ">Loading....</h3>

  if(userData.length>0){
    printUserData=userData.map((ele,idx)=>{
      return <div key={idx}>
        <User ele={ele}/>
      </div>
    })
  }

  const nextPage=()=>{
    setCurPage(curPage+1);
    setUserData([]);
  }

  const prevPage=()=>{
    if(curPage>0  ){
      setCurPage(curPage-1);
       setUserData([])
    }
  }

  return(
    <div className="bg-black text-white h-screen overflow-auto">
      <button className="bg-green-500 px-5 py-4 text-xl rounded m-7 active:scale-95"
      
      onClick={
        getData
      }
       >Get Data</button>
       <div className="p-6 flex flex-wrap gap-5 ">
      {printUserData}
       </div>

      <div className="flex p-3 m-5 items-center justify-center">
        <button  style={{opacity:curPage==0?0.5:1}}  onClick={prevPage} className="bg-amber-400 cursor-pointer active:scale-95 text-black px-5 py-2 m-3 rounded text-lg">Prev</button>

        <h4>Page {curPage}</h4>

        <button onClick={nextPage} className="bg-amber-400 cursor-pointer active:scale-95 text-black px-5 py-2 m-3 rounded text-lg">Next</button>
      </div>

    </div>
  );
}

export default App