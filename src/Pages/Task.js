import { useHistory,useParams } from "react-router-dom";

import axios from 'axios';
// import { Table } from 'reactstrap';


import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';






import {
    Card, CardBody,
    CardTitle, CardSubtitle, Button,CardFooter,Container, CardText
  } from 'reactstrap'; 
import NotificationManager from "react-notifications/lib/NotificationManager";
import NotificationContainer from "react-notifications/lib/NotificationContainer";


const Task = ({task,update}) =>{

    const history = useHistory();

    const updateTask = (id) =>{
      //  alert("in updatetask");
        console.log("id in task js..",id);
        history.push(`/updateTask/${id}`);
    }


    const deleteTask =(id)=>{
        console.log(task.id);
        axios.delete(`http://localhost:8080/plans/${id}`).then(
            (response)=>{
                 console.log(response);
               //  toast.success("Task deleted successfully....");
               NotificationManager.success('success',"task deleted successfully...")
                 update(task.id);
            },
            (error)=>{
                 console.log(error);
            }
        )
     }

    return(
        <div>
        <TableContainer>
        <Table aria-label="simple table" style={{tableLayout:'fixed'}}>
         
          <TableBody>
          
              <TableRow >
              <TableCell>{task.id}</TableCell>
              <TableCell>{task.title}</TableCell>
                <TableCell>{task.description}</TableCell>
                <TableCell>{task.date}</TableCell>  
                <TableCell><Button color='success' onClick={()=>updateTask(task.id)}>Edit</Button></TableCell>                            
                <TableCell><Button color='danger' onClick={()=>deleteTask(task.id)}>Delete</Button></TableCell>             
              </TableRow>
            
          </TableBody>
        </Table>
      </TableContainer>
      <NotificationContainer/>
      </div>
    );
}

export default Task;