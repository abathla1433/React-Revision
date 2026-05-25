import { Link } from "react-router-dom"

const Navbar=()=>{
    return(
        <div className="flex items-center justify-between px-15 py-6 bg-yellow-300">
            <a href="/"><h2 className="text-white font-bold text-4xl">blink<span className="text-green-600">it</span></h2></a>

            <div className="h-full">
                <h2 className="font-bold text-xl">Delivery in minutes</h2>
                <p className="text-s">Select Location</p>
            </div>

            <div className="flex gap-8 text-xl">
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/product">Product</Link>
                <Link to="/courses">Courses</Link>
            </div>
        </div>
    )
}

export default Navbar