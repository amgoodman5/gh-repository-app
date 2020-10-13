
import React from "react";
import {
  Link
} from 'react-router-dom';

import { Box, Grommet, Card, CardBody, CheckBox, CardHeader, CardFooter, Button, Form, FormField, TextInput, Paragraph } from 'grommet';
import { ScaleLoader } from 'halogenium';
import { Star, Github } from 'grommet-icons';
import _sortBy from 'lodash';
const _ = require("lodash");

function Search() {
  const [inputValue, setInputValue] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [repos, setRepos] = React.useState([]);
  const [sortbylanguage, setFilter] = React.useState("");
  const [checked, setChecked] = React.useState(true);
  React.useEffect(() => {
    if (!inputValue) {
      return;
    }

    setIsLoading(true);

    function filterByLanguage() {

    }

    // make API calls
    fetch("https://api.github.com/search/repositories?q=" + inputValue + "&sort=stars&order")
      .then(response => {
        return response.json();
      })
      .then(data => {
        setIsLoading(false);
        setRepos(data.items);
      })
      .catch(err => {
        setIsLoading(false);
        setError(true);
        console.error(err);
      });
  }, [inputValue]);


  var style = {
    display: '-webkit-flex',
    display: 'flex',
    WebkitFlex: '0 1 auto',
    flex: '0 1 auto',
    WebkitFlexDirection: 'column',
    flexDirection: 'column',
    WebkitFlexGrow: 1,
    flexGrow: 1,
    WebkitFlexShrink: 0,
    flexShrink: 0,
    WebkitFlexBasis: '25%',
    flexBasis: '25%',
    maxWidth: '25%',
    height: '200px',
    WebkitAlignItems: 'center',
    alignItems: 'center',
    WebkitJustifyContent: 'center',
    justifyContent: 'center'
  };


  const theme = {
    global: {
      font: {
        size: '18px',
        height: '20px',
      },
    },
  };
  const sortReposByLanguage = _.sortBy(repos, function (o) { return o.language; });

  return (
    <Grommet theme={theme} themeMode="dark">
      <Box direction="column" gap="large" align="center">
        <Form onSubmit={evt => {
          evt.preventDefault();
          setInputValue(evt.target.elements.query.value);
        }}>
          <CheckBox
            checked={checked}
            label="interested?"
            onChange={(event) => setChecked(event.target.checked)}
          />
          <FormField name="query" label="Find Respository">
            <TextInput id="textinput-id" name="query" placeholder="Search Github Repositories" />
          </FormField>
          <Box direction="row" gap="medium">
            <Button type="submit" primary label="Submit" />
            <Button type="reset" label="Reset" />
          </Box>
        </Form>
        {isLoading && <ScaleLoader color="#26A65B" size="16px" margin="4px" />}
        {error && (
          <div>
            Unexpected Error Occurred fetching data. Please try again later!
          </div>
        )}
        <ul className="repo_list">

          {sortReposByLanguage.map(repo => {
            console.log(repo)
            return (
              <Box direction="column" gap="large" pad="medium" align="center" margin="small">
                <Card key={repo.id} height="small" pad="medium" width="medium" background="dark-2" >
                  <CardHeader size="large"> <Github size="medium" /> {repo.name}  {repo.language}</CardHeader>
                  <CardBody direction="row" align="center" pad="medium" textAlign="center">
                    {repo.stargazers_count}<Star size='medium' />
                    {repo.language}
                  </CardBody>
                  <CardFooter background="light">

                    <Link to={{
                      pathname: `/detail/${repo.id}`,
                      state: { repo }
                    }}>
                      <Button secondary hoverIndicator label="Check it out" />
                    </Link>
                  </CardFooter>
                </Card>
              </Box>
            )
          })
          }
        </ul>
      </Box>
    </Grommet >
  )

}
export default Search;