import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function LaunchForm() {

    const submitForm = (e) => {
        e.preventDefault();

        const form_data = new FormData(e.target);
        const payload = Object.fromEntries(form_data);

        let base_url = 'http://localhost:3000/';
        let url = base_url;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        }).then(data => console.log(data))
        .catch((error) => {
            console.error('Error:', error);
        }
        );

        console.log(payload);

    }

    return (
        <>
            <h2>New Launch</h2>
            <form onSubmit={submitForm}> 
                <Form.Group classname="mb-3">
                    <Form.Label>Launch Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Enter launch name" />
                </Form.Group>
                <Form.Group classname="mb-3">
                    <Form.Label>Launch Date</Form.Label>
                    <Form.Control type="date" name="date" />
                </Form.Group>
                <Form.Group classname="mb-3">
                    <Form.Label>Launch Time</Form.Label>
                    <Form.Control type="time" name="time" />
                </Form.Group>
                <Form.Group classname="mb-3">
                    <Form.Label>Launch Location</Form.Label>
                    <Form.Control type="text" name="loc" placeholder="Enter launch location" />
                </Form.Group>
                <Form.Group classname="mb-3">
                    <Form.Label>Target Altitude</Form.Label>
                    <Form.Control type="number" name="altitude" placeholder="Enter target altitude" />
                </Form.Group>
                <Form.Group classname="mb-3">
                    <Form.Label>Desired Temperature</Form.Label>
                    <Form.Control type="number" name="temp" placeholder="Enter desired temperature" />
                </Form.Group>
                <Form.Group classname="mb-3">
                    <Form.Label>Rocket Weight</Form.Label>
                    <Form.Control type="number" name = "weight" placeholder="Enter rocket weight" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
   
            </form>        
        </>

    )

}

export default LaunchForm;