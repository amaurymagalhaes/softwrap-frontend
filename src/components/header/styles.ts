import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  background-color: #1f2937;
  padding-left: 10%;
`;

export const Button = styled(Link)`
  color: #ffffff;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 20px;
  font-size: 15px;
  text-decoration: none;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 5px;
  padding-right: 5px;
  :hover {
    background-color: #111827;
    border-radius: 10px;
    cursor: pointer;
  }
`;
