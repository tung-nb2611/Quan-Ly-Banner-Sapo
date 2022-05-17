import React, { useState, useEffect } from 'react';
import { Switch, Route } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { CheckboxProvider } from './context/CheckboxContext';
import { CheckboxArrProvider } from './context/CheckboxListContext';
import AuthService from "./services/Auth";
import EventBus from "./common/EventBus";
import UserManage from "./pages/UserManage";
import Report from './pages/Report';
import BannerManage from "./pages/BannerManage";
import Layout from './components/dashboard/Layout';
import LinkToLogin from './components/authentication/LinkToLogin'
import Login from "./components/authentication/Login";
import Home from "./components/authentication/Home";
import CreateBanner from "./components/banner/CreateBanner";
import UpdateBanner from "./components/banner/UpdateBanner";
import BannerDetail from './components/banner/BannerDetail';
import CreateUser from "./components/user/CreateUser";
import UpdateUser from "./components/user/UpdateUser";
import UserDetail from "./components/user/UserDetail";
import DetailReport from './components/report/DetailReport';
import SectionListReport from './components/report/SectionListReport';
import ListBannerInSection from './components/report/ListBannerInSection';
import WebsiteList from './components/website/WebsiteList';
import DisplayBanner from "./components/website/DisplayBanner";
import CreateWebsite from './components/website/CreateWebsite';
import CreateSection from './components/section/CreateSection';
import SectionList from './components/section/SectionList';
import SapoWeb from './dashboard/SapoWeb';
import UpdateSection from './components/section/UpdateSection';

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
            {currentUser ?
              (
                <Layout logOut={logOut} showAdminBoard={showAdminBoard}>
                  {/* <Redirect from="/" to="/home" /> */}
                  <Route exact path="/home">
                    <Home />
                  </Route>
                  <Route exact path="/banner/manage">
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
                  <Route path="/banner/display/:id" showAdminBoard={showAdminBoard}>
                    <DisplayBanner />
                  </Route>
                  <Route path="/banner/report/section/:id" >
                    <ListBannerInSection />
                  </Route>
                  <Route path="/dashboard/SapoWeb">
                    <SapoWeb />
                  </Route>
                  <Route exact path="/report">
                    <Report />
                  </Route>
                  <Route exact path="/websites/create">
                    <CreateWebsite showAdminBoard={showAdminBoard} />
                  </Route>
                  <Route exact path="/websites/manage">
                    <WebsiteList />
                  </Route>
                  <Route path="/websites/websiteId=:webId/sections" >
                    <SectionList />
                  </Route>
                  <Route path="/websites/websiteId=:webId/createSection" >
                    <CreateSection />
                  </Route>
                  <Route path="/websites/websiteId=:webId/report" >
                    <SectionListReport />
                  </Route>
                  <Route path="/views/detail/:code" >
                    <DetailReport />
                  </Route>
                  <Route exact path="/user/manage">
                    <UserManage />
                  </Route>
                  <Route exact path="/user/create">
                    <CreateUser />
                  </Route>
                  <Route path="/user/detail/:id" >
                    <UserDetail />
                  </Route>
                  <Route path="/user/update/:code">
                    <UpdateUser />
                  </Route>
                  <Route path="/websites/websiteId=:webId/sectionId=:sectionId/update" >
                    <UpdateSection />
                  </Route>
                  {/* <Route path="/user/update">
                    <UpdateUser/>
                  </Route> */}
                </Layout>
              ) : (
                <>
                  <Route exact path="/">
                    <LinkToLogin />
                  </Route>
                  <Route exact path="/login">
                    <Login />
                  </Route>
                </>
              )}
          </Switch>
        </CheckboxArrProvider>
      </CheckboxProvider>
    </div>
  );
};

export default App;