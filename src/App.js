import { useState } from 'react';
import './App.css';
import { JogoDoGalo } from "./components/JogoDoGalo"


export default function App() {
  const [estadoDaApp, setEstado] = useState("")
  return (
    <div className="App">
      <JogoDoGalo />
    </div>
  );
}


// [1, 2, 3, 4].map(e => e * 2)

// [
//   1, 1 => 1 * 2 //2,
//   2, 2 => 2 * 2 //4,
//   3, 3 => 3 * 2 //6,
//   4, 4 => 4 * 2 //8
// ] 