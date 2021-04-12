import React, { useState } from "react";

const FormAddPeople = ({ createPerson }) => {
  const [valuesNewPerson, setValuesNewPerson] = useState({
    firstName: "",
    lastName: "",
  });

  const handleClickAddPerson = () => {
    createPerson(valuesNewPerson.firstName, valuesNewPerson.lastName);
    setValuesNewPerson({
      firstName: "",
      lastName: "",
    });
  };

  return (
    <div className="wrapper-form">
      <input
        type="text"
        placeholder="Your First Name"
        onChange={(e) =>
          setValuesNewPerson({
            ...valuesNewPerson,
            firstName: e.target.value,
          })
        }
        value={valuesNewPerson.firstName}
      />

      <input
        type="text"
        placeholder="Your Last Name"
        value={valuesNewPerson.lastName}
        onChange={(e) =>
          setValuesNewPerson({
            ...valuesNewPerson,
            lastName: e.target.value,
          })
        }
      />
      <button className="button add-button" onClick={handleClickAddPerson}>
        Add New Person
      </button>
    </div>
  );
};

export default FormAddPeople;
