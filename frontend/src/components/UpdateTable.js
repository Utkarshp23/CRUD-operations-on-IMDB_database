import React, { useReducer, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const UpdateTable = () => {
  const init = {
    empno: { value: 0, touched: false, isNotValid: false, status: '' },
    ename: { value: '', touched: false, isNotValid: false, status: '' },
    deptno: { value: 0, touched: false, isNotValid: false, status: '' },
    sal: { value: 0, touched: false, isNotValid: false, status: '' },
    job: { value: '', touched: false, isNotValid: false, status: '' },
    netsal: { value: 0, touched: false, isNotValid: false, status: '' },
    hiredate: { value: null, touched: false, isNotValid: false, status: '' },
    comm: { value: 0, touched: false, isNotValid: false, status: '' },
    mgr: { value: 0, touched: false, isNotValid: false, status: '' },
    isFormValid: false,
  };

  var reducer = (state, action) => {
    switch (action.type) {
      case 'update':
        const { name, value, touched, isNotValid, status, isFormValid } =
          action.data;
        return {
          ...state,
          [name]: {
            ...state[name],
            value,
            touched,
            isNotValid,
            status,
            isFormValid,
          },
        };
    }
  };

  const [emp, dispatch] = useReducer(reducer, init);
  // const [statusMsg, SetMsg] = useState();
  var handleSubmit = (e) => {
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

  var validate = (name, value) => {
    let isNotValid = false;
    let status = '';

    switch (name) {
      case 'empno':
        var reg = /^[0-9]{4}$/;
        if (!reg.test(value)) {
          isNotValid = true;
          status = 'Enter 4 digits';
        }
        break;
      case 'ename':
        var reg = /^[A-Z][a-z]{2,10}$/;
        if (!reg.test(value)) {
          isNotValid = true;
          status = 'Enter valid name';
        }
        break;
      case 'deptno':
        var reg = /^[1-9]{1}0$/;
        if (!reg.test(value)) {
          isNotValid = true;
          status = 'Enter valid dept no';
        }
        break;
      case 'sal':
        var reg = /^[0-9]{3,7}$/;
        if (!reg.test(value)) {
          isNotValid = true;
          status = 'Enter valid salary';
        }
        break;
      case 'job':
        var reg = /^[a-z]{2,10}$/;
        if (!reg.test(value)) {
          isNotValid = true;
          status = 'Enter valid job name';
        }
        break;
      case 'mgr':
        var reg = /^[0-9]{4}$/;
        if (!reg.test(value)) {
          isNotValid = true;
          status = 'Enter valid mgr number';
        }
        break;
      case 'comm':
        var reg = /^[0-9]{0,4}$/;
        if (!reg.test(value)) {
          isNotValid = true;
          status = 'Enter valid commision';
        }
        break;
      case 'netsal':
        var reg = /^[0-9]{3,7}$/;
        if (!reg.test(value)) {
          isNotValid = true;
          status = 'Enter valid netsal';
        }
        break;
      case 'hiredate':
        // var reg = /^\d{4}[09]{4}$/;
        // if (!reg.test(value)) {
        isNotValid = false;
        status = '';
        // }
        break;
    }

    return { isNotValid, status };
  };

  var handleChange = (name, value) => {
    const { isNotValid, status } = validate(name, value);
    // emp.isFormValid = true;
    let isFormValid = true;
    for (let key in emp) {
      if (emp[key].isNotValid === true) {
        isFormValid = false;
        break;
      }
    }
    console.log(`${name},${value},${isNotValid},${status},${isFormValid}`);
    dispatch({
      type: 'update',
      data: { name, value, touched: true, isNotValid, status, isFormValid },
    });
  };

  return (
    <Form noValidate onSubmit={(e) => handleSubmit(e)}>
      <Row>
        <Col>
          <Form.Control
            size='sm'
            name='empno'
            type='number'
            placeholder='Employee number'
            onChange={(e) => {
              handleChange(e.target.name, e.target.value);
            }}
          />
          {/* <Form.Control.Feedback>Looks good!</Form.Control.Feedback> */}
        </Col>
        <Col>
          <Form.Control
            size='sm'
            name='ename'
            type='text'
            placeholder='Employee name'
            onChange={(e) => {
              handleChange(e.target.name, e.target.value);
            }}
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Form.Control
            size='sm'
            name='deptno'
            type='number'
            placeholder='Department number'
            onChange={(e) => {
              handleChange(e.target.name, e.target.value);
            }}
          />
        </Col>
        <Col>
          <Form.Control
            size='sm'
            name='sal'
            type='number'
            placeholder='Salary'
            onChange={(e) => {
              handleChange(e.target.name, e.target.value);
            }}
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Form.Control
            size='sm'
            name='comm'
            type='number'
            placeholder='Commission'
            onChange={(e) => {
              handleChange(e.target.name, e.target.value);
            }}
          />
        </Col>
        <Col>
          <Form.Control
            size='sm'
            name='hiredate'
            type='date'
            placeholder='Hiredate'
            onChange={(e) => {
              handleChange(e.target.name, e.target.value);
            }}
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Form.Control
            size='sm'
            name='job'
            type='text'
            placeholder='Job'
            onChange={(e) => {
              handleChange(e.target.name, e.target.value);
            }}
          />
        </Col>
        <Col>
          <Form.Control
            size='sm'
            name='mgr'
            type='number'
            placeholder='Manager'
            onChange={(e) => {
              handleChange(e.target.name, e.target.value);
            }}
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <Form.Control
            size='sm'
            name='netsal'
            type='number'
            placeholder='Net salary'
            onChange={(e) => {
              handleChange(e.target.name, e.target.value);
            }}
          />
        </Col>
      </Row>
      <br />
      <Button
        variant='primary'
        type='submit'
        disabled={emp.isFormValid ? false : true}
      >
        Submit
      </Button>
    </Form>
  );
};

export default UpdateTable;
