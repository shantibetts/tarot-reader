import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Link } from 'react-router-dom'

const NavBar = () => {
	const [anchorEl, setAnchorEl] = React.useState(null)
	const open = Boolean(anchorEl)
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<IconButton
						size="large"
						edge="start"
						color="inherit"
						aria-label="menu"
						sx={{ mr: 2 }}
						aria-controls={open ? 'basic-menu' : undefined}
						aria-haspopup="true"
						aria-expanded={open ? 'true' : undefined}
						onClick={handleClick}
					>
						<MenuIcon />
					</IconButton>
					<Menu
						id="basic-menu"
						anchorEl={anchorEl}
						open={open}
						onClose={handleClose}
						MenuListProps={{
							'aria-labelledby': 'basic-button'
						}}
					>
						<Link to={'/'}>
							<MenuItem onClick={handleClose}>Home</MenuItem>
						</Link>
						<Link to={'/decks'}>
							<MenuItem onClick={handleClose}>Decks</MenuItem>
						</Link>
						<Link to={'/threecardbasic'}>
							<MenuItem onClick={handleClose}>
								Three Card Basic Reading
							</MenuItem>
						</Link>
						<Link to={'/about'}>
							<MenuItem onClick={handleClose}>About</MenuItem>
						</Link>
					</Menu>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						Tarot Reader
					</Typography>
				</Toolbar>
			</AppBar>
		</Box>
	)
}

export default NavBar
