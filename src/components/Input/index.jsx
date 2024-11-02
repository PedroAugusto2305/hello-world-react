import { InputStyle } from "./style";

export default function Input({ type, name, value, setValue }) {
  return (
    <InputStyle
      type={type}
      name={name}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
