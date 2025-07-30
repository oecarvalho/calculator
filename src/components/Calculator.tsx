import { Card } from "./Card";
import { Text } from "./Text";
import { Button } from "./Button";
import { useState } from "react";

function CalculatorDisplay({operation, result}){
    return(
        <div className="flex flex-col gap-2 px-[1.375rem] cursor-default select-none">
            <Text as='div' variant="muted" className='flex items-center justify-end h-7'>
                {result && operation}
            </Text>

            <div className="flex items-center justify-between h-9">
                    <Text variant="muted">=</Text>
                    <Text variant="blast" className="text-[var(--text)]">{result || operation}</Text>
            </div>
        </div>
    )
}

const buttons = [
    [
        {input: 'CE'},
        {input: 'C', className: 'flex-1 h-16'},
        {input: '/', variant: 'primary'}
    ],
    [
        {input: '7'},
        {input: '8'},
        {input: '9'},
        {input: 'X', variant: 'primary'}
    ],
    [
        {input: '4'},
        {input: '5'},
        {input: '6'},
        {input: '-', variant: 'primary'}
    ],
        [
        {input: '1'},
        {input: '2'},
        {input: '3'},
        {input: '+', variant: 'primary'}
    ],
    [
        {input: '0', className: 'flex-1 h-16'},
        {input: ','},
        {input: '=', className: 'w-16 h-16 bg-[#7F45E2]'}
    ],

    
]

export function Calculator(){
    const [operation, setOperation] = useState('')
    const [result, setResult] = useState('')

    function handleInputClick(input){
        if(input === 'C'){
            setOperation('')
            setResult('')
            return;
        }

        if(input === 'CE'){
            setResult('')
            setOperation(operation.slice(0, -2))
            return;
        }

        if(input === '='){
            const operationResult = eval(operation.replace(/,/g, '.'))
            const parsedResult = operationResult.toString()?.replace(/\./g, ',')
            setResult(parsedResult)
            return;
        }

        if(result){
            setOperation(isNaN(input) ? `${result}${input === ',' ? '' : ''}` : input)
            setResult('')
            return;
        }

        if(input === ',' && !operation.endsWith(',')){
            setOperation(`${operation},`)
            return;
        }

        setOperation(`${operation}${operation.endsWith(',') ? '': ' '}${input}`)
    }

    return(
        <Card className="flex flex-col gap-[1.625rem] w-[22.25rem] pt-14 px-8 pb-8">
            <CalculatorDisplay operation={operation} result={result}/>

            <div className="flex flex-col gap3">
                {
                    buttons.map((row, index) => 
                        <div key={`row-${index}`} className="flex gap-3 pt-4">
                            {row.map(button => (
                                <Button 
                                    key={button.input} 
                                    className={button.className || 'w-16 h-16'}
                                    variant={button.variant}
                                    onClick={ ()=> handleInputClick(button.input)}
                                    >
                                        {button.input}
                                </Button>
                            ))}
                        </div>
                    )
                }
            </div>
        </Card>
    )
}