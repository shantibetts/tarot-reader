import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import * as React from 'react'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Collapse from '@mui/material/Collapse'
import Divider from '@mui/material/Divider'

const Description = (props) => {
	const handleExpandClick = () => {
		props.setExpanded(!props.expanded)
	}

	if (props.description.name !== 'emptyCard') {
		return (
			<Container maxWidth="md" id="desc" sx={{ px: 0, py: 4 }}>
				<CssBaseline />
				<Typography variant="h4" sx={{ pt: 2 }}>
					{props.description.positionName}
				</Typography>
				<Typography variant="body1" sx={{ py: 4 }}>
					{props.description.positionDescription}
				</Typography>
				<Divider variant="middle" className="smallDivider" />

				<Typography variant="h4" sx={{ py: 2 }}>
					{props.description.name}
				</Typography>
				<Typography variant="body1" sx={{ py: 2 }}>
					{props.description.meaning_up}
				</Typography>
				<Collapse
					in={props.expanded}
					timeout="auto"
					unmountOnExit
					sx={{ p: 0 }}
				>
					<Divider variant="middle" />
					<Typography variant="body1" sx={{ py: 2 }}>
						{props.description.desc}
					</Typography>
				</Collapse>
				<Button
					expand={props.expanded ? 'true' : undefined}
					onClick={handleExpandClick}
					aria-expanded={props.expanded}
					aria-label="show more"
					size="small"
					sx={{ mb: 4, alignSelf: 'right' }}
				>
					{props.expanded ? 'Read Less' : 'Read More'}
				</Button>
				<Container>
					<Button
						onClick={() => props.done}
						size="medium"
						variant="outlined"
						sx={{ m: 1 }}
					>
						Done
					</Button>
				</Container>
			</Container>
		)
	} else {
		return (
			<Container maxWidth="sm" id="desc" sx={{ px: 0, py: 4 }}>
				<CssBaseline />
				<Typography variant="h4" sx={{ pt: 2, pb: 4 }}>
					{props.description.positionName}
				</Typography>
				<Typography variant="body1" sx={{ pb: 2 }}>
					{props.description.positionDescription}
				</Typography>
				<Button
					onClick={() => props.setDescription(null)}
					size="medium"
					variant="outlined"
				>
					Done
				</Button>
			</Container>
		)
	}
}

export default Description
