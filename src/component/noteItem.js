import { useState } from "react";
const NoteItem = ({ note, handleEdit, handleDelete }) => {
  const [isEdit, setEdit] = useState(false);
  const [editContent, setEditContent] = useState(note.content);
  const saveEdit = () => {
    handleEdit({ id: note.id, content: editContent });
    setEdit(false);
  };
  return (
    <div>
      {isEdit ? (
        <input
          style={{ margin: ".25rem" }}
          type="text"
          value={editContent}
          onChange={(e) => setEditContent(e.target.value)}
        />
      ) : (
        <span style={{ margin: ".25rem" }}>{note.content}</span>
      )}
      {isEdit ? (
        <button style={{ margin: ".25rem" }} onClick={saveEdit}>
          save
        </button>
      ) : (
        <button style={{ margin: ".25rem" }} onClick={() => setEdit(true)}>
          edit
        </button>
      )}

      <button
        style={{ margin: ".25rem" }}
        onClick={() => {
          handleDelete(note.id);
        }}
      >
        delete
      </button>
    </div>
  );
};
export default NoteItem;
