import React, { useContext, useEffect, useRef } from "react";
import noteContext from "../context/notes/noteContext";
// import Noteitem from "./Noteitem";
import AddNote from "./AddNote";
import { useNavigate } from "react-router";

const Notes = (props) => {
  const {getNotes} = useContext(noteContext);
  let navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      navigate("/login");
    }
    // eslint-disable-next-line
  }, []);

  const ref = useRef(null);
  // const refClose = useRef(null);
  // const [note, setNote] = useState({
  //   id: "",
  //   etitle: "",
  //   edescription: "",
  //   etag: "",
  // });

  // const updateNote = (currentNote) => {
  //   ref.current.click();
  //   setNote({
  //     id: currentNote._id,
  //     etitle: currentNote.title,
  //     edescription: currentNote.description,
  //     etag: currentNote.tag,
  //   });
  // };

  // const handleClick = (e) => {
  //   editNote(note.id, note.etitle, note.edescription, note.etag);
  //   refClose.current.click();
  //   props.showAlert("Updated Successfully", "success");
  // };

  // const onChange = (e) => {
  //   setNote({ ...note, [e.target.name]: e.target.value });
  // };

  return (
    <>
      <AddNote showAlert={props.showAlert} />
      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
    </>
  );
};

export default Notes;
