import React, { useEffect } from "react";

const AccountForm = ({ name, email, setInput, setIsValid }) => {
  useEffect(() => {
    if (name.length > 0 && email.length > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [name, email]);
  return (
    <>
      <input
        name="name"
        type="text"
        value={name}
        placeholder="Name"
        onChange={(e) => setInput(e)}
      />
      <input
        name="email"
        type="text"
        value={email}
        placeholder="Email"
        onChange={(e) => setInput(e)}
      />
    </>
  );
};

export default AccountForm;
