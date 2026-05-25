import {useNavigate} from "react-router-dom"
const Navbar2=()=>{
    
    let navigate=useNavigate()
    const btn1Clicked=()=>{
            navigate('/');
        }

        const btn2Clicked=()=>{
            navigate(-1);
        }

    return(
        <div className="py-3 px-5 bg-amber-100">
            <button onClick={btn1Clicked} className="bg-orange-300 px-5 py-3 m-4 rounded cursor-pointer active:scale-95">Return to Home page</button>

            <button onClick={btn2Clicked} className="bg-orange-300 px-5 py-3 m-4 rounded cursor-pointer active:scale-95">Back</button>
        </div>
    );
}
export default Navbar2