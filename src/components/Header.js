import React, { useState } from "react";

import styled from "styled-components";
import { IconButton } from "@material-ui/core";

import PinterestIcon from "@material-ui/icons/Pinterest";
import SearchIcon from "@material-ui/icons/Search";
import FaceIcon from "@material-ui/icons/Face";
import NotificationsIcon from "@material-ui/icons/Notifications";
import TextsmsIcon from "@material-ui/icons/Textsms";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

function Header({ onSubmit }) {
  const [input, setInput] = useState("");

  const onSearchSubmit = (e) => {
    e.preventDefault();

    onSubmit(input);
  };
  return (
    <Wrapper>
      <LogoWrapper>
        <IconButton>
          <PinterestIcon />
        </IconButton>
      </LogoWrapper>
      <HomepageButton>
        <a href="/">Homepage</a>
      </HomepageButton>
      <FollowingButton>
        <a href="/following">Following</a>
      </FollowingButton>
      <SearchWrapper>
        <SearchBarWrapper>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <form>
            <input type="text" onChange={(e) => setInput(e.target.value)} />
            <button type="submit" onClick={onSearchSubmit}></button>
          </form>
        </SearchBarWrapper>
      </SearchWrapper>

      <IconsWrapper>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <IconButton>
          <TextsmsIcon />
        </IconButton>
        <IconButton>
          <FaceIcon />
        </IconButton>
        <IconButton>
          <KeyboardArrowDownIcon />
        </IconButton>
      </IconsWrapper>
    </Wrapper>
  );
}

export default Header;

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 0;

  display: flex;
  align-items: center;
  height: 56px;
  padding: 12px 4px 4px 16px;
  background-color: white;
  color: black;
`;

const LogoWrapper = styled.div`
  .MuiSvgIcon-root {
    color: #e74128;
    font-size: 32px;
    cursor: pointer;
    margin-right: 10px;
  }
`;

const HomeButton = styled.div`
  display: flex;
  height: 48px;
  width: 123px;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  cursor: pointer;
`;

const HomepageButton = styled(HomeButton)`
  background-color: #111111;
  a {
    text-decoration: none;
    color: white;
    font-weight: 700;
  }
`;
const FollowingButton = styled(HomeButton)`
  a {
    text-decoration: none;
    color: black;
    font-weight: 700;
  }
  :hover {
    background-color: #efefef;
  }
`;

const SearchWrapper = styled.div`
  flex: 1;
`;

const SearchBarWrapper = styled.div`
  background-color: #efefef;
  align-items: center;
  height: 48px;
  width: 100%;
  display: flex;
  border-radius: 50px;
  border: none;
  padding-left: 10px;

  form {
    display: flex;
    flex: 1;
  }

  form > input {
    background-color: transparent;
    border: none;
    width: 100%;
    margin-left: 5px;
    font-size: 16px;
  }

  form > button {
    display: none;
  }

  form > input:focus {
    outline: none;
  }
`;

const IconsWrapper = styled.div``;
