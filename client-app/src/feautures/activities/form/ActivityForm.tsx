import React, { ChangeEvent, useState } from "react";
import { Button, Form, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
    activity: Activity | undefined;
    closeForm:() => void;
    createOrEdit: (activity: Activity) => void;
    submitting: boolean;
}

export default function ActivityForm({activity: selectedActivity, closeForm,submitting, createOrEdit}: Props) {
    
    const initialState = selectedActivity ?? {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    }

    const [activity, setActivity] = useState(initialState);
    
    function handleSubmit() {
        createOrEdit(activity);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const {name, value} = event.target;
        setActivity({...activity, [name]: value})
    }

    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off'>
                <Form.Input pleacholder='Title' value={activity.title} name='title' onChange={handleInputChange} />
                <Form.TextArea pleacholder='Description' value={activity.description} name='description' onChange={handleInputChange}/>
                <Form.Input pleacholder='Category' value={activity.category} name='category' onChange={handleInputChange}/>
                <Form.Input type="date" pleacholder='Date' value={activity.date} name='date' onChange={handleInputChange}/>
                <Form.Input pleacholder='City' value={activity.city} name='city' onChange={handleInputChange}/>
                <Form.Input pleacholder='Venue' value={activity.venue} name='venue' onChange={handleInputChange}/>
                <Button loading={submitting} floated="right" positive type="submit" content='Submit' />
                <Button onClick={closeForm} floated="right" type="submit" content='Cancel' />
            </Form>
        </Segment>
    )
}