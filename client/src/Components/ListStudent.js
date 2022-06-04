import React from "react";
import axios from "axios";

class Liststudent extends React.Component {
  state = {
    students: [],
    ufirstname: "",
    ulastname: "",
    uplace: "",
  };

  getStudent = () => {
    axios.get(`${process.env.DB_URI}/`).then((res) => {
      console.log(res);
      this.setState({ students: res.data });
    });
  };

  componentDidMount = () => {
    this.getStudent();
  };

  handleDelete = (id) => {
    axios.delete(`${process.env.DB_URI}/students/${id}`).then((res) => {
      console.log(res);
      window.location = "/";
    });
  };

  handleUpdate = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        {this.state.students.map((students) => (
          <div
            key={students._id}
            class="card"
            style={{
              borderRadius: "10px",
              backgroundColor: "whitesmoke",
              display: "inline-block",
              padding: "5px",
              marginLeft: "15px",
              marginTop: "10px",
            }}
          >
            <div class="card-body">
              <h2>First Name: {students.firstname}</h2>
              <h2>Last Name: {students.lastname}</h2>
              <h2>Place: {students.place}</h2>
              <div class="container" style={{ display: "inline" }}>
                <button
                  type="button"
                  class="btn btn-warning"
                  data-toggle="modal"
                  data-target="#myModal"
                  onClick={() => {
                    this.setState({
                      ufirstname: students.firstname,
                      ulastname: students.lastname,
                      uplace: students.place,
                    });
                  }}
                >
                  UPDATE
                </button>
                <button
                  type="button"
                  class="btn btn-danger"
                  onClick={() => this.handleDelete(students._id)}
                  style={{ marginLeft: "20px" }}
                >
                  DELETE
                </button>
                <div class="modal fade" id="myModal" role="dialog">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <button
                          type="button"
                          class="close"
                          data-dismiss="modal"
                        >
                          &times;
                        </button>
                        <h4 class="modal-title">UPDATE</h4>
                      </div>
                      <div class="modal-body">
                        <input
                          required
                          onChange={(e) => this.handleUpdate(e)}
                          name="ufirstname"
                          value={this.state.ufirstname}
                          style={{
                            fontSize: "19px",
                            fontFamily: "cursive,sans-serif,Gugi",
                            borderRadius: "10px",
                            marginBottom: "20px",
                          }}
                          placeholder="First Name"
                          class="form-control"
                        />
                        <input
                          required
                          onChange={(e) => this.handleUpdate(e)}
                          name="ulastname"
                          value={this.state.ulastname}
                          style={{
                            fontSize: "19px",
                            fontFamily: "cursive,sans-serif,Gugi",
                            borderRadius: "10px",
                            marginBottom: "20px",
                          }}
                          placeholder="Last Name"
                          class="form-control"
                        />
                        <input
                          required
                          onChange={(e) => this.handleUpdate(e)}
                          name="uplace"
                          value={this.state.uplace}
                          style={{
                            fontSize: "19px",
                            fontFamily: "cursive,sans-serif,Gugi",
                            borderRadius: "10px",
                            marginBottom: "20px",
                          }}
                          placeholder="Place"
                          class="form-control"
                        />
                      </div>
                      <div class="modal-footer">
                        <button type="button" class="btn btn-warning">
                          Update
                        </button>
                        <button
                          type="button"
                          class="btn btn-danger"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Liststudent;
