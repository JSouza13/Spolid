import styled from 'styled-components';

import themes from '~/styles/themes/light';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08), 0 4px 12px rgba(0, 0, 0, 0.08);
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;
`;

export const OptionProfile = styled.div`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  & + div {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }

  a {
    font-size: 13px;
    line-height: 18px;
    color: #fff;
  }

  button {
    background: none;
    border: 0;
    position: relative;
    color: #fff;
    font-size: 13px;
  }
`;

export const OptionProfileList = styled.div`
  position: absolute;
  width: 100px;
  left: calc(100% - 108px);
  top: calc(12%);
  background: rgba(0, 0, 0, 0.8);
  border-radius: 4px;
  padding: 15px 5px;
  z-index: 1000;
  display: ${(props) => (props.visible ? 'block' : 'none')};

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20px);
    top: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0, 0, 0, 0.8);
  }
`;

export const Content = styled.div`
  height: 64px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }

    a {
      font-weight: bold;
      color: ${themes.color.primary};
    }
  }

  aside {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      margin-top: 14px;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #333;
    }
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
`;
