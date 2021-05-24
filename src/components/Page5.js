import React from 'react'
import { Container } from 'semantic-ui-react'
import { Input, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Page5 = () => {
    return (
        <Container style={{ marginTop: 20 }}>
            <h3>WORK EXPERIENCE</h3>
            <Input label="Employer" /><br /><br />
            <Input label="Post held" /><br /><br />
            <p>From</p>
            <Input label="MM" /><Input label="YY" /><br /><br />
            <p>To</p>
            <Input label="MM" /><Input label="YY" /><br /><br />
            <Input label="Reason for leaving" /><br /><br />

            <Link to="/page5b">
                <Button primary>Add Another Work Experience</Button>
            </Link>

            <Link to="/page6">
                <Button primary>Next</Button>
            </Link>
        </Container>
    )
}

export default Page5