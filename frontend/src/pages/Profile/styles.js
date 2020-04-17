import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 540px;
  margin: 25px auto;

  form {
    width: 100%;

    h1 {
      font-size: 32px;
      margin-bottom: 32px;
    }

    input {
      width: 100%;
      height: 44px;
      color: #333;
      border: 1px solid #dcdce6;
      border-radius: 8px;
      padding: 0 15px;
      margin: 10px 0 10px;

      &::placeholder {
        font-size: 14px;
      }
    }

    span {
      color: #cd0000;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    hr {
      border: 0;
      height: 1px;
      background: ${lighten(0.4, '#333')};
      margin: 20px 0 20px;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      width: 100%;
      background: #e02041;
      color: #fff;
      border: 0;
      border-radius: 8px;
      font-weight: 700;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${lighten(0.04, '#e02041')};
      }
    }
  }
  > button {
    margin: 5px 0 0;
    height: 44px;
    width: 100%;
    background: #3b9eff;
    color: #fff;
    border: 0;
    border-radius: 8px;
    font-weight: 700;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${lighten(0.04, '#3b9eff')};
    }
  }
`;
