import { Operation } from "./Operation";
export function Operationspanel({
	curOperand,
	setCurOperand,
	prevOperand,
	setPrevOperand,
}) {
	function appendCurOperand(char) {
		setCurOperand(curOperand + char);
	}
	function popCurOperand() {
		setCurOperand(curOperand.slice(0, -1));
	}
	function clearCurOperand() {
		setCurOperand("");
		setPrevOperand("");
	}

	function mathOperation(operation) {
		switch (operation) {
			case "*":
                (curOperand != "")
					? setPrevOperand(eval(prevOperand + curOperand) + "*")
					: setPrevOperand(prevOperand.slice(0, -1) + "*");
				setCurOperand("");
				break;
			case "/":
				curOperand != ""
					? setPrevOperand(eval(prevOperand + curOperand) + "/")
					: setPrevOperand(prevOperand.slice(0, -1) + "/");
				setCurOperand("");
				break;
			case "+":
				curOperand != ""
					? setPrevOperand(eval(prevOperand + curOperand) + "+")
					: setPrevOperand(prevOperand.slice(0, -1) + "+");
				setCurOperand("");
				break;
			case "-":
				curOperand != ""
					? setPrevOperand(eval(prevOperand + curOperand) + "-")
					: setPrevOperand(prevOperand.slice(0, -1) + "-");
				setCurOperand("");
				break;
			case ".":
				setCurOperand(curOperand + ".");
				break;
			case "=":
				setCurOperand(eval(prevOperand + curOperand));
				setPrevOperand("");
				break;
			default:
		}
	}
	return (
		<div className='operationspanel'>
			<div className='operationsrow'>
				<Operation char='AC' func={() => clearCurOperand("1")} />
				<Operation char='DEL' func={() => popCurOperand()} />
				<Operation char='/' func={() => mathOperation("/")} />
			</div>
			<div className='operationsrow'>
				<Operation char='1' func={() => appendCurOperand("1")} />
				<Operation char='2' func={() => appendCurOperand("2")} />
				<Operation char='3' func={() => appendCurOperand("3")} />
				<Operation char='*' func={() => mathOperation("*")} />
			</div>
			<div className='operationsrow'>
				<Operation char='4' func={() => appendCurOperand("4")} />
				<Operation char='5' func={() => appendCurOperand("5")} />
				<Operation char='6' func={() => appendCurOperand("6")} />
				<Operation char='+' func={() => mathOperation("+")} />
			</div>
			<div className='operationsrow'>
				<Operation char='7' func={() => appendCurOperand("7")} />
				<Operation char='8' func={() => appendCurOperand("8")} />
				<Operation char='9' func={() => appendCurOperand("9")} />
				<Operation char='-' func={() => mathOperation("-")} />
			</div>
			<div className='operationsrow'>
				<Operation char='.' func={() => mathOperation(".")} />
				<Operation char='0' func={() => appendCurOperand("0")} />
				<Operation char='=' func={() => mathOperation("=")} />
			</div>
		</div>
	);
}
