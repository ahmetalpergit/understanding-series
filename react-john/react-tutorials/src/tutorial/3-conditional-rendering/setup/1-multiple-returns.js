import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [user, setUser] = useState('default user');

  useEffect(() => {
    fetch(url)
      .then(res => {
        if (res.status >= 200 && res.status < 300) {
          return res.json();
        } else {
          setLoading(false);
          setError(true);
          throw new Error(res.statusText);
        }
      })
      .then(data => {
        const { login } = data;
        setLoading(false);
        setUser(login);
      })
      .catch(err => console.error(err));
  }, []);

  if (loading) {
    return <div>
      <h1>Loading...</h1>
    </div>;
  };

  if (error) {
    return <div>
      <h1>Error...</h1>
    </div>;
  }

  return <div>
    <h1>{user}</h1>
  </div>;
};

export default MultipleReturns;
