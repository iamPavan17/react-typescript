import { type ReactNode } from "react";

type InfoBoxProps = {
  // Mode should be either hint or warning,
  // So we could use union type and the literal type feature.
  // So we don't just say, that this should be a type string,
  // But instead, we have 2 specific strings that we want to accept.
  mode: "hint" | "warning";
  severity?: "low" | "medium" | "high"; // ? meaning, the prop is optional.
  children: ReactNode;
};

export default function InfoBox(props: InfoBoxProps) {
  const { mode, children, severity } = props;

  if (mode === "hint") {
    return (
      <aside className="infobox infobox-hint">
        <p>{children}</p>
      </aside>
    );
  }

  return (
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  );
}
