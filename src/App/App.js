import React from "react";
import {Switch, Route} from "react-router-dom";
import {
    Home, About, Events, Products,
    Contact, Whoops404
} from "./pages/pages";

export default function App() {
    return (
        <Switch>
            <Route exact path="/"><Home/></Route>
            <Route path="/about"><About/></Route>
            <Route path="/events"><Events/></Route>
            <Route path="/products"><Products/></Route>
            <Route path="/contact"><Contact/></Route>
            <Route path="*"><Whoops404/></Route>
        </Switch>
    );
}