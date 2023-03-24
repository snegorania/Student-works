import React from "react";
import { useState } from "react";
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Spinner } from 'reactstrap';
import { Label, FormGroup, Input, Col } from 'reactstrap';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import 'bootstrap/dist/css/bootstrap.min.css';

function EditModal(props) {

    const [loading, setLoading] = useState(false);
    const [edited, setEdited] = useState(false);
    const [student, setStudent] = useState({});
    
    const initialValues = {
      FirstName: props.student.FirstName,
      LastName: props.student.LastName,
      group: props.student.group,
      topic: props.student.topic,
      answer: props.student.answer
    };

    const validationSchema = Yup.object({
      FirstName: Yup.string().required('Required'),
      LastName: Yup.string().required('Required'),
      group: Yup.string().required('Required'),
      topic: Yup.string().required('Required'),
      answer: Yup.string().required('Required')
    })

    const onSubmit = (values, onSubmitProps) => {
      setStudent({
        ...props.student,
        FirstName: values.FirstName,
        LastName: values.LastName,
        group: values.group,
        topic: values.topic,
        answer: values.answer
      });
      props.editStudent({
        ...props.student,
        FirstName: values.FirstName,
        LastName: values.LastName,
        group: values.group,
        topic: values.topic,
        answer: values.answer
      });

      setLoading(true);
      onSubmitProps.setSubmitting(false);
      setTimeout(() => setEdited(true), 3000);
    }

    const resetModal = () => {
        props.toggleEdit();
        setTimeout(() => setLoading(false), 1000);
        setTimeout(() => setEdited(false), 1000);
        setStudent({});
    }

    return(
      <Modal isOpen={props.editModal} toggle={props.toggleEdit} >
      <ModalHeader toggle={props.toggleEdit}>Edit work</ModalHeader>
      {
        (edited) ? 
        <div>
          <ModalBody>
            Student {student.id} was edited. Now student {student.id} is first name: {student.FirstName}, 
            last name: {student.LastName}, group: {student.group}, topic: {student.topic}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={resetModal}>Ok</Button>
          </ModalFooter>
        </div> :
        <div>
        {
            (loading) ?
              <Spinner className="m-5" color="info">Loading...</Spinner> :
              <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {formik => {
                  return(
                    <Form>
                <ModalBody>
                    <FormGroup>
                      <Label for="FirstName">First name</Label>
                      <Field name='FirstName'>
                        {
                          props => {
                            const {field, meta} = props;
                            return(
                              <div>
                                <Input id="FirstName" placeholder="First name" type="text" {...field} />
                                {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
                              </div>
                            );
                          }
                        }
                      </Field>
                    </FormGroup>

                    <FormGroup>
                      <Label for="LastName">Last name</Label>
                      <Field name='LastName'>
                        {
                          props => {
                            const {field, meta} = props;
                            return(
                              <div>
                                <Input id="LastName" placeholder="Last name" type="text" {...field} />
                                {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
                              </div>
                            );
                          }
                        }
                      </Field>
                    </FormGroup>

                    <FormGroup>
                      <Label for="group">Group</Label>
                      <Field name='group'>
                        {
                          props => {
                            const {field, meta} = props;
                            return(
                              <div>
                                <Input id="group" type="select" {...field}>
                                  <option value="">Select group</option>
                                  <option value="1020">1020</option>
                                  <option value="1025">1025</option>
                                </Input>
                                {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
                              </div>
                            );
                          }
                        }
                      </Field>
                    </FormGroup>

                    <FormGroup row tag="fieldset">
                      <legend className="col-form-label col-sm-2">Topic</legend>
                      <Field name='topic'>
                        {
                          props => {
                            const {field, meta} = props;
                            return(
                              <div>
                                <Col sm={10}>
                                  <FormGroup check>
                                    <Input id="BelarusianCulture" type="radio" {...field} value="Belarusian culture" checked={field.value === "Belarusian culture"} />
                                    <Label check>Belarusian culture</Label>
                                  </FormGroup>
                                  <FormGroup check>
                                    <Input id="EcologicalProblems" type="radio" {...field} value="Ecological problems" checked={field.value === "Ecological problems"} />
                                    <Label check>Ecological problems</Label>
                                  </FormGroup>
                                  <FormGroup check>
                                    <Input id="LiveOnOtherPlanets" type="radio" {...field} value="Live on other planets" checked={field.value === "Live on other planets"}/>
                                    <Label check>Live on other planets</Label>
                                  </FormGroup>
                                </Col>
                                {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
                              </div>
                            );
                          }
                        }
                      </Field>
                      
                    </FormGroup>

                    <FormGroup>
                      <Label for="answer">Text Area</Label>
                      <Field name='answer'>
                        {
                          props => {
                            const {field, meta} = props;
                            return(
                              <div>
                                <Input id="answer" placeholder="Answer" type="textarea" {...field} />
                                {meta.touched && meta.error ? <div className="error">{meta.error}</div> : null}
                              </div>
                            );
                          }
                        }
                      </Field>
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" type='submit' disabled={!formik.isValid || formik.isSubmitting}>Edit</Button>
                  <Button color="secondary" onClick={props.toggleEdit}>Cancel</Button>
                </ModalFooter>
              </Form>
                  );
                }
                }
                
              </Formik>
              
          }
        </div>
      }

    </Modal>
      );

}

EditModal.propTypes = {
  toggleEdit: PropTypes.func,
  EditModal: PropTypes.bool,
  EditStudent: PropTypes.func,
  student: PropTypes.exact({
    id: PropTypes.string,
    LastName: PropTypes.string,
    group: PropTypes.string,
    topic: PropTypes.string,
    answer: PropTypes.string
  })
}

export default EditModal;