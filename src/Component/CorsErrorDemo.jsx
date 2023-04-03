import React,{useState} from "react";
import axios from "axios";

const CorsErrorDemo = () =>{
    const [CORS_error, SetCORS_error] = useState({CORS_err : ""});
    axios.get("http://localhost:4000").then((response) => {
      SetCORS_error(response.data);
    });
    return(
        <div>
            <p>This Content is directly written in the Component so it's rendered without any error.</p>
            <p>The below content is fetched from Server, so without using CORS it may not be rendered.</p>
            <p>{CORS_error.CORS_err}</p>
        </div>
    )
}

export default CorsErrorDemo;