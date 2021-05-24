import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

const Page6 = () => {
    return (
        <Container style={{ marginTop: 20 }}>
            <h2>REFERENCES</h2>
            <Input label="Name" /><br /><br />
            <Input label="Relationship to you" /><br /><br />
            <Input label="Tel No. (Office Hours)" /><br /><br />
            <Link to="/page6b">
                <Button primary>Add Another Reference</Button>
            </Link>
            <Link to="/page7"><Button primary>Next</Button></Link>
        </Container>
    )
}

export default Page6