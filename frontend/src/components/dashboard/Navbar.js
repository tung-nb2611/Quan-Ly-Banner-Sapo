import React from "react";
import styled from "styled-components";
import '../../styles/dashboard/style.css'

const NavWrap = styled.nav`
  width: 100%;
  height: 55px;
  background: linear-gradient(to left, #ffffff, #66B8FF);
  text-align: left;
  align-items: center;
`;

export default function NavBar(props) {
  return (
    <>
      <NavWrap>
        {props.showAdminBoard ? (
          <h1 className="mx-3 pt-2">Admin</h1>
        ):(
          <h1 className="mx-3 pt-2">User</h1>
        )}
      </NavWrap>
    </>
  );
};

