import React from 'react'
import { Container, Form, Input, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const languages = [
    { key: 'g', text: 'Good', value: 'good' },
    { key: 'f', text: 'Fair', value: 'fair' },
    { key: 'p', text: 'Poor', value: 'poor' }
]

const Page3 = () => {
    return (
        <Container style={{ marginTop: 20 }}>
            <h3>LANGUAGE PROFICIENCY</h3>
            <Form>
                <Input placeholder="Language 1" /><br /><br />
                <Form.Select label='Speak' options={languages} />
                <Form.Select label='Read' options={languages} />
                <Form.Select label='Write' options={languages} />

                <Link to="/page3b">
                    <Button primary>Add Another Language</Button>
                </Link>

                <Link to="/page4">
                    <Button primary>Next</Button>
                </Link>
            </Form>
        </Container>
    )
}

export default Page3