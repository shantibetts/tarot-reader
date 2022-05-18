import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'
import Deck from './Deck'
import tarotDecks from '../tarotDecks'
import Title from './Title'
import readingConfigs from '../readingConfigs'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { Link as RouterLink } from 'react-router-dom'
import Grid from '@mui/material/Grid'

const Home = () => {
	const deckList = tarotDecks.map(
		({ name, descriptionShort, cardPreviews }) => {
			return (
				<Deck
					key={name}
					name={name}
					description={descriptionShort}
					links={[
						{ name: 'Select', url: '' },
						{ name: 'More Info', url: '/decks' }
					]}
					cardPreviews={cardPreviews}
				/>
			)
		}
	)
	const readingList = readingConfigs().map(
		({ name, path, description, imageUrl, imageAlt }) => {
			return (
				<Card key={name} className="displayCard" sx={{ p: 1, my: 4 }}>
					<CardContent>
						<Typography gutterBottom variant="h5" sx={{ pt: 2 }}>
							{name}
						</Typography>
						<img src={imageUrl} alt={imageAlt} className="readingPreview" />
						<Typography variant="body" sx={{ px: 2 }}>
							{description}
						</Typography>
					</CardContent>
					<CardActions className="center">
						<Button
							size="medium"
							variant="outlined"
							component={RouterLink}
							to={path}
							sx={{ my: 2 }}
						>
							Go to Reading
						</Button>
					</CardActions>
				</Card>
			)
		}
	)
	return (
		<div className="home">
			<Title
				title="Welcome"
				text="Choose a deck and a reading layout to get started"
			/>
			<Container>
				<Grid container spacing={2}>
					<Grid item xs={12} md={6}>
						{deckList}
					</Grid>
					<Grid item xs={12} md={6}>
						{readingList}
					</Grid>
				</Grid>
			</Container>
		</div>
	)
}

export default Home
