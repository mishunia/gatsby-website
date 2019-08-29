import React from 'react'
import { storiesOf } from '@storybook/react'
import { List, ListItem } from './List'

storiesOf('Atoms/List', module).add('Default', () => (
  <List>
    <ListItem>List item one</ListItem>
    <ListItem>List item one</ListItem>
    <ListItem>List item one</ListItem>
    <ListItem>List item one</ListItem>
  </List>
))
