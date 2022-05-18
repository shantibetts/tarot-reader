import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'
import Deck from './Deck'
import tarotDecks from '../tarotDecks'
import Title from './Title'
import readingConfigs from '../readingConfigs'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import { Link as RouterLink } from 'react-router-dom'
import Container from '@mui/material/Container'

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
		({ name, description, imageUrl, imageAlt }) => {
			return (
				<Card key={name} maxWidth="xs">
					<br />
					<Typography gutterBottom variant="h5" component="div">
						{name}
					</Typography>
					<br />
					<CardMedia
						component="img"
						height="140"
						image={imageUrl}
						alt={imageAlt}
					/>
					<CardContent>
						<Typography variant="body">{description}</Typography>
					</CardContent>
					<br />
					<CardActions>
						<Container>
							<Button
								size="medium"
								variant="outlined"
								component={RouterLink}
								to="/threecardbasic"
							>
								Go to Reading
							</Button>
						</Container>
					</CardActions>
					<br />
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
			{deckList}
			<br />
			{readingList}
		</div>
	)
}

export default Home
