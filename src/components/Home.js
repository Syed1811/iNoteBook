import React, { useState } from "react";
import DisNote from "./DisNote";
import Notes from "./Notes";

const Home = (props) => {
  const [showDisNote, setShowDisNote] = useState(false);
  const [showNotes, setShowNotes] = useState(false);

  const handleOpenDisNote = () => {
    setShowDisNote(true);
    setShowNotes(false); // Close the Notes component when opening DisNote
  };

  const handleOpenNotes = () => {
    setShowNotes(true);
    setShowDisNote(false); // Close the DisNote component when opening Notes
  };

  return (
    <div className="con">
      <button className="btnN btn-16 btn-A" onClick={handleOpenDisNote}>
        Display
      </button>
      <button className="btnN btn-16 btn-B" onClick={handleOpenNotes}>
        Add
      </button>

      {showDisNote && <DisNote showAlert={props.showAlert} />}
      {showNotes && <Notes showAlert={props.showAlert} />}
    </div>
  );
};

export default Home;
