import { Container, Row } from "./style"
import { Quote } from "../../components/Quote"
import { Character } from "../../components/Character"
import { api } from "../../services/api"

function App() {

  api("characters/name").then( res => console.log(res))

  return (
    <Container>
      <Row>
        <Quote />
        <Character />
      </Row>
    </Container>
  )
}

export default App
