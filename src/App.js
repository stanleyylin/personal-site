import React from "react";
import "./App.css";
import Heading from "./main-page/Heading";
import NavBar from "./components/Nav";
import Projects from "./main-page/Projects";
import Experiences from "./main-page/Experiences";
import Connect from "./main-page/Connect";

function App() {
  const handleSave = (values) => {
    console.log({ values });
  };

  return (
    <>
      <NavBar />
      <Heading />
      <Projects />
      <Experiences name="experience-section" />
      <Connect name="connect-section" onSave={handleSave} />
    </>
  );
}

export default App;
