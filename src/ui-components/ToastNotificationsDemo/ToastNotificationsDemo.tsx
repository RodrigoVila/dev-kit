import { useToastNotifications } from "@/hooks/useToastNotifications";
import { Button } from "@/ui-components/Button";

export const ToastNotificationsDemo = () => {
  const {
    showSuccessNotification,
    showErrorNotification,
    showInfoNotification,
    showWarningNotification,
  } = useToastNotifications();

  return (
    <div className="flex flex-col items-center gap-4">
      <Button
        onClick={() => showSuccessNotification("This is a success message!")}
        className="bg-green-500 text-white px-4 py-2 rounded-lg min-w-60 hover:bg-green-600"
      >
        Show Success Notification
      </Button>
      <Button
        onClick={() => showErrorNotification("This is an error message!")}
        className="bg-red-500 text-white px-4 py-2 rounded-lg min-w-60 hover:bg-red-600"
      >
        Show Error Notification
      </Button>
      <Button
        onClick={() => showInfoNotification("This is an info message!")}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg min-w-60 hover:bg-blue-600"
      >
        Show Info Notification
      </Button>
      <Button
        onClick={() => showWarningNotification("This is a warning message!")}
        className="bg-yellow-500 text-white px-4 py-2 rounded-lg min-w-60 hover:bg-yellow-600"
      >
        Show Warning Notification
      </Button>
    </div>
  );
};
