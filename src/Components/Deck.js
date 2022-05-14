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
		return <Button size="small">{link.name}</Button>
	})

	return (
		<Card sx={{ minWidth: 275 }}>
			<CardContent
				sx={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<Typography variant="h4" gutterBottom>
					{props.name}
				</Typography>
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
				<Typography sx={{ width: '80%' }} gutterBottom>
					{props.description}
				</Typography>
				<CardActions>{linkList}</CardActions>
			</CardContent>
		</Card>
	)
}

export default Deck
