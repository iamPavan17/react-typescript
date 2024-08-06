import { type ComponentPropsWithoutRef } from "react";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

export default function Input(props: InputProps) {
  const { id, label, ...rest } = props;

  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} {...rest} />
    </p>
  );
}
