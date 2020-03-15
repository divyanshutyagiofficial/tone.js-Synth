import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";
import * as Tone from "tone";

class App extends Component {
  synths = [new Tone.Synth(), new Tone.Synth(), new Tone.Synth()];
  notes = ["C", "C#", "D", "D#", "E", "E#", "F", "F#", "G", "G#", "A", "A#", "B"]
  constructor() {
    super();
    this.state = {
      name: "React"
    };
    this.synths[0].oscillator.type = "triangle";
    this.synths[1].oscillator.type = "sine";
    this.synths[2].oscillator.type = "sawtooth";
    this.synths.forEach(synth => synth.toDestination())
  }

  render() {
    return (
      <div>
        {this.synths.map(synth => 
        <div className="row">
          {this.notes.map((note, i) => 
          <input type="button" onClick={() => {
            synth.triggerAttackRelease(`${note}${i}`, "8n");
          }} style={{ margin: "0px 10px", background: "yellow"}}/>)}
        </div>)}
      </div>
      
    );
  }
}

render(<App />, document.getElementById("root"));
