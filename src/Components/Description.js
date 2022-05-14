import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import { useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import CssBaseline from '@mui/material/CssBaseline'
import * as React from 'react'

const Description = (props) => {
	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth="sm">
				<Grid container spacing={2}>
					{threeCards}
				</Grid>
			</Container>
		</React.Fragment>
	)
}

export default Description
