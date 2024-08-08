import { type ElementType, type ReactNode } from "react";

type IconButtonProps = {
  icon: ElementType;
  children: ReactNode;
  onClick: () => void;
};

export default function IconButton(props: IconButtonProps) {
  const { icon, children, onClick } = props;
  const Icon = icon;

  return (
    <button onClick={onClick}>
      <Icon />
      {children}
    </button>
  );
}
