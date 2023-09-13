import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Ricki from "./containers/Ricki";
import AppNavigator from "./components/AppNavigator";
import RickiDetails from "./containers/RickiDetails";

export default function App() {
  return (
    <Router>
      <AppNavigator />
      <Routes>
        <Route path="/" element={<Ricki />} />
        <Route path="/character/:id" element={<RickiDetails />} />
      </Routes>
    </Router>
  );
}
