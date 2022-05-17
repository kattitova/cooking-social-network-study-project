import React, { Component } from "react";
import ProfilePage from "../ProfilePage";
import Header from "../Header";
import Nav from "../Nav";
import "./App.css";

const App = () => (
  <div className="app-wrapper">
    <Header />
    <Nav />
    <ProfilePage />
  </div>
);

export default App;
