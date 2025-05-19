import { Avatar, Button, Label, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from "@vibe/core";
import React from "react";

const TableView = () => {
  return ( <div>hola</div>)
/*
  return (
    <div>
      <div className="py-4 top-0 sticky flex justify-between h-full overflow-y-hidden overflow-x-auto">
        <div>
          <Button size="small">Crear objetivo General</Button>
        </div>
      </div>
      <div>






      <Table
  columns={[
    {
      id: 'sentOn',
      loadingStateType: 'medium-text',
      title: 'Sent on',
      width: 150
    },
    {
      id: 'subject',
      loadingStateType: 'long-text',
      title: 'Subject'
    },
    {
      id: 'sentBy',
      infoContent: 'This is the sender',
      loadingStateType: 'circle',
      title: 'Sent by',
      width: {
        max: 200,
        min: 120
      }
    },
    {
      id: 'status',
      infoContent: 'Info content for the status column',
      loadingStateType: 'medium-text',
      title: 'Status',
      width: 150
    },
    {
      id: 'emailsSent',
      loadingStateType: 'medium-text',
      title: 'Emails sent',
      width: 150
    }
  ]}
  errorState={<div>Error loading data</div>}
  emptyState={<div>No data available</div>}
>
  <TableHeader>
    <TableHeaderCell title="Sent on" />
    <TableHeaderCell title="Subject" />
    <TableHeaderCell title="Sent by" />
    <TableHeaderCell title="Status" />
    <TableHeaderCell title="Emails sent" />
  </TableHeader>
  <TableBody>
  <TableRow>
      <TableCell>
        2020-01-01
      </TableCell>
      <TableCell>
        Lorem ipsum dolor
      </TableCell>
      <TableCell>
        <Avatar text="John Doe" />
      </TableCell>
      <TableCell>
        <Label
          color="positive"
          text="Sent"
        />
      </TableCell>
      <TableCell>
        100
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        2020-01-01
      </TableCell>
      <TableCell>
        Lorem ipsum dolor
      </TableCell>
      <TableCell>
        <Avatar text="John Doe" />
      </TableCell>
      <TableCell>
        <Label
          color="positive"
          text="Sent"
        />
      </TableCell>
      <TableCell>
        100
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        2020-01-01
      </TableCell>
      <TableCell>
        Lorem ipsum dolor
      </TableCell>
      <TableCell>
        <Avatar text="John Doe" />
      </TableCell>
      <TableCell>
        <Label
          color="positive"
          text="Sent"
        />
      </TableCell>
      <TableCell>
        100
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        2020-01-01
      </TableCell>
      <TableCell>
        Lorem ipsum dolor
      </TableCell>
      <TableCell>
        <Avatar text="John Doe" />
      </TableCell>
      <TableCell>
        <Label
          color="positive"
          text="Sent"
        />
      </TableCell>
      <TableCell>
        100
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        2020-01-01
      </TableCell>
      <TableCell>
        Lorem ipsum dolor
      </TableCell>
      <TableCell>
        <Avatar text="John Doe" />
      </TableCell>
      <TableCell>
        <Label
          color="positive"
          text="Sent"
        />
      </TableCell>
      <TableCell>
        100
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        2020-01-01
      </TableCell>
      <TableCell>
        Lorem ipsum dolor
      </TableCell>
      <TableCell>
        <Avatar text="John Doe" />
      </TableCell>
      <TableCell>
        <Label
          color="positive"
          text="Sent"
        />
      </TableCell>
      <TableCell>
        100
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        2020-01-01
      </TableCell>
      <TableCell>
        Lorem ipsum dolor
      </TableCell>
      <TableCell>
        <Avatar text="John Doe" />
      </TableCell>
      <TableCell>
        <Label
          color="positive"
          text="Sent"
        />
      </TableCell>
      <TableCell>
        100
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        2020-01-01
      </TableCell>
      <TableCell>
        Lorem ipsum dolor
      </TableCell>
      <TableCell>
        <Avatar text="John Doe" />
      </TableCell>
      <TableCell>
        <Label
          color="positive"
          text="Sent"
        />
      </TableCell>
      <TableCell>
        100
      </TableCell>
    </TableRow>
  <TableRow>
      <TableCell>
        2020-01-01
      </TableCell>
      <TableCell>
        Lorem ipsum dolor
      </TableCell>
      <TableCell>
        <Avatar text="John Doe" />
      </TableCell>
      <TableCell>
        <Label
          color="positive"
          text="Sent"
        />
      </TableCell>
      <TableCell>
        100
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        2020-01-01
      </TableCell>
      <TableCell>
        Lorem ipsum dolor
      </TableCell>
      <TableCell>
        <Avatar text="John Doe" />
      </TableCell>
      <TableCell>
        <Label
          color="positive"
          text="Sent"
        />
      </TableCell>
      <TableCell>
        100
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        2020-01-01
      </TableCell>
      <TableCell>
        Lorem ipsum dolor
      </TableCell>
      <TableCell>
        <Avatar text="John Doe" />
      </TableCell>
      <TableCell>
        <Label
          color="positive"
          text="Sent"
        />
      </TableCell>
      <TableCell>
        100
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        2020-01-01
      </TableCell>
      <TableCell>
        Lorem ipsum dolor
      </TableCell>
      <TableCell>
        <Avatar text="John Doe" />
      </TableCell>
      <TableCell>
        <Label
          color="positive"
          text="Sent"
        />
      </TableCell>
      <TableCell>
        100
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        2020-01-01
      </TableCell>
      <TableCell>
        Lorem ipsum dolor
      </TableCell>
      <TableCell>
        <Avatar text="John Doe" />
      </TableCell>
      <TableCell>
        <Label
          color="positive"
          text="Sent"
        />
      </TableCell>
      <TableCell>
        100
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        2020-01-01
      </TableCell>
      <TableCell>
        Lorem ipsum dolor
      </TableCell>
      <TableCell>
        <Avatar text="John Doe" />
      </TableCell>
      <TableCell>
        <Label
          color="positive"
          text="Sent"
        />
      </TableCell>
      <TableCell>
        100
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        2020-01-01
      </TableCell>
      <TableCell>
        Lorem ipsum dolor
      </TableCell>
      <TableCell>
        <Avatar text="John Doe" />
      </TableCell>
      <TableCell>
        <Label
          color="positive"
          text="Sent"
        />
      </TableCell>
      <TableCell>
        100
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        2020-01-01
      </TableCell>
      <TableCell>
        Lorem ipsum dolor
      </TableCell>
      <TableCell>
        <Avatar text="John Doe" />
      </TableCell>
      <TableCell>
        <Label
          color="positive"
          text="Sent"
        />
      </TableCell>
      <TableCell>
        100
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        2020-01-01
      </TableCell>
      <TableCell>
        Lorem ipsum dolor
      </TableCell>
      <TableCell>
        <Avatar text="John Doe" />
      </TableCell>
      <TableCell>
        <Label
          color="positive"
          text="Sent"
        />
      </TableCell>
      <TableCell>
        100
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        2020-01-01
      </TableCell>
      <TableCell>
        Lorem ipsum dolor
      </TableCell>
      <TableCell>
        <Avatar text="John Doe" />
      </TableCell>
      <TableCell>
        <Label
          color="positive"
          text="Sent"
        />
      </TableCell>
      <TableCell>
        100
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        2020-01-01
      </TableCell>
      <TableCell>
        Lorem ipsum dolor
      </TableCell>
      <TableCell>
        <Avatar text="John Doe" />
      </TableCell>
      <TableCell>
        <Label
          color="positive"
          text="Sent"
        />
      </TableCell>
      <TableCell>
        100
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        2020-01-01
      </TableCell>
      <TableCell>
        Lorem ipsum dolor
      </TableCell>
      <TableCell>
        <Avatar text="John Doe" />
      </TableCell>
      <TableCell>
        <Label
          color="positive"
          text="Sent"
        />
      </TableCell>
      <TableCell>
        100
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        2020-01-01
      </TableCell>
      <TableCell>
        Lorem ipsum dolor
      </TableCell>
      <TableCell>
        <Avatar text="John Doe" />
      </TableCell>
      <TableCell>
        <Label
          color="positive"
          text="Sent"
        />
      </TableCell>
      <TableCell>
        100
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        2020-01-01
      </TableCell>
      <TableCell>
        Lorem ipsum dolor
      </TableCell>
      <TableCell>
        <Avatar text="John Doe" />
      </TableCell>
      <TableCell>
        <Label
          color="positive"
          text="Sent"
        />
      </TableCell>
      <TableCell>
        100
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        2020-01-01
      </TableCell>
      <TableCell>
        Lorem ipsum dolor
      </TableCell>
      <TableCell>
        <Avatar text="John Doe" />
      </TableCell>
      <TableCell>
        <Label
          color="positive"
          text="Sent"
        />
      </TableCell>
      <TableCell>
        100
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        2023-03-03
      </TableCell>
      <TableCell>
        This is the subject This is the subject This is the subject This is the subject This is the subject This is the subject
      </TableCell>
      <TableCell>
        <Avatar text="Some Person" />
      </TableCell>
      <TableCell>
        <Label
          color="positive"
          text="Sent"
        />
      </TableCell>
      <TableCell>
        999
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell>
        2022-02-02
      </TableCell>
      <TableCell>
        This is the subject
      </TableCell>
      <TableCell>
        <Avatar text="Other Name" />
      </TableCell>
      <TableCell>
        <Label
          color="positive"
          text="Sent"
        />
      </TableCell>
      <TableCell>
        99
      </TableCell>
    </TableRow>
  </TableBody>
</Table>







      </div>
    </div>
  );*/
};

export default TableView