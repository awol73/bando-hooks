import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Izquierdo2 from './components/Izquierdo2';
import Tonalidades from './components/Tonalidades';
import Acordes from './components/Acordes';

import lista_de_escalas from './components/tonalidades_mayores.json';
import lista_de_acordes from './components/acordes.json';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


function App() {

  const classes = useStyles();

  const [keyState, setKeyState] = useState({
    'k0/0': false, ki2: false, ki3: false, ki4: false, ki5: false, ki6: false, ki7: false, ki8: false, ki9: false, ki10: false, ki11: false, ki12: false, ki13: false, ki14: false, ki15: false, ki16: false, ki17: false, ki18: false, ki19: false, ki20: false, ki21: false, ki22: false, ki23: false, ki24: false, ki25: false, ki26: false, ki27: false, ki28: false, ki29: false, ki30: false, ki31: false, ki32: false, ki33: false
  });

  // tipoTonalidad pueden ser : mayores, menores
  // TODO : POR EL MOMENTO NO SE USA
  //const [tipoTonalidad, setTipoTonalidad] = useState("mayores");

  
  // acordesDeLaEscala -> array de acordesDeLaEscala de una tonalidad.
  // usado por componente Acordes.js para armar la botonera
  //
  const [acordesDeLaEscala, setAcordesDeLaEscala] = useState(['Cmaj7','Dmaj7','Emaj7','Fmaj7','Gmaj7','Amaj7','Bmaj7']);

  const emptyKey = {
    'k0/0': false, ki2: false, ki3: false, ki4: false, ki5: false, ki6: false, ki7: false, ki8: false, ki9: false, ki10: false, ki11: false, ki12: false, ki13: false, ki14: false, ki15: false, ki16: false, ki17: false, ki18: false, ki19: false, ki20: false, ki21: false, ki22: false, ki23: false, ki24: false, ki25: false, ki26: false, ki27: false, ki28: false, ki29: false, ki30: false, ki31: false, ki32: false, ki33: false
  };

  // Setea el estado de cada tecla en on/off
  // segun el objeto que recibe.
  //
  const handleChord = (chord) => {

    console.log("Acorde: ", chord);
    const keys = lista_de_acordes.filter((item) => item.name === chord);

    console.log("Set de teclas para ", chord, keys);
    // keys es un array devuelto por flter es por eso que tomo
    // solamente la primer posicion
    // TODO: Ver si podemos cambiar la siguiente linea con array
    // destructuring.
    //
    // TODO: WARNING! DEFAULT KEY
    //
    let chordKeys= keys[0] === undefined ? {"k⌖": true} : keys[0].keySettings;

    setKeyState({
      ...emptyKey,
      ...chordKeys
    });
    
  }

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12} md={12}>
          <Typography variant="h2" gutterBottom align="center" className={classes.h2Title}>
              Pear Band
            </Typography>
        </Grid>
        <Grid item xs={12} sm={2} md={2}>
          <Typography variant="3" gutterBottom align="center" className={classes.h2Title}>
              Abriendo Cerrando 
          </Typography>
          <Button variant="contained" onClick={() => handleChord({})}>⎴⏐⌃</Button>
        </Grid>
        <Grid item xs={12} sm={10} md={10}>
          <Typography variant="h4" gutterBottom align="center" className={classes.h2Title}>
              Tipos de Escalas
            </Typography>
        </Grid>
        <Grid item xs={12} sm={2} md={2}>
          <Tonalidades lista_de_escalas={lista_de_escalas} setAcordesDeLaEscala={setAcordesDeLaEscala}/>
        </Grid>
        <Grid item xs={12} sm={10} md={10}>
          <Izquierdo2 keyState={keyState} setKeyState={setKeyState} />
        </Grid>
        <Grid item xs={12} sm={12} md={12}>
          <Acordes acordesDeLaEscala={acordesDeLaEscala} handleChord={handleChord} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
