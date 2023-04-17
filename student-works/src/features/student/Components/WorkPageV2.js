import React from "react";
import { connect } from "react-redux";
import { studentEdited } from "../studentSlice";
import { Spinner } from "reactstrap";
import "../style/editPage.css";

class WorkPageV2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      studentForm: {},
      isSpinner: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    let stud = this.props.students.find((el) => el.id === this.props.id);
    this.setState({ student: stud, studentForm: stud });
  }

  componentWillUnmount() {
    this.setState({ studentForm: {} });
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      studentForm: { ...this.state.studentForm, [name]: value },
    });
  }

  handleClick() {
    this.props.edit(this.state.studentForm);
    this.setState({ isSpinner: true });
    this.setState({ student: this.state.studentForm });
    setTimeout(() => this.setState({ isSpinner: false }), 3000);
  }

  render() {
    return (
      <div>
        {this.state.isSpinner ? (
          <div className="spinner-edit">
            <Spinner />
          </div>
        ) : (
          <div>
            <div>
              <h2 className="header-edit">Edit form</h2>
              <h3>Student data</h3>
              <div className="student-data">
                <div className="form-part">
                  <label className="label-text" htmlFor="firstName">
                    First name
                  </label>
                  <input
                    id="firstName"
                    className="text-input"
                    placeholder="First name"
                    type="text"
                    name="firstName"
                    onChange={this.handleChange}
                    value={this.state.studentForm.firstName}
                  />
                </div>
                <div className="form-part">
                  <label className="label-text" htmlFor="lastName">
                    Last name
                  </label>
                  <input
                    id="lastName"
                    className="text-input"
                    placeholder="Last name"
                    type="text"
                    name="lastName"
                    onChange={this.handleChange}
                    value={this.state.studentForm.lastName}
                  />
                </div>
                <div className="form-part">
                  <label className="label-text" for="group">
                    Group
                  </label>
                  <select
                    id="group"
                    className="select-group"
                    type="select"
                    name="group"
                    onChange={this.handleChange}
                    value={this.state.studentForm.group}
                  >
                    <option value="">Select group</option>
                    <option value="1020">1020</option>
                    <option value="1025">1025</option>
                  </select>
                </div>
              </div>
              <h3>Answer part</h3>
              <div className="form-part topic">
                <legend className="label-text topic-label">Topic:</legend>
                <div className="radio-control">
                  <input
                    id="BelarusianCulture"
                    className="input-radio"
                    type="radio"
                    name="topic"
                    value="Belarusian culture"
                    onChange={this.handleChange}
                    checked={
                      "Belarusian culture" === this.state.studentForm.topic
                    }
                  />
                  <label
                    className="label-radio"
                    check
                    htmlFor="BelarusianCulture"
                  >
                    Belarusian culture
                  </label>
                </div>
                <div className="radio-control">
                  <input
                    id="EcologicalProblems"
                    className="input-radio"
                    type="radio"
                    name="topic"
                    value="Ecological problems"
                    onChange={this.handleChange}
                    checked={
                      "Ecological problems" === this.state.studentForm.topic
                    }
                  />
                  <label
                    check
                    htmlFor="EcologicalProblems"
                    className="label-radio"
                  >
                    Ecological problems
                  </label>
                </div>
                <div className="radio-control">
                  <input
                    id="LiveOnOtherPlanets"
                    className="input-radio"
                    type="radio"
                    name="topic"
                    value="Live on other planets"
                    onChange={this.handleChange}
                    checked={
                      "Live on other planets" === this.state.studentForm.topic
                    }
                  />
                  <label
                    check
                    htmlFor="LiveOnOtherPlanets"
                    className="label-radio"
                  >
                    Live on other planets
                  </label>
                </div>
              </div>
              <div className="form-part">
                <label className="label-text" htmlFor="answer">
                  Answer
                </label>
                <textarea
                  id="answer"
                  className="textarea-input"
                  placeholder="Answer"
                  type="textarea"
                  name="answer"
                  value={this.state.studentForm.answer}
                />
              </div>
              <button className="edit-submit" onClick={this.handleClick}>
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  students: state.students.students,
});

const mapDispatchToProps = (dispatch) => {
  return {
    edit: (value) => dispatch(studentEdited(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkPageV2);
