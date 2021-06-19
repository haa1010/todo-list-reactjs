import React from 'react';
import * as Yup from 'yup';
import { Formik, Field } from 'formik';
import { Button, Card, Col, Form } from 'react-bootstrap';
import './Editable.scss';

import { TodoInfo } from '../../services/todo/types';

const Editable = (props: any) => {
    const formTodoSchema = Yup.object().shape({
        title: Yup.string().required('This field is required'),
        userId: Yup.string().required('This field is required'),
        completed: Yup.bool().required('This field is required'),
    });

    const item = props.item ? props.item : { id: 1, title: '', userId: 1, completed: false };

    return (
        <div className="card">
            <Col className="mt-5 mb-5">
                <Card className="admin-login__container">
                    <Card.Body>
                        <h3 className="text-center my-5">{props.title}</h3>
                        <Formik
                            initialValues={{
                                id: item.id,
                                title: item.title,
                                userId: item.userId,
                                completed: item.completed,
                            }}
                            validateOnChange
                            validationSchema={formTodoSchema}
                            enableReinitialize
                            onSubmit={(values: TodoInfo) => {
                                values.completed = '' + values.completed === 'true' ? true : false;
                                props.onSubmitHandler(values);
                            }}
                            onChange={(values: TodoInfo) => {
                                console.log(values);
                            }}
                        >
                            {({ handleSubmit, handleChange, values, touched, errors }) => (
                                <Form
                                    className="my-5"
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            handleSubmit();
                                        }
                                    }}
                                >
                                    <Form.Group controlId="formUserId">
                                        <Form.Label>User Id</Form.Label>
                                        <Form.Control
                                            type="number"
                                            placeholder="user id"
                                            name="userId"
                                            onChange={handleChange}
                                            value={values.userId}
                                        />
                                        {touched.userId && errors.userId && (
                                            <Form.Text className="text-danger">{errors.userId}</Form.Text>
                                        )}
                                    </Form.Group>

                                    <Form.Group controlId="formTitle">
                                        <Form.Label>Title</Form.Label>
                                        <Form.Control
                                            type="title"
                                            placeholder="title"
                                            onChange={handleChange}
                                            name="title"
                                            value={values.title}
                                        />
                                        {touched.title && errors.title && (
                                            <Form.Text className="text-danger">{errors.title}</Form.Text>
                                        )}
                                    </Form.Group>

                                    <Form.Group controlId="formCompleted" role="group">
                                        <Form.Label className="completed">Completed</Form.Label>
                                        <Field
                                            name="completed"
                                            value="true"
                                            className="mr-2 leading-tight"
                                            type="radio"
                                            checked={'' + values.completed === 'true'}
                                        />
                                        <span className="text-sm true-ratio">Yes</span>
                                        <Field
                                            name="completed"
                                            value="false"
                                            className="mr-2 leading-tight"
                                            type="radio"
                                            checked={'' + values.completed === 'false'}
                                        />
                                        <span className="text-sm">Not yet</span>
                                        {/* </label> */}
                                    </Form.Group>

                                    <Button variant="secondary" block onClick={() => props.onCloseModal()}>
                                        Cancel
                                    </Button>
                                    <Button variant="primary" block onClick={() => handleSubmit()}>
                                        Submit
                                    </Button>
                                </Form>
                            )}
                        </Formik>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Editable;
