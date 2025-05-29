export default function CalculationButton({onClick, onClear, onCalculate}) {
    return (
        <>
            <p>
                <button className='calculation-button gray-button' onClick={() => onClick('1')}>1</button>
                <button className='calculation-button gray-button' onClick={() => onClick('2')}>2</button>
                <button className='calculation-button gray-button' onClick={() => onClick('3')}>3</button>
                <button className='calculation-button orange-button' onClick={() => onClick('+')}>+</button>
            </p>

            <p>
                <button className='calculation-button gray-button' onClick={() => onClick('4')}>4</button>
                <button className='calculation-button gray-button' onClick={() => onClick('5')}>5</button>
                <button className='calculation-button gray-button' onClick={() => onClick('6')}>6</button>
                <button className='calculation-button orange-button' onClick={() => onClick('-')}>-</button>
            </p>

            <p>
                <button className='calculation-button gray-button' onClick={() => onClick('7')}>7</button>
                <button className='calculation-button gray-button' onClick={() => onClick('8')}>8</button>
                <button className='calculation-button gray-button' onClick={() => onClick('9')}>9</button>
                <button className='calculation-button orange-button' onClick={() => onClick('*')}>*</button>
            </p>

            <p>
                <button className='calculation-button gray-button' onClick={() => onClick('0')}>0</button>
                <button className='calculation-button gray-button' onClick={() => onClick('.')}>.</button>
                <button className='calculation-button gray-button' onClick={onCalculate}>=</button>
                <button className='calculation-button orange-button' onClick={() => onClick('/')}>/</button>
            </p>

            <button className="calculation-button gray-button clear-button" onClick={onClear}>Clear</button>
        </>
    )
}