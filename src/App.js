import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import withAuth from "./hoc/withAuth";

function App() {
  const AuthenticatedDashboard = withAuth(Dashboard);
  console.log("AD", AuthenticatedDashboard);
  const AuthenticatedProfile = withAuth(Profile);
  return (
    <>
      <Router>
        <Routes>
          {/*                              call   AuthenticatedDashboard / execute WithAuthComponent                           */}
          <Route path="/dashboard" element={<AuthenticatedDashboard />} />
          <Route path="/profile" element={<AuthenticatedProfile a={4} />} />
          <Route
            path="/"
            element={
              <div style={{ padding: 18 }}>
                <h1>Higher Order Component</h1>
                <div>Login page for unauthenticated users</div>
              </div>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
