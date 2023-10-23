import { toast } from 'react-toastify';

type INotification = {
  type: "success" | "error";
  message: string;
}

export const sucessNotification = "success"
export const errorNotification = "error"

export function notification({ type, message }: INotification) {
  switch (type) {
    case sucessNotification:
      return toast.success(message, {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    case errorNotification:
      return toast.error(message, {
        position: 'top-center',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    default:
      return null;
  }
}
