import React from 'react';
import GeneralForm from '../general/Form';

function Study() {
  return (
    <div className="study">
      <h3>University</h3>
      <div className="study-info">
        <GeneralForm label="Starting Date" type="date" tag="p" afterSubmitClass="date" formClass="form-xs" />
        <GeneralForm label="End Date" type="date" tag="p" afterSubmitClass="date" formClass="form-xs" />
        <GeneralForm label="University" type="text" tag="p" afterSubmitClass="university" formClass="form-xs" />
      </div>
      <GeneralForm label="Title" type="text" tag="h4" afterSubmitClass="university-title" />
    </div>
  );
}

export default Study;
