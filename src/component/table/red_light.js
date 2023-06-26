import React, { useState, useEffect } from 'react';
const RedLight = () => {
    const [Colors, setColors] = useState(['white', 'white', 'white']);
    const [numOfClicks, setNumOfClicks] = useState(0);
  
    const changeColor = () => {
      const newColors = [...Colors];
      switch (numOfClicks%4) {
        case 0:
          newColors[0] = 'red';
          break;
        case 1:
          newColors[0] = 'white'
          newColors[1] = 'yellow';
          break;
        case 2:
          newColors[1] = 'white';
          newColors[2] = 'green';
          break;
        default:
           newColors[2] ='white';
          break;
      }
      setColors(newColors);
      setNumOfClicks((numOfClicks + 1)%4);
    };

    
        // useEffect(() => {
            
        //         let intervalId;
        //         const autoChange = () => {
        //           intervalId = setInterval(() => {
        //             changeColor();
        //           }, 1000);
        //         };
        
        //     return () => clearInterval(interval);
        //   }, []);
          


      

    
 
    return(
        <div className="main_content">
        <div className="next_button">
            <button onClick={changeColor} > Next </button>
        </div>
        <div>
            <button id='start' >Auto</button> <br/>
            <button id='stop' >Stop</button>
        </div>
        <div className="light">
            <div style={{ backgroundColor: Colors[0] }} className="red"></div>
            <div style={{ backgroundColor: Colors[1] }} className="yellow"></div>
            <div style={{ backgroundColor: Colors[2] }} className="green"></div>
            
        </div>
    </div>

    )
   
}

export default RedLight;


