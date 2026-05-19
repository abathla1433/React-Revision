import { useState } from "react";
import { X } from 'lucide-react';

const App = () => {

  const [heading, setHeading] = useState("");
  const [details, setDetails] = useState("");

  const [notes,setNotes]=useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    console.log("Submitted");
    console.log(heading);
    console.log(details);

    let newHead=heading;
    let newDetail=details;

    if(newHead && newDetail){
      setNotes(prev=>(
      [
        ...prev ,
        {
          heading:newHead,
          details:newDetail
        }
      ]
    ))
    }

    

    setHeading("");
    setDetails("");
  };

  return (

    <div className="flex flex-col lg:flex-row min-h-screen">

      {/* LEFT SECTION */}

      <div className="
        w-full lg:w-1/2
        bg-gradient-to-br from-rose-50 via-sky-50 to-purple-100
        flex items-center justify-center
        p-6
      ">

        <form
          onSubmit={submitHandler}
          className="
            w-full max-w-md
            flex flex-col gap-5 items-center
            bg-white/70 backdrop-blur-md
            border border-white
            p-8 sm:p-10
            rounded-3xl
            shadow-xl
            transition-all duration-500
            hover:-translate-y-1
            hover:shadow-2xl
          "
        >

          <h1 className="text-3xl font-bold text-slate-700">
            Notes App
          </h1>

          <input
            type="text"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            placeholder="Enter Notes Heading"
            className="
              w-full px-5 py-3
              rounded-full
              bg-white
              border border-rose-200
              placeholder:text-slate-400
              outline-none
              transition-all duration-300
              focus:border-rose-400
              focus:ring-4 focus:ring-rose-100
              hover:border-rose-300
            "
          />

          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            placeholder="Enter details"
            className="
              w-full h-32 px-5 py-4
              rounded-3xl
              resize-none
              bg-white
              border border-sky-200
              placeholder:text-slate-400
              outline-none
              transition-all duration-300
              focus:border-sky-400
              focus:ring-4 focus:ring-sky-100
              hover:border-sky-300
            "
          />

          <button
            className="
              w-full sm:w-auto
              px-8 py-3 rounded-full
              text-white font-semibold
              bg-gradient-to-r from-pink-400 to-sky-400
              transition-all duration-300
              hover:scale-105
              hover:shadow-lg hover:shadow-pink-200
              active:scale-95
            "
          >
            Submit
          </button>

        </form>
      </div>

      {/* RIGHT SECTION */}

      <div className="
        w-full lg:w-1/2
        bg-gray-900
        p-5
      ">

        <h1 className="text-white text-3xl font-bold mt-4 mb-6">
          Your Notes:
        </h1>

        <div className="
          flex flex-wrap gap-5
          justify-center lg:justify-start
          overflow-y-auto
          max-h-[80vh]
          pb-10
        ">

          {notes.map((note,idx)=>(
            <div key={idx} className="h-52 w-40 bg-white rounded-4xl p-4 shadow-md">
            <h2 className="top-5 absolute right-5 bg-red-500 p-4 text-xs">{<X />}</h2>
            <h3 className="text-2xl font-bold">{note.heading}</h3>
           <p>{note.details}</p>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default App;