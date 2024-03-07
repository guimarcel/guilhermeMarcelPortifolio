import {Container,Background, Title,Subtitle, Description, ContainerImage } from './styles'
import myPic from '../../public/background_complete.jpeg';

export default function Home() {
    return (

      <Background>
      <Container>
        <Title>Meu Portifólio</Title>
        <Subtitle>Olá, Sou o Guilherme também conhecido como Marcel.</Subtitle>
        <Description>Trabalho como desenvolvedor fullstack há quatro anos,
no qual colaboro com o desenvolvimento de módulos para portais (sites internos empresariais) com funcionalidades distintas. Para isso, trabalho realizando implementações no frontend, backend e banco de dados. Desde estruturação das tabelas, desenvolvimento do backend ao layout das telas, para entregar novas funcionalidades para o site.</Description>
      </Container>
      <ContainerImage>
      <img src="../../public/background.png" alt="MinhaFoto" />

      </ContainerImage>

    </Background>
    )
}