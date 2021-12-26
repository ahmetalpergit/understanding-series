import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchGithubUsers = async () => {
      const res = await fetch(url);
      const data = await res.json();
      console.log('data:', data);
      setUsers(data);
    };
    fetchGithubUsers();
  }, []);
  return <>
    <h2>Github Users</h2>
    <ul className='users'>
      {users.map(user => {
        const { id, login, avatar_url, html_url } = user;
        return <li key={id}>
          <img src={avatar_url} alt="" />
          <div>
            <h4>{login}</h4>
            <a href={html_url}>Profile</a>
          </div>
        </li>;
      })}
    </ul>
  </>;
};

export default UseEffectFetchData;
