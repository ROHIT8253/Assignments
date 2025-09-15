import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EmpDetail = () => {
    const { empid } = useParams();

    const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:3000/employees/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })

    }, []);
    return (
        <div>
            <div className="card" style={{ "textAlign": "left" }}>
                <div className="card-title">
                    <h2>Emplyee Create</h2>
                </div>

                {empdata && (
                    <div className="card-body">
                        <h2>The Employee Name is: <b>{empdata.name}</b>  ({empdata.id})</h2>
                        <h3> Contact Details</h3>
                        <h5>Email : {empdata.email}</h5>
                        <h5>Age : {empdata.age}</h5>
                        <Link className="btn btn-danger" to="/">Back </Link>

                    </div>


                )}

            </div>
        </div>
    );
}
export default EmpDetail;