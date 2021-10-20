import { Carousel, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import banner1 from '../../assets/banner.png';
import banner2 from '../../assets/banner2.png';
import './Slider.css';

const Slider = () => {
    const sliderDatas = [
        { id: 1, img: banner1, title: 'Health care', caption: 'In healthcare sector, service excellence is the facility of the hospital' },
        { id: 2, img: banner2, title: 'For Hole Family', caption: 'In healthcare sector, service excellence is the facility of the hospital' }
    ];

    return (
        <Carousel fade>
            {
                sliderDatas.map(slider => <Carousel.Item key={slider.id}>
                    <img src={slider.img} className="d-block w-100" alt={slider.title} />
                    <Container>
                        <Row>
                            <Carousel.Caption>
                                <h3>{slider.title}</h3>
                                <p>{slider.caption}</p>
                                <a href="#" className="boxed-btn3 mt-4">Check Our Services</a>
                            </Carousel.Caption>
                        </Row>
                    </Container>
                </Carousel.Item>)
            }
        </Carousel>
    );
};

export default Slider;