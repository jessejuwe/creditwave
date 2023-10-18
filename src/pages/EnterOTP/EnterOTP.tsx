import React, { useEffect, useState } from 'react';
import { FaUnlock } from 'react-icons/fa';
import { SiStartrek } from 'react-icons/si';
import { Button } from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import { motion } from 'framer-motion';

import { Card } from '../../exports/exports';
import './EnterOTP.scss';

type InitialValue = { otp: string };
type Timer = { min: string; sec: string };

const initialValue: InitialValue = { otp: '' };

const EnterOTP: React.FC = () => {
  const [timer, setTimer] = useState<Timer>({ min: '', sec: '' });
  const [timeLeft, setTimeLeft] = useState<number>(120);

  function convertTimeLeft(seconds: number) {
    // converting remaining time to minute(s) & second(s)
    const min = `${Math.trunc(seconds / 60)}`.padStart(2, '0');
    const sec = `${seconds % 60}`.padStart(2, '0');

    // set timer state
    setTimer({ min, sec });
  }

  useEffect(() => {
    // exit early when timeLeft reaches 0
    if (timeLeft === 0) {
      convertTimeLeft(timeLeft);
      return;
    }

    convertTimeLeft(timeLeft);

    // save interval variable to clear the interval function when the component re-renders
    const tick = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    // clear interval on re-render to avoid memory leaks
    return () => clearInterval(tick);
  }, [timeLeft]);

  const submitHandler = (otp: string) => {};

  return (
    <motion.div
      className="app__enter-otp"
      key="app__enter-otp"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
        ease: 'easeInOut',
        delayChildren: 0.5,
      }}
    >
      <div className="centered">
        <h1 className="logo">
          <SiStartrek /> Adroit
        </h1>

        <Card className="card">
          <div className="unlock">
            <FaUnlock />
          </div>

          <h3>Verify Login</h3>
          <p>
            Enter the six [6] digit verification code sent to +234913*****4 and
            A*****@creditwave.com to continue
          </p>

          <Formik
            initialValues={initialValue}
            onSubmit={(values, actions) => {
              actions.setSubmitting(true);

              const otp = values.otp;

              submitHandler(otp);

              actions.setSubmitting(false);
              actions.resetForm();
            }}
          >
            {({ isSubmitting, isValid }) => (
              <Form>
                <div className="input-group">
                  <Field
                    type="text"
                    name="otp"
                    placeholder="Verification code"
                  />
                  <p className="timer">{`${timer.min}:${timer.sec}`}</p>
                </div>

                <Button
                  variant="solid"
                  type="submit"
                  isDisabled={!isValid || isSubmitting}
                  width="full"
                  isLoading={isSubmitting}
                  loadingText="Submitting.."
                >
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Card>
      </div>
    </motion.div>
  );
};

export default EnterOTP;
