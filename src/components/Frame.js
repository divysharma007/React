import { Resultpanel } from "./Resultpanel";
import { Operationspanel } from "./OperationsPanel";
import { useState } from "react"
export function Frame() {
    const [curOperand, setCurOperand] = useState("");
    const[prevOperand, setPrevOperand] = useState("");
    return (
			<div className='frame'>
				<Resultpanel curOperand={curOperand} prevOperand={prevOperand} />
				<Operationspanel
					curOperand={curOperand}
					setCurOperand={setCurOperand}
					prevOperand={prevOperand}
					setPrevOperand={setPrevOperand}
				/>
			</div>
		);

}