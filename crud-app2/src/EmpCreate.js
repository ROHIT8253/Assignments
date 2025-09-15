import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EmpCreate = () => {
    const [id, idchange] = useState("");
    const [name, namechange] = useState("");
    const [email, emailchange] = useState("");
    const [age, agechange] = useState("");
    const [active, activechange] = useState(true);
    const [validation, valchange] = useState(false);


    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        let empdata = { name, email, age, active };
       
        fetch("http://localhost:3000/employees")
            .then((res) => res.json())
            .then((data) => {
                const maxId = data.length > 0 ? Math.max(...data.map(emp => parseInt(emp.id))) : 0;
                empdata.id = maxId + 1;

       return fetch("http://localhost:3000/employees", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(empdata)
        });
    })
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                return res.json(); 
            })
            .then((data) => {
                console.log('Employee created:', data);
                alert('Saved successfully.');
                navigate('/');
            })
            .catch((err) => {
                console.log('Error:', err.message);
                alert('Error: ' + err.message);
            });
    }

    return (
        <div className="row">
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handlesubmit}>
                    <div className="card" style={{ "textAlign": "left" }}>
                        <div className="card-title">
                            <h2>Employee Create</h2>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>ID</label>
                                        <input value={id} disabled className="form-control" />
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input
                                            value={name}
                                            onMouseDown={(e) => valchange(true)}
                                            onChange={(e) => namechange(e.target.value)}
                                            className="form-control"
                                            required

                                        />
                                        {name.length === 0 && validation && <span className="text-danger">Enter the Name</span>}
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => emailchange(e.target.value)}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Age</label>
                                        <input
                                            type="number"
                                            value={age}
                                            onChange={(e) => agechange(e.target.value)}
                                            className="form-control"
                                            required
                                            min="18"
                                            max="65"
                                        />
                                    </div>
                                </div>

                                <div className="col-lg-12">
                                    <div className="form-check">
                                        <input
                                            checked={active}
                                            onChange={(e) => activechange(e.target.checked)}
                                            className="form-check-input"
                                            type="checkbox"
                                            id="isActive"
                                        />
                                        <label className="form-check-label" htmlFor="isActive">
                                            Is Active
                                        </label>
                                    </div>
                                </div>

                                <div className="col-lg-12 mt-3">
                                    <button type="submit" className="btn btn-success me-2">
                                        Save
                                    </button>
                                    <Link className="btn btn-danger" to="/">
                                        Back
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EmpCreate;