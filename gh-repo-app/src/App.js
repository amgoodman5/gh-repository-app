

import React from "react";
import "./App.css";
import {
  Link
} from 'react-router-dom';
import { Box, Grommet, Card, CardBody, CardHeader, CardFooter, Button } from 'grommet';
// https://api.github.com/search/repositories?q=html


function App() {
  const [inputValue, setInputValue] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [repos, setRepos] = React.useState([]);




  React.useEffect(() => {
    if (!inputValue) {
      return;
    }

    setIsLoading(true);


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

  const theme = {
    global: {
      font: {
        size: '18px',
        height: '20px',
      },
    },
  };

  return (
    <Grommet theme={theme} themeMode="dark">
      <form
        onSubmit={evt => {
          evt.preventDefault();
          setInputValue(evt.target.elements.query.value);
        }}
      >
        <input
          type="text"
          name="query"
          className="github_search_input"
          placeholder="Search Github Repositories"
        />
      </form>
      {isLoading && <div>Loading...</div>}
      {error && (
        <div>
          Unexpected Error Occurred fetching data. Please try again later!
        </div>
      )}
      <ul className="repo_list">
        {repos.map(repo => {
          console.log(repo)
          return (
            <Card height="small" width="medium" background="dark-2" >
              <CardHeader pad="medium">{repo.name}</CardHeader>
              <CardBody pad="medium">{repo.description}</CardBody>
              <CardFooter pad={{ horizontal: "small" }} background="light">
                <Link to={{
                  pathname: `/detail/${repo.id}`,
                  state: { repo }
                }}>
                  <Button primary hoverIndicator label="Check it out" />
                </Link>

              </CardFooter>
            </Card>
          )
        })
        }
      </ul>
    </Grommet>
  );
}
export default App;


// 1. Search Input

//   - An input to type in the text to search github.

// 2. Search results

//   - Show the results of the search.

// 3. Sort results

//   - By best match(default )
//     - Stars

// 4. Filter results

//   - By language

// 5. Detailed Result Page

//   - A page that when a result is clicked shows a detailed screen of the repository.

// 6. Responsive Design

//   - Should render properly on device sizes. (mobile, tablet, laptop, large desktop)