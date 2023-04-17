import React from "react";
import "../../../App.css";
import PropTypes from "prop-types";
import { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Spinner,
} from "reactstrap";
import { Label, FormGroup, Input, Col } from "reactstrap";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";

function AddModal(props) {
  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);
  const [student, setStudent] = useState({});

  const initialValues = {
    firstName: "",
    lastName: "",
    group: "",
    topic: "",
    answer: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    group: Yup.string().required("Required"),
    topic: Yup.string().required("Required"),
    answer: Yup.string().required("Required"),
  });

  const onSubmit = (values, onSubmitProps) => {
    setStudent({
      ...props.student,
      firstName: values.firstName,
      lastName: values.lastName,
      group: values.group,
      topic: values.topic,
      answer: values.answer,
    });
    props.addStudent({
      ...props.student,
      firstName: values.firstName,
      lastName: values.lastName,
      group: values.group,
      topic: values.topic,
      answer: values.answer,
    });
    setLoading(true);
    onSubmitProps.setSubmitting(false);
    setTimeout(() => setAdded(true), 3000);
  };

  const resetModal = () => {
    props.toggleAdd();
    setTimeout(() => setLoading(false), 1000);
    setTimeout(() => setAdded(false), 1000);
    setStudent({});
  };

  return (
    <Modal isOpen={props.addModal} toggle={props.toggleAdd}>
      <ModalHeader toggle={props.toggleAdd}>Add work</ModalHeader>
      {added ? (
        <div>
          <ModalBody>
            Student {student.id} was added. Student {student.id} is first name:{" "}
            {student.firstName}, last name: {student.lastName}, group:{" "}
            {student.group}, topic: {student.topic}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={resetModal}>
              Ok
            </Button>
          </ModalFooter>
        </div>
      ) : (
        <div>
          {loading ? (
            <div className="spinner-modal">
              <Spinner className="m-5" color="info">
                Loading...
              </Spinner>
            </div>
          ) : (
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              {(formik) => {
                return (
                  <Form>
                    <ModalBody>
                      <FormGroup>
                        <Label for="firstName">First name</Label>
                        <Field name="firstName">
                          {(props) => {
                            const { field, meta } = props;
                            return (
                              <div>
                                <Input
                                  id="firstName"
                                  placeholder="First name"
                                  type="text"
                                  {...field}
                                />
                                {meta.touched && meta.error ? (
                                  <div className="error">{meta.error}</div>
                                ) : null}
                              </div>
                            );
                          }}
                        </Field>
                      </FormGroup>

                      <FormGroup>
                        <Label for="lastName">Last name</Label>
                        <Field name="lastName">
                          {(props) => {
                            const { field, meta } = props;
                            return (
                              <div>
                                <Input
                                  id="lastName"
                                  placeholder="Last name"
                                  type="text"
                                  {...field}
                                />
                                {meta.touched && meta.error ? (
                                  <div className="error">{meta.error}</div>
                                ) : null}
                              </div>
                            );
                          }}
                        </Field>
                      </FormGroup>

                      <FormGroup>
                        <Label for="group">Group</Label>
                        <Field name="group">
                          {(props) => {
                            const { field, meta } = props;
                            return (
                              <div>
                                <Input id="group" type="select" {...field}>
                                  <option value="">Select group</option>
                                  <option value="1020">1020</option>
                                  <option value="1025">1025</option>
                                </Input>
                                {meta.touched && meta.error ? (
                                  <div className="error">{meta.error}</div>
                                ) : null}
                              </div>
                            );
                          }}
                        </Field>
                      </FormGroup>

                      <FormGroup row tag="fieldset">
                        <legend className="col-form-label col-sm-2">
                          Topic
                        </legend>
                        <Field name="topic">
                          {(props) => {
                            const { field, meta } = props;
                            return (
                              <div>
                                <Col sm={10}>
                                  <FormGroup check>
                                    <Input
                                      id="BelarusianCulture"
                                      type="radio"
                                      {...field}
                                      value="Belarusian culture"
                                      checked={
                                        field.value === "Belarusian culture"
                                      }
                                    />
                                    <Label htmlFor="BelarusianCulture" check>
                                      Belarusian culture
                                    </Label>
                                  </FormGroup>
                                  <FormGroup check>
                                    <Input
                                      id="EcologicalProblems"
                                      type="radio"
                                      {...field}
                                      value="Ecological problems"
                                      checked={
                                        field.value === "Ecological problems"
                                      }
                                    />
                                    <Label htmlFor="EcologicalProblems" check>
                                      Ecological problems
                                    </Label>
                                  </FormGroup>
                                  <FormGroup check>
                                    <Input
                                      id="LiveOnOtherPlanets"
                                      type="radio"
                                      {...field}
                                      value="Live on other planets"
                                      checked={
                                        field.value === "Live on other planets"
                                      }
                                    />
                                    <Label htmlFor="LiveOnOtherPlanets" check>
                                      Live on other planets
                                    </Label>
                                  </FormGroup>
                                </Col>
                                {meta.touched && meta.error ? (
                                  <div className="error">{meta.error}</div>
                                ) : null}
                              </div>
                            );
                          }}
                        </Field>
                      </FormGroup>

                      <FormGroup>
                        <Label for="answer">Text Area</Label>
                        <Field name="answer">
                          {(props) => {
                            const { field, meta } = props;
                            return (
                              <div>
                                <Input
                                  id="answer"
                                  placeholder="Answer"
                                  type="textarea"
                                  {...field}
                                />
                                {meta.touched && meta.error ? (
                                  <div className="error">{meta.error}</div>
                                ) : null}
                              </div>
                            );
                          }}
                        </Field>
                      </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                      <Button
                        color="primary"
                        type="submit"
                        disabled={!formik.isValid || formik.isSubmitting}
                      >
                        Add
                      </Button>
                      <Button color="secondary" onClick={props.toggleAdd}>
                        Cancel
                      </Button>
                    </ModalFooter>
                  </Form>
                );
              }}
            </Formik>
          )}
        </div>
      )}
    </Modal>
  );
}

AddModal.propTypes = {
  toggleAdd: PropTypes.func,
  addModal: PropTypes.bool,
  addStudent: PropTypes.func,
  student: PropTypes.exact({
    id: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    group: PropTypes.string,
    topic: PropTypes.string,
    answer: PropTypes.string,
  }),
};

export default AddModal;
