// import { useIntl } from 'react-intl' //TODO: Refactor this to i18n-react

import { Button } from "@/ui-components/Button";

import { Modal } from "@/ui-components/Modal";
import { useLogin } from "@/hooks/useLogin";

import {
  GoogleSignInButton,
  LoginForm,
  PasswordRecoveryForm,
  RegisterForm,
} from "./components";
import { useState } from "react";

export const LoginModal = () => {
  const [isOpen, setOpen] = useState(false);

  const { formType, setFormType, onInputChange, handleButtonClick } =
    useLogin();

  return (
    <Modal isOpen={isOpen} onClose={() => setOpen(false)}>
      <div className="relative flex w-full flex-col items-center justify-center rounded-md bg-white font-semibold text-black">
        {formType === "register" && (
          <RegisterForm onInputChange={onInputChange} />
        )}
        {formType === "login" && <LoginForm onInputChange={onInputChange} />}
        {formType === "passwordRecovery" && (
          <PasswordRecoveryForm onInputChange={onInputChange} />
        )}

        <div className="flex w-full flex-col items-center gap-4">
          <Button isLoading={false} onClick={handleButtonClick}>
            Button
            {/* TODO: Refactor this to i18n */}
            {/* {formType === "login"
              ? formatMessage({ id: "LOGIN" })
              : formType === "register"
                ? formatMessage({ id: "USER_REGISTER" })
                : formatMessage({ id: "PASSWORD_RECOVERY" })} */}
          </Button>

          {formType !== "passwordRecovery" && <GoogleSignInButton />}

          {/* {(formType === "register" || formType === "passwordRecovery") && (
            <button onClick={() => setFormType("login")}>
              {formatMessage({ id: "GO_TO_LOGIN" })}
            </button>
          )} */}

          {/* {formType === "login" && (
            <>
              <button onClick={() => setFormType("register")}>
                {formatMessage({ id: "USER_REGISTER" })}
              </button>
              <button onClick={() => setFormType("passwordRecovery")}>
                {formatMessage({ id: "PASSWORD_RECOVERY" })}
              </button>
            </>
          )} */}
        </div>
      </div>
    </Modal>
  );
};
