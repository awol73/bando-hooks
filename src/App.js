import React, {Fragment, useState} from 'react'
// import Pera from './components/Pera';
// import Bandoneon from './components/Bandoneon'
import Acorde from './components/Acorde'

function App() {

  const [keyState, setKeyState] = useState({
    ki1: false,
    ki2: false,
    ki3: false,
    ki4: false
  });

  const emptyKey = {
    ki1: false,
    ki2: false,
    ki3: false,
    ki4: false
  };

  const handleChord = (chord) => {
    setKeyState({
      ...emptyKey,
      ...chord
    });
  }

  return (
    <div>
      <h1>Pear Svg</h1>
      {/* <Pera /> */}
      <Acorde keyState={keyState} setKeyState={setKeyState} />
      {/* <Bandoneon /> */}
      <button onClick={() => handleChord({ki1: true, ki2: true})}>Make the Chord!</button>
      <button onClick={() => handleChord({ki1: true, ki2: true, ki4: true})}>Make the Chord!</button>
      <button onClick={() => handleChord({ki2: true, ki3: true})}>Make the Chord!</button>
    </div>
  );
}

export default App;
