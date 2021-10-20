import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import about1 from '../../assets/about1.png';
import about2 from '../../assets/about2.png';
import './About.css';

const About = () => {
    return (
        <div className="welcome_docmed_area">
            <Container>
                <Row>
                    <Col xl={6} lg={6}>
                        <div className="welcome_thumb">
                            <div className="thumb_1">
                                <img src={about1} alt=""/>
                            </div>
                            <div className="thumb_2">
                                <img src={about2} alt=""/>
                            </div>
                        </div>
                    </Col>
                    <Col xl={6} lg={6}>
                        <div className="welcome_docmed_info">
                            <h2>Welcome to Docmed</h2>
                            <h3>Best Care For Your <br/>
                                    Good Health</h3>
                            <p>Esteem spirit temper too say adieus who direct esteem.
                                    It esteems luckily or picture placing drawing. Apartments frequently or motionless on reasonable projecting expression.</p>
                            <ul className="px-0">
                                <li> <FontAwesomeIcon icon={faCheckCircle} /> Apartments frequently or motionless. </li>
                                <li> <FontAwesomeIcon icon={faCheckCircle} /> Duis aute irure dolor in reprehenderit in voluptate.</li>
                                <li> <FontAwesomeIcon icon={faCheckCircle} /> Voluptatem quia voluptas sit aspernatur. </li>
                            </ul>
                            <a href="#" className="boxed-btn3-white-2">Learn More</a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;