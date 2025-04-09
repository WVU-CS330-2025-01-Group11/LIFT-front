import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react';
import { GlobalContext } from './GlobalState';

function LaunchForm() {
    const { loadedLaunches,
         setLoadedLaunches,
          autofillData,
           setAutofillData } = React.useContext(GlobalContext);
    console.log("Loaded launches (LaunchForm):", loadedLaunches);
    const save_locally = (data) => {
        if (localStorage.getItem('saved_launches')) {
            let launch_list = JSON.parse(localStorage.getItem('saved_launches'));
            launch_list.push(data);
            localStorage.setItem('saved_launches', JSON.stringify(launch_list));
        } else {
            localStorage.setItem('saved_launches', JSON.stringify([data]));
        }
        setLoadedLaunches(JSON.parse(localStorage.getItem('saved_launches')));
    }

    const submitForm = (e) => {
        e.preventDefault();

        const form_data = new FormData(e.target);
        const payload = Object.fromEntries(form_data);

        let base_url = 'http://localhost:3000/';
        fetch(base_url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        })
        .then(data => console.log(data))
        .catch((error) => console.error('Error:', error));
        
        //if autofillData is passed, it means we are editing an existing launch, delete it before saving
        if (autofillData) {
           //delete the selected launch from the saved launches
            const savedLaunches = JSON.parse(localStorage.getItem('saved_launches')) || [];
            const launchIndex = savedLaunches.findIndex(launch => launch.name === autofillData.name);
            if (launchIndex !== -1) {
                savedLaunches.splice(launchIndex, 1);
                localStorage.setItem('saved_launches', JSON.stringify(savedLaunches));
                console.log("Launch deleted:", launchIndex);
            }
            
            // Update the state to reflect the deletion
            setLoadedLaunches(savedLaunches);
            console.log("Updated saved launches:", savedLaunches);

            setAutofillData(null); // Reset autofill data
        }
        save_locally(payload);
        //clear the form
        e.target.reset();
    }

    return (
        <>
            <h2>New Launch</h2>
            <form onSubmit={submitForm}> 
                <Form.Group className="mb-3">
                    <Form.Label>Launch Name: </Form.Label>
                    <Form.Control 
                      name="name" 
                      type="text" 
                      placeholder="Enter launch name"
                      defaultValue={autofillData ? autofillData.name : ''} 
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Launch Date: </Form.Label>
                    <Form.Control 
                      type="date" 
                      name="date" 
                      defaultValue={autofillData ? autofillData.date : ''} 
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Launch Time: </Form.Label>
                    <Form.Control 
                      type="time" 
                      name="time" 
                      defaultValue={autofillData ? autofillData.time : ''} 
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Launch Location: </Form.Label>
                    <Form.Control 
                      type="text" 
                      name="loc" 
                      placeholder="Enter launch location"
                      defaultValue={autofillData ? autofillData.loc : ''} 
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Target Altitude: </Form.Label>
                    <Form.Control 
                      type="number" 
                      name="altitude" 
                      placeholder="Enter target altitude"
                      defaultValue={autofillData ? autofillData.altitude : ''} 
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Desired Temperature: </Form.Label>
                    <Form.Control 
                      type="number" 
                      name="temp" 
                      placeholder="Enter desired temperature"
                      defaultValue={autofillData ? autofillData.temp : ''} 
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Rocket Weight: </Form.Label>
                    <Form.Control 
                      type="number" 
                      name="weight" 
                      placeholder="Enter rocket weight"
                      defaultValue={autofillData ? autofillData.weight : ''} 
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </form>
        </>
    )
}

export default LaunchForm;