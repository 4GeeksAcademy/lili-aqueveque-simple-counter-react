import React, { useState, useEffect } from "react";

const Counter = () => {
    const [second, setSecond] = useState(0);

    useEffect(() => {
        // Interval that increments the second state every 1000ms (1 second)
        const interval = setInterval(() => {
            setSecond(prevSecond => prevSecond + 1);
        }, 1000);
        // Cleanup function to clear interval that runs before the next effect or unmount
        // Unmount: 
        return () => {
          clearInterval(interval);
        };
      }, []); //dependency array makes the effect run only once after the initial render.
    const counterStyle = {
        paddingTop: "30px",
        paddingBottom: "5px",
        color: "white",
        marginTop: "10px",
        background: "black",
    }

    // Convert the number to string and split into individual characters
    const digitArray = second.toString().padStart(6, "0").split("");

    return (
        <>
            <div className="text-center time-container" style={counterStyle}>
                <div className="clock"><i className="far fa-clock fa-flip-horizontal"></i></div>
                {digitArray.map((digit, index) => (
                    <div key={index} className="digitSlot">{digit}</div>
                ))}
            </div>
        </>
    )
};

export default Counter;

//Pseudocode:
/*Define a functional component called Counter:
    Initialize a state variable "second" with initial value 0
    Define a useEffect hook with an empty dependency array:
        Inside the useEffect:
            Set up an interval that increments "second" by 1 every 1000ms (1 second)
            Return a cleanup function:
                Clear the interval to prevent memory leaks

    Define an object "counterStyle" for CSS styles:
        padding, margin, background

    Convert the number "second" to a string and pad it with zeros to ensure a length of 6 characters
    Split the padded string into individual characters and store them in an array "digitArray"

    Render the following JSX structure:
        <div> <!-- Start of outer div with className "text-center time-container" and styles from "counterStyle" -->
            <div> <!-- Clock icon div with className "clock" and flipped horizontal icon -->
                <i> <!-- Font Awesome clock icon -->
                    <!-- "far fa-clock fa-flip-horizontal" icon classes -->
                </i>
            </div>
            <!-- Iterate over each character in "digitArray" and render a div with className "digitSlot" -->
            For each digit in digitArray:
                <div>digit</div> <!-- Render a div containing the current digit -->
        </div> <!-- End of outer div -->
    <!-- End of JSX structure -->
*/