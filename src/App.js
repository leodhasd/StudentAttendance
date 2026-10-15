import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Header";
import StudentList from "./StudentList";
import AttendanceLog from "./AttendanceLog";
import AttendanceReport from "./AttendanceReport";
import Footer from "./Footer";

function App() {
    const [student, setStudent] = useState([]);
    const [attendance, setAttendance] = useState({});

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                setStudent(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route
                    path="/"
                    element={<StudentList student={student} />}
                />

                <Route
                    path="/students"
                    element={<StudentList student={student} />}
                />

                <Route
                    path="/attendance"
                    element={
                        <AttendanceLog
                            student={student}
                            attendance={attendance}
                            setAttendance={setAttendance}
                        />
                    }
                />

                <Route
                    path="/reports"
                    element={
                        <AttendanceReport
                            student={student}
                            attendance={attendance}
                        />
                    }
                />
            </Routes>

            <Footer />
        </BrowserRouter>
    );
}

export default App;