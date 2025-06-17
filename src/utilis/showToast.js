import React from "react";
import { toast,Bounce } from "react-toastify";

export const showToast=(alertType,alertMessage)=>{
    if(alertType=='success')
    {
        toast.success(alertMessage, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
          });
    }
    if(alertType=='fail')
    {
        toast.error(alertMessage, {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
      });
    }
}