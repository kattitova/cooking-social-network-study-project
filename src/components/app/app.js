import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import PropsType from "prop-types";

import "./App.css";
import Header from "../Header/Header";
import ProfilePage from "../ProfilePage/ProfilePage";
import MessagePage from "../MessagePage/MessagePage";
import NewsPage from "../NewsPage/NewsPage";
import MusicPage from "../MusicPage/MusicPage";
import SettingsPage from "../SettingsPage/SettingsPage";
import SideBar from "../SideBar/SideBar";

const App = (props) => {
  const { state } = props;

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <SideBar state={state.friendsBar}/>
        <div className="content">
          <Route
            path="/profile"
            render={() => <ProfilePage state={state.profilePage} />}
          />
          <Route
            path="/messages"
            render={() => <MessagePage state={state.messagePage} />}
          />
          <Route path="/news" component={NewsPage} />
          <Route path="/music" component={MusicPage} />
          <Route path="/settings" component={SettingsPage} />
        </div>
      </div>
    </BrowserRouter>
  );
};

App.propTypes = {
  state: PropsType.objectOf(PropsType.object).isRequired,
};

export default App;
