import React from "react";
import ReactDOM from "react-dom";
import i from './components/image/i.jpeg';
import z from './components/image/z.jpeg';
import f from './components/image/f.jpeg';
import c from './components/image/c.png';
import V1 from './videos/V1.webm';

import './App.css';
class App extends React.Component{
    render(){
        return(
            <div>
                <div class="x">
                    <img className="i" src={i} class="a"/>
                    <img className="z" src={z} class="b"/>
                 </div>
                    <div class="e">
                    <center>
                    <video src={V1} width="600" height="300" controls="controls" autoplay="true" className="video"/>
                    </center>
                    </div>
                    <div class="y">
                    <img className="f" src={f} class="c"/>
                    <img className="c" src={c} class="d"/>
                </div>
            </div>
        );
    }
}

export default App;
ReactDOM.render(<App/>,document.getElementById("root"));