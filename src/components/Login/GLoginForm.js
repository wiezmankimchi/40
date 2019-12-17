import React, {useState, useEffect} from 'react'
import { Box, Form, FormField, TextInput, Heading } from 'grommet'

export default function GloginForm (props) {
  const [state, setState] = useState()

  return (
    <div>
        <Box width={{ mac:'300px'}}>
            <Heading level='4'>Grommet Login Form</Heading>
        </Box>
    </div>
  )
}	