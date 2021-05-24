import React from 'react'
import { Container } from 'semantic-ui-react'
import { Form, Input, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const contact = [
    { key: 'p', text: 'Post', value: 'post' },
    { key: 'e', text: 'E-Mail', value: 'email' },
    { key: 'f', text: 'Fax', value: 'fax' }
]

const Page2 = () => {
    return (
        <Container style={{ marginTop: 20 }}>
            <h3>HOW DO WE CONTACT YOU</h3>
            <Input label="Preferred language of correspondence" /><br /><br />
            <Input label="Telephone number during office hours" /><br /><br />
            <Form>
                <Form.Select label='Preferred method of correspondence' options={contact} />
            </Form><br />
            <Link to="/page3">
                <Button primary>Next</Button>
            </Link>
        </Container>
    )
}

export default Page2