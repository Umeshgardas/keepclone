import "./App.css";
import CreateNote from "./components/CreateNote";
import Footer from "./components/Footer";
import React, { useState } from "react";
import Header from "./components/Header";
import Note from "./components/Note";
function App() {
  const [addItem, setAddItem] = useState([]);

  const addnote = (note) => {
    // alert("i clicked");
    setAddItem((prev) => {
      return [...prev, note];
    });
    console.log(note);
  };
  const onDelete = (id) => {
    setAddItem((prev) =>
      prev.filter((curr, index) => {
        return index !== id;
      })
    );
  };

  return (
    <div className="App">
      <Header />
      <CreateNote passnote={addnote} />
      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
