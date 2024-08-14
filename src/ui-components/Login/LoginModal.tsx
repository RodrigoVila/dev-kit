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

type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const { formType, setFormType, onInputChange, handleButtonClick } =
    useLogin();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="relative flex w-full flex-col items-center justify-center rounded-md bg-white font-semibold text-black">
        {formType === "register" && (
          <RegisterForm onInputChange={onInputChange} />
        )}
        {formType === "login" && <LoginForm onInputChange={onInputChange} />}
        {formType === "passwordRecovery" && (
          <PasswordRecoveryForm onInputChange={onInputChange} />
        )}

        <div className="flex w-full flex-col items-center gap-4">
          <Button
            variant="outline"
            isLoading={false}
            onClick={handleButtonClick}
            className="w-full rounded-md"
          >
            {formType === "login"
              ? "Login"
              : formType === "register"
                ? "Register"
                : "Password Recovery"}
          </Button>

          {formType === "login" && <GoogleSignInButton />}

          {(formType === "register" || formType === "passwordRecovery") && (
            <button onClick={() => setFormType("login")}>Go to login</button>
          )}

          {formType === "login" && (
            <>
              <button onClick={() => setFormType("register")}>
                Register User
              </button>
              <button onClick={() => setFormType("passwordRecovery")}>
                Password Recovery
              </button>
            </>
          )}
        </div>
      </div>
    </Modal>
  );
};
