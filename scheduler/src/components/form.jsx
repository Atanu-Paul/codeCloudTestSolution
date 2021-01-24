import React from "react";
import { Link } from "react-router-dom";
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Inputs from "./InputFieldsComp";
import { signup } from "../api";

//class component to render the dynaminc form and submit the data to the database
class Form extends React.Component {
  state = {
    subjects: [{ name: "", marks: "" }],
    studentName: "",
    remarks: "",
  };

  handleChange = (e) => {
    if (["name", "marks"].includes(e.target.className)) {
      let subjects = [...this.state.subjects];
      subjects[e.target.dataset.id][
        e.target.className
      ] = e.target.value.toUpperCase();
      this.setState({ subjects }, () => console.log(this.state.subjects));
    } else {
      this.setState({ [e.target.name]: e.target.value.toUpperCase() });
    }
  };
  addStudent = (e) => {
    this.setState((prevState) => ({
      subjects: [...prevState.subjects, { name: "", marks: "" }],
    }));
  };
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    let studentData = this.state;
    signup(studentData).then((data) => {
      if (!data.error) {
        this.setState({
          subjects: [{ name: "", marks: "" }],
          studentName: "",
          remarks: "",
        });
      }
    });
  };
  render() {
    let { studentName, remarks, subjects } = this.state;
    return (
      <Container maxWidth="sm">
        <Link to="/showData" className="btn btn-dark" style={{float:'right'}}>
          <i className="fas fa-arrow-right" style={{ fontSize: "x-large", color:"black" }}></i>
        </Link>
        <h2>See Total Data</h2>
        <hr/>
        <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <h3>Students Details</h3>
          <div>
            {/* <label htmlFor="name">Student Name</label> */}
            <TextField
              type="text"
              name="studentName"
              id="studentName"
              label="Student Name"
              value={studentName}
            />
            {/* <label htmlFor="remarks">Remarks</label> */}
            <TextField type="text" name="remarks" id="remarks" label="Remarks" value={remarks} />
            <Fab onClick={this.addStudent}><AddIcon/></Fab>
          </div>
          <div>
          <Inputs subjects={subjects} />
          </div>
          <hr />
          <TextField type="submit" value="Submit" variant="outlined"/>
        </form>
      </Container>
    );
  }
}
export default Form;
