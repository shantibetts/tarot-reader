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
			<CardContent
				sx={{
					p: 1,
					m: 1,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<Typography variant="h5" sx={{ pb: 2 }}>
					{props.name}
				</Typography>
				<ImageList
					sx={{
						display: 'grid',
						gridTemplateColumns: '1fr 1fr',
						justifyContent: 'center',
						alignContent: 'center',
						m: 1
					}}
					cols={2}
					rowHeight="auto"
				>
					{imgList}
				</ImageList>
				<Typography sx={{ p: 2 }}>{props.description}</Typography>
				<CardActions>{linkList}</CardActions>
			</CardContent>
		</Card>
	)
}

export default Deck
