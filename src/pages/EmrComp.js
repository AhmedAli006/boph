import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

function EmrComp() {
  const location = useLocation();
  const emrData = location.state; // Access the passed EMR data
  const { id } = useParams();
  
  // Debugging: Log the emrData to see its structure
  console.log('EMR Data:', emrData);
  console.log('ID:', id);

  // Check if emrData is defined
  if (!emrData) {
    return <div>No EMR data available.</div>; // Handle case where no data is passed
  }

  // Parse the JSON strings into objects
  const parsedData = {
    patientInformation: JSON.parse(emrData.patientInformation),
    medicalHistory: JSON.parse(emrData.medicalHistory),
    vitalSigns: JSON.parse(emrData.vitalSigns),
    chiefComplaint: JSON.parse(emrData.chiefComplaint),
    physicalExamination: JSON.parse(emrData.physicalExamination),
    diagnosticTests: JSON.parse(emrData.diagnosticTests),
    assessmentAndPlan: JSON.parse(emrData.assessmentAndPlan),
    progressNotes: JSON.parse(emrData.progressNotes),
    doctor: JSON.parse(emrData.doctor),
  };

  console.log('Parsed Data:', parsedData);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">Medical Report</h1>

      {/* Patient Information */}
      <Section title="Patient Information" data={parsedData.patientInformation} />
      {/* Medical History */}
      <Section title="Medical History" data={parsedData.medicalHistory} />
      {/* Vital Signs */}
      <Section title="Vital Signs" data={parsedData.vitalSigns} />
      {/* Chief Complaint */}
      <Section title="Chief Complaint" data={parsedData.chiefComplaint} />
      {/* Physical Examination */}
      <Section title="Physical Examination" data={parsedData.physicalExamination} />
      {/* Diagnostic Tests */}
      <Section title="Diagnostic Tests" data={parsedData.diagnosticTests} />
      {/* Assessment and Plan */}
      <Section title="Assessment and Plan" data={parsedData.assessmentAndPlan} />
      {/* Progress Notes */}
      <Section title="Progress Notes" data={parsedData.progressNotes} />
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