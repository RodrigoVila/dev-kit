import { ChangeEvent } from "react";

import { Input } from "@/ui-components/Input";

type RegisterFormProps = {
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const RegisterForm = ({ onInputChange }: RegisterFormProps) => {
  return (
    <form className="w-full rounded">
      <Input label="Name" name="name" type="text" onChange={onInputChange} />
      <Input
        label="Lastname"
        name="lastName"
        type="text"
        onChange={onInputChange}
      />
      <Input label="Email" name="email" type="text" onChange={onInputChange} />
      <Input
        label="Password"
        name="password"
        type="password"
        onChange={onInputChange}
      />
      <Input
        label="Repeat password"
        name="repeatPassword"
        type="password"
        onChange={onInputChange}
      />
    </form>
  );
};
