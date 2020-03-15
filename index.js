import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";
import * as Tone from "tone";

class App extends Component {
  synths = [new Tone.Synth(), new Tone.Synth(), new Tone.Synth()];
  notes = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "E#",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B"
  ];
  constructor() {
    super();
    this.state = {
      name: "React"
    };
    this.index = 0;
    this.synths[0].oscillator.type = "triangle";
    this.synths[1].oscillator.type = "sine";
    this.synths[2].oscillator.type = "sawtooth";
    this.synths.forEach(synth => synth.toDestination());
    this.rows = document.body.querySelectorAll("div > div");
  }

  play() {
    const gain = new Tone.Gain(1.0);
    gain.toDestination();
    this.synths.forEach(synth => synth.connect(gain));
    Tone.transport && Tone.Transport.scheduleRepeat(repeat, "8n");
    Tone.transport && Tone.Transport.start();
  }

  render() {
    return (
      <div>
        <div>
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
        </div>
         <div>
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
        </div>
         <div>
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
          <input type="checkbox" />
        </div>
        <button onClick={() => this.play()}>play</button>
      </div>
    );
  }
}

  function repeat(time) {
    let step = App.index % 8;
    App.rows.forEach((row, i) => {
      let synth = synth[i];
      let note = App.notes[i];
      let row = App.rows[i];
      let input = row.querySelector(`input:nth-child(${step + 1})`);
      if (input.checked) synth.triggerAttackRelease(note, "8n", time);
    });
  }

render(<App />, document.getElementById("root"));
