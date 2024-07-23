import { useState } from "react";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen dark:bg-white-100 dark:text-white-100">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Home darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
              }
            />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
