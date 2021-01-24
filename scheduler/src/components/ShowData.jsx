import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Container from '@material-ui/core/Container';
import { getUserData } from "../api";
// import Loader from "./Loader";

const ShowData = () => {
  const [studentData, setStudentData] = useState([]);
  //   const [loading, setLoading] = useState(false);

  const fetchData = () => {
    // setLoading(true);
    getUserData().then((data) => {
      if (data.error) {
        // setLoading(false);
        console.log(data.error);
      } else {
        // setLoading(false);
        setStudentData(data);
      }
    });
  };

  useEffect(() => {
    //   setTimeout(()=>{fetchData();},10000)
    fetchData();
  }, []);

  //   const showLoading = () =>  <Loader />;
    const DataCount = () => {
      if (studentData.count > 0) {
        return (
            <div>
          <label
            style={{
              fontSize: "large",
              fontWeight: "bolder",
              textTransform: "uppercase",
              color: "green",
            }}
          >
            Total Data: {studentData.count}
          </label>
          <p>To see the Data in the Database paste this link in mongoDB compass :<strong>" mongodb+srv://admin:1234@testdb.u5upo.mongodb.net/testdb?retryWrites=true&w=majority "</strong></p>
          </div>
        );
      } else {
        return (
          <label
            style={{
              fontSize: "large",
              fontWeight: "bolder",
              textTransform: "uppercase",
              color: "red",
            }}
          >
            Total Data : 0
          </label>
        );
      }
    };

  const goBack = () => (
    <Link to="/" className="btn btn-dark">
      <i className="fas fa-arrow-left" style={{ fontSize: "x-large", color:"black" }}></i>
    </Link>
  );
//  const displayData = ()=>{
//      if(studentData===[]){
//          return (<div>{showLoading()}</div>)
//      }else{
//         studentData.data.map((o, oIn) => {
//             return (
//               <Fragment key={oIn}>
//                 <label>Student Data</label>
//                 <table style={{ width: "100%" }}>
//                   <thead>
//                     <tr>
//                       <th>Srl.No</th>
//                       <th>Name</th>
//                       <th>Remarks</th>
//                       <th>Subject</th>
//                     </tr>
//                   </thead>
  
//                   <tbody>
//                     <tr>
//                       <td>{o._id}</td>
//                       <td>{o.studentName}</td>
//                       <td>
//                         {" "}
//                         <table className="mb-5" style={{ width: "100%" }}>
//                           {o.subjects.map((p, pId) => (
//                             <Fragment key={pId}>
//                               <thead>
//                                 <tr>
//                                   <th>Subject Name</th>
//                                   <th>Subject Marks</th>
//                                 </tr>
//                               </thead>
//                               <tbody>
//                                 <tr>
//                                   <td>{p.name}</td>
//                                   <td>{p.marks}</td>
//                                 </tr>
//                               </tbody>
//                             </Fragment>
//                           ))}
//                         </table>
//                       </td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </Fragment>
//             );
//           })
//      }
//  }
  return (
    <Container maxWidth="sm">
      <div>
        <label
          style={{
            fontSize: "x-large",
            fontWeight: "bolder",
            textTransform: "uppercase",
          }}
        >
          {goBack()} Add Another Student Data
        </label>
        <hr />
        {/* {showLoading() ? showLoading() : DataCount()} */}
        {console.log(studentData)}
        {/* {studentData.count} */}
        {DataCount()}
        
      </div>
    </Container>
  );
};

export default ShowData;
