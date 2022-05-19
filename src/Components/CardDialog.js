import { useEffect, useRef, useState } from 'react'
import Dialog from '@mui/material/Dialog'
import * as React from 'react'
import Description from './Description'

const CardDialog = (props) => {
	const descriptionElementRef = useRef(null)
	useEffect(() => {
		if (props.dialogOpen) {
			const { current: descriptionElement } = descriptionElementRef
			if (descriptionElement !== null) {
				descriptionElement.focus()
			}
		}
	}, [props.dialogOpen])

	const handleDialogClose = () => {
		props.setDialogOpen(false)
		props.setExpanded(false)
		props.setDescription(null)
	}

	if (props.description) {
		return (
			<Dialog
				open={props.dialogOpen}
				onClose={handleDialogClose}
				scroll="body"
				aria-labelledby="card-dialog-title"
				aria-describedby="card-dialog-description"
				ref={descriptionElementRef}
				tabIndex={-1}
				id="center"
			>
				<Description
					description={props.description}
					setDescription={props.setDescription}
					expanded={props.expanded}
					setExpanded={props.setExpanded}
					done={handleDialogClose}
				/>
			</Dialog>
		)
	}
}

export default CardDialog
