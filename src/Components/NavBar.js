import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Link as RouterLink } from 'react-router-dom'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Slide from '@mui/material/Slide'
import CssBaseline from '@mui/material/CssBaseline'

const NavBar = () => {
	const [anchorEl, setAnchorEl] = React.useState(null)
	const open = Boolean(anchorEl)
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}

	const trigger = useScrollTrigger()

	return (
		<React.Fragment>
			<CssBaseline />
			<Slide appear={false} direction="down" in={!trigger}>
				<Box sx={{ flexGrow: 1 }}>
					<AppBar position="fixed">
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
								<MenuItem onClick={handleClose} component={RouterLink} to="/">
									Home
								</MenuItem>
								<MenuItem
									onClick={handleClose}
									component={RouterLink}
									to="/decks"
								>
									Decks
								</MenuItem>
								<MenuItem
									onClick={handleClose}
									component={RouterLink}
									to="/threecardspread"
								>
									Three Card Spread
								</MenuItem>
								<MenuItem
									onClick={handleClose}
									component={RouterLink}
									to="/fivecardspread"
								>
									Five Card Spread
								</MenuItem>
								<MenuItem
									onClick={handleClose}
									component={RouterLink}
									to="/about"
								>
									About
								</MenuItem>
							</Menu>
							<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
								Tarot Reader
							</Typography>
						</Toolbar>
					</AppBar>
					<Toolbar />
				</Box>
			</Slide>
		</React.Fragment>
	)
}

export default NavBar
