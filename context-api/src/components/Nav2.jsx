import { useContext } from "react"
import { ThemeDataContext } from "../context/ThemeContext"

const Nav2=()=>{

    const [theme,setTheme]=useContext(ThemeDataContext)
        
    return(
        <div className="flex gap-5 font-bold justify-between">
            <h4>Home</h4>
            <h4>About</h4>
            <h4>Contact</h4>
            <h4>Services</h4>
            {theme}
        </div>
    )
}
export default Nav2