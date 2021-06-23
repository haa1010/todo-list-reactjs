import React from 'react';
import * as Yup from 'yup';
import { Formik, Field } from 'formik';
import { Button, Card, Col, Form } from 'react-bootstrap';
import './TodoModal.scss';

import { TodoInfo } from '../../services/todo/types';

interface TodoModal {
    title: string;
    onSubmitHandler: (value: TodoInfo) => void;
    onCloseModal: () => void;
    item?: TodoInfo;
}

const Editable: React.FC<TodoModal> = ({ title, onSubmitHandler, onCloseModal, item }) => {
    const formTodoSchema = Yup.object().shape({
        title: Yup.string().required('This field is required'),
        userId: Yup.string().required('This field is required'),
    });

    item = item ? item : { id: 1, title: '', userId: 1, completed: false };

    return (
        <div className="card">
            <Col className="mt-5 mb-5">
                <Card className="admin-login__container">
                    <Card.Body>
                        <h3 className="text-center my-5">{title}</h3>
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
                                onSubmitHandler(values);
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

                                    <Form.Group>
                                        <label>
                                            <Field type="checkbox" name="completed" />
                                            Completed
                                        </label>
                                    </Form.Group>
                                    <Button variant="primary" block onClick={() => handleSubmit()}>
                                        Submit
                                    </Button>
                                    <Button variant="danger" block onClick={() => onCloseModal()}>
                                        Cancel
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
