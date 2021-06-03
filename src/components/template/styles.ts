import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`;

export const PageContext = styled.div`
  margin-top: 40px;
  display: flex;
`;

export const HeadTitle = styled.div`
  padding: 20px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
  background-color: #ffffff;
  padding-left: 10%;
  h1 {
    font-size: 24px;
    font-weight: 700;
  }
`;
