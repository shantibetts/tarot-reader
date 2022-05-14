import Typography from '@mui/material/Typography'
import Deck from './Deck'

const DeckList = () => {
	return (
		<div className="deckList">
			<br />
			<Typography variant="h2">Tarot Decks</Typography>
			<hr style={{ width: '60%' }} />
			<br />
			<Deck />
		</div>
	)
}

export default DeckList
