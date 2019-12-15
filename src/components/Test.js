import React, { useState } from 'react';
import DatePicker from 'antd/es/date-picker'
import message from 'antd/es/message'
import Alert from 'antd/es/alert'

export default function Test() {
    const [state, setState] = useState({date:null})

    const handleChange = date => {
      message.info(`Selected Date ${date ? date.format('YYYY-MM-DD') : 'None'}`)
      setState({date})
    }
    return (
        <div style={{ width:400, margin: '100px auto'}}>
        <DatePicker onChange={handleChange} />
        <div style={{ margin:20}}>
          {/* Selected Date: {state.date ? state.date.format('YYYY-MM-DD') : 'None'} */}
          <Alert message={`Selected Date: ${state.date ? state.date.format('YYYY-MM-DD') : 'None'}`} type="success" />
        </div>
      </div>
    )
}
