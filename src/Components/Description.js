import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import CssBaseline from '@mui/material/CssBaseline'
import * as React from 'react'
import Typography from '@mui/material/Typography'

const Description = (props) => {
	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth="sm">
				<br />
				<hr style={{ width: '60%' }} />
				<Typography variant="h4">{props.titleTop}</Typography>
				<Typography variant="p" gutterBottom>
					{props.textTop}
				</Typography>
				<hr style={{ width: '40%' }} />
				<br />
				<Typography variant="h4">{props.titleBottom}</Typography>
				<Typography variant="p">{props.textBottom}</Typography>
				<hr style={{ width: '60%' }} />
				<br />
			</Container>
		</React.Fragment>
	)
}

export default Description
