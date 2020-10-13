
import React from "react";

import SearchForm from './SearchForm'
import Results from './Results'
import { Card, Grommet, Box } from 'grommet';
import { ScaleLoader } from 'halogenium';
import { sortBy } from 'lodash';

const Search = () => {
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


  const sortReposByLanguage = sortBy(repos, function (o) { return o.language; });

  return (
    <Grommet themeMode="dark" alignContent="center">
      <Card margin="large" pad="medium" elevation="xsmall">
        <SearchForm setInputValue={setInputValue} setChecked={setChecked} />
      </Card>
      <Box align="center">
        {isLoading && <ScaleLoader color="#00739D" margin="4px" height="100px" />}
        {error && (
          <div>
            Unexpected Error Occurred fetching data. Please try again later!
          </div>
        )}
        <ul className="repo_list">
          {sortReposByLanguage.map(repo => {
            return (
              <Results key={repo.id} repo={repo} />
            )
          })
          }
        </ul>
      </Box>
    </Grommet >
  )
}
export default Search;