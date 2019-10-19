import React from 'react'
import { ApolloClient } from 'apollo-boost'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'
import { Container } from '@material-ui/core';
import { ApolloProvider } from 'react-apollo'
import './App.css'

import AddContactContainer from './components/containers/AddContactContainer'
import Contacts from './components/lists/Contacts'
import Title from './components/layout/Title'


const client = new ApolloClient({
  link: createHttpLink({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache()
})

const App = () => (
  <ApolloProvider client={client}>
    <Container className='App'>
      <Title />
      <AddContactContainer />
      <Contacts />
    </Container>
  </ApolloProvider>
)

export default App
