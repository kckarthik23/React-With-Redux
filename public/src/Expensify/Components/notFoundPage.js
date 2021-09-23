import React from "react";
import { BrowserRouter ,Route ,Switch,NavLink, Link} from "react-router-dom";

const notFoundPage =()=>{
    return(<div>
   <p>HTTP 404! not found </p> 
   <Link to="/">Back to DashBoard</Link> 
    </div>)
}

export default notFoundPage;