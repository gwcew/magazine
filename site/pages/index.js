import Head from 'next/head'
import styles from '../styles/Home.module.css'
import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container'
import ToolBar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import Table from '@material-ui/core/Table'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import {SearchBar} from '../src/components/SearchBar'
import GridList from '@material-ui/core/GridList'
import {useEffect, useState} from 'react'
import {DATA_LANGS, LANG_ID_RU, LANG_ID_EN} from './language'
import _ from 'lodash'
import {useRouter} from 'next/router'
 
const PAGE_ID = "page_main"; 

export default function Home() {

  const [current_language_id, setLanguage] = useState(LANG_ID_RU);

  const handleClickSwitchLanguage = () => {
    if (current_language_id === LANG_ID_RU) {
      setLanguage(LANG_ID_EN);
    }
    else {
      setLanguage(LANG_ID_RU);
    }
  };

  const language = DATA_LANGS[current_language_id];

  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Main</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>  

      <AppBar position="static">
        <ToolBar> 
          <Grid   container
                  direction="row"
                  justify="space-between"
                  alignItems="center">
            <Grid item>
              <Typography variant="h4">
                {language[PAGE_ID]["title_page"]}
              </Typography>
            </Grid>
            <Grid item>
              <Button onClick={handleClickSwitchLanguage} variant="outlined" color="inherit">
                {language["language_id"]}
              </Button>
            </Grid>
          </Grid>
        </ToolBar>
      </AppBar>  

      <Grid container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={5}
            style={{padding: "100px"}}>
      
      {_.map(language, (key, item) => {
                  if (item.toString().includes("page_") && item.toString().includes("_main") === false) {
                    return <Grid item key={item}>
                      <Card>
                        <CardContent>
                          <Typography>
                            {language[item]["title_page"]}
                          </Typography>
                        </CardContent>
                      </Card>
                      </Grid>
                  }
                  else {
                    return null;
                  }
      })}
        
      </Grid>  
    </div>
  )
}
