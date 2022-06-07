import { Author, Button, Container, Phrase } from './style'

export function Quote() {
    return (
        <Container>
          <Phrase>"*to Orochimaru* This is no time to reminisce, you're an S-class criminal
        , top of the most wanted list. You've got to be taken down, and it's only
         fitting that I'm the one to do it. 'Cause after all, you're the one that
          taught me everything, right, Sensei?"</Phrase>
          <Author>Anko Mitarashi</Author>
          <Button type='button'>Próxima Frase</Button>        
        </Container>
    )
}