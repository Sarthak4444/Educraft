import React from "react";
import { Outlet } from 'react-router-dom'
import Header from "./Components/Header";
import SubscriptionSection from "./Components/SubscriptionSection";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <SubscriptionSection />
      <Footer />
    </>
  );
}

export default App;