import { type ReactNode } from "react";

type CardProps = {
  title: string;
  children: ReactNode;
  actions: ReactNode;
};

export default function Card(props: CardProps) {
  const { title, children, actions } = props;
  return (
    <div>
      <h2>{title}</h2>
      {children}
      {actions}
    </div>
  );
}
