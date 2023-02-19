import React, { useEffect, useState } from 'react';

const User = () => {
  const [data, setData] = useState([]);
  const options = {
    method: 'GET',
    headers: {
      'app-id': '639ef4855616891632fc7c3f',
    },
  };
  useEffect(() => {
    fetch('https://dummyapi.io/data/v1/user/', options)
      .then((res) => res.json())
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <ul>
        {data.map((v) => {
          return <li>{v.firstName}</li>;
        })}
      </ul>
    </div>
  );
};

export default User;
