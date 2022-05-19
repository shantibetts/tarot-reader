import { useEffect, useRef, useState } from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import * as React from 'react'
import Typography from '@mui/material/Typography'
import Collapse from '@mui/material/Collapse'
import Divider from '@mui/material/Divider'

const CardDialog = (props) => {
	const [expanded, setExpanded] = useState(false)

	const descriptionElementRef = useRef(null)
	useEffect(() => {
		if (props.dialogOpen) {
			const { current: descriptionElement } = descriptionElementRef
			if (descriptionElement !== null) {
				descriptionElement.focus()
			}
		}
	}, [props.dialogOpen])

	const handleExpandClick = () => {
		setExpanded(!expanded)
	}

	const handleDialogClose = () => {
		props.setDialogOpen(false)
		setExpanded(false)
	}

	const card = props.readingCards.reading[props.readingCards.index - 1]

	if (card) {
		return (
			<Dialog
				open={props.dialogOpen}
				onClose={handleDialogClose}
				scroll="body"
				aria-labelledby="card-dialog-title"
				aria-describedby="card-dialog-description"
				ref={descriptionElementRef}
				tabIndex={-1}
			>
				<Container id="cardDialog" sx={{ px: 1, py: 4 }}>
					<CssBaseline />
					<Typography variant="h4" sx={{ pt: 2 }}>
						{card.positionName}
					</Typography>
					<Typography variant="body1" sx={{ py: 4 }}>
						{card.positionDescription}
					</Typography>
					<img className="tarotCard" src={card.url} alt={card.name} />
					<Typography variant="h4" sx={{ py: 2 }}>
						{card.name}
					</Typography>
					<Typography variant="body1" sx={{ py: 2 }}>
						{card.meaning_up}
					</Typography>
					<Collapse in={expanded} timeout="auto" unmountOnExit sx={{ p: 0 }}>
						<Divider variant="middle" />
						<Typography variant="body1" sx={{ py: 2 }}>
							{card.desc}
						</Typography>
					</Collapse>
					<Button
						expand={expanded ? 'true' : undefined}
						onClick={handleExpandClick}
						aria-expanded={expanded}
						aria-label="show more"
						size="small"
						sx={{ mb: 4, alignSelf: 'right' }}
					>
						{expanded ? 'Read Less' : 'Read More'}
					</Button>
					<Container>
						<Button
							onClick={handleDialogClose}
							size="medium"
							variant="outlined"
							sx={{ m: 1 }}
						>
							Done
						</Button>
					</Container>
				</Container>
			</Dialog>
		)
	}
}

export default CardDialog
