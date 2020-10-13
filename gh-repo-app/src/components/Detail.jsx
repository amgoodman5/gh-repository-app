
import React from "react"

import { Box, Grommet, Card, CardBody, CardHeader, Avatar, CardFooter, Button, Text, Heading, Paragraph } from 'grommet';
import { Star } from 'grommet-icons';
import { Github } from 'grommet-icons';
import AnimatedNumber from 'animated-number-react'

import "../App.css";



const Details = (props) => {
  const { location } = props
  const { state } = location
  const { repo } = state
  console.log(repo)


  const formatValue = value => Number(value).toFixed(0);

  const theme = {
    global: {
      font: {
        size: '18px',
        height: '20px',
      },
    },
  };

  return (
    <Grommet theme={theme}>
      <Box direction="column" align="center" margin="small">
        <Card key={repo.id} width="medium"  >
          <CardHeader pad="medium" background="neutral-3" >
            <Heading >
              {repo.name}
            </Heading>
            <Avatar src={repo.owner.avatar_url} />
          </CardHeader>
          <CardBody pad="medium" height="medium" background="light-4">
            <Heading color="neutral-3" size="small" margin="none">Description:</Heading>
            <Paragraph color="dark-2" margin="none" >{repo.description}</Paragraph>
            <Heading size="small" color="neutral-3" margin={{ "top": "15px", bottom: '0' }}>Owner:</Heading>
            <Paragraph color="dark-2" margin="none">{repo.owner.login}</Paragraph>
            <Heading size="small" color="neutral-3" margin={{ "top": "15px", bottom: '0' }}>Language:</Heading>
            <Paragraph color="dark-2" margin="none"> {repo.language}</Paragraph>
          </CardBody>
          <CardFooter background="dark-2" pad="medium">
            <Text className="stars">
              <Star size='medium' color="accent-3" />
              <AnimatedNumber
                className='numbers'
                duration={700}
                value={repo.stargazers_count}
                formatValue={formatValue}
                delay={300}
                speed={1500} />
            </Text>
            <Button color="accent-3" primary hoverIndicator label="Repo" icon={<Github />} href={repo.owner.html_url} />
            <Button color="accent-3" hoverIndicator label="Back" href="/" />
          </CardFooter>
        </Card>
      </Box>
    </Grommet >
  )
}

export default Details