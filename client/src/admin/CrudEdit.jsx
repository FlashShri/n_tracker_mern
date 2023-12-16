import React, { useState, useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { deleteusers, fetchuser, updateusers } from "../services/AdminService";
import { NavForLogin } from "../component/navforlogin";

function CrudEdit(props) {
	const initialState = {
    name: "",
    email: "",
    phone: 0,
    password: "",
    cpassword: "",
  };
	const [crud, setCrud] = useState(initialState);

	const { n } = useParams();
	const navigate = useNavigate();

	useEffect(
		function () {
			async function updateCrud() {
				try {
					const response = await fetchuser(n);
					setCrud(response.data);
				} catch (error) {
					console.log(error);
				}
			}
			updateCrud();
		},
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[props]
	);

	function handleSubmit(event) {
		event.preventDefault();
		async function updateCrud() {
			try {
				 await updateusers(crud , n);

				 navigate(`/admincrud`);
			} catch (error) {
				console.log(error);
			}
		}
		updateCrud();
	}

	function handleChange(event) {
		setCrud({ ...crud, [event.target.name]: event.target.value });
	}

	function handleCancel() {
		navigate(`/admincrud`);
	}

	return (
    <>
      <NavForLogin></NavForLogin>

      <div className="container">
        <h1>Edit {crud.name}</h1>
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>User Name</label>
            <input
              name="name"
              type="text"
              value={crud.name}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              name="phone"
              type="number"
              // pattern="(251)-[0-9]{3}-[0-9]{6}"
              required
              value={crud.phone}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              name="email"
              type="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,63}$"
              required
              value={crud.email}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              name="password"
              type="text"
              required
              value={crud.password}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              name="password"
              type="text"
              value={crud.password}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="btn-group">
            <button type="submit" className="btn btn-primary">
              Update
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="btn btn-secondary"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CrudEdit;