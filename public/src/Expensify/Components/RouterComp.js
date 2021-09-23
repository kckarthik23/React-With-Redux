import React from "react";
import { BrowserRouter ,Route ,Switch,NavLink, Link} from "react-router-dom";
import DashBoardPage from "./DashBoardPage";
import CreatePage from "./CreatePage";
import Header  from "./Header";
import HelpPage from "./HelpPage";
import EditPage from "./EditPage";
import notFoundPage from "./notFoundPage";

const RouterPage=()=>{
    return(
    <div>
    <BrowserRouter>
    <Header/>
    <Switch>
    <Route path="/" component={DashBoardPage} exact={true}/> 
    <Route path="/help" component={HelpPage}/> 
    <Route path="/edit/:id" component={EditPage}/>
    <Route path="/create" component={CreatePage}/>
    <Route component={notFoundPage}/>
    </Switch>
    </BrowserRouter>      
    </div>)
}

export default RouterPage;