import ButtonStyle from "./style";


export default function Button({ text, type, bgColor, hoverColor, txtColor, btnSize, changeButton }) {
  return (
    <ButtonStyle
      $bgColor={bgColor}
      $hoverColor={hoverColor}
      $txtColor={txtColor}
      $btnSize={btnSize}
      type={type}
      onClick={changeButton}
    >
      {text}
    </ButtonStyle>
  );
}
