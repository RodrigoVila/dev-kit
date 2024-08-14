import { ChangeEvent } from "react";

import { Input } from "@/ui-components/Input";

type PasswordRecoveryFormProps = {
  onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const PasswordRecoveryForm = ({
  onInputChange,
}: PasswordRecoveryFormProps) => {
  return (
    <form className="w-full rounded">
      <Input label="Email" name="email" type="text" onChange={onInputChange} />
    </form>
  );
};
