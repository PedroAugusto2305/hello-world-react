import { useState } from "react";
import useTaskCollection from "../../hooks/useTaskCollection";
import Button from "../Button";
import Checkbox from "../Input/Checkbox";
import { TaskStyle, TaskContentStyle, ButtonsContainer } from "./style";

export default function Task({ id, title, changeButton }) {
  const {editTask} = useTaskCollection();
  const [newTitle, setNewTitle] = useState(title);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditTask = (ev) => {
    ev.preventDefault();
    editTask(id, newTitle);
    setIsEditing(false);
  };

  const handleEditButtonClick = () => {
    setNewTitle(title);
    setIsEditing(true);
  };

  const handleInputChange = (e) => {
    setNewTitle(e.target.value);
  };

  return (
    <TaskStyle>
      <Checkbox />
      <TaskContentStyle>
        {isEditing ? (
          <form onSubmit={handleEditTask}>
            <input
              type="text"
              value={newTitle}
              onChange={handleInputChange}
              onBlur={handleEditTask}
              autoFocus
              style={{
                border: "1px solid #ccc",
                padding: "4px",
                borderRadius: "4px",
              }}
            />
          </form>
        ) : (
          <span onDoubleClick={handleEditButtonClick}>{title}</span>
        )}
      </TaskContentStyle>
      <ButtonsContainer>
        {!isEditing && (
          <Button
            text="Editar"
            changeButton={handleEditButtonClick}
            bgColor="#f0f2f5"
            hoverColor="#e0e0e0"
            txtColor="#333"
            btnSize="8px 12px"
          />
        )}
        <Button
          text="Excluir"
          changeButton={changeButton}
          bgColor="#ff5252"
          hoverColor="#ff1744"
          btnSize="8px 12px"
        />
      </ButtonsContainer>
    </TaskStyle>
  );
}
