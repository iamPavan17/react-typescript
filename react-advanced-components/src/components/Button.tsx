import { type ComponentPropsWithoutRef } from "react";

type ButtonProps = {
  element: "button";
} & ComponentPropsWithoutRef<"button">;

type AnchorProps = {
  element: "anchor";
} & ComponentPropsWithoutRef<"a">;

export default function Button(props: ButtonProps | AnchorProps) {
  if (props.element === "anchor") {
    return <a className="button" {...props}></a>;
  }
  return <button className="button" {...props}></button>;
}
