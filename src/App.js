import React, { useState } from "react";
import useMultiStepForm from "./hooks/useMutiStepForm";
import AccountForm from "./components/AccountForm";
import AddressForm from "./components/AddressForm";
import ReviewInfo from "./components/ReviewInfo";
function App() {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    country: "",
    zip: "",
  });

  const onInputChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const [isValid, setIsValid] = useState(false);

  const {
    CurrentStep,
    stepIndex,
    next,
    prev,
    goto,
    stepsLength,
    isFirst,
    isLast,
  } = useMultiStepForm([
    <AccountForm
      setIsValid={setIsValid}
      {...inputs}
      setInput={onInputChange}
    />,
    <AddressForm
      setIsValid={setIsValid}
      {...inputs}
      setInput={onInputChange}
    />,
    <ReviewInfo inputs={inputs} />,
  ]);
  return (
    <div>
      <div> {stepIndex + 1 + "/" + stepsLength} </div>
      <form action="">{CurrentStep}</form>

      <div>
        <button disabled={isFirst} onClick={() => prev()}>
          Prev
        </button>
        <button
          disabled={!isValid}
          onClick={() => {
            if (!isLast) return next();
            ////submit your data here
            alert("Your data is submited");
          }}
        >
          {isLast ? "finish" : "next"}
        </button>
      </div>
    </div>
  );
}

export default App;
