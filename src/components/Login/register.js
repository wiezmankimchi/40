import React from "react";

import { Grommet, Anchor, Box, Text, Button } from "grommet";
import {
  Form,
  TextInputField,
  PasswordInputField,
  EmailInputField,
  CheckBoxField,
  validators
} from "grommet-controls";

import theme from "../theme/grommet-custom";

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
            focusFirstChild={false}
            onSubmit={f => alert(JSON.stringify(f))}
            {...props}
          >
            <TextInputField
              placeholder="User name"
              name="username"
              validation={[validators.required()]}
            />
            <EmailInputField
              placeholder="Email"
              name="email"
              validation={[validators.required(), validators.email()]}
            />
            <PasswordInputField
              placeholder="Password"
              name="password"
              validation={[
                validators.required(),
                validators.minLength(5),
                validators.alphaNumeric()
              ]}
            />
            <PasswordInputField
              placeholder="Confirm Password"
              name="password1"
              validation={[validators.equalsField("password")]}
            />
            <CheckBoxField
              controlLabel={
                <Box direction="row" gap="xsmall" align="center">
                  Agree to
                  <Anchor href="/terms_of_service" label="terms of service" />
                </Box>
              }
              description="Terms of service"
              name="accept_tos"
              validation={[
                validators.required(),
                validators.True("Please accept our TOS")
              ]}
              style={{ marginTop: "-10px" }}
            />
            <Box pad={{ vertical: "medium" }} align="end">
              <Button
                hoverIndicator="background"
                primary={true}
                type="submit"
                label="Save profile"
              />
            </Box>
            <Box direction="row" alignSelf="center" gap="small" align="center">
              <Text>{"Already have an account?"}</Text>
              <Anchor href="/login" label="Sign in" />
            </Box>
          </Form>
        </Box>
      </Box>
    </Grommet>
  );
}
