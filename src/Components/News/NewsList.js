import React from 'react'
import '../CardListStyles.css'
const NewsList = () => {
  const cardsFutureComponent = [{ id: 2 }, { id: 1 }, { id: 3 }]
  return (
    <div>
      <h1>Novedades</h1>
      <ul className='list-container'>
        {cardsFutureComponent.length > 0 ? (
          cardsFutureComponent.map((card) => {
            return <li className='card-info' key={card.id}></li>
          })
        ) : (
          <p>No hay novedades</p>
        )}
      </ul>
    </div>
  )
}
export default NewsList