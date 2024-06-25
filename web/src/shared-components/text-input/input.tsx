import { useState } from "react";
import "./input.css";

type InputProps = {
  id: string;
  label: string;
  locked: boolean;
  active: boolean;
  errorMessage?: string;
  validate?: (input: string) => boolean;
  isPassword?: boolean;
};

export const Input = ({
  id,
  label,
  locked,
  active,
  errorMessage,
  validate,
  isPassword = false,
}: InputProps) => {
  const [state, setState] = useState<boolean>(active);
  const [value, setValue] = useState("");

  const fieldClassName = `field ${
    (locked ? state : state || value) && "active"
  } ${locked && !active && "locked"}`;

  return (
    <div className={fieldClassName}>
      <input
        id={id}
        type={isPassword ? "password" : "text"}
        placeholder={label}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => !locked && setState(true)}
        onBlur={() => !locked && setState(false)}
      />
      <label htmlFor={id} className={errorMessage && "error"}>
        {errorMessage || label}
      </label>
    </div>
  );
};
