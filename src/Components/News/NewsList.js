import React from 'react'
import '../CardListStyles.css'
import { listHasValues } from '../../Utils/validation'
import Title from '../Title/Title'
import CustomCard from '../Card/CustomCard'
import { Container } from '@material-ui/core'
const lastNewsMock = [
  {
    id: 626,
    name: 'VI Jornada recreativa',
    content:
      'Se realizó la VI jornada recreativa de invierno, jovenes de todas las edades participarion en juegos y los más chicos presentaron una coreografía espectacular!',
    image: 'https://ukrainer.net/wp-content/uploads/2019/11/11-99.jpg',
  },
  {
    id: 629,
    name: 'Jornada domigo juguetes 12',
    content:
      'VI jornada recreativa de invierno, jovenes de todas las edades participarion en juegos y los m&aacute;s chicos presentaron una core',
    image: 'https://ukrainer.net/wp-content/uploads/2019/11/0-113.jpg',
    user_id: null,
  },
  {
    id: 637,
    name: 'Actividades anuales',
    content:
      'Jornada recreativa de invierno, jovenes de todas las edades participarion en juegos y los m&aacute;s chicos presentaron una core',
    image:
      'https://www.kleineherzen.or.at/wp-content/uploads/Kids_Mutter_Kind_haus2019.png',
  },
]
const NewsList = ({ lastNews }) => {
  const ListHasValues = listHasValues(lastNewsMock)
  return (
    <Container className='ContainerList'>
      <Title title='Novedades' />
      <ul className='list-container'>
        {ListHasValues ? (
          lastNewsMock.map((news) => {
            return (
              <CustomCard
                key={news.id}
                title={news.name}
                img={news.image}
                description={news.content}
              />
            )
          })
        ) : (
          <p>No hay novedades</p>
        )}
      </ul>
    </Container>
  )
}
export default NewsList
