import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/layout";
import NotFound from "./pages/not-found";
import Home from "./pages/home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
