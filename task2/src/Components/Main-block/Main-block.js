import React from "react";
import SideBar from "./Side-bar/Side-bar";
import Content from "./Content/Content";

function MainBlock() {
    return (
        <main>
            <SideBar/>
            <Content/>
        </main>
    )
}

export default MainBlock;