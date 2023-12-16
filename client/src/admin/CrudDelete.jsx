import React, { useState, useEffect } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteusers, fetchuser } from "../services/AdminService";
import { NavForLogin } from "../component/navforlogin";

function CrudDelete(props) {
	const [crud, setCrud] = useState({});

	const { n }   = useParams();
    console.log( n );
	const navigate = useNavigate();

	useEffect(
		function () {
			async function deleteCrudById() {
				try {
					const response = await fetchuser(n);
					setCrud(response.user);
					console.log( crud );
				} catch (error) {
					console.log("error", error);
				}
			}
			deleteCrudById();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[props]
	);

	async function handleDelete() {
		try {
			await deleteusers(n);
			navigate("/admincrud");
		} catch (error) {
			console.error(error);
		}
	}
	return (
    <>
      <NavForLogin></NavForLogin>

      <div className="container">
       

        <p>
          <b>This will delete the selected User from database</b>
        </p>
        <div className="btn-group">
          <button onClick={handleDelete} className="btn btn-danger">
            Delete
          </button>
          <Link to="/admincrud" className="btn btn-secondary">
            Cancel{" "}
          </Link>
        </div>
        <hr />
      </div>
    </>
  );
}
export default CrudDelete;