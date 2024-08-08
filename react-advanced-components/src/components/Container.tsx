import {
  type ReactNode,
  type ElementType,
  ComponentPropsWithoutRef,
} from "react";

type ContainerProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export default function Container<C extends ElementType>(
  props: ContainerProps<C>
) {
  const { as, children, ...rest } = props;
  const Component = as || "div";

  return <Component {...rest}>{children}</Component>;
}
