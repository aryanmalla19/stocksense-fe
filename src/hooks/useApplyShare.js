import React, { useState } from "react";

const useApplyShare = (issuePrice = 100) => {
  const [kittaAmount, setKittaAmount] = useState("");
  const [amount, setAmount] = useState("");
  const [agreedTerm, setAgreedTerms] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;

    if (!isNaN(value) && value >= 10) {
      setKittaAmount(value);
      setAmount(value * issuePrice);
    } else {
      setKittaAmount(value);
      setAmount("");
    }
  };

  const handleTermsChange = (e) => {
    setAgreedTerms(e.target.checked);
  };
  return { kittaAmount, amount, agreedTerm, handleChange, handleTermsChange };
};

export default useApplyShare;
