import { useState } from "react";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";

export default function App() {
  const [user, setUser] = useState(null);

  // Track which page to show inside Dashboard
  const [activePage, setActivePage] = useState("Dashboard");

  const handleLogout = () => {
    setUser(null);
    setActivePage("Dashboard");
  };

  return user ? (
    <DashboardPage
      user={user}
      logout={handleLogout}
      activePage={activePage}
      onNavigate={setActivePage}
    />
  ) : (
    <LoginPage onLoginSuccess={setUser} />
  );
}

