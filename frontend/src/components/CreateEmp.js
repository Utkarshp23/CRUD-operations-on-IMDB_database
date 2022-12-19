import React, { useReducer, useState } from 'react';

const CreateEmp = () => {
  const init = {
    empno: 0,
    ename: '',
    deptno: 0,
    sal: 0,
    job: '',
    netsal: 0,
    hiredate: null,
    comm: 0,
    mgr: 0,
  };

  var reducer = (state, action) => {
    switch (action.type) {
      case 'update':
        return { ...state, [action.field]: action.val };
    }
  };

  const [emp, dispatch] = useReducer(reducer, init);
  // const [statusMsg, SetMsg] = useState();
  var update = (e) => {
    e.preventDefault();
    // console.log(JSON.stringify(emp));
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(emp),
    };
    fetch('http://localhost:9000/emps/create', options)
      .then((res) => res.text())
      .then((msg) => {
        // setMsg(msg);
        console.log(msg);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form>
        <div className='form-row'>
          <div className='col'>
            <input
              type='number'
              className='form-control'
              placeholder='Emp no'
              onChange={(e) => {
                dispatch({
                  type: 'update',
                  field: 'empno',
                  val: e.target.value,
                });
              }}
            />
          </div>
          <div className='col'>
            <input
              type='text'
              className='form-control'
              placeholder='Emp name'
              onChange={(e) => {
                dispatch({
                  type: 'update',
                  field: 'ename',
                  val: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className='form-row'>
          <div className='col'>
            <input
              type='number'
              className='form-control'
              placeholder='Dept no'
              onChange={(e) => {
                dispatch({
                  type: 'update',
                  field: 'deptno',
                  val: e.target.value,
                });
              }}
            />
          </div>
          <div className='col'>
            <input
              type='number'
              className='form-control'
              placeholder='Salary'
              onChange={(e) => {
                dispatch({
                  type: 'update',
                  field: 'sal',
                  val: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className='form-row'>
          <div className='col'>
            <input
              type='number'
              className='form-control'
              placeholder='Commision'
              onChange={(e) => {
                dispatch({
                  type: 'update',
                  field: 'comm',
                  val: e.target.value,
                });
              }}
            />
          </div>
          <div className='col'>
            <input
              type='date'
              className='form-control'
              placeholder='Hiredate'
              onChange={(e) => {
                dispatch({
                  type: 'update',
                  field: 'hiredate',
                  val: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className='form-row'>
          <div className='col'>
            <input
              type='text'
              className='form-control'
              placeholder='Job'
              onChange={(e) => {
                dispatch({
                  type: 'update',
                  field: 'job',
                  val: e.target.value,
                });
              }}
            />
          </div>
          <div className='col'>
            <input
              type='number'
              className='form-control'
              placeholder='Manager'
              onChange={(e) => {
                dispatch({
                  type: 'update',
                  field: 'mgr',
                  val: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <div className='form-row'>
          <div className='col'>
            <input
              type='number'
              className='form-control'
              placeholder='Net sal'
              onChange={(e) => {
                dispatch({
                  type: 'update',
                  field: 'netsal',
                  val: e.target.value,
                });
              }}
            />
          </div>
        </div>
        <button
          type='submit'
          onClick={(e) => {
            update(e);
          }}
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default CreateEmp;
