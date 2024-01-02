import "./App.css";
import { AddContact } from "./Components/AddContact";
import { ContactList } from "./Components/ContactList";
import { Header } from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <AddContact />
      <ContactList />
    </div>
  );
}

export default App;
