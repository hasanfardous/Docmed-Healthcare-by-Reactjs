import { Col } from "react-bootstrap";

const Doctor = (props) => {
    const {id, img, name, specialist} = props.data;
    return (
        <Col sm={3}>
            <div className="single_expert">
                <div className="expert_thumb">
                    <img src={img} alt={name}/>
                </div>
                <div className="experts_name text-center">
                    <h3>{name}</h3>
                    <span>{specialist}</span>
                </div>
            </div>
        </Col>
    );
};

export default Doctor;