import React, { useState, useEffect } from "react";
import {
  Grommet,
  Button,
  CheckBox,
  Form,
  FormField,
  Footer,
  Heading,
  Box
} from "grommet";

export default function LoginForm(props) {
  const [state, setState] = useState({ password: "", username: "" });

  const align = "center";
  const logo = "Logo";
  const titleNode = "Form Title";
  const secondaryTextNode = "Second Title Line";
  const username = "User Name";
  const usernameType = "email";
  return (
    <Grommet>
      <Form pad="medium">
        <Box align={align}>
          {logo}
          {titleNode}
          {secondaryTextNode}
        </Box>
        <fieldset>
          <FormField htmlFor="username" label={username}>
            <input
              type={usernameType}
              value={state.username}
              onChange={e => setState(e.target.value)}
            />
          </FormField>
        </fieldset>
      </Form>
    </Grommet>
  );
}
