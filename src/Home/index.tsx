import {Container,Background, Title,Subtitle, Description, Button } from './styles'

export default function Home() {
    return (
      <Background>
      <Container>
        <Title>P Follio</Title>
        <Subtitle>I'm John Smith</Subtitle>
        <Description>Trabalho como desenvolvedor fullstack há quatro anos,
no qual colaboro com o desenvolvimento de módulos para portais (sites internos empresariais) com funcionalidades distintas. Para isso, trabalho realizando implementações no frontend, backend e banco de dados. Desde estruturação das tabelas, desenvolvimento do backend ao layout das telas, para entregar novas funcionalidades para o site.</Description>
        <Button>Lets Talk</Button>
      </Container>
    </Background>
    )
}