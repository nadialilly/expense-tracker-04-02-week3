import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardBody, Table } from 'reactstrap';

function AccountsList({ accounts }) {
  return (
    <Card className="mt-2">
      <CardHeader tag="h2" className="text-center">Accounts</CardHeader>
      <CardBody>
        <Table striped>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {accounts.map(account => {
              return <tr>
                <td>{account.name}</td>
                <td>{account.description}</td>
                <td><Link className="btn btn-sm btn-primary" to={`/account/${account.name}`}>Details</Link></td>
              </tr>
            })}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  )
};

export default AccountsList;