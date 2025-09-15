import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const EmpListing = () => {
    const [empdata, empdatachange] = useState([]);
    const navigate = useNavigate();

    const LoadDetail = (id) => {
        navigate("/employee/detail/" + id);
    };

    const LoadEdit = (id) => {
        navigate("/employee/edit/" + id);
    };

    const Removefunction = (id) => {
        if (window.confirm("Do you want to remove?")) {
            fetch("http://localhost:3000/employees/" + id, {
                method: "DELETE",
            })
                .then((res) => {
                    alert("Removed successfully.");
                    empdatachange(empdata.filter((emp) => emp.id !== id));
                })
                .catch((err) => {
                    console.log(err.message);
                });
        }
    };

    useEffect(() => {
        fetch("http://localhost:3000/employees")
            .then((res) => res.json())
            .then((resp) => {
                empdatachange(resp);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, []);

    return (
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Employee Listing</h2>
                </div>

                <div className="card-body">
                    <div className="divbtn">
                        <Link to="/employee/create" className="btn btn-success">
                            Add New
                        </Link>
                    </div>
                    <table className="table">
                        <thead className="bg-dark text-white">
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Age</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {empdata.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.age}</td>
                                    <td>
                                        <button
                                            onClick={() => LoadEdit(item.id)}
                                            className="btn btn-success me-2"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => Removefunction(item.id)}
                                            className="btn btn-danger me-2"
                                        >
                                            Remove
                                        </button>
                                        <button
                                            onClick={() => LoadDetail(item.id)}
                                            className="btn btn-primary"
                                        >
                                            Detail
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default EmpListing;
