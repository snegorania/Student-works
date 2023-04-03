import React from "react";
import { connect } from "react-redux";
import { studentEdited } from "../studentSlice";
import { Label, FormGroup, Input, Col, Button, Spinner } from "reactstrap";

class WorkPageV2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      student: {},
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
    this.setState({ student: {}, studentForm: {} });
  }

  handleChange({ target: { name, value } }) {
    this.setState({
      studentForm: { ...this.state.studentForm, [name]: value },
    });
  }

  handleClick(e) {
    this.props.edit(this.state.studentForm);
    this.setState({ isSpinner: true });
    setTimeout(() => this.setState({ isSpinner: false }), 3000);
    this.setState({ student: this.state.studentForm });
    e.preventDefault();
  }

  render() {
    const { id, firstName, lastName, group, topic, answer } =
      this.state.student;
    return (
      <div className="wrapper">
        {this.state.isSpinner ? (
          <div className="spinner-edit">
            <Spinner />
          </div>
        ) : (
          <div>
            <h2>Card</h2>
            <ul data-testid="list">
              <li>id: {id}</li>
              <li>First name: {firstName}</li>
              <li>Last name: {lastName}</li>
              <li>group: {group}</li>
              <li>topic: {topic}</li>
              <li>answer:</li>
              <p>{answer}</p>
            </ul>
            <form>
              <h2>Edit form</h2>
              <FormGroup>
                <Label htmlFor="firstName">First name</Label>
                <Input
                  id="firstName"
                  placeholder="First name"
                  type="text"
                  name="firstName"
                  onChange={this.handleChange}
                  value={this.state.studentForm.firstName}
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="lastName">Last name</Label>
                <Input
                  id="lastName"
                  placeholder="Last name"
                  type="text"
                  name="lastName"
                  onChange={this.handleChange}
                  value={this.state.studentForm.lastName}
                />
              </FormGroup>
              <FormGroup>
                <Label for="group">Group</Label>
                <Input
                  id="group"
                  type="select"
                  name="group"
                  onChange={this.handleChange}
                  value={this.state.studentForm.group}
                >
                  <option value="">Select group</option>
                  <option value="1020">1020</option>
                  <option value="1025">1025</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <legend className="col-form-label col-sm-2">Topic</legend>
                <Col sm={10}>
                  <FormGroup check>
                    <Input
                      id="BelarusianCulture"
                      type="radio"
                      name="topic"
                      value="Belarusian culture"
                      onChange={this.handleChange}
                      checked={
                        "Belarusian culture" === this.state.studentForm.topic
                      }
                    />
                    <Label check htmlFor="BelarusianCulture">
                      Belarusian culture
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Input
                      id="EcologicalProblems"
                      type="radio"
                      name="topic"
                      value="Ecological problems"
                      onChange={this.handleChange}
                      checked={
                        "Ecological problems" === this.state.studentForm.topic
                      }
                    />
                    <Label check htmlFor="EcologicalProblems">
                      Ecological problems
                    </Label>
                  </FormGroup>
                  <FormGroup check>
                    <Input
                      id="LiveOnOtherPlanets"
                      type="radio"
                      name="topic"
                      value="Live on other planets"
                      onChange={this.handleChange}
                      checked={
                        "Live on other planets" === this.state.studentForm.topic
                      }
                    />
                    <Label check htmlFor="LiveOnOtherPlanets">
                      Live on other planets
                    </Label>
                  </FormGroup>
                </Col>
              </FormGroup>
              <FormGroup>
                <Label for="answer">Text Area</Label>
                <Input
                  id="answer"
                  placeholder="Answer"
                  type="textarea"
                  name="answer"
                  value={this.state.studentForm.answer}
                />
              </FormGroup>
              <Button color="primary" onClick={this.handleClick}>
                Submit
              </Button>
            </form>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    students: state.students.students,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    edit: (value) => dispatch(studentEdited(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkPageV2);
