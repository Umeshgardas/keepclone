import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const CreateNote = (props) => {
  const [expand, setExpand] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (e) => {
    const { name, value } = e.target;
    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    console.log(note);
  };

  const expandit = () => {
    setExpand(true);
  };
  const btonormal = () => {
    setExpand(false);
  };

  const addnote = () => {
    props.passnote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  return (
    <div className="main_note" onDoubleClick={btonormal}>
      <form action="">
        {expand ? (
          <input
            type="text"
            name="title"
            placeholder=" Title -"
            autoComplete="off"
            onChange={InputEvent}
            value={note.title}
          />
        ) : null}
        <br />
        <textarea
          onChange={InputEvent}
          value={note.content}
          name="content"
          placeholder="Write a note...."
          id=""
          cols="30"
          rows="10"
          onClick={expandit}
        ></textarea>
        {expand ? (
          <Button onClick={addnote}>
            <AddIcon className="plus_sign" />
          </Button>
        ) : null}
      </form>
    </div>
  );
};

export default CreateNote;
