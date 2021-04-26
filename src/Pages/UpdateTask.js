import { Button, Container } from 'reactstrap'
import react, { useState, useEffect } from 'react'
import { Form, FormGroup, Input } from 'reactstrap'
import axios from 'axios';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { useHistory, useLocation, useParams } from "react-router-dom";

const UpdateTask = () =>{   

    const location = useLocation();
    //const myparam = props.location.state.params;

    const {id} = useParams();
    const history = useHistory();

    console.log("in updates..."+id);

    useEffect(() => {
        document.title = "Create task";
    }, [])

    useEffect(() => {
        gettaskfromserver(id);
    }, [])


    const [task, setTask] = useState({});

  

    const submitHandler = (e) => {
        console.log(task);
        posttaskToServer(task);
        e.preventDefault();
        e.target.reset();
    }

    const gettaskfromserver = (id) =>{
        console.log("getting task for id", id);

        axios.get(`http://localhost:8080/plans/${id}`).then(
        (response)=>{
            console.log(response);
            setTask(response.data);
        },

        (error) => {
            console.log(error);
        }
        )

    }

    const posttaskToServer = (data) => {

        console.log("Sending data...", data);
        axios.post('http://localhost:8080/plans/addplan', data).then(

            (response) => {
                console.log(response);
                NotificationManager.success('Success Message', 'task added successfully');
                console.log(task);
            },
            (error) => {
                console.log(error);
            }

        )


    }

    const cancelUpdate = () =>{
        history.push('/products');
    }




    return (
        <div style={{ marginLeft: '400px' }}>
            <h1>Update The Task</h1>
            <Form onSubmit={submitHandler} style={{ width: '400px' }}>
                <FormGroup>
                    <label>Title</label>
                    <Input
                        type="text"
                        id="title"
                        name="title"                        
                        value={task.title}
                        onChange={(e) => {
                            setTask({ ...task, title: e.target.value })
                        }}
                    />
                </FormGroup>

                <FormGroup>
                    <label>Description</label>
                    <Input
                        type="text"
                        id="description"
                        name="description"
                        value={task.description}
                        onChange={(e) => {
                            setTask({ ...task, description: e.target.value })
                        }}
                    />
                </FormGroup>

                <FormGroup>
                    <label>Date</label>
                    <Input      
                        type="date"                  
                        id="date"
                        name="date"
                        value={task.date}
                        onChange={(e) => {
                            setTask({ ...task, date: e.target.value })
                        }}
                    />
                </FormGroup>
                <Container className="text-centre">
                    <Button type="submit" color="success">Submit</Button>
                    <Button type="reset" color="warning ml-3" onClick={()=>cancelUpdate()}>Cancel</Button>
                </Container>
                <NotificationContainer />
            </Form>
        </div>
    )
}

export default UpdateTask;