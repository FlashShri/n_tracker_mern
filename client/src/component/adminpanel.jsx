
import { MDBTable, MDBTableHead, MDBTableBody, MDBBtn } from 'mdb-react-ui-kit';
import React, { useState, useEffect } from 'react';
import UserList from './UserList';
// import UserForm from './UserForm';
import { deleteusers, fetchusers, updateusers } from '../services/AdminService';

import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export function AdminPanel()  {

  const [users, setUsers] = useState([]);

 const navigate = useNavigate();

  useEffect(() => {
    // const res = fetchusers();
    // setUsers(res) ;
  }, []);


  // const handlemodify = async (user) => {

  //   const formdata = {

  //   }

  //   try {
  //    await updateusers(formdata , params.name )
  //   } catch (error) {
      
  //   }
  // };

  const handledelete = async ( name ) => {
   await deleteusers( name )
    const updatedData = users.filter(user => user.name !== name );
    setUsers(updatedData);
  };


  const handlegetuser = async ()=>{
     const res =   await  fetchusers();
       console.log( res );
    setUsers(res.users) ;

    console.log( users  ); // empty 
  }

  return (
    <div>
      <button onClick={handlegetuser}>getusers</button>
   
   <Row  className='m-10'>
    <Col lg={6}>
      <MDBTable striped>
      <MDBTableHead>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Email</th>
          <th scope='col'>Phone</th>
          <th scope='col'>Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody> 
      {
        users.map((user)=>{
            return(
              <tr>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.phone}</td>
          <td><MDBBtn className='me-1' color='danger'  onClick={ ()=>{    
            handledelete( user.name);
            
          }} >
        Delete
      </MDBBtn>
      <MDBBtn className='me-1' color='warning' onClick={()=>{
          navigate(`/edit/${user.name}`);
      }} >
        Modify
      </MDBBtn> </td>
        </tr>
            );
        })
      }
      </MDBTableBody>
    </MDBTable>

    
    </Col>

    
   </Row>

     


        
    </div>

 
  );
};


