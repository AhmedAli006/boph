import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

function EmrComp() {
  const location = useLocation();
  const emrData = location.state; // Access the passed EMR data
  const { id } = useParams();

  // Check if emrData is defined
  if (!emrData) {
    return <div className="text-center text-red-600 font-bold">No EMR data available.</div>; // Handle case where no data is passed
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

  return (
    <div className=" container mx-auto p-4 ">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">Medical Report</h1>

      <div className="bg-white p-4 rounded-lg border border-gray-300">
        {/* Display all sections in a single card */}
        <Section title="Patient Information" data={parsedData.patientInformation} />
        <Section title="Medical History" data={parsedData.medicalHistory} />
        <Section title="Vital Signs" data={parsedData.vitalSigns} />
        <Section title="Chief Complaint" data={parsedData.chiefComplaint} />
        <Section title="Physical Examination" data={parsedData.physicalExamination} />
        <Section title="Diagnostic Tests" data={parsedData.diagnosticTests} />
        <Section title="Assessment and Plan" data={parsedData.assessmentAndPlan} />
        <Section title="Progress Notes" data={parsedData.progressNotes} />
        <Section title="Doctor Information" data={parsedData.doctor} />
      </div>
    </div>
  );
}

const Section = ({ title, data }) => (
  <div className="mb-4">
    <h2 className="text-2xl font-semibold mb-2 text-blue-600">{title}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
      {Object.entries(data).map(([key, value]) => (
        <div key={key} className="p-2 border-b border-gray-200">
          <p className="text-sm font-medium text-gray-800">{key.charAt(0).toUpperCase() + key.slice(1)}:</p>
          <p className="text-sm text-gray-600">{value}</p>
        </div>
      ))}
    </div>
  </div>
);

export default EmrComp;