import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "@/pages/LoginPage";
import DashboardPage from "@/pages/DashboardPage";
import AnimePage from "@/pages/AnimePage";
import MainLayout from "@/layout/MainLayout";
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginPage onLogin={() => setIsAuthenticated(true)} />}
      />
      <Route
        path="/"
        element={
          isAuthenticated ? (
            <MainLayout />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      >
        <Route index element={<DashboardPage />} />
        <Route path="anime" element={<AnimePage />} />
      </Route>
    </Routes>
  );
}

export default App;
