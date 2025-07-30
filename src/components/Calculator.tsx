import { Card } from "./Card";
import { Text } from "./Text";
import { Button } from "./Button";

function CalculatorDisplay({operation, result}){
    return(
        <div className="flex flex-col gap-2 px-[1.375rem] cursor-default select-none">
            <Text as='div' variant="muted" className='flex items-center justify-end'>
                {operation}
            </Text>

            <div className="flex items-center justify-between">
                    <Text variant="muted">=</Text>
                    <Text variant="blast" className="text-[var(--text)]">{result}</Text>
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

    function handleInputClick(input){
        console.log(input)
    }

    return(
        <Card className="flex flex-col gap-[1.625rem] w-[22.25rem] pt-14 px-8 pb-8">
            <CalculatorDisplay operation='1+1' result= '2'/>

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