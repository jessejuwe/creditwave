import React, { useState } from 'react';
import { BiHide, BiShow } from 'react-icons/bi';
import { SiStartrek } from 'react-icons/si';
import { Button } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import { motion } from 'framer-motion';

import SignInModel from '../../model/SignIn';
import { SignInSchema } from '../../utils/validationSchema';
import './SignIn.scss';

type InitialValues = { username: string; password: string };

const initialValues: InitialValues = { username: '', password: '' };

const SignIn: React.FC = () => {
  const [isHidden, setIsHidden] = useState<boolean>(true);

  const submitHandler = (userData: SignInModel) => {
    console.log(userData); //TODO: remove side-effect
  };

  const toggleHandler = () => setIsHidden(!isHidden);

  return (
    <motion.div
      className="app__signin"
      key="app__signin"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
        ease: 'easeInOut',
        delayChildren: 0.5,
      }}
    >
      <div className="app__signin-info">
        <h1 className="heading">Adroit</h1>
        <p className="text">
          We evaluate and monitor the non-performing loan accounts and implement
          a recovery action plan to achieve timely and maximum recovery at a
          minimal cost and appropriate turn-around time through acceptable
          common practices aligned with legal framework and standards.
        </p>
      </div>

      <div className="app__signin-input">
        <div className="centered">
          <h1 className="logo">
            <SiStartrek /> Adroit
          </h1>

          <Formik
            initialValues={initialValues}
            validationSchema={SignInSchema}
            onSubmit={(values, actions) => {
              actions.setSubmitting(true);

              const username = values.username;
              const password = values.password;

              const userData = new SignInModel(username, password);

              submitHandler(userData);

              actions.setSubmitting(false);
              actions.resetForm();
            }}
          >
            {({ errors, touched, isSubmitting, setFieldValue, isValid }) => (
              <Form>
                <Field type="text" name="username" placeholder="Username" />

                <div className="input-group">
                  <Field
                    type={isHidden ? 'password' : 'text'}
                    name="password"
                    placeholder="Password"
                  />
                  {isHidden ? (
                    <BiShow onClick={toggleHandler} />
                  ) : (
                    <BiHide onClick={toggleHandler} />
                  )}
                </div>

                <Button
                  variant="solid"
                  type="submit"
                  isDisabled={!isValid || isSubmitting}
                  width="full"
                  isLoading={isSubmitting}
                  loadingText="Logging in.."
                >
                  Login
                </Button>
              </Form>
            )}
          </Formik>
        </div>

        <p className="copyright">
          &copy; 2023 CreditWave Finance Limited | All rights reserved
        </p>
      </div>
    </motion.div>
  );
};

export default SignIn;
