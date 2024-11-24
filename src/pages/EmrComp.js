import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

function EmrComp() {
  const location = useLocation();
  const emrData = location.state; // Access the passed EMR data
  const { id } = useParams();
  const navigate = useNavigate();

  console.log("EMR data", emrData);

  // Check if emrData is defined
  if (!emrData) {
    return <div className="text-center text-red-600 font-bold">No EMR data available.</div>; // Handle case where no data is passed
  }

  // Safely parse the JSON strings into objects
  const parsedData = {
    patientInformation: emrData.Record.patientInformation || {}, // Provide a fallback
    medicalHistory: emrData.Record.medicalHistory || {}, // Provide a fallback
    vitalSigns: emrData.Record.vitalSigns || {}, // Provide a fallback
    chiefComplaint: emrData.Record.chiefComplaint || {}, // Provide a fallback
    physicalExamination: emrData.Record.physicalExamination || {}, // Provide a fallback
    diagnosticTests: emrData.Record.diagnosticTests || {}, // Provide a fallback
    assessmentAndPlan: emrData.Record.assessmentAndPlan || {}, // Provide a fallback
    progressNotes: emrData.Record.progressNotes || {}, // Provide a fallback
    doctor: emrData.Record.doctor ? JSON.parse(emrData.Record.doctor) : {}, // Provide a fallback
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">Medical Report</h1>
      <button
        onClick={() => navigate(-1)} // Navigate back to the previous page
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Back
      </button>

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

const Section = ({ title, data }) => {
  // Check if data is an object and not null
  if (!data || typeof data !== 'object') {
    return (
      <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-2 text-blue-600">{title}</h2>
        <p className="text-sm text-gray-600">No data available.</p>
      </div>
    );
  }

  return (
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
}

export default EmrComp;