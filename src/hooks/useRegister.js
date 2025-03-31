import { useState } from "react";
import { register } from "../helper/apiService";

const useRegister = () => {
  const [input, setInput] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await register({ input });
      console.log(response);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { input, setInput, error, loading, handleSubmit };
};

export default useRegister;
