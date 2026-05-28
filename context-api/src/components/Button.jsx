import { useContext } from "react";
import { ThemeDataContext } from "../context/ThemeContext";

const Button=()=>{

    const[theme,setTheme]=useContext(ThemeDataContext)

    const changeTheme=()=>{
        console.log("theme changed");
        theme==="light"?setTheme("dark"):setTheme("light");
    }
    return (
        <div>
            <button className="bg-gray-900 text-white p-2 rounded cursor-pointer" onClick={changeTheme}>Change theme</button>
        </div>
    );
}

export default Button