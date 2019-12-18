import React, { useState, useEffect } from "react";
import {
  Grommet,
  Anchor,
  Box,
  Button,
  Form,
  FormField,
  TextInput,
  Text,
  Heading,
  CheckBox,
  Footer,
  grommet,
  dark
} from "grommet";
import { PasswordInput } from "grommet-controls";
import { Lock, Unlock } from "grommet-icons";
import theme from "../theme/grommet-custom";

export default function GloginForm(props) {
  const [state, setState] = useState();

  const center = false;
  const vertical = false;

  return (
    <div>
      <Grommet theme={theme}>
        <Box align="center" direction="column">
          <Box width={{ min: "500px", max: "500px" }} elevation="large">
            <Heading level="4" alignSelf="center">
              Login
            </Heading>
            <Form>
              <FormField margin="medium" htmlFor="username" required>
                <TextInput id="username" placeholder="User Name" />
              </FormField>
              <FormField margin="medium" htmlFor="password" required>
                <PasswordInput
                  id="password"
                  placeholder="Password"
                  viewIcon={<Lock />}
                  hideIcon={<Unlock />}
                />
              </FormField>
              <Box
                direction="row"
                justify="between"
                pad="medium"
                basis="medium"
              >
                <Text>Remember Me</Text>
                <FormField>
                  <CheckBox
                    style={{ "text-indent": "-5px", top: "-1px" }}
                    id="remember-me"
                  />
                </FormField>
                <Anchor href="#" primary label="Forgot Password?" />
              </Box>
              <Box align="center" pad="medium">
                <Box width="30vw">
                  <Button
                    fill
                    primary
                    // color="design-cerulean"
                    color="theme-50"
                    label="Login"
                    type="submit"
                  />
                </Box>
              </Box>
            </Form>
          </Box>
        </Box>
      </Grommet>
    </div>
  );
}
