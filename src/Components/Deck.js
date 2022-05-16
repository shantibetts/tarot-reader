import ImageListItem from '@mui/material/ImageListItem'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'
import ImageList from '@mui/material/ImageList'
import { Link as RouterLink } from 'react-router-dom'

const Deck = (props) => {
	const imgList = props.cardPreviews.map((item) => {
		return (
			<ImageListItem key={item.name_short}>
				<img
					style={{
						width: '150px'
					}}
					src={item.url}
					srcSet={item.url}
					alt={item.name}
					loading="lazy"
				/>
			</ImageListItem>
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
				>
					{link.name}
				</Button>
			)
		}
	})

	return (
		<Card sx={{ minWidth: 275 }}>
			<br />
			<Typography variant="h5" gutterBottom>
				{props.name}
			</Typography>
			<CardContent
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<ImageList
					sx={{
						display: 'grid',
						gridTemplateColumns: '1fr 1fr',
						justifyContent: 'center',
						alignContent: 'center'
					}}
					cols={2}
					rowHeight="auto"
				>
					{imgList}
				</ImageList>

				<br />
				<Typography sx={{ width: '80%' }} gutterBottom>
					{props.description}
				</Typography>
				<br />
				<CardActions>{linkList}</CardActions>
			</CardContent>
			<br />
		</Card>
	)
}

export default Deck
