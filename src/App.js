import React from 'react';
import styled from 'styled-components';
import TodoForm from "./components/TodoForm";
import TodoContainer from "./containers/TodoContainer";

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
         <TodoContainer/>
         <TodoForm/>
     </AppWrapper>
    )
};
export default App;
