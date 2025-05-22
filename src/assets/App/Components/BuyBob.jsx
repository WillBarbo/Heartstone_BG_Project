import './BuyBob.css'
import Card from './Card.jsx'

function BuyBob() {

  return (
    <>
      <h2>Hearthstone Battlegrounds!</h2>
      <div class='gridHs'>
        <div class='pictureBob board'></div>
        
        <div class='gridBob board'></div>
        
        <div class='gridUser board'></div>

        <div class='pictureUser board'>
          <Card />
        </div>
      </div>
    </>
  )
}

export default BuyBob