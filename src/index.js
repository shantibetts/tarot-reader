import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { HashRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/'
import { createTheme } from '@mui/material/styles'
import { blueGrey } from '@mui/material/colors'

const theme = createTheme({
	palette: {
		primary: {
			main: blueGrey[500]
		}
	}
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<HashRouter>
				<App sx={{ minWidth: '330px' }} />
			</HashRouter>
		</ThemeProvider>
	</React.StrictMode>
)
