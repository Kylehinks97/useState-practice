import { useState } from "react"

export default function ToggleColor() {
    const [isActive, setIsActive] = useState(false);
  
    const toggleClass = () => {
      setIsActive(!isActive)
    }

    let className;
    if (isActive) className = "red"
    else className = "blue"

    return (
        <div className="container">
        <h2>Colour Toggler</h2>
        <p>The button below utilises the useState hook to change the class of a button. We set a variable called isActive to a boolean, it will default as false. This variable will be toggled by the toggleClass function. We invoke this function on every click. We then have some conditional logic to say that: isActive when true will result in the className variable being red, and when the isActive variable is false, it will set className to blue.<br></br>
        <br></br>
        What you can't see is the CSS I have made that simply sets color to blue in the "blue" class and "red" in the red class.
        </p>
        <button id="toggle-button" onClick={toggleClass} className={className}>Click me to toggle my colour!</button>
        <p>Here is how it works:</p>
        <img src="/src/toggleColor.jpeg" className = "code-image"></img>
        </div>
    )
}

