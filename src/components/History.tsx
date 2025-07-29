import { Card } from "./Card"
import { Text } from "./Text"

export function History(){
    return(
        <Card className="py-10 px-8 text-[var(--text)]">
            <Text as='h1' variant="heading" className="mb-4">
                Histórico de Operações
            </Text>

            <ul className="flex flex-col gap-3">
                <Text as='li'>1+1 = 2</Text>
                <Text as='li'>2+3+1 = 6</Text>
                <Text as='li'>2+3 = 5</Text>
            </ul>
        </Card>
    )
}