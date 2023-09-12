import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Wiki from "./containers/Wiki";
import AppNavigator from "./components/AppNavigator";

export default function App() {
  return (
    <Router>
      <AppNavigator />
      <Routes>
        <Route path="/" element={<Wiki />} />
      </Routes>
    </Router>
  );
}
