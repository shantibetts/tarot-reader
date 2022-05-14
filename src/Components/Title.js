import Typography from '@mui/material/Typography'

const Title = (props) => {
	return (
		<div className="title">
			<br />
			<Typography variant="h2">{props.title}</Typography>
			<hr style={{ width: '60%' }} />
			<Typography variant="p">{props.text}</Typography>
			<hr style={{ width: '40%' }} />
			<br />
		</div>
	)
}

export default Title
