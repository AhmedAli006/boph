import React from 'react';
import { useLocation } from 'react-router-dom';

function EmrComp() {
  const location = useLocation();
  const emrData = location.state; // Access the passed EMR data
  console.log(emrData);

  if (!emrData) {
    return <div>No EMR data available.</div>; // Handle case where no data is passed
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">Medical Report</h1>

      {/* Patient Information */}
      <Section title="Patient Information" data={emrData.Record.patientInformation} />
      {/* Medical History */}
      <Section title="Medical History" data={emrData.Record.medicalHistory} />
      {/* Vital Signs */}
      <Section title="Vital Signs" data={emrData.Record.vitalSigns} />
      {/* Chief Complaint */}
      <Section title="Chief Complaint" data={emrData.Record.chiefComplaint} />
      {/* Physical Examination */}
      <Section title="Physical Examination" data={emrData.Record.physicalExamination} />
      {/* Diagnostic Tests */}
      <Section title="Diagnostic Tests" data={emrData.Record.diagnosticTests} />
      {/* Assessment and Plan */}
      <Section title="Assessment and Plan" data={emrData.Record.assessmentAndPlan} />
      {/* Progress Notes */}
      <Section title="Progress Notes" data={emrData.Record.progressNotes} />
    </div>
  );
}

const Section = ({ title, data }) => (
  <div className="bg-gray-50 p-4 mb-4 rounded-lg shadow-md border border-gray-300">
    <h2 className="text-2xl font-semibold mb-2 text-blue-500">{title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      {Object.entries(data).map(([key, value]) => (
        <div key={key} className="p-2 border-b border-gray-200">
          <p className="text-sm font-medium">{key.charAt(0).toUpperCase() + key.slice(1)}:</p>
          <p className="text-sm text-gray-700">{value}</p>
        </div>
      ))}
    </div>
  </div>
);

export default EmrComp;