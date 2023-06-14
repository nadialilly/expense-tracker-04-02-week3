import React, { useState } from 'react';
import { Card, CardBody, CardHeader, CardFooter, FormGroup, Form, Input, Button, Label, Alert } from 'reactstrap';
import { ACCOUNTS } from '../data/Accounts';
import AccountsList from '../components/accounts/ListAccounts';

function ManageAccounts() {
  // Set up the data that you plan on tracking in your component
  const [ accounts, setAccounts ] = useState(ACCOUNTS);
  const [ accountName, setAccountName ] = useState();
  const [ accountDescription, setAccountDescription ] = useState();
  const [ createSuccess, setCreateSuccess ] = useState(false);

  // JS provides an event object on every callback for event listeners
  const handleName = (event) => {
    let value = event.target.value;
    setAccountName(value); // we tell React to re-render our component
  }

  const handleDescription = (event) => {
    let value = event.target.value;
    setAccountDescription(value); // we tell React to re-render our component
  }

  const addAccount = (event) => {
    event.preventDefault(); // stop form from actually submitting
    let newAccount = {
      name: accountName,
      description: accountDescription
    };

    setCreateSuccess(true); // show alert
    setAccounts(prevAccounts => [ ...prevAccounts, newAccount ]);
  }

  return (
    <section>
      {/* Conditional Render Example */}
      {createSuccess && <Alert type="success">Account added successfully</Alert>}
      <Card>
        <CardHeader tag="h2">Manage Accounts</CardHeader>
        <Form onSubmit={addAccount}>
        <CardBody>
            <FormGroup>
              <Label>Name</Label>
              <Input onChange={handleName}  />
            </FormGroup>
            <FormGroup>
              <Label>Description</Label>
              <Input onChange={handleDescription} /> {/* Every time input changes, call the handleDescription */}
            </FormGroup>
        </CardBody>
        <CardFooter>
          <Button type="submit" color="success" size="lg">Create Account</Button>
        </CardFooter>
        </Form>
      </Card>
      <AccountsList accounts={accounts} />
    </section>
  );
};

export default ManageAccounts;