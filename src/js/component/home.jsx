import React, { useState, useEffect } from "react";

const Counter = () => {
    const [renderFooter, setRenderFooter] = useState(false);
	
    //se ejecuta al cargar mi componente
    useEffect(() => {
        console.log('render');

        setRenderFooter(true);

    }, []) //Empty dependency array for the useEffect only to work once (when page is loaded)
    const counterStyle = {
        paddingTop: "30px",
        paddingBottom: "5px",
        color: "white",
        marginTop: "10px",
        background: "black",
    }
    return (
        <>
        <div class="text-center time-container" style={counterStyle}>
            <div className="clock"><i class="fa-regular fa-clock fa-flip-horizontal"></i></div>
            <div className="firstSlot">First slot</div>
            <div className="secondSlot">Second slot</div>
            <div className="thirdSlot">Third slot</div>
            <div className="fourthSlot">Fourth slot</div>
            <div className="fifthSlot">Fifth slot</div>
            <div className="sixthSlot">Sixth slot</div>
        </div>
        </>
    )
};

export default Counter;
