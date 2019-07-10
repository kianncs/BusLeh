import React from 'react';
import './style.css'
import { fadeIn } from 'react-animations';
import Radium, {StyleRoot} from 'radium';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import history from '../../history';

import SubmitButton from '../../components/SubmitButton';


const styles = {
  fadeIn: {
    animation: 'x 2s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
}

const InputForm = (props) => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit
  } = props;

  return (
    <StyleRoot>
      <div className="formContainer" style={styles.fadeIn}>
        <form onSubmit={handleSubmit} className="ui form">
          <div className="field shadow">
            <input
              id="busStopCode"
              placeholder="Enter bus stop code"
              type="number"
              value={values.busStopCode}
              onChange={handleChange}
              onBlur={handleBlur}
              pattern="\d*"
              className={
                errors.busStopCode && touched.busStopCode ? 'text-input error' : 'text-input'
              }
            />
            {errors.busStopCode && touched.busStopCode && (
              <div className="input-feedback errorText">{errors.busStopCode}</div>
            )}
          </div>
          {/* <div className="field shadow">
            <input
                id="busServiceNo"
                placeholder="Enter bus service no"
                type="number"
                value={values.busServiceNo}
                onChange={handleChange}
                onBlur={handleBlur}
                pattern="\d*"
                className={
                  errors.busServiceNo && touched.busServiceNo ? 'text-input error' : 'text-input'
                }
              />
              {errors.busServiceNo && touched.busServiceNo && (
                <div className="input-feedback errorText">{errors.busServiceNo}</div>
              )}
          </div> */}

          <SubmitButton isSubmitting={isSubmitting} />
        </form>
      </div>
    </StyleRoot>
  );
};

export default withFormik({
  mapPropsToValues: ({ busStopCode, busServiceNo }) => ({
    busStopCode: busStopCode || '',
    busServiceNo: busServiceNo || ''
  }),

  validationSchema: Yup.object().shape({
    busStopCode: Yup.string().max(5,'Bus stop code must be 5 digit long').required('Bus stop code is required!'),
  }),

  handleSubmit: async (values, { setErrors, setSubmitting, props }) => {
    try {
      setSubmitting(false);
      history.push('/busArrival/' + values.busStopCode);

    } catch(err) {
      console.log('Failed to get a response', err);
    }
  }
})(InputForm);