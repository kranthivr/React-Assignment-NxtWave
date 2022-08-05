import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar";
import { ResourceView } from "./features/resource/ResourceView";
import ResourceItems from "./features/resourceItems/ResourceItems";
import { AddItem } from "./features/addItem/AddItem";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<ResourceView />} />
        <Route path="/:id" element={<ResourceItems />} />
        <Route path="/add-item" element={<AddItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
