import React from 'react'
import { Container, Option, Title, Img, } from './styles'
import img8 from '../../images/08.png'
import img9 from '../../images/09.png'
import img10 from '../../images/10.png'
import img11 from '../../images/11.png'
import img12 from '../../images/12.png'

const items = [
  {
    id: String(Math.random()),
    img: img8,
    title: 'Pague suas contas sem sair de casa',
    bgColor: '#172c4a'
  },
  {
    id: String(Math.random()),
    img: img9,
    title: 'Pague suas contas sem sair de casa',
    bgColor: '#6a0159'
  },
  {
    id: String(Math.random()),
    img: img10,
    title: 'Pague suas contas sem sair de casa',
    bgColor: '#4139c8'
  },
  {
    id: String(Math.random()),
    img: img11,
    title: 'Pague suas contas sem sair de casa',
    bgColor: '#00ab4b'
  },
  {
    id: String(Math.random()),
    img: img12,
    title: 'Pague suas contas sem sair de casa',
    bgColor: '#ba2f76'
  },
]

const Tips = () => {
  return (
    <Container>
      {items.map((item) => (
        <Option key={item.id} bgColor={item.bgColor}>
          <Title>{item.title}</Title>
          <Img source={item.img}/>
        </Option>
      ))}

    </Container>
  )
}

export default Tips