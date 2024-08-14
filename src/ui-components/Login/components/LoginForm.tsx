import { ChangeEvent } from "react";

import { Input } from "@/ui-components/Input";

type LoginFormProps = {
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const LoginForm = ({ onInputChange }: LoginFormProps) => {
  return (
    <form className="w-full rounded">
      <Input label="Email" name="email" type="text" onChange={onInputChange} />
      <Input
        label="Password"
        name="password"
        type="password"
        onChange={onInputChange}
      />
    </form>
  );
};
