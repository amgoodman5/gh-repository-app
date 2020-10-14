import React from "react"
import {
  Box,
  CheckBox,
  Button,
  Form,
  FormField,
  TextInput,
} from 'grommet';

const SearchForm = (props) => {
  const { checked, setInputValue, setChecked } = props
  return (
    <Form onSubmit={evt => {
      evt.preventDefault();
      setInputValue(evt.target.elements.query.value);
    }}>
      <FormField name="query" label="Find Respository">
        <TextInput id="textinput-id" name="query" placeholder="Search Github Repositories" />
      </FormField>
      <Box direction="row" gap="large" margin="medium">
        <Button type="submit" color="neutral-3" primary label="Submit" />
        <Button type="reset" color="neutral-3" label="Reset" />
        <CheckBox
          checked={checked}
          label="Filter By Language"
          onChange={(event) => setChecked(event.target.checked)}
        />
      </Box>
    </Form >
  )
}
export default SearchForm