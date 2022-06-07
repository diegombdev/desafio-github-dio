import { Container } from './style'
import characters from "../../assets/character/character.json"

export function Character() {
   
    return (
        <Container>
          <img src={`./src/assets/character/${characters[9].image}`} alt={`Imagem do ${characters[9].name}`} />          
          {/* <img src="./src/assets/smoke.gif" alt="Imagem fumaça" /> */}
        </Container>
    )
}