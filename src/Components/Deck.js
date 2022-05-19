import ImageListItem from '@mui/material/ImageListItem'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'
import ImageList from '@mui/material/ImageList'

const Deck = (props) => {
	const imgList = props.cardPreviews.map((item) => {
		return (
			<img
				key={item.name_short}
				className="tarotCard"
				src={item.url}
				srcSet={item.url}
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
					disabled={true}
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
		<Card className="displayCard" sx={{ p: 1, my: 4 }}>
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
