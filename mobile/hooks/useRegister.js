import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { login } from "../state/auth/loginSlice";
import useNav from "./useNav";
function useRegister() {
  const dispatch = useDispatch();
  const navigation = useNav();

  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  //const registered = useSelector((state) => state.register.registered);

  const clearErr = () => {
    setMessage("");
  };
  const submitData = async (url, formData) => {
    clearErr();
    if (!formData.email) {
      setMessage("Email is required");
      return;
    }
    if (!formData.password) {
      setMessage("Password is required");
      return;
    }
    try {
      setIsSending(true);
      const response = await axios.post(url, formData);
      setMessage(response.data.message);
      if (response.data.success === true) {
        dispatch(login(response.data.user));
        navigation.navigate("Home");
      }
    } catch (error) {
      setMessage(error.message);
    }
    setIsSending(false);
  };

  return { message, isSending, clearErr, submitData, navigation };
}

export default useRegister;
