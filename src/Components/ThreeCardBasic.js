import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import { useState } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import CssBaseline from '@mui/material/CssBaseline'
import * as React from 'react'
import TarotCard from './TarotCard'

const ThreeCardBasic = (props) => {
	const [cards, setCards] = useState([
		{ name: 'emptyCard', name_short: 'ec1' },
		{ name: 'emptyCard', name_short: 'ec2' },
		{ name: 'emptyCard', name_short: 'ec3' }
	])
	const threeCards = cards.map((card) => (
		<TarotCard
			key={card.name_short}
			card={card}
			span={4}
			width={'25vw'}
			height={'44vw'}
		/>
	))
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

export default ThreeCardBasic
