import React from 'react'
import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'
import {
  Container,
  Header,
  Title,
  Card,
  CardHeader,
  Avatar,
  Description,
  Bold,
  CardBody,
  UserName,
  CardFooter,
  Details,
  Value,
  Divider,
  Date,
  Actions,
  Option,
  OptionLabel,
} from './styles'

import avatar from '../../images/avatar.png'

const Activities = () => {
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar}/>
          <Description>
            <Bold>Você</Bold> pagou a <Bold>Adriel Schmitz</Bold>
          </Description>
        </CardHeader>

        <CardBody>
          <UserName>Adriel Schmitz</UserName>

        </CardBody>

        <CardFooter>
          <Details>
            <Value>R$ 18,00</Value>

            <Divider/>

              <Feather size={14} name="lock" color="#fff"/>

              <Date>há dois anos</Date>
          </Details>

          <Actions>
            <Option>
              <MaterialCommunityIcons size={14} color="#fff" name="comment-outline"/>
              <OptionLabel>0</OptionLabel>
            </Option>

            <Option>
              <AntDesign size={14} color="#fff" name="hearto"/>
              <OptionLabel>0</OptionLabel>
            </Option>
          </Actions>

        </CardFooter>
      </Card>
    </Container>
  )
}

export default Activities