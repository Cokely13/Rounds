import React, { Component } from "react";
import { createCampus } from "../redux/campuses";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class AddCampus extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createCampus({ ...this.state });
    this.setState({
      name: "",
      address: "",
    })
  }

  render() {
    const { name, address } = this.state;
    const { handleSubmit } = this;

    return (
      <div className="addCampus">
      <span>
      <div className="actionHeader"> ADD CAMPUS</div>
      </span>
      <form className="forms" id="addCampus-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input name="name" value={name} onChange={this.handleChange} />

        <label htmlFor="address">Address:</label>
        <input name="address" value={address} onChange={this.handleChange} />
        <button type="submit">Submit</button>
        <Link to="/">Cancel</Link>
      </form>
      </div>
    );
  }
}


const mapDispatchToProps = (dispatch, { history }) => ({
  createCampus: (campus) => dispatch(createCampus(campus, history)),
});

export default connect(null, mapDispatchToProps)(AddCampus);
