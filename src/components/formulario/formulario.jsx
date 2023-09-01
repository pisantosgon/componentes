import {Box, Button, Checkbox, Container, FormControlLabel, Grid, Link, TextField, Typography} from '@mui/material'
import React from 'react'

function Formulario() {
  return (
    <Container component="main" maxWidth="xs">
    <Box sx={{
        marginTop:8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    }}
    >
        <Typography  component="h2" variant="h">
        Formulario de login
        </Typography>
        <Box component="form" sx={{mt:1}}>
            <TextField fullWidth label="email" name="email" variant="filled" />
            <TextField fullWidth label="senha" type="password" variant="filled" />
            <FormControlLabel 
            control={<Checkbox value="remenber" color="primary"/>}
            label="lembrar-me "/>
            <Button fullWidth type="submit" variant="contained" sx={{mt: 4, mb: 2 }}> login</Button>
            <Grid container>
              <Grid item xs>
                <Link href="#">Esqueci minha senha</Link>
              </Grid>
              <Grid item>
              <Link href="#">cadastre-se</Link>
              </Grid>

            </Grid>
        </Box>
    </Box>
    </Container>
  )
}

export default Formulario