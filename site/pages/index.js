import Head from 'next/head'
import styles from '../styles/Home.module.css'

import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container'
import ToolBar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cars</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <AppBar position="static">
          <ToolBar>
          </ToolBar>
        </AppBar>
      </Container>
    </div>
  )
}
