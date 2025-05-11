import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "@/components/Header";
import TutorialPage from "@/components/TutorialPage"
import { Routes, Route } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/tutorial/:topicName" element={<TutorialPage />} />
    {/* <>
    <Header/>
    </> */}
    </Routes>
  );
}

export default App;
