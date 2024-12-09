import styled from 'styled-components';
import Todos from "./components/Todos.tsx";

const AppWrapper = styled.div`
    max-width: 650px;
    margin: 20% auto;
    padding: 25px 50px 13px 50px;
    background: rgba(255, 255, 255, 0.67);
    border-radius: 8px;
`;

const App = () => {
    return (
        <AppWrapper>
            <Todos />
        </AppWrapper>
    );
};

export default App;

