import { useEffect, useState } from "react";

interface StatusMessageProps {
  status: number | null;
  message: string | null;
  statusMessageTrigger?: number;
}

export function StatusMessage({ status, message, statusMessageTrigger }: StatusMessageProps) {
  const [visible, setVisible] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    if (status !== null && message) {
      setTimeout(() => {
        setVisible(true);
        setTimeout(() => setShow(true) , 10)

        const timer = setTimeout(() => {
          setShow(false);
          setTimeout(() => setVisible(false), 500);
        }, 2000);

        return () => clearTimeout(timer);
      }, 50);
    }
  }, [status, message, statusMessageTrigger]);

  if (!visible) return null;

  return (
    <div className={`fixed top-5 right-5 p-3 rounded text-white transition-opacity duration-500 ease-in-out
      ${status === 200 || status === 201 ? "bg-green-500" : "bg-red-500"} 
      ${show ? "opacity-100" : "opacity-0"}`}

    >
      {status}: {message}
    </div>
  );
}
