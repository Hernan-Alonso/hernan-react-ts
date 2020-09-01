import React,{FC} from 'react'
import Login from '../Login'
import {createGlobalStyle, ThemeProvider} from 'styled-components'

//css Global Aca
const GlobalStyle = createGlobalStyle`
    html{
        box-sizing: border-box;
    }
    *,
    *:after,
    *:before{
        box-sizing: inherit;
    }
    html,body{
        background: lightblue;
        width: 100%;
        height: 100%;
        font-family: "Roboto";
        margin: 0px;
        padding: 0px;
    }
`
const defaultTheme = {}

const App: FC = () => {
    return (
        <>
        <GlobalStyle />
        <ThemeProvider theme={{ ...defaultTheme }}>
            <Login />
        </ThemeProvider>
        </>
    )
}

export default App
