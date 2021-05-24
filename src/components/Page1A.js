import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

const Page1A = () => {
    return (
        <Container style={{ marginTop: 20 }}>
            <h2>PERSONAL INFORMATION</h2>
            <Input label="Surname" /><br /><br />
            <Input label="First Names" /><br /><br />
            <Input label="Date of Birth" /><br /><br />
            <Input label="ID number" /><br /><br />
            <Link to="/page1b"><Button primary>Next</Button></Link>
        </Container>
    )
}

export default Page1A