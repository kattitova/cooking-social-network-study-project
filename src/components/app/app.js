import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import ProfilePage from "../ProfilePage/ProfilePage";
import MessagePage from "../MessagePage/MessagePage";
import NewsPage from "../NewsPage/NewsPage";
import MusicPage from "../MusicPage/MusicPage";
import SettingsPage from "../SettingsPage/SettingsPage";

const App = () => (
  <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="content">
        <Route path="/profile" component={ProfilePage} />
        <Route path="/messages" component={MessagePage} />
        <Route path="/news" component={NewsPage} />
        <Route path="/music" component={MusicPage} />
        <Route path="/settings" component={SettingsPage} />
      </div>
    </div>
  </BrowserRouter>
);

export default App;
