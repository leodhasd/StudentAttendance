import React from "react";

function StudentList({ student }) {
    return (
        <div style={{
            padding: "20px",
            backgroundColor: "#f8fafc"
        }}>
            <h2 style={{ color: "#1e3a8a" }}>
                Student Details
            </h2>

            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "20px"
            }}>
                {student.map((i) => {
                    return (
                        <div key={i.id} style={{
                            backgroundColor: "white",
                            padding: "20px",
                            borderRadius: "10px",
                            boxShadow: "0 2px 8px #ddd"
                        }}>
                            <h3>{i.name}</h3>
                            <p>Student ID: {i.id}</p>
                            <p>Email: {i.email}</p>
                            <p>City: {i.address.city}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default StudentList;

