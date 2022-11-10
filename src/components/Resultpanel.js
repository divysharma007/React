export function Resultpanel({ curOperand, prevOperand }) {
	return (
		<div className='resultpanel'>
            <div className='prev-operand'>{prevOperand}</div>
			<div className='current-operand'>{curOperand}</div>
		</div>
	);
}