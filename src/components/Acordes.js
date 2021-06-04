import React, { useState, Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';


const Acordes = ({acordesDeLaEscala, handleChord}) => {
    return (
        <Fragment>
          {/* <Button variant="contained" onClick={() => handleChord(acordes[0], {'k0': true, 'k4': true, 'k7': true})}>𝐈 {acordes[0]}</Button> */}
          <Button variant="contained" onClick={() => handleChord(acordesDeLaEscala[0])}>𝐈 {acordesDeLaEscala[0]}</Button>
          <Button variant="contained" onClick={() => handleChord(acordesDeLaEscala[1])}>𝐈𝐈 {acordesDeLaEscala[1]}</Button>
          <Button variant="contained" onClick={() => handleChord(acordesDeLaEscala[2])}>𝐈𝐈𝐈 {acordesDeLaEscala[2]}</Button>
          <Button variant="contained" onClick={() => handleChord(acordesDeLaEscala[3])}>𝐈𝐕 {acordesDeLaEscala[3]}</Button>
          <Button variant="contained" onClick={() => handleChord(acordesDeLaEscala[4])}>𝐕 {acordesDeLaEscala[4]}</Button>
          <Button variant="contained" onClick={() => handleChord(acordesDeLaEscala[5])}>𝐕𝐈 {acordesDeLaEscala[5]}</Button>
          <Button variant="contained" onClick={() => handleChord(acordesDeLaEscala[6])}>𝐕𝐈𝐈 {acordesDeLaEscala[6]}</Button>
        </Fragment>
    )
}

export default Acordes;
