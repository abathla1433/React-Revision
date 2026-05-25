import { useParams } from "react-router-dom";

const CourseDetail=()=>{
    const params=useParams();
    console.log(params);    
    return(
        <div className="flex flex-col justify-center items-center">
            <h1>Course Detail Page</h1>
            <p>Welcome to {params.id} page</p>
        </div>
    );
}

export default CourseDetail