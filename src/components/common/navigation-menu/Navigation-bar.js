import React from 'react';
import NavigationItem from "./Navigation-item";
import "../../../index.css"
import home from "../../../img/home.js";
import dog from "../../../img/dog.js";
import map from "../../../img/map.js";
import friends from "../../../img/friends.js";
import messages from "../../../img/messages.js";

function NavigationBar() {
    return (
        <div>
            <NavigationItem image={home} link_to={"/home"} text={"Home"}/>
            <NavigationItem image={dog} link_to={"/walks"} text={"Walks"}/>
            <NavigationItem image={map} link_to={"/map"} text={"Map"}/>
            <NavigationItem image={friends} link_to={"/friends"} text={"Friends"}/>
            <NavigationItem image={messages} link_to={"/messages"} text={"Messages"}/>
        </div>
    );
}

export default NavigationBar;