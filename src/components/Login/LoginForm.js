import React, { useState } from "react";
import { Grommet, Anchor,  Box, Text } from "grommet";
import {
  Form,
  PasswordInputField,
  EmailInputField,
  CheckBoxField,
  validators
} from "grommet-controls";

import theme from "../theme/grommet-custom";

import Button2019 from '../theme/2019/Button2019'
import { useGlobal } from "../store/mainStore";

export default function LoginForm(props) {
  const [store, actions] = useGlobal();
  const [isLogin, setIslogin] = useState(true);

  

  React.useEffect(() => {
    function setBreadcrumbs(){
      actions.setBreadcrumb(["Home","Login"])
    }
    setBreadcrumbs()
  }, [])

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
            <PasswordInputField
              label={
                <Box align="end">
                  <Anchor
                    href="/reset_password"
                    size="small"
                    label="Forgot password?"
                  />
                </Box>
              }
              placeholder="password"
              description="Password"
              name="password"
              validation={[
                validators.required(),
                validators.minLength(5),
                validators.alphaNumeric()
              ]}
            />
            <Box pad={{ vertical: "xxsmall" }}>
              <CheckBoxField
                label="Remember me"
                name="rememberme"
                inField={false}
                // style={{ " margin-top": "-10px" }}
              />
              <Button2019 type="submit" label="Login"/>
            </Box>
            <Box direction="row" alignSelf="center" gap="small" align="center">
              <Text margin={{ top: "small" }}>
                {"Don't have an account yet?"}
              </Text>
              <Anchor
                href="/register"
                label="Sign up"
                margin={{ top: "small" }}
              />
            </Box>
          </Form>
        </Box>
      </Box>
    </Grommet>
  );
}
