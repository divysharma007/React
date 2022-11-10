export function Operation({ char , func }) {
    return <button className='operation' onClick={func} >{char}</button>;
}
