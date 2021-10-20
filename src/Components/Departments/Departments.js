import { useEffect, useState } from 'react';
import department1 from '../../assets/department-1.png';
import department2 from '../../assets/department-2.png';
import department3 from '../../assets/department-3.png';
import department4 from '../../assets/department-4.png';
import department5 from '../../assets/department-5.png';
import department6 from '../../assets/department-6.png';
import Department from './Department/Department';
import './Departments.css';

const Departments = () => {
    const [departments, setDepartments] = useState([]);
    useEffect(() => {
        fetch('./datas.json')
            .then(res => res.json())
            .then(data => setDepartments(data))
    }, []);

    return (
        <div className="our_department_area">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="section_title text-center mb-55">
                            <h3>Our Departments</h3>
                            <p>Esteem spirit temper too say adieus who direct esteem. <br />
                                It esteems luckily or picture placing drawing.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        departments.map(department => <Department key={department.id} data={department}></Department>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Departments;