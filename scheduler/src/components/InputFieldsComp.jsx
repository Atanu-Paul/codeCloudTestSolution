import React from "react";

const Inputs = (props) => {
  return props.subjects.map((val, idx) => {
    let name = `name{idx}`,
      marks = `marks-${idx}`;
    return (
      <div key={idx}>
        <label htmlFor={name}>{`Subject #${idx + 1}`}</label>
        <input
          type="text"
          name={name}
          data-id={idx}
          id={name}
          value={props.subjects[idx].name}
          className="name"
        />
        <label htmlFor={marks}>Marks</label>
        <input
          type="number"
          name={marks}
          data-id={idx}
          id={marks}
          value={props.subjects[idx].marks}
          className="marks"
        />
      </div>
    );
  });
};
export default Inputs;
