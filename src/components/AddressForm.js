import React, { useEffect } from "react";

const AddressForm = ({ country, zip, setInput, setIsValid }) => {
  useEffect(() => {
    if (country.length > 0 && zip?.length > 0) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [country, zip]);

  return (
    <>
      <input
        name="country"
        type="text"
        value={country}
        placeholder="Country"
        onChange={(e) => setInput(e)}
      />
      <input
        name="zip"
        type="number"
        value={zip === null ? undefined : zip}
        placeholder="Zip Code"
        onChange={(e) => setInput(e)}
      />
    </>
  );
};

export default AddressForm;
