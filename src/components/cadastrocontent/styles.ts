import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: 100%;
  h1 {
    font-size: 18px;
  }
  h2 {
    font-size: 14px;
    font-weight: normal;
    color: #6b7280;
  }
`;

export const InputsContainer = styled.div`
  background: #ffffff;
  margin-left: 50px;
`;

export const InputField = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 5px;
  h1 {
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 4px;
  }
  input {
    border: 1px solid #d1d5db;
    border-radius: 5px;
    padding: 5px;
    width: 200px;
  }
`;

export const InputFieldRow = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SubmitBar = styled.div`
  display: flex;
  flex-direction: row-reverse;
  background-color: #f9fafb;
  max-width: 100%;
  padding: 10px;
`;

export const SubmitButton = styled.button`
  padding: 10px;
  color: #ffffff;
  background-color: #4f46e5;
  border-radius: 5px;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  padding: 10px;
  color: #4338ca;
  background-color: #e0e7ff;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
`;
