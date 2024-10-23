import {styled, createGlobalStyle} from "styled-components";

const BlueButton = styled.button`
    background-color: blue;
    color: white;
`;

const BigBlueButton = styled(BlueButton)`
    width: 300px;
    padding: 20px;
`;
const BigTextBigBlueButton = styled(BigBlueButton)`
    font-size: 40px;
    font-weight: 900;
`;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: grid;
    place-items: center;
`;

const PropsButton = styled.button`
    background-color: ${props => props.backgroundColor || "white"};
    color: ${props => props.textColor || "black"};
    padding: ${props => props.padding || 0};
    border-radius: ${props => props.radius || 0};
`;
const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <Container>
                <BlueButton>파란색버튼</BlueButton>
                <BigBlueButton>큰 파란색버튼</BigBlueButton>
                <BigTextBigBlueButton>글자도큰파란색버튼</BigTextBigBlueButton>
                <PropsButton
                    backgroundColor="green"
                    textColor="#fff"
                >
                    props button
                </PropsButton>
            </Container>
        </>
    );
}

export default App;
