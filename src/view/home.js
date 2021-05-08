import { useEffect, useState } from "react";
import NoteItem from "../component/noteItem";
const Home = () => {
  const [notes, setNotes] = useState([]);
  const [content, setContent] = useState("");

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = () => {
    setNotes([
      { id: 1, content: "test" },
      { id: 2, content: "test2" },
      { id: 3, content: "test3" },
      { id: 4, content: "test4" },
    ]);
  };

  const addNote = () => {
    setNotes([
      ...notes,
      {
        id: notes.length,
        content: content,
      },
    ]);
    setContent("");
  };
  const editNote = ({ id, content }) => {
    let temp = [...notes];
    let findIndex = temp.findIndex((n) => n.id === id);
    temp[findIndex].content = content;
    setNotes(temp);
  };

  const deleteNote = (id) => {
    let temp = [...notes];
    let findIndex = temp.findIndex((n) => n.id === id);
    temp.splice(findIndex, 1);
    setNotes(temp);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addNote();
    }
  };

  const handleLogout = () => {
    // axios
    //   .get("/SignoutServlet")
    //   .then((res) => {
    //     window.location.href = "/";
    //   })
    //   .catch((error) => {
    //     alert(error.response.data.message);
    //   });
  };
  return (
    <div style={{ display: "flex", alignItems: "center", flexFlow: "column" }}>
      <div style={{ padding: "1rem", fontSize: "1.5rem", fontWeight: "bold" }}>
        {" "}
        My Notes{" "}
      </div>
      <input
        style={{ margin: ".5rem" }}
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      {notes.map((el) => {
        return (
          <NoteItem
            key={el.id}
            note={el}
            handleEdit={editNote}
            handleDelete={deleteNote}
          />
        );
      })}
      <button onClick={handleLogout}>logout</button>
    </div>
  );
};

export default Home;
