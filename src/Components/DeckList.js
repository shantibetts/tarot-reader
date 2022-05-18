import Typography from '@mui/material/Typography'
import Deck from './Deck'
import tarotDecks from '../tarotDecks'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Title from './Title'

const DeckList = () => {
	const deckList = tarotDecks.map(
		({ name, description, links, cardPreviews }) => {
			return (
				<Grid item xs={12}>
					<Deck
						key={name}
						name={name}
						description={description}
						links={links}
						cardPreviews={cardPreviews}
					/>
				</Grid>
			)
		}
	)

	return (
		<div className="deckList">
			<Title title="Tarot Decks" text="" />
			<Container className="center">
				<Grid container spacing={2}>
					{deckList}
				</Grid>
			</Container>
		</div>
	)
}

export default DeckList
