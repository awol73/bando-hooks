import React from 'react'

import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

const AbriendoCerrando = ({stCerrar, handleCerrar}) => {

    return (
        <FormGroup row>
            <FormControlLabel
                control={
                    <Switch 
                        checked={stCerrar.cerrando} 
                        onChange={handleCerrar} 
                        name="cerrando"
                        color="primary" 
                    />
                }
                label={stCerrar.cerrando ? "Cerrando" : "Abriendo"}
                labelPlacement="top"
            />
        </FormGroup>
    );
}

export default AbriendoCerrando;