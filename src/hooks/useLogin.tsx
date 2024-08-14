import { FormEvent, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { useToastNotifications } from "@/hooks/useToastNotifications";
import { encryptPassword } from "@/utils/encrypt";
import { isEmailValid, isPasswordValid } from "@/utils/validation";

const initialState = {
  name: "",
  lastName: "",
  email: "",
  password: "",
  repeatPassword: "",
};

type FormType = "login" | "register" | "passwordRecovery";

export const useLogin = () => {
  const [formType, setFormType] = useState<FormType>("login");
  const [credentials, setCredentials] = useState(initialState);

  const { showErrorNotification, showSuccessNotification } =
    useToastNotifications();

  const { name, lastName, email, password, repeatPassword } = credentials;

  const onInputChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setCredentials({ ...credentials, [name]: value });
  };

  const cleanCredentials = () => setCredentials(initialState);

  const handleRegister = async () => {
    const pid = uuidv4();

    if (!name || !lastName || !email || !password || !repeatPassword) {
      showErrorNotification("All inputs required");
      return;
    }

    if (!isEmailValid(email)) {
      showErrorNotification("Invalid Email");
      return;
    }

    if (!isPasswordValid(password)) {
      showErrorNotification("Password is not valid");
      return;
    }

    if (password !== repeatPassword) {
      showErrorNotification("Passwords don't match");
      return;
    }

    const encryptedPassword = await encryptPassword(password);

    const newUser = {
      name,
      lastName,
      pid,
      email,
      password: encryptedPassword,
    };

    showSuccessNotification(`Registered user "${name}"`);
  };

  const handleLogin = () => {
    if (!email || !password) {
      showErrorNotification("All inputs required");
      return;
    }

    if (!isEmailValid(email)) {
      showErrorNotification("Invalid email");
      return;
    }

    const user = {
      email,
      password,
    };

    showSuccessNotification(`Logged in user ${email}`);
  };

  const handlePasswordRecovery = () => {
    if (!email) {
      showErrorNotification("All inputs required");
      return;
    }
    if (!isEmailValid(email)) {
      showErrorNotification("Invalid Email");
      return;
    }

    showSuccessNotification(`Password recovery sent to ${email}`);
  };

  const handleButtonClick = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (formType === "login") handleLogin();
    if (formType === "register") handleRegister();
    if (formType === "passwordRecovery") handlePasswordRecovery();
  };

  useEffect(() => {
    cleanCredentials();
  }, [formType]);

  return {
    formType,
    setFormType,
    onInputChange,
    handleButtonClick,
  };
};
