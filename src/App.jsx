import "./App.css";
import Header from "./components/Header";
import UserList from "./components/UserList";

// https://randomuser.me/api/?results=5
function App() {
  return (
    <div>
      <Header />
      <UserList />
    </div>
  );
}

export default App;
