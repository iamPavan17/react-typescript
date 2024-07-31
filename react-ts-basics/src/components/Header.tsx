import { type ReactNode } from "react";

type ImageProps = {
  src: string;
  alt: string;
};

type HeaderProps = {
  image: ImageProps;
  children: ReactNode;
};

export default function Header(props: HeaderProps) {
  const { image, children } = props;
  return (
    <header>
      {/* <img {...image} />  -> Concise way*/}
      <img src={image.src} alt={image.alt} />
      {children}
    </header>
  );
}
