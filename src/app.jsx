import { Router} from "preact-router";
import AuthPage from "./Section/AuthPage/AuthPage";
import Dashboard from "./Section/Dashboard/Dashboard";

export function App() {

  return (
    <Router>
      <AuthPage default />
      <Dashboard path="/dashboard" />
    </Router>
  )
}
