import pamelaA from '../tarotDecks'
import ImageListItem from '@mui/material/ImageListItem'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'
import ImageList from '@mui/material/ImageList'
import { useState, useEffect } from 'react'

const Deck = () => {
	const pamelaAImgList = pamelaA.map((item) => {
		if (item.name) {
			return (
				<ImageListItem key={item.name_short}>
					<img
						style={{
							width: '80%'
						}}
						src={item.url}
						srcSet={item.url}
						alt={item.name}
						loading="lazy"
					/>
				</ImageListItem>
			)
		}
	})
	pamelaAImgList.shift()

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
					Rider-Waite-Smith
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
					{pamelaAImgList}
				</ImageList>
				<Typography sx={{ width: '80%' }} gutterBottom>
					The best known Tarot deck is the Rider-Waite-Smith deck. There are
					hundreds of others, but the images of the RWS Tarot are the ones which
					are instantly recognizable. Holly Voley has graciously scanned a set
					of vintage Tarot cards for sacred-texts, the earliest in her
					collection. These Tarot card images are unambiguously in the public
					domain in the United States, and differ only slightly from the US
					Games Tarot deck. This deck is the one known as the 'Pamela-A' deck
					with the dried mud pattern on the back of the cards.
				</Typography>
				<CardActions>
					<Button size="small">Sacred-Texts</Button>
					<Button size="small">Holly Voley</Button>
				</CardActions>
			</CardContent>
		</Card>
	)
}

export default Deck
