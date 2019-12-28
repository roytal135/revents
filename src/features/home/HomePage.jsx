import React from 'react'
import { Image, Button, Icon, Container, Header, Segment } from 'semantic-ui-react'

const HomePage = ({history}) => {
    return (
            <Segment inverted textAlign='center' vertical className='masthead'>
            <Container text>
              <Header as='h1' inverted>
                <Image
                  size='massive'
                  src='/assets/logo.png'
                  alt='logo'
                  style={{ marginBottom: 12 }}
                />
                Re-vents
              </Header>
              <Button onClick={() => history.push('event')} size='huge' inverted>
                Get started
                <Icon name='right arrow' inverted />
              </Button>
            </Container>
          </Segment>
    )
}

export default HomePage