import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Feed from "./pages/Feed/feed";
import Post from "./pages/Post/post";
import LerMais from "./pages/LerMais/lermais";
import Edit from "./pages/Edit/edit";



function App() {
  return (
    <Router>
       <Switch>
         <Route exact path="/" component={Feed} />
         <Route path="/post" component={Post} />
         <Route path="/lermais/:id" component={LerMais} />
         <Route path="/edit/:id" component={Edit} />
       </Switch>
     </Router>
  );
}

export default App;