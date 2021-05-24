import React from 'react'
import { Container } from 'semantic-ui-react'
import { Input, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Page4 = () => {
    return (
        <Container style={{ marginTop: 20 }}>
            <h3>QUALIFICATIONS</h3>
            <Input label="Name of School / Technical College" /><br /><br />
            <Input label="Highest qualification obtained" /><br /><br />
            <Input label="Year obtained" /><br /><br />
            <Link to="/page4b">
                <Button primary>Next</Button>
            </Link>
        </Container>
    )
}

export default Page4