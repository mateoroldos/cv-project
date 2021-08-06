import React from 'react';
import GeneralForm from '../general/Form';

function GeneralInfo() {
  return (
    <div>
      <GeneralForm label="Full Name" type="text" tag="h2" afterSubmitClass="fullname" />
      <GeneralForm label="Description" type="text" tag="p" />
    </div>
  );
}

export default GeneralInfo;
