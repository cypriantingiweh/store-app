import React from "react";
import NavBar from "./component/NavBar";
import ProductList from "./component/ProductList";
import Cart from "./component/Cart";
import Details from "./component/Details";
import Default from "./component/Default";
import { Route,Switch } from "react-router-dom";
import Modal from "./component/Modal";

export default class App extends React.Component{

  render(){
    return (
     <React.Fragment>
       <NavBar />
       <Switch>
         <Route path="/" exact component={ProductList} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/details" exact component={Details} />
          <Route  component={Default} />
       </Switch>

       <Modal />
     </React.Fragment>
    );
  }
}

