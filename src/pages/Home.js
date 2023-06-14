import React from 'react';
import Accountant from '../images/accountant.png';
import Title from '../components/Title';
import { Card, CardHeader, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

/*
  <p myRandomAttribute=""></p>
  <randomTag></randomTag>

  XML = extensible markup language

  JSX (JavaScript XML):
    React will translating the JSX into HTML

    React.createElement('div', { class: 'App' }); 
      document.createElement('div');
      document.attr.class = 'App';
    
    React will inject the created HTML into the DOM

  Props (properties): Way of managing data in a component
    Read-only
*/

function Home() {
  return (
    <div className="expense-tracker-container">
      <Title message="Welcome to the #1 Expense Tracker App" />
      <Card className="text-center">
        <CardHeader tag="h3">Get Started By Creating Your First Account</CardHeader>
        <CardBody>
          <div><img alt="accountant" src={Accountant} width={300} /></div>
          <Link className="btn btn-primary btn-lg" to="/manage-accounts"><i className="fa-solid fa-file-invoice"></i>&nbsp; Manage Accounts</Link>
        </CardBody>
      </Card>
    </div>
  );
}

// 2 choices of export
export default Home; // implicit export
