import { useState } from 'react';
import './App.css'
import CalculationButton from './CalculationButton'
import Display from './Display'

export default function App() {
    const [calculation, setCalculation] = useState(localStorage.getItem('calculation') || '');

    const handleClick = (value) => {
        const newCalculation = calculation + value;
        setCalculation(newCalculation);
        localStorage.setItem('calculation', newCalculation);
    }

    const handleClear = () => {
        setCalculation('');
        localStorage.removeItem('calculation', calculation);
    }

    const handleCalculate = () => {
        const result = eval(calculation);
        setCalculation(result);
        localStorage.setItem('calculation', result);
    }

    return (
        <>
            <h1 className='title'>Calculator</h1>
            <Display display={calculation}/>
            <CalculationButton onClick={handleClick} onClear={handleClear} onCalculate={handleCalculate}/>
        </>
    )
}
