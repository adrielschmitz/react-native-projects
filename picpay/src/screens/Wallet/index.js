import React, { useState } from 'react'
import { Feather, MaterialCommunityIcons, FontAwesome, AntDesign, Foundation } from '@expo/vector-icons'
import {
  Wrapper,
  Header,
  HeaderContainer,
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardDetails,
  CardTitle,
  CardInfo,
  Img,
  CardBody,
  AddButton,
  AddLabel,
  UseTicketButton,
  UseTicketLabel,
  UseTicketContainer,
  GraphButtonRow,
  GraphButton,
} from './styles'

import CreditCard from '../../images/credit-card.png'

import { Switch } from 'react-native'

const Wallet = () => {
  const [visible, setVisible] = useState(true)
  const [use_balance, setUseBalance] = useState(true)
  const onChangeVisible = () => setVisible((prevState) => !prevState)

  const handleChangeUseBalance = () => setUseBalance(prevState => !prevState)

  return (
    <Wrapper>
      <Header colors={use_balance ? ['#52E78c', '#1AB563'] : ['#d3d3d3', '#868686']}>
        <HeaderContainer>
          <GraphButtonRow>
            <GraphButton>
              <Foundation name="graph-bar" size={24} color="#fff"/>
            </GraphButton>
          </GraphButtonRow>

          <Title>Saldo PicPay</Title>

          <BalanceContainer>
            <Value>
              R$ <Bold>{visible ? '0,00' : '----'}</Bold>
            </Value>
            <EyeButton onPress={onChangeVisible}>
              <Feather name={visible ? "eye" : 'eye-off'} color="#fff" size={28}/>
            </EyeButton>
          </BalanceContainer>

          <Info>
            Seu saldo está rendendo 100% do CDI
          </Info>

          <Actions>
            <Action>
              <MaterialCommunityIcons color="#fff" size={28} name="cash"/>
              <ActionLabel>Adicionar</ActionLabel>
            </Action>

            <Action>
              <FontAwesome color="#fff" size={18} name="bank"/>
              <ActionLabel>Banco</ActionLabel>
            </Action>
          </Actions>
        </HeaderContainer>
      </Header>

      <UseBalance>
        <UseBalanceTitle>Usar saldo ao pagar</UseBalanceTitle>
        <Switch
          value={use_balance}
          onValueChange={handleChangeUseBalance}
        />
      </UseBalance>

      <PaymentMethods>
        <PaymentMethodsTitle>Forma de pagamento</PaymentMethodsTitle>

        <Card>
          <CardBody>

            <CardDetails>
              <CardTitle>
                Cadastre seu cartão de crédito
              </CardTitle>
              <CardInfo>
                Cadastre um cartão de crédito para poder fazer pagamentos mesmo quando não tiver saldo no seu PicPay
              </CardInfo>
            </CardDetails>
            <Img source={CreditCard} resizeMode="contain"/>
          </CardBody>

          <AddButton>
            <AntDesign name="pluscircleo" size={30} color="#0DB060"/>
            <AddLabel>Adicionar cartão de crédito</AddLabel>
          </AddButton>
        </Card>

        <UseTicketContainer>
          <UseTicketButton>
            <MaterialCommunityIcons size={20} name="ticket-outline" color="#0DB060"/>
            <UseTicketLabel>Usar código promocional</UseTicketLabel>
          </UseTicketButton>
        </UseTicketContainer>
      </PaymentMethods>
    </Wrapper>
  )
}

export default Wallet