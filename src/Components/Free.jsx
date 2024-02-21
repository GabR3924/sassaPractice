import icon from '../assets/icon.png'
import super1 from '../assets/super1.png'
import Card from './Card'

function Free() {
  return (
    <div className='free'>
      <div className="container">
        <div className="background">
          <div className="ellipse">

          <div className="ellipse pink"></div>
          <div className="ellipse green"></div>
        </div>
          </div>
        <div className="content">
          <div className="image">
            <img src={icon} alt="icon" />
          </div>
          <h2>Free NFT for early birds</h2>
          <p className="description">
            Sig Up Today yoll get a free  NTF
          </p>
        </div>
      </div>
      <div className="cards">
        <div className="card1">
          <Card
            image={super1}
            series="Floop Series"
            title="Purple Man"
            price={2.99}
            tag={12345}
            time={1}
          />
        </div>
        <div className="card2"></div>
      </div>
    </div>
  )
}

export default Free