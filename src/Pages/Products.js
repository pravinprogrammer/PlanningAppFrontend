import axios from 'axios';
import { Button } from 'reactstrap';
import React, { useEffect, useState } from 'react'
import { Table } from 'reactstrap';
import Task from './Task';

const Products = () => {
    useEffect(() => {
        document.title = "All tasks"
    }, []);

 const[editable,setEdit] = useState(false);   

 console.log("before update ",editable);

 const updateTasks = (id) =>{
    setTask(tasks.filter((c)=> c.id != id));
}


    const getAlltasksFromServer = () => {

        axios.get("http://localhost:8080/plans/allplans").then(
            (response) => {

                console.log(response);
                console.log(response.data);
                setTask(response.data);
                console.log({ tasks });

            },
            (error) => {

                console.log(error)
            }

        )

    }

    useEffect(() => {
        getAlltasksFromServer();
    }, []);

  
    const [tasks, setTask] = useState([]);


    return (
        <div style={{ marginLeft: '250px' }}>      
         {
                        tasks.length > 0 ? tasks.map ((item) => (
                            <Task task={item} update={updateTasks} />
                        )) : "No Tasks Available"
                 }    
    </div>
    )
}

export default Products