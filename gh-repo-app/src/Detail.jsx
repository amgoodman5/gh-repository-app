
import React from "react"
import { Link } from "react-router-dom"
import { Box, Grommet, Card, CardBody, CardHeader, CardFooter, Button } from 'grommet';

const Details = (props) => {
  const { location } = props
  const { state } = location
  const { repo } = state
  console.log(repo)

  const theme = {
    global: {
      font: {
        size: '18px',
        height: '20px',
      },
    },
  };
  const AppBar = (props) => (
    <Box
      tag='header'
      direction='row'
      align='center'
      justify='between'
      background="dark-2"
      pad={{ left: 'medium', right: 'small', vertical: 'small' }}
      elevation='medium'
      style={{ zIndex: '1' }}
      {...props}
    />
  );

  return (
    <Grommet theme={theme} themeMode="dark">
      <AppBar>Hello Grommet!</AppBar>
      <h1>hi</h1>
      <Card height="medium" width="medium" background="dark-2">
        <CardHeader pad="medium">{repo.name}</CardHeader>
        <CardBody pad="medium">{repo.description}</CardBody>
        <CardFooter pad={{ horizontal: "small" }} background="light">
          <Button primary hoverIndicator label="home" href="/" />
        </CardFooter>
      </Card>
      {/* <div className="row">
        <div className="col-sm-12">
          <div className="imageView__container"> */}
      {/* <img src={image} alt={tags} className="imageView__img img-responsive" /> */}
      {/* <div className="imageView__copyright">
        <p>{repo.name}</p>
        <p>{repo.description}</p>
        <p>{repo.stargazers_count}</p>
        <p>{repo.language}</p>
      </div>
      <div className="imageView__text">
        <button className="active-recipe__button">
          <Link to="/">Home</Link>
        </button>
      </div>
          </div>
        </div >
      </div > * /} */}
    </Grommet >
  )
}

export default Details