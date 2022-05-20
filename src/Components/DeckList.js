import Deck from './Deck'
import tarotDecks from '../tarotDecks'
import Container from '@mui/material/Container'

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
		<div>
			<Container id="deckList">{deckList}</Container>
		</div>
	)
}

export default DeckList
