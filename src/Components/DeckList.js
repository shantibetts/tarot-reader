import Deck from './Deck'
import tarotDecks from '../tarotDecks'
import Container from '@mui/material/Container'

const DeckList = (props) => {
	const deckList = tarotDecks.map(
		({ name, description, links, cardPreviews }) => {
			return (
				<Deck
					key={name}
					name={name}
					description={description}
					links={links}
					cardPreviews={cardPreviews}
					currentDeck={props.currentDeck}
					setCurrentDeck={props.setCurrentDeck}
				/>
			)
		}
	)

	return (
		<div>
			<Container id="deckList">{deckList}</Container>
		</div>
	)
}

export default DeckList
