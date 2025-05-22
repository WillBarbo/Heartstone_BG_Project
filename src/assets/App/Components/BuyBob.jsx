import './BuyBob.css'
import Card from './Card.jsx'

function BuyBob() {

  return (
    <>
      <h2>Hearthstone Battlegrounds!</h2>
      <div class='gridHs'>
        <div class='pictureBob board'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        
        <div class='gridBob board'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        
        <div class='gridUser board'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        <div class='pictureUser board'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </>
  )
}

export default BuyBob