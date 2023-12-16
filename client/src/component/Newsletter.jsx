import React, { useState } from 'react';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const subscribeNewsletter = async () => {
    try {
      // Call your API or perform the necessary action to subscribe the user
      // For now, let's simulate a successful subscription
      setSubscribed(true);
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await subscribeNewsletter();
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Subscribe to Our Newsletter</h2>
      {subscribed ? (
        <p style={styles.subscribedMessage}>Thank you for subscribing!</p>
      ) : (
        <form onSubmit={handleSubmit} style={styles.form}>
          <label htmlFor="email" style={styles.label}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
            required
          />
          <button type="submit" style={styles.button}>
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '400px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '1.5rem',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#333',
  },
  subscribedMessage: {
    color: 'green',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '8px',
    color: '#333',
  },
  input: {
    padding: '10px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};


