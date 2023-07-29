import React, { useState } from "react";

const TrafficLight = () => {
    const [currentLight, setCurrentLight] = useState("");

    return (
        <>
            <div className="traffic-light-stem"></div>
            <div className="light-container">
                <div className={currentLight == "red" ? "red-light selected-light" : "red-light"} onClick={currentLight == "red" ? () => setCurrentLight("") : () => setCurrentLight("red")}></div>
                <div className={currentLight == "yellow" ? "yellow-light selected-light" : "yellow-light"} onClick={currentLight == "yellow" ? () => setCurrentLight("") : () => setCurrentLight("yellow")}></div> 
                <div className={currentLight == "green" ? "green-light selected-light" : "green-light"} onClick={currentLight == "green" ? () => setCurrentLight("") : () => setCurrentLight("green")}></div>
            </div>
        </>
    );
};

export default TrafficLight;