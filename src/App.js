import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Settings from "./pages/Settings";
import About from "./pages/About";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
