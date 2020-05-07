import React from 'react';
import { connect } from 'react-redux';
import MaterialTable from 'material-table';
import Button from '@material-ui/core/Button';
import { Paper } from "@material-ui/core";
import { addSchedule } from '../actions';

import { sendNotification } from '../utils/service-worker';

function Schedule({onAddScheduleClick}) {
  const handleSaveClick = (data) => {
    onAddScheduleClick(data);

    // if (!todo.completed) {
      // sendNotification({
        // title: `You have completed todo with id ${todo.id}!`,
        // text: todo.text
      // });
    // }
  };
  
  const DS_NHANVIEN = [];
  const HOUR = [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
  const MINUTE = [0,30];
   const [state, setState] = React.useState({
	columns: [
      {
        title: 'User',
        field: 'user',
        lookup: { 34: 'User 1', 63: 'User 2' },
      },
	  {
        title: 'Start(hh)',
        field: 'start-hh',
        lookup: HOUR,
      },
	  {
        title: 'Start(mm)',
        field: 'start-mm',
        lookup: MINUTE,
      },
	  {
        title: 'End(hh)',
        field: 'end-hh',
        lookup: HOUR,
      },
	  {
        title: 'End(mm)',
        field: 'end-mm',
        lookup: MINUTE,
      },
    ],
	data:[],
   });
  return (
  <Paper>
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
	  data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
	<Button onClick={handleSaveClick(state.data)} > Save </Button>
	</Paper>
  );
};

const mapStateToProps = (state) => ({
  
});

const mapDispatchToProps = (dispatch) => ({
  onAddScheduleClick: (list) => dispatch(addSchedule(list)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);
