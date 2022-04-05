import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Footer, Navbar } from "./components";
import { Home, Pomodoro, Tasks } from "./pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/pomodoro" element={<Pomodoro />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
