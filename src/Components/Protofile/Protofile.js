import React from 'react'
import profile from './Images/profile.jpg'
import './Protofile.css';

function Protofile() {
    return (
        <div className="full">
            <div className="left">
                <div className="image">
                    <img src={profile} alt="profile" width={200} height={200} />
                </div>
                <div className="name">
                    <h1 >Vijayalakshmi Punyala</h1>
                    <p >Student</p>
                    <div className="Skills">
                        <h2>Skills</h2>
                        <ul>
                            <li><b>Programming Languages: Python,C,C++,Web programming.</b></li>
                            <li><b>Working on web development</b></li>
                        </ul>
                    </div>
                    <div className="Languages">
                        <h2>Languages:</h2>
                        <ul>
                            <li>English</li>
                            <li>Hindi</li>
                            <li>Tamil</li>
                            <li>Telugu</li>
                        </ul>
                    </div>
                    <div className="Hobbies">
                        <h2>Hobbies</h2>
                        <ul>
                            <li>Drawing</li>
                            <li>Reading comics</li>
                            <li>playing outdoor games</li>
                            <li>Watching Cartoon</li>
                        </ul>
                    </div>
                    <div className="Contact">
                        <h2>Contacts</h2>
                        <p>Email id:vijayalakshmipunyala@gmail.com</p>
                        <p>Mobile number:9876543210</p>
                    </div>
                </div>
            </div >
            <div className="right">
                <div className="name">
                    <div className="Achivements">
                        <h2>Achivements</h2>
                        <ul>
                            <li>Blockchain webinar</li>
                            <li>Drestin workshop</li>
                            <li>MIT workshop</li>
                        </ul>
                    </div>
                    <div className="Education">
                        <h2>Education</h2>
                        <table>
                            <tr>
                                <th>University/College/school</th>
                                <th>Passing year</th>
                                <th>Percentage/CGPA</th>
                            </tr>
                            <tr>
                                <td>Saveetha Engineering College</td>
                                <td>2025</td>
                                <td>80</td>
                            </tr>
                            <tr>
                                <td>BIT Junior College</td>
                                <td>2020</td>
                                <td>85</td>
                            </tr>
                            <tr>
                                <td>Loyola Public School</td>
                                <td>2019</td>
                                <td>80</td>
                            </tr>
                        </table>
                    </div>
                    <div className="Project">
                        <h2>project</h2>
                        <p>I have done a mini-project in 3d-printing. The concept is given according to the
                            department.so, I have done a project on printing mouse with help of "Fusion-360"
                            software.According to that we have submitted the and created the model and have done the
                            report.
                        </p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Protofile