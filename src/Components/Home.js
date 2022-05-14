import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'
import Deck from './Deck'
import tarotDecks from '../tarotDecks'
import Title from './Title'

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
						{ name: 'More Info', url: '' }
					]}
					cardPreviews={cardPreviews}
				/>
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
		</div>
	)
}

export default Home
