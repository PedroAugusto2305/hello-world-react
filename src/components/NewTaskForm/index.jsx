import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import { FormStyle, FormTitle } from "./style";

export default function NewTaskForm({ addTask }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (title.trim() === "") {
      alert("O input está vazio, preencha com uma tarefa antes de adicionar.");
    } else {
      addTask({ title });
      setTitle("");
    }
  };
  return (
    <>
      <FormTitle>Adicione uma nova tarefa</FormTitle>
      <FormStyle onSubmit={handleSubmit}>
        <Input type="text" value={title} setValue={setTitle} />
        <Button text="Adicionar" type="submit" />
      </FormStyle>
      <hr
        style={{
          border: "none",
          borderTop: "2px solid #f0f2f5",
          margin: "20px 0",
        }}
      />
    </>
  );
}
