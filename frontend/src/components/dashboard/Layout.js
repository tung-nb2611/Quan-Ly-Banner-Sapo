import React from "react";
import Sidebar from "./Sidebar";
import styled from 'styled-components';
import NavBar from "./Navbar";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const Layout = React.memo((props) => {
  
  return (
    <div className="d-flex">
      <Sidebar 
        showAdminBoard={props.showAdminBoard}
        logOut={props.logOut}
      />
      <Wrapper>
        <NavBar 
          showAdminBoard={props.showAdminBoard}
        />        
        {props.children}
      </Wrapper>
    </div>
  );
});

export default Layout;
