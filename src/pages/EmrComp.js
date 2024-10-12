import React from 'react';

function EmrComp() {
  const emrData = {
    patientInformation: {
      patientId: "12345",
      name: "John Doe",
      dateOfBirth: "1990-01-01",
      age: "32",
      sex: "Male",
      contactInformation: {
        address: "123 Main St, Anytown, USA",
        phoneNumber: "555-555-5555",
        email: "johndoe@example.com"
      }
    },
    medicalHistory: {
      allergies: ["Penicillin"],
      medications: ["Aspirin, 81mg daily"],
      medicalConditions: ["Hypertension", "Diabetes"],
      surgicalHistory: ["Appendectomy, 2010"],
      familyMedicalHistory: ["Father had heart disease, Mother had breast cancer"]
    },
    vitalSigns: {
      temperature: "98.6°F",
      bloodPressure: "120/80 mmHg",
      pulse: "72 bpm",
      respiratoryRate: "16 breaths/min",
      oxygenSaturation: "98%"
    },
    chiefComplaint: {
      chiefComplaint: "Chest pain",
      historyOfPresentIllness: "Patient reports chest pain that started 2 hours ago",
      reviewOfSystems: "Patient reports no other symptoms"
    },
    physicalExamination: {
      generalAppearance: "Patient appears anxious",
      vitalSigns: "See above",
      headAndNeck: "No abnormalities noted",
      chest: "No abnormalities noted",
      abdomen: "No abnormalities noted",
      extremities: "No abnormalities noted",
      neurological: "No abnormalities noted"
    },
    diagnosticTests: {
      labResults: ["CBC", "Chemistry panel", "Lipid panel"],
      imagingStudies: ["Chest X-ray"],
      otherTests: ["ECG"]
    },
    assessmentAndPlan: {
      assessment : "Acute coronary syndrome",
      plan: "Admit to hospital, start IV fluids, administer oxygen, order cardiac enzymes",
      medications: [],
      therapies: [],
      followUp: ""
    },
    progressNotes: [
      {
        date: "2022-01-01",
        time: "12:00 PM",
        note: "Patient is stable and comfortable"
      }
    ],
    dischargeSummary: {
      date: "2022-01-02",
      time: "10:00 AM",
      summary: "Patient was discharged in stable condition"
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Medical Report</h1>

      {/* Patient Information */}
      <div className="bg-white p-4 mb-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-2">Patient Information</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 xl:w-1/3 p-4 border-b border-gray-200">
            <p className="text-lg font-bold mb-1">Patient ID:</p>
            <p className="text-lg">{emrData.patientInformation.patientId}</p>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-4 border-b border-gray-200">
            <p className="text-lg font-bold mb-1">Name:</p>
            <p className="text-lg">{emrData.patientInformation.name}</p>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-4 border-b border-gray-200">
            <p className="text-lg font-bold mb-1">Date of Birth:</p>
            <p className="text-lg">{emrData.patientInformation.dateOfBirth}</p>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-4 border-b border-gray-200">
            <p className="text-lg font-bold mb-1">Age:</p>
            <p className="text-lg">{emrData.patientInformation.age}</p>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-4 border-b border-gray-200">
            <p className="text-lg font-bold mb-1">Sex:</p>
            <p className="text-lg">{emrData.patientInformation.sex}</p>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-4 border-b border-gray-200">
            <p className="text-lg font-bold mb-1">Address:</ p>
            <p className="text-lg">{emrData.patientInformation.contactInformation.address}</p>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-4 border-b border-gray-200">
            <p className="text-lg font-bold mb-1">Phone Number:</p>
            <p className="text-lg">{emrData.patientInformation.contactInformation.phoneNumber}</p>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-4 border-b border-gray-200">
            <p className="text-lg font-bold mb-1">Email:</p>
            <p className="text-lg">{emrData.patientInformation.contactInformation.email}</p>
          </div>
    </div>
  </div>

  {/* Medical History */}
  <div className="bg-white p-4 mb-4 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-2">Medical History</h2>
    <div className="flex flex-wrap -mx-4">
      <div className="w-full md:w-1/2 xl:w-1/3 p-4 border-b border-gray-200">
        <p className="text-lg font-bold mb-1">Allergies:</p>
        <p className="text-lg">{emrData.medicalHistory.allergies.join(", ")}</p>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-4 border-b border-gray-200">
        <p className="text-lg font-bold mb-1">Medications:</p>
        <p className="text-lg">{emrData.medicalHistory.medications.join(", ")}</p>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-4 border-b border-gray-200">
        <p className="text-lg font-bold mb-1">Medical Conditions:</p>
        <p className="text-lg">{emrData.medicalHistory.medicalConditions.join(", ")}</p>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-4 border-b border-gray-200">
        <p className="text-lg font-bold mb-1">Surgical History:</p>
        <p className="text-lg">{emrData.medicalHistory.surgicalHistory.join(", ")}</p>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-4 border-b border-gray-200">
        <p className="text-lg font-bold mb-1">Family Medical History:</p>
        <p className="text-lg">{emrData.medicalHistory.familyMedicalHistory.join(", ")}</p>
      </div>
    </div>
  </div>

  {/* Vital Signs */}
  <div className="bg-white p-4 mb-4 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-2">Vital Signs</h2>
    <div className="flex flex-wrap -mx-4">
      <div className="w-full md:w-1/2 xl:w-1/3 p-4 border-b border-gray-200">
        <p className="text-lg font-bold mb-1">Temperature:</p>
        <p className="text-lg">{emrData.vitalSigns.temperature}</p>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-4 border-b border-gray-200">
        <p className="text-lg font-bold mb-1">Blood Pressure:</p>
        <p className="text-lg">{emrData.vitalSigns.bloodPressure}</p>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-4 border-b border-gray-200">
        <p className="text-lg font-bold mb-1">Pulse:</p>
        <p className="text-lg">{emrData.vitalSigns.pulse}</p>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-4 border-b border-gray-200">
        <p className="text-lg font-bold mb-1">Respiratory Rate:</p>
        <p className="text-lg">{emrData.vitalSigns.respiratoryRate}</p>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-4 border-b border-gray-200">
        <p className="text-lg font-bold mb-1">Oxygen Saturation:</p>
        <p className="text-lg">{emrData.vitalSigns.oxygenSaturation}</p>
      </div>
    </div>
  </div>

  {/* Chief Complaint */}
  <div className="bg-white p-4 mb-4 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-2">Chief Complaint</h2>
    <div className="flex flex-wrap -mx-4">
      <div className="w-full md:w-1/2 xl:w-1/3 p-4 border-b border-gray-200">
        <p className="text-lg font-bold mb-1">Chief Complaint:</p>
        <p className="text-lg">{emrData.chiefComplaint.chiefComplaint}</p>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/ 3 p-4 border-b border-gray-200">
        <p className="text-lg font-bold mb-1">History of Present Illness:</p>
        <p className="text-lg">{emrData.chiefComplaint.historyOfPresentIllness}</p>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-4 border-b border-gray-200">
        <p className="text-lg font-bold mb-1">Review of Systems:</p>
        <p className="text-lg">{emrData.chiefComplaint.reviewOfSystems}</p>
      </div>
    </div>
  </div>

  {/* Physical Examination */}
  <div className="bg-white p-4 mb-4 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-2">Physical Examination</h2>
    <div className="flex flex-wrap -mx-4">
      <div className="w-full md:w-1/2 xl:w-1/3 p-4 border-b border-gray-200">
        <p className="text-lg font-bold mb-1">General Appearance:</p>
        <p className="text-lg">{emrData.physicalExamination.generalAppearance}</p>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-4 border-b border-gray-200">
        <p className="text-lg font-bold mb-1">Vital Signs:</p>
        <p className="text-lg">{emrData.physicalExamination.vitalSigns}</p>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-4 border-b border-gray-200">
        <p className="text-lg font-bold mb-1">Head and Neck:</p>
        <p className="text-lg">{emrData.physicalExamination.headAndNeck}</p>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-4 border-b border-gray-200">
        <p className="text-lg font-bold mb-1">Chest:</p>
        <p className="text-lg">{emrData.physicalExamination.chest}</p>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-4 border-b border-gray-200">
        <p className="text-lg font-bold mb-1">Abdomen:</p>
        <p className="text-lg">{emrData.physicalExamination.abdomen}</p>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-4 border-b border-gray-200">
        <p className="text-lg font-bold mb-1">Extremities:</p>
        <p className="text-lg">{emrData.physicalExamination.extremities}</p>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-4 border-b border-gray-200">
        <p className="text-lg font-bold mb-1">Neurological:</p>
        <p className="text-lg">{emrData.physicalExamination.neurological}</p>
      </div>
    </div>
  </div>

  {/* Diagnostic Tests */}
  <div className="bg-white p-4 mb-4 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-2">Diagnostic Tests</h2>
    <div className="flex flex-wrap -mx-4">
      <div className="w-full md:w-1/2 xl:w-1/3 p-4 border-b border-gray-200">
        <p className="text-lg font-bold mb-1">Lab Results:</p>
        <p className="text-lg">{emrData.diagnosticTests.labResults.join(", ")}</p>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-4 border-b border-gray-200">
        <p className="text-lg font-bold mb-1">Imaging Studies:</p>
        <p className="text-lg">{emrData.diagnosticTests.imagingStudies.join(", ")}</p>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-4 border-b border-gray-200">
        <p className="text-lg font-bold mb-1">Other Tests:</p>
        <p className="text-lg">{emrData.diagnosticTests.otherTests.join(", ")}</p>
      </div>
    </div>
  </div>

  {/* Assessment and Plan */}
  <div className="bg-white p-4 mb-4 rounded-lg shadow -md">
    <h2 className="text-2xl font-bold mb-2">Assessment and Plan</h2>
    <div className="flex flex-wrap -mx-4">
      <div className="w-full md:w-1/2 xl:w-1/3 p-4 border-b border-gray-200">
        <p className="text-lg font-bold mb-1">Assessment:</p>
        <p className="text-lg">{emrData.assessmentAndPlan.assessment}</p>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-4 border-b border-gray-200">
        <p className="text-lg font-bold mb-1">Plan:</p>
        <p className="text-lg">{emrData.assessmentAndPlan.plan}</p>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-4 border-b border-gray-200">
        <p className="text-lg font-bold mb-1">Medications:</p>
        <p className="text-lg">{emrData.assessmentAndPlan.medications.join(", ")}</p>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-4 border-b border-gray-200">
        <p className="text-lg font-bold mb-1">Therapies:</p>
        <p className="text-lg">{emrData.assessmentAndPlan.therapies.join(", ")}</p>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-4 border-b border-gray-200">
        <p className="text-lg font-bold mb-1">Follow-up:</p>
        <p className="text-lg">{emrData.assessmentAndPlan.followUp}</p>
      </div>
    </div>
  </div>

  {/* Progress Notes */}
  <div className="bg-white p-4 mb-4 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-2">Progress Notes</h2>
    {emrData.progressNotes.map((note, index) => (
      <div key={index} className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 xl:w-1/3 p-4 border-b border-gray-200">
          <p className="text-lg font-bold mb-1">Date:</p>
          <p className="text-lg">{note.date}</p>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4 border-b border-gray-200">
          <p className="text-lg font-bold mb-1">Time:</p>
          <p className="text-lg">{note.time}</p>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4 border-b border-gray-200">
          <p className="text-lg font-bold mb-1">Note:</p>
          <p className="text-lg">{note.note}</p>
        </div>
      </div>
    ))}
  </div>

  {/* Discharge Summary */}
  <div className="bg-white p-4 mb-4 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-2">Discharge Summary</h2>
    <div className="flex flex-wrap -mx-4">
      <div className="w-full md:w-1/2 xl:w-1/3 p-4 border-b border-gray-200">
        <p className="text-lg font-bold mb-1">Date:</p>
        <p className="text-lg">{emrData.dischargeSummary.date}</p>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-4 border-b border-gray-200">
        <p className="text-lg font-bold mb-1">Time:</p>
        <p className="text-lg">{emrData.dischargeSummary.time}</p>
      </div>
      <div className="w-full md:w-1/2 xl:w-1/3 p-4 border-b border-gray-200">
        <p className="text-lg font-bold mb-1">Summary:</p>
        <p className="text-lg">{emrData.dischargeSummary.summary}</p>
      </div>
    </div>
  </div>
</div>
  );
}

export default EmrComp;