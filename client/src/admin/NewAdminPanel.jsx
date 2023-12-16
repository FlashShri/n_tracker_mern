import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { fetchusers } from "../services/AdminService";
import { NavForLogin } from "../component/navforlogin";

function CrudTable() {
  const [cruds, setCruds] = useState([]);

  useEffect(function () {
    async function getCruds() {
      try {
        const response = await fetchusers();
        setCruds(response.users);
        console.log(response.users);
      } catch (error) {
        console.log("error", error);
      }
    }
    getCruds();
  }, []);

  return (
    <>
      <NavForLogin></NavForLogin>

      <div className="container">
        <div>
          <h2>
            Admin Panel Crud Methods
         
          </h2>
          <hr />
        </div>

        <div className="table-responsive">
          <table className="table riped  table-hover table-bordered container">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>

                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {cruds &&
                cruds.map((crud) => {
                  return (
                    <tr key={1}>
                      <td>
                        <p>
                          {" "}
                          <b>{crud.name}</b>
                        </p>
                      </td>
                      <td>{crud.phone}</td>
                      <td>{crud.email}</td>
                      <td>
                        <Link
                          to={`/cruds/${crud.name}/edit`}
                          className="btn btn-success"
                        >
                          Edit
                        </Link>
                      </td>
                      <td>
                        <Link
                          to={`/cruds/${crud.name}/delete`}
                          className="btn btn-danger"
                        >
                          Delete
                        </Link>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default CrudTable;
