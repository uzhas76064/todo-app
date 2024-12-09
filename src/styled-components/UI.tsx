import styled from "styled-components";

export const AppWrapper = styled.div`
    max-width: 650px;
    margin: 20% auto;
    padding: 25px 50px 13px 50px;
    background: rgba(255, 255, 255, 0.67);
    border-radius: 8px;
`;

export const Input = styled.input`
    display: block;
    width: 100%;
    background: inherit;
    border-top: none;
    border-left: none;
    border-right: none;
    outline: none;
    border-bottom: 1px solid;
    color: rgba(0, 0, 0, 0.4);
    font-family: Roboto, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    margin-top: 60px;
`;

export const Buttons = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 14px;
    outline: none;
    border: none;
`;

export const Button = styled.button`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 19px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
    border: none;
    border-radius: 8px;
    cursor: pointer;
`;

export const ButtonNew = styled(Button)`
    background: #FFFFFF;
    padding: 11px 37px 10px 35px;
`;

export const FilterButtons = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
`;

export const FilterButton = styled.button<{ active: boolean }>`
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 20px;
  padding: 10px 20px;
  cursor: pointer;
  background-color: ${({ active }) => (active ? "#6a1b9a" : "#ffffff")};
  color: ${({ active }) => (active ? "#ffffff" : "#6a1b9a")};
  box-shadow: ${({ active }) => (active ? "0 4px 10px rgba(0, 0, 0, 0.2)" : "none")};
  transition: all 0.3s;

  &:hover {
    background-color: ${({ active }) => (active ? "#4a148c" : "#f3e5f5")};
    color: ${({ active }) => (active ? "#ffffff" : "#6a1b9a")};
  }
`;

export const Line = styled.hr`
    width: 10%;
    border: none;
    margin-left: 0;
    color: rgba(0,0,0,0.5);
    height: 1px;
    background-color: rgba(0,0,0,0.5);
`;

export const ListItem = styled.div`
    font-family: Roboto,sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    cursor: pointer;
`;