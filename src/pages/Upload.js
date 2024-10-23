
import Sidebar from '../components/SidebarComp'
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
    contactInformation: {
      address: '',
      phoneNumber: '',
      email: ''
    }
  });

  const [medicalHistory, setMedicalHistory] = useState({
    allergies: [],
    medications: [],
    medicalConditions: [],
    surgicalHistory: [],
    familyMedicalHistory: []
  });

  const [vitalSigns, setVitalSigns] = useState({
    temperature: '',
    bloodPressure: '',
    pulse: '',
    respiratoryRate: '',
    oxygenSaturation: ''
  });

  const [chiefComplaint, setChiefComplaint] = useState({
    chiefComplaint: '',
    historyOfPresentIllness: '',
    reviewOfSystems: ''
  });

  const [physicalExamination, setPhysicalExamination] = useState({
    generalAppearance: '',
    vitalSigns: '',
    headAndNeck: '',
    chest: '',
    abdomen: '',
    extremities: '',
    neurological: ''
  });

  const [diagnosticTests, setDiagnosticTests] = useState({
    labResults: [],
    imagingStudies: [],
    otherTests: []
  });

  const [assessmentAndPlan, setAssessmentAndPlan] = useState({
    assessment: '',
    plan: '',
    medications: [],
    therapies: [],
    followUp: ''
  });

  const [progressNotes, setProgressNotes] = useState([
    {
      date: '',
      time: '',
      note: ''
    }
  ]);

  const [dischargeSummary, setDischargeSummary] = useState({
    date: '',
    time: '',
    summary: ''
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    const id = uuidv4();

    // Prepare the data to be sent to the API
    const emrData = {
      id,
      patientInformation,
      medicalHistory,
      vitalSigns,
      chiefComplaint,
      physicalExamination,
      diagnosticTests,
      assessmentAndPlan,
      progressNotes,
      dischargeSummary
    };
console.log(emrData);
    try {
      // Send data to the API
      const response = await axios.post('http://localhost:8080/api/createEMR', emrData);
      console.log('EMR created successfully:', response.data);
      // Optionally, you can reset the form or show a success message here
    } catch (error) {
      console.error('Error creating EMR:', error);
      // Optionally, show an error message to the user
    }
  };

   const [users, setUsers] = useState([]); // State to hold user data

  // Fetch users from the API
    const fetchUsers = async () => {
    await axios.get('http://localhost:8080/api/getusers')
    .then(result => {
      const toJson= JSON.parse(result.data.response);
      // console.log(toJson);
      setUsers(toJson)

    })
    .catch(error => {
      console.error(error);
    
    });
    };
  useEffect(() => {

    fetchUsers();
  }, []);


  return (
    <>
        <Sidebar/>
 <NavbarComp/>
    <Container style={{width:950}}>
      <Row>
        <Col md={12}>
          <h2>Create EMR</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="patientInformation">
              <Form.Label>Patient Information</Form.Label>
             <Row>
                  <Col md={6}>
                    <Form.Label>Select Patient</Form.Label>
                    <Form.Control
                      as="select"
                      value={patientInformation.patientId}
                      onChange={(event) => {
                        const selectedUser  = users.find(user => user.Record.id === event.target.value);
                        setPatientInformation({
                         ...patientInformation,
                            patientId: selectedUser.Record.id,
                            name: selectedUser.Record.name, // Assuming user object has 'name' field
                            contactInformation: {
                              ...patientInformation.contactInformation,
                              email: selectedUser.Record.email
                              } 
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
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    type="number"
                    value={patientInformation.age}
                    onChange={(event) =>
                      setPatientInformation({
                        ...patientInformation,
                        age: event.target.value
                      })
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Label>Sex</Form.Label>
                  <Form.Control
                    type="text"
                    value={patientInformation.sex}
                    onChange={(event) =>
                      setPatientInformation({
                        ...patientInformation,
                        sex: event.target.value
                      })
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    value={patientInformation.contactInformation.address}
                    onChange={(event) =>
                      setPatientInformation({
                        ...patientInformation,
                        contactInformation: {
                          ...patientInformation.contactInformation,
                          address: event.target.value
                        }
                      })
                    }
                  />
                </Col>
                <Col md={6}>
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    value={patientInformation.contactInformation.phoneNumber}
 onChange={(event) =>
                      setPatientInformation({
                        ...patientInformation,
                        contactInformation: {
                          ...patientInformation.contactInformation,
                          phoneNumber: event.target.value
                        }
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
                    value={patientInformation.contactInformation.email}
                    onChange={(event) =>
                      setPatientInformation({
                        ...patientInformation,
                        contactInformation: {
                          ...patientInformation.contactInformation,
                          email: event.target.value
                        }
                      })
                    }
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group controlId="medicalHistory">
              <Form.Label>Medical History</Form.Label>
              <Row>
                <Col md={6}>
                  <Form.Label>Allergies</Form.Label>
                  <Form.Control
                    type="text"
                    value={medicalHistory.allergies.join(', ')}
                    onChange={(event) =>
                      setMedicalHistory({
                        ...medicalHistory,
                        allergies: event.target.value.split(', ')
                      })
                    }
                  />
                </Col>
                <Col md={6}>
                  <Form.Label>Medications</Form.Label>
                  <Form.Control
                    type="text"
                    value={medicalHistory.medications.join(', ')}
                    onChange={(event) =>
                      setMedicalHistory({
                        ...medicalHistory,
                        medications: event.target.value.split(', ')
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
                    value={medicalHistory.medicalConditions.join(', ')}
                    onChange={(event) =>
                      setMedicalHistory({
                        ...medicalHistory,
                        medicalConditions: event.target.value.split(', ')
                      })
                    }
                  />
                </Col>
                <Col md={6}>
                  <Form.Label>Surgical History</Form.Label>
                  <Form.Control
                    type="text"
                    value={medicalHistory.surgicalHistory.join(', ')}
                    onChange={(event) =>
                      setMedicalHistory({
                        ...medicalHistory,
                        surgicalHistory: event.target.value.split(', ')
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
                    value={medicalHistory.familyMedicalHistory.join(', ')}
                    onChange={(event) =>
                      setMedicalHistory({
                        ...medicalHistory,
                        familyMedicalHistory: event.target.value.split(', ')
                      })
                    }
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group controlId="vitalSigns">
              <Form.Label>Vital Signs</Form.Label>
              <Row>
                <Col md={6}>
                  <Form.Label>Temperature</Form.Label>
                  <Form.Control
                    type="text"
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
                    type="text"
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
                    type="text"
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
              <Row>
                <Col md={6}>
                  <Form.Label>Oxygen Saturation</Form.Label>
                  <Form.Control
                    type="text"
                    value={vitalSigns.oxygenSaturation}
                    onChange={(event) =>
                      setVitalSigns({
                        ...vitalSigns,
                        oxygenSaturation: event.target.value
                      })
                    }
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group controlId="chiefComplaint">
              <Form.Label >Chief Complaint</Form.Label>
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
              <Form.Label>Physical Examination</Form.Label>
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
                  <Form.Label>Vital Signs</Form.Label>
                  <Form.Control
                    type="text"
                    value={physicalExamination.vitalSigns}
                    onChange={(event) =>
                      setPhysicalExamination({
                        ...physicalExamination,
                        vitalSigns: event.target.value
                      })
                    }
                  />
                </Col>
              </Row>
              <Row>
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
              </Row>
              <Row>
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
              </Row>
              <Row>
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
              <Form.Label>Diagnostic Tests</Form.Label>
              <Row>
                <Col md={6}>
                  <Form.Label>Lab Results</Form.Label>
                  <Form.Control
                    type="text"
                    value={diagnosticTests.labResults.join(', ')}
                    onChange={(event) =>
                      setDiagnosticTests({
                        ...diagnosticTests,
                        labResults: event.target.value.split(', ')
                      })
                    }
                  />
                </Col>
                <Col md={6}>
                  <Form.Label>Imaging Studies</Form.Label>
                  <Form.Control
                    type="text"
                    value={diagnosticTests.imagingStudies.join(', ')}
                    onChange={(event) =>
                      setDiagnosticTests({
                        ...diagnosticTests,
                        imagingStudies: event.target.value.split(', ')
                      })
                    }
                  />
                </Col>
              </ Row>
              <Row>
                <Col md={6}>
                  <Form.Label>Other Tests</Form.Label>
                  <Form.Control
                    type="text"
                    value={diagnosticTests.otherTests.join(', ')}
                    onChange={(event) =>
                      setDiagnosticTests({
                        ...diagnosticTests,
                        otherTests: event.target.value.split(', ')
                      })
                    }
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group controlId="assessmentAndPlan">
              <Form.Label>Assessment and Plan</Form.Label>
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
                    value={assessmentAndPlan.medications.join(', ')}
                    onChange={(event) =>
                      setAssessmentAndPlan({
                        ...assessmentAndPlan,
                        medications: event.target.value.split(', ')
                      })
                    }
                  />
                </Col>
                <Col md={6}>
                  <Form.Label>Therapies</Form.Label>
                  <Form.Control
                    type="text"
                    value={assessmentAndPlan.therapies.join(', ')}
                    onChange={(event) =>
                      setAssessmentAndPlan({
                        ...assessmentAndPlan,
                        therapies: event.target.value.split(', ')
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
              <Form.Label>Progress Notes</Form.Label>
              <Row>
                <Col md={6}>
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={progressNotes[0].date}
                    onChange={(event) =>
                      setProgressNotes([
                        {
                          ...progressNotes[0],
                          date: event.target.value
                        }
                      ])
                    }
                  />
                </Col>
                <Col md={6}>
                  <Form.Label>Time</Form.Label>
                  <Form.Control
                    type="time"
                    value={progressNotes[0].time}
                    onChange={(event) =>
                      setProgressNotes([
                        {
                          ...progressNotes[0],
                          time: event.target.value
                        }
                      ])
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Label>Note</Form.Label>
                  <Form.Control
                    type="text"
                    value={progressNotes[0].note}
                    onChange={(event) =>
                      setProgressNotes([
                        {
                          ...progressNotes[0],
                          note: event.target.value
                        }
                      ])
                    }
                  />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group controlId="dischargeSummary">
              <Form.Label>Discharge Summary</Form.Label>
              <Row>
                <Col md={6}>
                  <Form.Label>Date</Form.Label>
                  <Form.Control
                    type="date"
                    value={dischargeSummary.date}
                    onChange={(event) =>
                      setDischargeSummary({
                        ...dischargeSummary,
                        date: event.target.value
                      })
                    }
                  />
                </Col>
                <Col md={6}>
                  <Form.Label>Time</Form.Label>
                  <Form.Control
                    type="time"
                    value={dischargeSummary.time}
                    onChange={(event) =>
                      setDischargeSummary({
                        ...dischargeSummary,
                        time: event.target.value
                      })
                    }
                  />
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Label>Summary</Form.Label>
                  <Form.Control
                    type="text"
                    value={dischargeSummary.summary}
                    onChange={(event) =>
                      setDischargeSummary({
                        ...dischargeSummary,
                        summary: event.target.value
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