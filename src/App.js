import React, { useState } from "react";
import Table from "./Table";
import FormAddPeople from "./Form";
import { defaultPeople } from "./data";
import "./App.css";

function App() {
  const [people, setPeople] = useState(defaultPeople);

  const createPerson = (firstName, lastName) => {
    if (firstName === "" || lastName === "") {
      return;
    }

    const newAddedPerson = {
      id: parseInt(Math.random() * 10000),
      firstName: firstName,
      lastName: lastName,
    };

    const newArrayWithPersons = [...people, newAddedPerson];

    setPeople(newArrayWithPersons);
  };

  const handleRemovePerson = (id) => {
    const newArrayPersons = people.filter((person) => person.id !== id);
    setPeople(newArrayPersons);
  };

  return (
    <div className="App">
      <div className="container">
        <h2 className="title">People Already Here</h2>
        <Table people={people} handleRemovePerson={handleRemovePerson} />
        <FormAddPeople createPerson={createPerson} />
      </div>
    </div>
  );
}

export default App;
