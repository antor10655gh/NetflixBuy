import React, { useEffect, useState } from "react";
import "./index.css";
import "./App.css";
import Layout from "./layout/Layout";
import Loader from "./components/loader/Loader";
export default function App() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setUser(true);
    }, 2500);
  });
  return <div className="bg-black">{user ? <Layout /> : <Loader />}</div>;
}
