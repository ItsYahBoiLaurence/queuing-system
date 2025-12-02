import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/layout";
import NotFound from "./pages/not-found";
import Home from "./pages/home";

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
