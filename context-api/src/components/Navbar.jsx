import { useContext } from "react"
import Nav2 from "./Nav2"
import {ThemeDataContext} from "../context/ThemeContext"
import Button from "./Button";

const Navbar=()=>{
    const  [theme,setTheme]=useContext(ThemeDataContext);
    return(
        <div className={`flex justify-between px-16 items-center py-7 ${theme==="light"?"bg-yellow-300":"bg-green-400"}`} >
            <h1 className="text-3xl font-bold">Blinkit</h1>
            <Nav2/>
            <Button/>
        </div>
    )
}
export default Navbar