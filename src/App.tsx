import { Button } from "@/ui-components/Button";
import { ContactForm } from "./ui-components/ContactForm";
import { ToastNotificationsDemo } from "./ui-components/ToastNotificationsDemo";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="bg-slate-900 h-screen p-16 flex gap-2">
      <Button className="h-max">Button</Button>
      <div className="border-2 border-green-500 p-5 rounded-lg size-max">
        <h3 className="text-white text-center font-bold">
          Toast Notifications
        </h3>
        <ToastNotificationsDemo />
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;
