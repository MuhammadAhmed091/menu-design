import { BrowserRouter, Routes, Route } from "react-router-dom";
import Design from "./component/design";
import './'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/design" element={<Design />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;


