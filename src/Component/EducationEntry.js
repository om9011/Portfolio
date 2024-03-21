import React from 'react';

const EducationEntry = ({ title, specialization, institution, grade }) => {
  return (
    <div className="border border-primary rounded-lg p-4 m-8">
      <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
      {specialization && <p className="text-lg text-secondary mb-2">{specialization}</p>}
      <p className="text-lg text-secondary mb-2">{institution}</p>
      <p className="text-lg text-secondary">{grade}</p>
    </div>
  );
};

export default EducationEntry;
