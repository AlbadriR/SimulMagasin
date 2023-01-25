import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Settings from "./pages/Settings";
import About from "./pages/About";
import Layout from "./components/nav/Layout";
import { SettingsContext } from "./components/Contexts/SettingsContext";

function App() {
  const [maxClient, setMaxClient] = useState(0);
  const [maxCaisse, setMaxCaisse] = useState(13);
  const [maxTempCourse, setMaxTempCourse] = useState(30);
  const [minTempCourse, setMinTempCourse] = useState(3);
  const [maxTempAttenteCaisse, setMaxTempAttenteCaisse] = useState(0);
  const [clientParHeure, setClientParHeure] = useState(30);
  return (
    <Layout>
      <SettingsContext.Provider
        value={{
          maxClient,
          setMaxClient,
          maxCaisse,
          setMaxCaisse,
          maxTempCourse,
          setMaxTempCourse,
          minTempCourse,
          setMinTempCourse,
          maxTempAttenteCaisse,
          setMaxTempAttenteCaisse,
          clientParHeure,
          setClientParHeure,
        }}
      >
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/settings" element={<Settings />}></Route>

          <Route path="/about" element={<About />}></Route>
        </Routes>
      </SettingsContext.Provider>
    </Layout>
  );
}

export default App;
