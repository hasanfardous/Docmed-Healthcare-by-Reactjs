import { Col } from 'react-bootstrap';

const Department = (props) => {
    const { id, name, img, details } = props.data;

    return (
        <Col lg={4} md={6} xl={4}>
            <div className="single_department">
                <div className="department_thumb">
                    <img src={img} alt={name} className="img-fluid" />
                </div>
                <div className="department_content">
                    <h3><a href="#">{name}</a></h3>
                    <p>{details.substring(0, 50)}..</p>
                    <a href="#" className="learn_more">Learn More</a>
                </div>
            </div>
        </Col>
    );
};

export default Department;