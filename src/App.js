import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./_components/Navbar";
import Tenzie from "./_components/Tenzie";
import Home from "./_components/Home";

function App() {

  const [navComp,setNavComp]=React.useState([
    {path:"/",title:"Home",default:true},
    {path:"/tenzie",title:"Tenzie",default:false},
  ])
  // function addNavigation(newNav){
  //   setNavComp(oldnav=>oldnav.push(newNav));
  // }

  return (
    <div className="min-h-screen bg-cyan-900 -z-50">
      <Router>
        <Navbar links={navComp} />
        <Switch>
          <Route path="/tenzie">
            <Tenzie />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
