import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { ResourceView } from "./features/resource/ResourceView";
import ResourceItems from "./features/resourceItems/ResourceItems";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<ResourceView />} />
        <Route path="/:id" element={<ResourceItems />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
