import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Card, CardHeader, CardBody, Button, Form, FormGroup, Input, Label, Table, Alert, FormText } from 'reactstrap';
import { ACCOUNTS } from '../../data/Accounts';

function AccountDetails() {
  const params = useParams(); // look at the router params
  const navigate = useNavigate();

  const [ expenseName, setExpenseName ] = useState();
  const [ expenseDescription, setExpenseDescription ] = useState();
  const [ expenseCategory, setExpenseCategory ] = useState();
  const [ expensePrice, setExpensePrice ] = useState(0);
  const [ expensePaymentMethod, setExpensePaymentMethod ] = useState();
  const [ addExpenseClicked, setAddExpenseClicked ] = useState(false);

  const [ allExpenses, setAllExpenses ] = useState([]); // hold a list of all expenses

  const [ errors, setErrors ] = useState();

  /* 
    useEffect() hook: "side effect" after certain lifecycles events occur on the component

      Event examples: Re-renders

      useEffect accepts two arguments:
        1. "Side effect" function (aka callback)
        2. Dependencies:
          a) null = Every time the component renders
          b) [] = Only when the component renders the VERY FIRST time
          c) [data1, data2, data3] = Only when the component renders from a specific data change
  */

  useEffect(() => {
    console.log('changing event name', expenseName);
    // when only run when expenseName changes
    let regex = /^[A-Za-z0-9]{3}/; // TODO: Fix to allow spaces

    if (expenseName && regex.test(expenseName)) {
      setErrors('');
    } else {
      setErrors('Expense name is invalid');
    }
  }, [expenseName]); // listen for changes to expenseName

  // lookup the account information in the Account.js
  const account = ACCOUNTS.find(acc => acc.name === params.name);
  if (!account) return 'No account found';


  const handleName = (event) => {
    let value = event.target.value;

    // write validation rules
    // rule: must have at least 3 characters
    setExpenseName(value); // trigger a re-render, call our useEffect
  }

  const handleDescription = (event) => {
    let value = event.target.value;
    let regex = /^\w{10}/; // TODO: Fix to allow spaces

    if (regex.test(value)) {
      setExpenseDescription(value);
      setErrors('');
    } else {
      setErrors('Expense description is invalid');
    }
  }

  const handlePaymentMethod = (event) => {
    let value = event.target.value;
    setExpensePaymentMethod(value);
  }

  const addExpense = () => {
    // TODO: add expense into array of objects (allExpenses state)
    /*
      let newExpense = {
        name: expenseName,
        description: expenseDescription,
        ...
      };

      setAllExpenses();
    */

    setAddExpenseClicked(true);
  }

  console.log('state is', expenseName, expenseDescription, expenseCategory, expensePaymentMethod, expensePrice)

  return (
    <Card>
      <CardHeader tag="h3">Viewing Details for {account.name} Account</CardHeader>
      <CardBody>
      <Button color="primary" onClick={() => navigate(-1)}>Go Back</Button>
        <p>{account.description}</p>
        {errors && <Alert color="danger">{errors}</Alert>}
        <Form>
          <FormGroup>
            <Label>Expense Name</Label>
            <Input onChange={handleName} />
            <FormText>Must be at least 3 characters</FormText>
          </FormGroup>
          <FormGroup>
            <Label>Description</Label>
            <Input type="textarea" onChange={handleDescription} />
            <FormText>Must be at least 10 characters</FormText>
          </FormGroup>
          <FormGroup>
            <Label>Category</Label>
            <Input type="select" onChange={(event) => setExpenseCategory(event.target.value)}>
              <option></option>
              <option value="Grocery">Grocery</option>
              <option value="Bills">Bills</option>
              <option value="Utilities">Utilities</option>
              <option value="Entertainment">Entertainment</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label>Cost</Label>
            <Input type="number" onChange={(event) => setExpensePrice(event.target.value)} />
          </FormGroup>
          <FormGroup tag="fieldset">
            <legend>
              Payment Method
            </legend>
            <FormGroup check>
              <Input
                name="payment-method"
                type="radio" value="Debit" onChange={handlePaymentMethod}
              />
              {' '}
              <Label check>
                Debit Card
              </Label>
            </FormGroup>
            <FormGroup check>
              <Input
                name="payment-method"
                type="radio" value="Credit"  onChange={handlePaymentMethod}
              />
              {' '}
              <Label check>
                Credit Card
              </Label>
            </FormGroup>
            <FormGroup
              check
            >
              <Input
                name="payment-method"
                type="radio" value="ACH"  onChange={handlePaymentMethod}
              />
              {' '}
              <Label check>
                ACH
              </Label>
            </FormGroup>
            <FormGroup
              check
            >
              <Input
                name="payment-method"
                type="radio" value="Cash"  onChange={handlePaymentMethod}
              />
              {' '}
              <Label check>
                Cash
              </Label>
            </FormGroup>
          </FormGroup>
          <Button disabled={!!errors} onClick={addExpense} color="success" size="sm">Add Expense</Button>
        </Form>
        <hr />
        <Card>
          <CardHeader tag="h3">Expense List</CardHeader>
          <CardBody>
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Category</th>
                  <th>Cost</th>
                  <th>Payment Method</th>
                </tr>
              </thead>
              {addExpenseClicked && <tbody>
                <tr>
                  <td>{expenseName}</td>
                  <td>{expenseDescription}</td>
                  <td>{expenseCategory}</td>
                  <td>{expensePrice}</td>
                  <td>{expensePaymentMethod}</td>
                </tr>
              </tbody>}
            </Table>
          </CardBody>
        </Card>
      </CardBody>
    </Card>
  )
};

export default AccountDetails;