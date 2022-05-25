import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import tarotDecks from '../tarotDecks'

const Deck = (props) => {
	const handleDeckChange = () => {
		const deckIndex = tarotDecks.findIndex((deck) => deck.name === props.name)
		props.setCurrentDeck(tarotDecks[deckIndex])
	}

	const imgList = props.cardPreviews.map((item) => {
		return (
			<img
				key={item.name_short}
				className="tarotCard"
				src={item.imageUrl}
				srcSet={item.imageUrl}
				alt={item.name}
				loading="lazy"
			/>
		)
	})
	const linkList = props.links.map((link) => {
		if (link.name === 'Select') {
			return (
				<Button
					key={link.name}
					size="medium"
					variant="outlined"
					disabled={props.name === props.currentDeck.name ? true : false}
					onClick={handleDeckChange}
					sx={{
						m: 1
					}}
				>
					{link.name}
				</Button>
			)
		} else {
			return (
				<Button
					key={link.name}
					target={link.url.slice(0, 4) === 'http' ? '_blank' : ''}
					href={link.url}
					size="medium"
					variant="outlined"
					sx={{
						m: 1
					}}
				>
					{link.name}
				</Button>
			)
		}
	})

	return (
		<Card className="displayCard" sx={{ p: 1 }}>
			<Typography variant="h5" sx={{ pb: 2 }}>
				{props.name}
			</Typography>
			<div className="imageList">{imgList}</div>
			<Typography sx={{ p: 2 }}>{props.description}</Typography>
			<div className="center">{linkList}</div>
		</Card>
	)
}

export default Deck
