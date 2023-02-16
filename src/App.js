import "./styles.css";
import { useState } from "react";
import RandomNum from "./RandomNumbers.js";

export default function App() {
  return (
    <div className="App">
      <h1>CIT 382 - 22!</h1>
      <h2>Project 4</h2>
      <h3>Description</h3>
      <RandomNum />
    </div>
  );
}
