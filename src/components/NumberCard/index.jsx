import {Container} from './styles'

export default function NumberCard({number}) {
    if(number == '0'){
        return (
            <Container background={'transparent'}>
                
            </Container>
        )
    }
    return(
        <Container>
            {number}
        </Container>
    )
}