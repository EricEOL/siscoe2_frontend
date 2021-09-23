import styled from 'styled-components';

export const ContainerBackground = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme.background};
    
    width: 100vw;
    height: 100vh;
`;