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


export default function pageCars() {
    return <div>
        <Head>
            <title>Cars</title>
        </Head>
    </div>;
};