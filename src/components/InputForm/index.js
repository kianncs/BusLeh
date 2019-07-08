import React from 'react';
import './style.css'

import { withFormik } from 'formik';
import * as Yup from 'yup';
import LTA from '../../apis/lta';

import axios from 'axios';

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
    <div className="formContainer">
      <form onSubmit={handleSubmit} className="ui form">
        <div className="field">
          <input
            id="busStopCode"
            placeholder="Enter bus stop code"
            type="number"
            value={values.busStopCode}
            onChange={handleChange}
            onBlur={handleBlur}
            className={
              errors.busStopCode && touched.busStopCode ? 'text-input error' : 'text-input'
            }
          />
          {errors.busStopCode && touched.busStopCode && (
            <div className="input-feedback errorText">{errors.busStopCode}</div>
          )}
        </div>
        <div className="field">
          <input
              id="busServiceNo"
              placeholder="Enter bus service no"
              type="number"
              value={values.busServiceNo}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.busServiceNo && touched.busServiceNo ? 'text-input error' : 'text-input'
              }
            />
            {errors.busServiceNo && touched.busServiceNo && (
              <div className="input-feedback errorText">{errors.busServiceNo}</div>
            )}
        </div>

        <div className="submitButton">
          <button className="ui button" type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default withFormik({
  mapPropsToValues: ({ busStopCode, busServiceNo }) => ({
    busStopCode: busStopCode || '',
    busServiceNo: busServiceNo || ''
  }),

  validationSchema: Yup.object().shape({
    busStopCode: Yup.string().max(5,'Please enter a valid bus stop code.').required('Bus stop code is required!'),
    // busServiceNo: Yup.string().required('Please enter your password')
  }),

  handleSubmit: async (values, { setErrors, setSubmitting }) => {
    const res = await LTA.get('/ltaodataservice/BusArrivalv2?', {
      params: {
        BusStopCode: values.busStopCode
      }
    });
    console.log(res);
  }
})(InputForm);