import React from "react";
import { Grommet, Anchor, Button, Box } from "grommet";
import { Form, EmailInputField, validators } from "grommet-controls";

import theme from "../theme/grommet-custom";

import Button2019 from '../theme/2019/Button2019'

export default function(props) {
  return (
    <Grommet theme={theme}>
      <Box align="center" pad={{ vertical: "xlarge" }}>
        <Box
          style={{
            boxShadow:
              "-8px -8px 20px 0 rgba(255,255,255,1),  1px 1px 14px -3px rgba(146,146,146,1)",
            background: "#efeeee",
            border: "1px solid rgba(255,255,255,0.10)",
            borderRadius: "6px"
          }}
          pad="medium"
          width={{ min: "350px", max: "350px" }}
        >
          <Form
            basis="medium"
            focusFurstChild={false}
            onSubmit={f => alert(JSON.stringify(f))}
            {...props}
          >
            <EmailInputField
              // label="Email"
              placeholder="email"
              name="email"
              validation={[validators.required(), validators.email()]}
            />

            <Box pad={{ vertical: "xxsmall" }}>
              <Button2019
                type="submit"
                label="Reset Password"
              />
            </Box>
            {/* <Box> */}
              <Anchor href="/login" label="Login" />
            {/* </Box> */}
          </Form>
        </Box>
      </Box>
    </Grommet>
  );
}
