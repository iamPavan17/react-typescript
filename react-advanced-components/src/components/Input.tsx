import { forwardRef, type ComponentPropsWithoutRef } from "react";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<"input">;

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { id, label, ...rest } = props;

  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} name={id} {...rest} ref={ref} />
    </p>
  );
});

export default Input;
