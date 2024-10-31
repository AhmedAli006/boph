
import Sidebar from '../components/SidebarComp';
import NavbarComp from '../components/NavbarComp';
import React, { useEffect, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Upload = () => {
  const [patientInformation, setPatientInformation] = useState({
    patientId: '',
    name: '',
    dateOfBirth: '',
    age: '',
    sex: '',
    address: '',
    phoneNumber: '',
    email: ''
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
    // Removed oxygenSaturation
  });

  const [chiefComplaint, setChiefComplaint] = useState({
    chiefComplaint: '',
    historyOfPresentIllness: '',
    reviewOfSystems: ''
  });

  const [physicalExamination, setPhysicalExamination] = useState({
    generalAppearance: '',
    headAndNeck: '',
    chest: '',
    abdomen: '',
    extremities: '',
    neurological: ''
  });

  const [diagnosticTests, setDiagnosticTests] = useState({
    labResults: '',
    // Removed imagingStudies
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
    note: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
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
      progressNotes
    };


    try {
      const response = await axios.post('http://localhost:8080/api/createEMR', { params });
      console.log('EMR created successfully:', response.data);
    } catch (error) {
      console.error('Error creating EMR:', error);
    }
  };

  const [users, setUsers] = useState([]);

const fetchUsers = async () => {
    try {
        const result = await axios.get('http://localhost:8080/api/getusers');
        const users = JSON.parse(result.data.response); // Assuming response is already an array of user objects
console.log(users);
        // Filter users based on docType and stakeholder
        const filteredUsers = users.filter(user => 
            user.Record.docType === "User" 
        );

        console.log("Filtered users for selection:", filteredUsers);
        setUsers(filteredUsers); // Set the filtered users in state
    } catch (error) {
        console.error('Error fetching users:', error);
    }
};

  useEffect(() => {
    fetchUsers();
  }, []);

  const calculateAge = (dateOfBirth) => {
    const birthDate = new Date(dateOfBirth);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <>
      <Sidebar />
      <NavbarComp />
      <Container style={{ width: 950 }}>
        <Row>
          <Col md={12}>
            <h2>Create EMR</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="patientInformation">
                <Form.Label className="font-bold my-4">Patient Information</Form.Label>
                <Row>
                  <Col md={6}>
                    <Form.Control
                      as="select"
                      value={patientInformation.patientId}
                      onChange={(event) => {
                        const selectedUser  = users.find(user => user.Record.id === event.target.value);
                        const age = calculateAge(selectedUser.Record.dateOfBirth);
                        setPatientInformation({
                          ...patientInformation,
                          patientId: selectedUser.Record.id,
                          name: selectedUser.Record.name,
                          age: age,
                          dateOfBirth: selectedUser.Record.dateOfBirth,
                          sex: selectedUser.Record.sex,
                          address: selectedUser.Record.address,
                          phoneNumber: selectedUser.Record.phone,
                          email: selectedUser.Record.email
                        });
                      }}
                    >
                      <option value="">Select a patient</option>
                      {users.map(user => (
                        <option key={user.Record.id} value={user.Record.id}>
                          {user.Record.name}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control
                      type="date"
                      value={patientInformation.dateOfBirth}
                      onChange={(event) =>
                        setPatientInformation({
                          ...patientInformation,
                          dateOfBirth: event.target.value
                        })
                      }
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Label>Sex</Form.Label>
                    <Form.Control
                      as="select"
                      value={patientInformation.sex}
                      onChange={(event) =>
                        setPatientInformation({
                          ...patientInformation,
                          sex: event.target.value
                        })
                      }
                    >
                      <option value="">Select sex</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </Form.Control>
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      value={patientInformation.address}
                      onChange={(event) =>
                        setPatientInformation({
                          ...patientInformation,
                          address: event.target.value
                        })
                      }
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="text"
                      value={patientInformation.phoneNumber}
                      onChange={(event) =>
                        setPatientInformation({
                          ...patientInformation,
                          phoneNumber: event.target.value
                        })
                      }
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      value={patientInformation.email}
                      onChange={(event) =>
                        setPatientInformation({
                          ...patientInformation,
                          email: event.target.value
                        })
                      }
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
                          ...vitalSigns ,
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
                    <Form.Label>General Appearance</Form.Label>
                    <Form.Control
                      type="text"
                      value={physicalExamination.generalAppearance}
                      onChange={(event) =>
                        setPhysicalExamination({
                          ...physicalExamination,
                          generalAppearance: event.target.value
                        })
                      }
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Label>Head and Neck</Form.Label>
                    <Form.Control
                      type="text"
                      value={physicalExamination.headAndNeck}
                      onChange={(event) =>
                        setPhysicalExamination({
                          ...physicalExamination,
                          headAndNeck: event.target.value
                        })
                      }
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Label>Chest</Form.Label>
                    <Form.Control
                      type="text"
                      value={physicalExamination.chest}
                      onChange={(event) =>
                        setPhysicalExamination({
                          ...physicalExamination,
                          chest: event.target.value
                        })
                      }
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Label>Abdomen</Form.Label>
                    <Form.Control
                      type="text"
                      value={physicalExamination.abdomen}
                      onChange={(event) =>
                        setPhysicalExamination({
                          ...physicalExamination,
                          abdomen: event.target.value
                        })
                      }
                    />
                  </Col>
                </Row>
                <Row>
                  <Col md={6}>
                    <Form.Label>Extremities</Form.Label>
                    <Form.Control
                      type="text"
                      value={physicalExamination.extremities}
                      onChange={(event) =>
                        setPhysicalExamination({
                          ...physicalExamination,
                          extremities: event.target.value
                        })
                      }
                    />
                  </Col>
                  <Col md={6}>
                    <Form.Label>Neurological</Form.Label>
                    <Form.Control
                      type="text"
                      value={physicalExamination.neurological}
                      onChange={(event) =>
                        setPhysicalExamination({
                          ...physicalExamination,
                          neurological: event.target.value
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
                    <Form.Label>Lab Results</Form.Label >
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
                        })
                      }
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

              <Button variant="primary" type="submit">
                Create EMR
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Upload;