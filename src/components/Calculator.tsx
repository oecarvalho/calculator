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

export function Calculator(){
    return(
        <Card className="flex flex-col gap-[1.625rem] w-[22.25rem] pt-14 px-8 pb-8">
            <CalculatorDisplay operation='1+1' result= '2'/>

            <div className="flex flex-col gap3">
                <div className="flex gap-3">
                    <Button className='w-16 h-16'>CE</Button>
                    <Button className='flex-1 h-16'>C</Button>
                    <Button variant="primary" className='w-16 h-16'>/</Button>
                </div>
                <div className="flex pt-4 gap-3">
                    <Button className='w-16 h-16'>7</Button>
                    <Button className='w-16 h-16'>8</Button>
                    <Button className='w-16 h-16'>9</Button>
                    <Button variant="primary" className='w-16 h-16'>X</Button>
                </div>
                <div className="flex pt-4 gap-3">
                    <Button className='w-16 h-16'>4</Button>
                    <Button className='w-16 h-16'>5</Button>
                    <Button className='w-16 h-16'>6</Button>
                    <Button variant="primary" className='w-16 h-16'>-</Button>
                </div>
                <div className="flex pt-4 gap-3">
                    <Button className='w-16 h-16'>1</Button>
                    <Button className='w-16 h-16'>2</Button>
                    <Button className='w-16 h-16'>3</Button>
                    <Button variant="primary" className='w-16 h-16'>+</Button>
                </div>
                    <div className="flex pt-4 gap-3">
                    <Button className='flex-1 h-16'>0</Button>
                    <Button className='w-16 h-16'>,</Button>
                    <Button variant="primary" className='w-16 h-16'>=</Button>
                </div>
            </div>
        </Card>
    )
}