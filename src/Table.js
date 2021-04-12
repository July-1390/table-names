import React, { useState } from "react";

const Table = ({ people, handleRemovePerson }) => {
  const [activeRowId, setActiveRowId] = useState(null);

  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {people.map((person) => (
          <tr
            key={person.id}
            onMouseEnter={() => setActiveRowId(person.id)}
            onMouseLeave={() => setActiveRowId(null)}
            className={`${activeRowId === person.id ? "active-row" : ""}`}
          >
            <td>{person.firstName}</td>
            <td>{person.lastName}</td>

            <button
              className={`delete-button ${
                activeRowId === person.id ? "visible" : ""
              }`}
              onClick={() => handleRemovePerson(person.id)}
            >
              Delete
            </button>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
