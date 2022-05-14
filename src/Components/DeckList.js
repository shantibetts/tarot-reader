import Typography from '@mui/material/Typography'
import Deck from './Deck'
import tarotDecks from '../tarotDecks'

const DeckList = () => {
	const deckList = tarotDecks.map(
		({ name, description, links, cardPreviews }) => {
			return (
				<Deck
					key={name}
					name={name}
					description={description}
					links={links}
					cardPreviews={cardPreviews}
				/>
			)
		}
	)

	return (
		<div className="deckList">
			<br />
			<Typography variant="h2">Tarot Decks</Typography>
			<hr style={{ width: '60%' }} />
			<br />
			{deckList}
		</div>
	)
}

export default DeckList
