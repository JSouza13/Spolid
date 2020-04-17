import { darken } from 'polished';
import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1120px;
  height: 100vh;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  .content {
    width: 100%;
    padding: 96px;
    background: #f0f0f5;
    box-shadow: 0 0 100px rgba(0, 0, 0, 0.1);
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  section {
    width: 100%;
    max-width: 350px;
    margin-right: 30px;

    img {
      max-width: 350px;
    }

    h1 {
      margin: 64px 0 32px;
      font-size: 32px;
    }

    p {
      font-size: 18px;
      color: #737380;
      line-height: 32px;
    }

    a {
      display: flex;
      align-items: center;
      margin-top: 40px;
      color: #41414d;
      font-size: 16px;
      text-decoration: none;
      font-weight: 500;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.8;
      }

      svg {
        margin-right: 8px;
      }
    }
  }

  form {
    width: 100%;
    max-width: 350px;
    margin-right: 30px;
    margin-top: 100px;

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
    }

    button {
      margin-top: 16px;
      height: 60px;
      width: 100%;
      background: #e02041;
      border: 0;
      border-radius: 8px;
      color: #fff;
      font-weight: 700;
      display: inline-block;
      text-align: center;
      text-decoration: none;
      border: 0;
      font-size: 16px;
      line-height: 60px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#e02041')};
      }
    }
  }
`;
