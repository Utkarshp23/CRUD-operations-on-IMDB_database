import React, { useReducer, useState } from 'react';

const Emps = () => {
  // const init = {
  //   empno: '',
  //   ename: '',
  //   salary: 0,
  //   deptno: 0,
  // };

  // const reducer=(state,action)=>{

  // }

  // const [emp, dispatch] = useReducer(reducer, init);

  const [emp, setEmp] = useState([]);

  var handleClick = (e) => {
    // e.preventDefualt();
    fetch('http://localhost:9000/emps')
      .then((res) => {
        // console.log(res.json());
        // setEmp(res.json());
        return res.json();
      })
      .then((res) => setEmp(res))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <button onClick={(e) => handleClick(e)}>Get Emps</button>
      {/* <bu */}
      <div>
        <ul>
          {emp.map((v, i) => {
            return <li key={i}>{v.ENAME}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Emps;
