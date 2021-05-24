import React from 'react'
import { Container } from 'semantic-ui-react'
import { Form, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const options = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' }
]

const options2 = [
  { key: 'y', text: 'Yes', value: 'yes' },
  { key: 'n', text: 'No', value: 'no' }
]

const App = () => {
  return (
    <Container style={{ marginTop: 20 }}>
        <h3>PERSONAL INFORMATION</h3>
      <Form>
        <Form.Group inline>
            <label>Race</label>
            <Form.Radio
                label='African'
                value='lg'
            />
            <Form.Radio
                label='White'
                value='lg'
            />
            <Form.Radio
                label='Coloured'
                value='lg'
            />
            <Form.Radio
                label='Indian'
                value='lg'
            />
        </Form.Group>

        <Form.Select
              fluid
              label='Gender'
              options={options}
        />

        <Form.Select
        fluid
        label='Do you have a disability?'
        options={options2}
        />

        <Form.Select
        fluid
        label='Are you a South African Citizen?'
        options={options2}
        />

        <Form.Select
        fluid
        label='Have you ever been convicted of a Criminal offence or been dismissed from employment?'
        options={options2}
        />

        <Link to="/page2">
            <Button primary>Next</Button>
        </Link>

      </Form>
    </Container>
  )
}

export default App