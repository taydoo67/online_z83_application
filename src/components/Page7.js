import React from 'react'
import { Container } from 'semantic-ui-react'
import { Form, Checkbox } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

const Page7 = () => {
    return (
        <Container style={{ marginTop: 20 }}>
            <Form>
                <h2>DECLARATION</h2>
                <Form.Field>
                    <Checkbox label='I declare that all the information provided is complete and correct
                    to the best of my knowledge. I understand that any false information supplied could
                    to my application being disqualified or my discharge if I am appointed' />
                </Form.Field>
                <Button primary>Submit</Button>
            </Form>
        </Container>
    )
}

export default Page7