import Army from '../classes/army'

const Result: React.FC = () => {
	const amount = parseInt((document.getElementById('amount') as HTMLInputElement).value)
	const army = new Army(amount)
	return (
		<div>{army.show()}</div>
	)
}

export default Result