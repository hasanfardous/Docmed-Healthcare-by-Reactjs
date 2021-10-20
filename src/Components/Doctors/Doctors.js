import { Container, Row, Col } from 'react-bootstrap';
import doctor1 from '../../assets/doctor1.png';
import doctor2 from '../../assets/doctor2.png';
import doctor3 from '../../assets/doctor3.png';
import doctor4 from '../../assets/doctor4.png';
import Doctor from './Doctor/Doctor';
import './Doctors.css';

const Doctors = () => {
    const doctorDatas = [
        { id: 1, img: doctor1, name: 'Mirazul Alom', specialist: 'Neurologist' },
        { id: 2, img: doctor2, name: 'Abul Khayer', specialist: 'Liver Specialist' },
        { id: 3, img: doctor3, name: 'Salman Khan', specialist: 'Gastrology' },
        { id: 4, img: doctor4, name: 'Ramesh Chandra', specialist: 'Arthopedic' }
    ];
    return (
        <div className="expert_doctors_area">
            <Container>
                <Row>
                    <Col xl={12}>
                        <div className="doctors_title mb-55">
                            <h3>Expert Doctors</h3>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {
                        doctorDatas.map(doctor => <Doctor key={doctor.id} data={doctor}></Doctor>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Doctors;