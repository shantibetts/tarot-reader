import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

const CardDialog = (props) => {
	const descriptionElementRef = React.useRef(null)
	React.useEffect(() => {
		if (props.DialogOpen) {
			const { current: descriptionElement } = descriptionElementRef
			if (descriptionElement !== null) {
				descriptionElement.focus()
			}
		}
	}, [props.DialogOpen])

	return (
		<div>
			<Button onClick={props.handleDialog}>Dialog</Button>
			<Dialog
				open={props.DialogOpen}
				onClose={handleClose}
				scroll="body"
				aria-labelledby="card-dialog-title"
				aria-describedby="card-dialog-description"
			>
				<DialogTitle id="card-dialog-title">Subscribe</DialogTitle>
				<DialogContent>
					<DialogContentText
						id="card-dialog-description"
						ref={descriptionElementRef}
						tabIndex={-1}
					>
						{[...new Array(50)]
							.map(
								() => `Cras mattis consectetur purus sit amet fermentum.
Cras justo odio, dapibus ac facilisis in, egestas eget quam.
Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
							)
							.join('\n')}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={props.handleDialog}>Done</Button>
				</DialogActions>
			</Dialog>
		</div>
	)
}

export default CardDialog
