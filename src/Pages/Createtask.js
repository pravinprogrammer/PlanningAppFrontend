import { Button, Container } from 'reactstrap'
import react, { useState, useEffect } from 'react'
import { Form, FormGroup, Input } from 'reactstrap'
import axios from 'axios';
import { NotificationContainer, NotificationManager } from 'react-notifications';

const Createtask = () => {


    useEffect(() => {
        document.title = "Create task";
    }, [])


    const [task, setTask] = useState({});

    const submitHandler = (e) => {
        console.log(task);
        posttaskToServer(task);
        e.preventDefault();
        e.target.reset();
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


    return (
        <div style={{ marginLeft: '400px' }}>
            <h1>Create The Task</h1>
            <Form onSubmit={submitHandler} style={{ width: '400px' }}>
                <FormGroup>
                    <label>Title</label>
                    <Input
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter title here"
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
                        placeholder="Enter description here"
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
                        placeholder="Enter date here"
                        onChange={(e) => {
                            setTask({ ...task, date: e.target.value })
                        }}
                    />
                </FormGroup>
                <Container className="text-centre">
                    <Button type="submit" color="success">Submit</Button>
                    <Button type="reset" color="warning ml-3">Reset</Button>
                </Container>
                <NotificationContainer />
            </Form>
        </div>
    )
}

export default Createtask;