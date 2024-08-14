import { FcGoogle } from "react-icons/fc";

import { useToastNotifications } from "@/hooks/useToastNotifications";
import { Button } from "@/ui-components/Button";

export const GoogleSignInButton = () => {
  const { showErrorNotification, showSuccessNotification } =
    useToastNotifications();

  const onSuccess = async () => {
    showSuccessNotification("Logged in with Google success!");
  };

  const onError = (error: any) => {
    const message = `Error trying to log your Google Account. Error: ${error.error_description}`;
    showErrorNotification(message, { autoClose: 8000 });
  };

  // const login = useGoogleLogin({ onSuccess, onError });

  return (
    <Button
      variant="outline"
      className="w-full flex items-center justify-center rounded-md  py-2 hover:bg-slate-800 hover:text-white"
      icon={<FcGoogle size={25} />}
      onClick={() => onSuccess()}
    >
      Sign in with Google
    </Button>
  );
};
