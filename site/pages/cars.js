import Head from 'next/head'
import styles from '../styles/Home.module.css'

import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container'
import ToolBar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import Table from '@material-ui/core/Table'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import {SearchBar} from '../src/components/SearchBar'


export default function () {
    return <div>
        <Head>
            <title>Cars</title>
        </Head>

        <AppBar position="static" >
          <ToolBar>
            <Grid container direction="row" justify="space-between" alignItems="center">
              <Grid item xs={6}>
                <Typography variant="h4">
                  Car magazine
                </Typography>
              </Grid>
              <Grid item> 
              <SearchBar placeholder="Search..."></SearchBar>
              </Grid>
              <Grid item>
                <Button color="inherit" variant="outlined">
                  Login
                </Button>
              </Grid>
            </Grid>
          </ToolBar>
        </AppBar>

        <Container>

        </Container>
    </div>;
};