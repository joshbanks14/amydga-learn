import { useState } from "react";
import "./input.css";

type InputProps = {
  label: string;
  locked: boolean;
  active: boolean;
};

export const Input = ({ label, locked, active }: InputProps) => {
  const [state, setState] = useState<boolean>(active);
  const [value, setValue] = useState("");

  const fieldClassName = `field ${
    (locked ? state : state || value) && "active"
  } ${locked && !active && "locked"}`;

  return (
    <div className={fieldClassName}>
      <input
        type="text"
        placeholder={label}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => !locked && setState(true)}
        onBlur={() => !locked && setState(false)}
      />
    </div>
  );
};
