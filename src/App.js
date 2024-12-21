import React from "react";
import CryptoChart from "./components/CryptoChart";

const App = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const secret = urlParams.get("secret");

  if (secret !== "YOUR_SECRET") {
    return <div>Access Denied</div>;
  }

  return (
    <div>
      <h1>Crypto Dashboard</h1>
      <CryptoChart />
    </div>
  );
};

export default App;
