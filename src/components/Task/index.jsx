import Button from "../Button";
import Checkbox from "../Input/Checkbox";
import { TaskStyle, TaskContentStyle, ButtonsContainer } from "./style";

export default function Task({ title, changeButton }) {
  return (
    <TaskStyle>
      <Checkbox />
      <TaskContentStyle>{title}</TaskContentStyle>
      <ButtonsContainer>
        <Button
          text="Editar"
          bgColor="#f0f2f5"
          hoverColor="#e0e0e0"
          txtColor="#333"
          btnSize="8px 12px"
        />
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
