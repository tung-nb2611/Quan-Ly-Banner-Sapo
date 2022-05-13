import React, { useState, useEffect } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { CheckboxProvider } from './context/CheckboxContext';
import { CheckboxArrProvider } from './context/CheckboxListContext'
import AuthService from "./services/Auth";
import EventBus from "./common/EventBus";

import Layout from './components/dashboard/Layout';
import Login from "./components/authentication/Login";
import Home from "./components/authentication/Home";
import CreateBanner from "./components/banner/CreateBanner";
import UpdateBanner from "./components/banner/UpdateBanner";
import BannerDetail from './components/banner/BannerDetail';
import DisplayBanner from "./components/website/DisplayBanner";
import WebsiteList from './components/website/WebsiteList';
import CreateUser from "./components/user/CreateUser";
import UpdateUser from "./components/user/UpdateUser";

import UserManage from "./pages/UserManage";
import SectionList from './components/section/SectionList';

import Report from './pages/Report';
import BannerManage from "./pages/BannerManage";
import SapoWeb from './dashboard/SapoWeb';

import DetailReport from './components/report/DetailReport';

import NotFound from './components/NotFound';
import SectionListReport from './components/report/SectionListReport';

const App = () => {
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    setShowAdminBoard(false);
    setCurrentUser(undefined);
  };

  return (
    <div className='wrapper'>
      <CheckboxProvider>
        <CheckboxArrProvider>
          <Switch>
            {currentUser ? (
              <Layout logOut={logOut} showAdminBoard={showAdminBoard}>
                <Route path="/">
                  <Redirect to="/home" />
                </Route>
                <Route exact path="/home">
                  <Home />
                </Route>
                <Route path="/banner/manage">
                  <BannerManage />
                </Route>
                <Route path="/banner/create/:id" >
                  <CreateBanner showAdminBoard={showAdminBoard} />
                </Route>
                <Route path="/banner/detail/:code" >
                  <BannerDetail showAdminBoard={showAdminBoard} />
                </Route>
                <Route path="/banner/update/:code">
                  <UpdateBanner showAdminBoard={showAdminBoard} />
                </Route>

                <Route path="/banner/display/:id">
                  <DisplayBanner />
                </Route>
                <Route path="/website">
                  <WebsiteList />
                </Route>
                <Route path="/dashboard/SapoWeb">
                  <SapoWeb />
                </Route>
                <Route path="/report">
                  <Report />
                </Route>
                <Route path="/websites/websiteId=:webId/sections" >
                  <SectionList />
                </Route>
                <Route path="/websites/websiteId=:webId/report" >
                  <SectionListReport />
                </Route>
                <Route path="/views/detail/:code" >
                  <DetailReport />
                </Route>
                <Route path="/user/manage" >
                  <UserManage />
                </Route>
                <Route path="/user/create">
                  <CreateUser />
                </Route>
                <Route path="/user/update/:code">
                  <UpdateUser />
                </Route>
                <Route path="/user/update">
                  <UpdateUser />
                </Route>
              </Layout>
            ) : (
              <>
                <Route path="/">
                  <Redirect to='/login'></Redirect>
                </Route>
                <Route exact path="/login">
                  <Login />
                </Route>
                {/* <Route exact path="*">
                  <div className='container'>Page not found</div>
                </Route> */}
              </>
            )}
          </Switch>
        </CheckboxArrProvider>
      </CheckboxProvider>
    </div>
  );
};

export default App;