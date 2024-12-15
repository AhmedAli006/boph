import Sidebar from '../components/SidebarComp';
import NavbarComp from '../components/NavbarComp';
import React, { useEffect, useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const Upload = () => {
  const { id } = useParams();
  const location = useLocation();
  const patientData = location.state; // Get patient data from location state
  console.log(id, patientData);
    const navigate = useNavigate();
  

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
   const generateAge = (dateOfBirth) => {
    const birthDate = new Date(dateOfBirth);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age;
  };
  
  // Set initial patient information from patientData
  const [patientInformation, setPatientInformation] = useState({
    id: patientData.id,
    name: patientData.name,
    dateOfBirth: patientData.dateOfBirth,
    age: generateAge(patientData.dateOfBirth),
    sex: patientData.sex,
    address: patientData.address,
    phoneNumber: patientData.phone,
    email: patientData.email
  });

  const [medicalHistory, setMedicalHistory] = useState({
    allergies: '',
    medications: '',
    medicalConditions: '',
    surgicalHistory: '',
    familyMedicalHistory: ''
  });

  const [vitalSigns, setVitalSigns] = useState({
    temperature: '',
    bloodPressure: '',
    pulse: '',
    respiratoryRate: ''
  });

  const [chiefComplaint, setChiefComplaint] = useState({
    chiefComplaint: '',
    historyOfPresentIllness: '',
    reviewOfSystems: ''
  });

  const [physicalExamination, setPhysicalExamination] = useState({
    examinationDetails: ''
  });

  const [diagnosticTests, setDiagnosticTests] = useState({
    labResults: '',
    otherTests: ''
  });

  const [assessmentAndPlan, setAssessmentAndPlan] = useState({
    assessment: '',
    plan: '',
    medications: '',
    therapies: '',
    followUp: ''
  });

  const [progressNotes, setProgressNotes] = useState({
    date: '',
    time: '',
    note: '',
    dateOfIssue: ''
  });

  const currentDate = new Date().toISOString().split('T')[0];
 
  const { userData } = useSelector(state => state.auth);
  console.log("user data Login page", userData);

   const validateForm = () => {
    // Check if all required fields are filled
    const requiredFields = [
      patientInformation.name,
      patientInformation.dateOfBirth,
      patientInformation.sex,
      patientInformation.address,
      patientInformation.phoneNumber,
      patientInformation.email,
      medicalHistory.allergies,
      medicalHistory.medications,
      medicalHistory.medicalConditions,
      medicalHistory.surgicalHistory,
      medicalHistory.familyMedicalHistory,
      vitalSigns.temperature,
      vitalSigns.bloodPressure,
      vitalSigns.pulse,
      vitalSigns.respiratoryRate,
      chiefComplaint.chiefComplaint,
      chiefComplaint.historyOfPresentIllness,
      chiefComplaint.reviewOfSystems,
      physicalExamination.examinationDetails,
      diagnosticTests.labResults,
      diagnosticTests.otherTests,
      assessmentAndPlan.assessment,
      assessmentAndPlan.plan,
      assessmentAndPlan.medications,
      assessmentAndPlan.therapies,
      assessmentAndPlan.followUp,
      progressNotes.date,
      progressNotes.time,
      progressNotes.note
    ];

      return requiredFields.every(field => (field || '').trim() !== '');
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); // Start loading
    setSuccessMessage(''); // Reset messages
    setErrorMessage('');

      if (!validateForm()) {
      setErrorMessage('Please fill in all required fields before submitting.');
      setLoading(false);
      return;
    }

    const id = uuidv4();
    const params = {
      id,
      patientInformation,
      medicalHistory,
      vitalSigns,
      chiefComplaint,
      physicalExamination,
      diagnosticTests,
      assessmentAndPlan,
      progressNotes: {
        ...progressNotes,
        dateOfIssue: currentDate
      },
      doctor: userData.response
    };

    try {
      const response = await axios.post('http://localhost:5050/api/createEMR', { params });
      console.log('EMR created successfully:', response.data);
      setSuccessMessage('EMR created successfully!'); // Set success message
     setTimeout(() => {
      navigate(-1);
    }, 2000);

    } catch (error) {
      console.error('Error creating EMR:', error);
      setErrorMessage('Error creating EMR. Please try again.'); // Set error message
    } finally {
      setLoading(false); // Stop loading
      setTimeout(() => {
        setSuccessMessage('');
        setErrorMessage('');
      }, 2000); // Clear messages after 3 seconds
    }
  };

  return (
    <>
      {/* <Sidebar /> */}
      <NavbarComp />
      <Container style={{ width: 950 }}>
        {successMessage && (
          <Alert variant="success" style={{ position: 'fixed', top: 20, left: '50%', transform: 'translateX(-50%)', zIndex: 1050 }}>
            {successMessage}
          </Alert>
        )}
        {errorMessage && (
          <Alert variant="danger" style={{ position: 'fixed', top: 20, left: '50%', transform: 'translateX(-50%)', zIndex: 1050 }}>
            {errorMessage}
          </Alert>
        )}
        <Row>
          <Col md={12}>
            <h2>Create EMR</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="patientInformation">
                <Form.Label className="font-bold my-4">Patient Information</Form.Label>
                <Row>
                  <Col md={6}>
                    <Form.Label>Patient ID</Form.Label>
                    <Form.Control
                      type="text"
                      value={patientInformation.id}
                      readOnly
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={patientInformation.name}
                      
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control
                      type="date"
                      value={patientInformation.dateOfBirth}
                      
                    />
                  </Col>
                  
                  <Col md={6}>
                    <Form.Label>Sex</Form.Label>
                    <Form.Control
                      type="text"
                      value={patientInformation.sex}
                      readOnly
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      value={patientInformation.address}
                      
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      value={patientInformation.phoneNumber}
                      
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      value={patientInformation.email}
                      readOnly
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                      type="age"
                      value={patientInformation.age}
                      readOnly
                    />
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group controlId="medicalHistory">
                <Form.Label className="font-bold my-4">Medical History</Form.Label>
                <Row>
                  <Col md={6}>
                    <Form.Label>Allergies</Form.Label>
                    <Form.Control
                      type="text"
                      value={medicalHistory.allergies}
                      onChange={(event) =>
                        setMedicalHistory({
                          ...medicalHistory,
                          allergies: event.target.value
                        })
                      }
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Label>Medications</Form.Label>
                    <Form.Control
                      type="text"
                      value={medicalHistory.medications}
                      onChange={(event) =>
                        setMedicalHistory({
                          ...medicalHistory,
                          medications: event.target.value
                        })
                      }
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Label>Medical Conditions</Form.Label>
                    <Form.Control
                      type="text"
                      value={medicalHistory.medicalConditions}
                      onChange={(event) =>
                        setMedicalHistory({
                          ...medicalHistory,
                          medicalConditions: event.target.value
                        })
                      }
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Label>Surgical History</Form.Label>
                    <Form.Control
                      type="text"
                      value={medicalHistory.surgicalHistory}
                      onChange={(event) =>
                        setMedicalHistory({
                          ...medicalHistory,
                          surgicalHistory: event.target.value
                        })
                      }
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Label>Family Medical History</Form.Label>
                    <Form.Control
                      type="text"
                      value={medicalHistory.familyMedicalHistory}
                      onChange={(event) =>
                        setMedicalHistory({
                          ...medicalHistory,
                          familyMedicalHistory: event.target.value
                        })
                      }
                    />
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group controlId="vitalSigns">
                <Form.Label className="font-bold my-4">Vital Signs</Form.Label>
                <Row>
                  <Col md={6}>
                    <Form.Label>Temperature</Form.Label>
                    <Form.Control
                      type="number"
                      value={vitalSigns.temperature}
                      onChange={(event) =>
                        setVitalSigns({
                          ...vitalSigns,
                          temperature: event.target.value
                        })
                      }
 />
                  </Col>
                  <Col md={6}>
                    <Form.Label>Blood Pressure</Form.Label>
                    <Form.Control
                      type="text"
                      value={vitalSigns.bloodPressure}
                      onChange={(event) =>
                        setVitalSigns({
                          ...vitalSigns,
                          bloodPressure: event.target.value
                        })
                      }
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Label>Pulse</Form.Label>
                    <Form.Control
                      type="number"
                      value={vitalSigns.pulse}
                      onChange={(event) =>
                        setVitalSigns({
                          ...vitalSigns,
                          pulse: event.target.value
                        })
                      }
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Label>Respiratory Rate</Form.Label>
                    <Form.Control
                      type="number"
                      value={vitalSigns.respiratoryRate}
                      onChange={(event) =>
                        setVitalSigns({
                          ...vitalSigns,
                          respiratoryRate: event.target.value
                        })
                      }
                    />
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group controlId="chiefComplaint">
                <Form.Label className="font-bold my-4">Chief Complaint</Form.Label>
                <Row>
                  <Col md={6}>
                    <Form.Label>Chief Complaint</Form.Label>
                    <Form.Control
                      type="text"
                      value={chiefComplaint.chiefComplaint}
                      onChange={(event) =>
                        setChiefComplaint({
                          ...chiefComplaint,
                          chiefComplaint: event.target.value
                        })
                      }
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Label>History of Present Illness</Form.Label>
                    <Form.Control
                      type="text"
                      value={chiefComplaint.historyOfPresentIllness}
                      onChange={(event) =>
                        setChiefComplaint({
                          ...chiefComplaint,
                          historyOfPresentIllness: event.target.value
                        })
                      }
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Label>Review of Systems</Form.Label>
                    <Form.Control
                      type="text"
                      value={chiefComplaint.reviewOfSystems}
                      onChange={(event) =>
                        setChiefComplaint({
                          ...chiefComplaint,
                          reviewOfSystems: event.target.value
                        })
                      }
                    />
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group controlId="physicalExamination">
                <Form.Label className="font-bold my-4">Physical Examination</Form.Label>
                <Row>
                  <Col md={6}>
                    <Form.Label>Examination Details</Form.Label>
                    <Form.Control
                      type="text"
                      value={physicalExamination.examinationDetails}
                      onChange={(event) =>
                        setPhysicalExamination({
                          ...physicalExamination,
                          examinationDetails: event.target.value
                        })
                      }
                    />
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group controlId="diagnosticTests">
                <Form.Label className="font-bold my-4">Diagnostic Tests</Form.Label>
                <Row>
                  <Col md={6}>
                    <Form.Label>Lab Results</Form.Label>
                    <Form.Control
                      type="text"
                      value={diagnosticTests.labResults}
                      onChange={(event) =>
                        setDiagnosticTests({
                          ...diagnosticTests,
                          labResults: event.target.value
                        })
                      }
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Label>Other Tests</Form.Label>
                    <Form.Control
                      type="text"
                      value={diagnosticTests.otherTests}
                      onChange={(event) =>
                        setDiagnosticTests({
                          ...diagnosticTests,
                          otherTests: event.target.value
                        })
                      }
                    />
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group controlId="assessmentAndPlan">
                <Form.Label className="font-bold my-4">Assessment and Plan</Form.Label>
                <Row>
                  <Col md={6}>
                    <Form.Label>Assessment</Form.Label>
                    <Form.Control
                      type="text"
                      value={assessmentAndPlan.assessment}
                      onChange={(event) =>
                        setAssessmentAndPlan({
                          ...assessmentAndPlan,
                          assessment: event.target.value
                        })
                      }
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Label>Plan</Form.Label>
                    <Form.Control
                      type="text"
                      value={assessmentAndPlan.plan}
                      onChange={(event) =>
                        setAssessmentAndPlan({
                          ...assessmentAndPlan,
                          plan: event.target.value
                        })}
                      />
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Label>Medications</Form.Label>
                    <Form.Control
                      type="text"
                      value={assessmentAndPlan.medications}
                      onChange={(event) =>
                        setAssessmentAndPlan({
                          ...assessmentAndPlan,
                          medications: event.target.value
                        })
                      }
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Label>Therapies</Form.Label>
                    <Form.Control
                      type="text"
                      value={assessmentAndPlan.therapies}
                      onChange={(event) =>
                        setAssessmentAndPlan({
                          ...assessmentAndPlan,
                          therapies: event.target.value
                        })
                      }
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Label>Follow-up</Form.Label>
                    <Form.Control
                      type="text"
                      value={assessmentAndPlan.followUp}
                      onChange={(event) =>
                        setAssessmentAndPlan({
                          ...assessmentAndPlan,
                          followUp: event.target.value
                        })
                      }
                    />
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group controlId="progressNotes">
                <Form.Label className="font-bold my-4">Progress Notes</Form.Label>
                <Row>
                  <Col md={6}>
                    <Form.Label>Date</Form.Label>
                    <Form.Control
                      type="date"
                      value={progressNotes.date}
                      onChange={(event) =>
                        setProgressNotes({
                          ...progressNotes,
                          date: event.target.value
                        })
                      }
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Label>Time</Form.Label>
                    <Form.Control
                      type="time"
                      value={progressNotes.time}
                      onChange={(event) =>
                        setProgressNotes({
                          ...progressNotes,
                          time: event.target.value
                        })
                      }
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Label>Note</Form.Label>
                    <Form.Control
                      type="text"
                      value={progressNotes.note}
                      onChange={(event) =>
                        setProgressNotes({
                          ...progressNotes,
                          note: event.target.value
                        })
                      }
                    />
                  </Col>
                </Row>
              </Form.Group>

              <Button className='my-5' variant="primary" type="submit" disabled={loading}>
                {loading ? (
                  <span className="flex justify-center">
                    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                    </svg>
                    Loading...
                  </span>
                ) : (
                  <span className="w-full">Create EMR</span>
                )}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Upload;