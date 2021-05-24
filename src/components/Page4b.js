import React from 'react'
import { Container } from 'semantic-ui-react'
import { Input, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const Page4 = () => {
    return (
        <Container style={{ marginTop: 20 }}>
            <h3>TERTIARY EDUCATION</h3>
            <Input label="Name of Institution" /><br /><br />
            <Input label="Name of Qualification" /><br /><br />
            <Input label="Year obtained" /><br /><br />
            <Link to="/page4C">
                <Button primary>Add Another Qualification</Button>
            </Link>
            <Link to="/page5">
                <Button primary>Next</Button>
            </Link>
        </Container>
    )
}

export default Page4