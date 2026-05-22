const User=({ele})=>{
    console.log(ele)
    return(
        <a href={ele.url}>
          <div className="rounded h-40 w-44 overflow-hidden bg-white">
            <img src={ele.download_url} className="h-full w-full obj-cover"/>
          </div>
          <h1 className="font-bold text-lg">{ele.author}</h1>
        </a>
    );
}

export default User