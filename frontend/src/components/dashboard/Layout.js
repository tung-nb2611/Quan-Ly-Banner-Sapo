import React from "react";
import Sidebar from "./Sidebar";
import styled from 'styled-components';
import NavBar from "./Navbar";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding-left: 250px;
  overflow: auto;
  background-color: #f1f5f8;
`;

const Layer = styled.div`
  height: 100%;
  overflow: auto;
`;

const Layout = React.memo((props) => {
  
  return (
    <Layer>
      <Sidebar 
        showAdminBoard={props.showAdminBoard}
        logOut={props.logOut}
      />
      <Wrapper>
        <NavBar showAdminBoard={props.showAdminBoard}/>   
        {props.children}  
      </Wrapper>
    </Layer>
  );
});

export default Layout;
