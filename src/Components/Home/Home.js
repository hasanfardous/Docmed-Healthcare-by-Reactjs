import Slider from '../Slider/Slider';
import About from '../About/About';
import Departments from '../Departments/Departments';
import Doctors from '../Doctors/Doctors';

function Home() {
    return (
        <div className="Home">
            <Slider></Slider>
            <About></About>
            <Departments></Departments>
            <Doctors></Doctors>
        </div>
    );
}

export default Home;
  