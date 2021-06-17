import * as Yup from 'yup';
import { Formik } from 'formik';
import { Button, Card, Col, Form } from 'react-bootstrap';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { login } from '../../../services/auth/actions';

import './LoginStyles.scss';

const Login: React.FunctionComponent = (): React.ReactElement => {
    const history = useHistory();
    const dispatch = useDispatch();

    const formLoginSchema = Yup.object().shape({
        email: Yup.string().required('This field is required').email('Invalid email format'),
        password: Yup.string().required('This field is required'),
    });

    const handleLogin = (values: { email: string; password: string }) => {
        dispatch(login(values));
        history.push('/');
    };

    return (
        <div className="container">
            <Col className="mt-5 mb-5">
                <Card className="admin-login__container">
                    <Card.Body>
                        <h3 className="text-center my-5">Administrator Login</h3>
                        <Formik
                            initialValues={{ email: '', password: '' }}
                            validateOnChange
                            validationSchema={formLoginSchema}
                            enableReinitialize
                            onSubmit={(values) => {
                                handleLogin(values);
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
                                    <Form.Group controlId="formEmail">
                                        <Form.Label>Email Address</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Email"
                                            onChange={handleChange}
                                            name="email"
                                            value={values.email}
                                        />
                                        {touched.email && errors.email && (
                                            <Form.Text className="text-danger">{errors.email}</Form.Text>
                                        )}
                                    </Form.Group>
                                    <Form.Group controlId="formPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            name="password"
                                            onChange={handleChange}
                                            value={values.password}
                                        />
                                        {touched.password && errors.password && (
                                            <Form.Text className="text-danger">{errors.password}</Form.Text>
                                        )}
                                    </Form.Group>
                                    <Button
                                        variant="dark"
                                        className="black-button"
                                        block
                                        onClick={() => handleSubmit()}
                                    >
                                        Login
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

export default Login;
