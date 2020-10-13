import React from "react"
import { Link } from "react-router-dom"
import { Box, Grommet, Card, Avatar, CardHeader, CardFooter, Button, Text, Heading } from 'grommet';
import { Star, Github } from 'grommet-icons';
import AnimatedNumber from 'animated-number-react'

const Results = ({ repo }) => {

  const formatValue = value => Number(value).toFixed(0);

  return (
    <Grommet>
      <Card key={repo.id} background="neutral-3" margin="medium" >
        <CardHeader direction="column" size="large" pad="medium">
          <Avatar src={repo.owner.avatar_url} />
          <Heading color="accent-4" size="small" margin="none">{repo.name}</Heading>
        </CardHeader>
        <CardFooter pad="small" background="light-1">
          <Text className="stars">
            <Star size='medium' color="accent-3" />
            <AnimatedNumber
              duration={700}
              value={repo.stargazers_count}
              formatValue={formatValue}
              delay={300}
              speed={1500} />
          </Text>
          <Text color="brand" margin="none">Language: {repo.language}</Text>
          <Link to={{
            pathname: `/detail/${repo.id}`,
            state: { repo }
          }}>
            <Button color="neutral-3" hoverIndicator label="Details" />
          </Link>
        </CardFooter>
      </Card>
    </Grommet>
  )
}
export default Results


// [] organize code
// [] clean up Style
// [] filter button
// [] styles
