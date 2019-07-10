import React from 'react';
import './style.css'

import Spinner from '../Spinner';

const SubmitButton = ({ isSubmitting }) => {
  return (
    <div className="submitButton">
      <button className="ui button shadow" type="submit" disabled={isSubmitting}>
        {
          isSubmitting ? <Spinner color={"#8E54E9"}/> : 'Submit'
        }
      </button>
    </div>
  )
}

export default SubmitButton