import "./App.css";
import { newFunction } from "./components/ProfileCard";

function App() {
  return (
    <>
      <aside className="profile-card">{newFunction()}</aside>
    </>
  );
}

export default App;
