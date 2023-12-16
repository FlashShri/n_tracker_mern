import React from 'react';

export function ContactCard  ({ name, address, phone, email })  {
  return (
    <div style={styles.card}>
      <h3 style={styles.name}>{name}</h3>
      <p style={styles.address}>{address}</p>
      <p style={styles.contactInfo}>
        <strong>Phone:</strong> {phone}
      </p>
      <p style={styles.contactInfo}>
        <strong>Email:</strong> {email}
      </p>
    </div>
  );
};

const styles = {
  card: {
    maxWidth: '300px',
    margin: '20px',
    padding: '15px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  name: {
    fontSize: '1.2rem',
    marginBottom: '10px',
    color: '#333',
  },
  address: {
    marginBottom: '10px',
    color: '#555',
  },
  contactInfo: {
    marginBottom: '5px',
    color: '#777',
  },
};


