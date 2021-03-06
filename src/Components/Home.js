import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import Deck from './Deck'
import tarotDecks from '../tarotDecks'
import Title from './Title'
import readingConfigs from '../readingConfigs'
import Typography from '@mui/material/Typography'
import { Link as RouterLink } from 'react-router-dom'

const Home = (props) => {
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
					currentDeck={props.currentDeck}
					setCurrentDeck={props.setCurrentDeck}
				/>
			)
		}
	)
	const readingList = readingConfigs().map(
		({ name, path, description, imageUrl, imageAlt }) => {
			return (
				<Card key={name} className="displayCard" sx={{ p: 2 }}>
					<Typography gutterBottom variant="h5">
						{name}
					</Typography>
					<img
						src={imageUrl}
						alt={imageAlt}
						className="readingPreview"
						sx={{ py: 2 }}
					/>
					<Typography variant="body" sx={{ p: 2 }}>
						{description}
					</Typography>
					<Button
						size="medium"
						variant="outlined"
						component={RouterLink}
						to={path}
						sx={{ my: 2, maxWidth: 'fit-content', justifySelf: 'center' }}
					>
						Go to Reading
					</Button>
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
			<div className="listDisplay">
				<div className="smallListDisplay cardList">{deckList}</div>
				<div className="smallListDisplay cardList">{readingList}</div>
			</div>
		</div>
	)
}

export default Home
