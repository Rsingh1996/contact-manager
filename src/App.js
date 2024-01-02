import { useState } from "react";
import "./App.css";
import { AddContact } from "./Components/AddContact";
import { ContactList } from "./Components/ContactList";
import { Header } from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  const [contact, setContact] = useState([]);

  const addContact = (data) => {
    setContact([...contact, data]);
  };

  return (
    <div className="App-wrapper">
      <Header />
      <AddContact addContact={addContact} />
      <ContactList contact={contact} />
      <Footer />
    </div>
  );
}

export default App;
