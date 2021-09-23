import styled from 'styled-components';
import { ContainerBackground } from '../components/ContainerBackground';
import { ContainerLogin } from '../components/ContainerLogin';

export default function Home() {
  return (
    <ContainerBackground>
      <ContainerLogin>
        <Image />
      </ContainerLogin>
    </ContainerBackground>
  )
}

const Image = styled.div`
  background-image: url('/assets/paisagemdcmun.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 8px 0 0 8px;
  width: 50%;
  height: 100%;
`