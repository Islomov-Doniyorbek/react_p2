import SelectAutoWidth from "../material UI/select/select"
import IconButtonWithBadge from "../material UI/basketButton/basketBtn"
// IconButtonWithBadge
import '../../all.scss'

const Navbar = ({onCartClick, basketData, filteringCard}) => {
  // console.log(basketData);
  // let basketCount = basketData.length;
  let t=0;
  basketData.forEach(e => {
    t++
  });
  return (
    <div className="navbar">
      <div className="brand">
        React Market
      </div>
      <div className="filtering">
        <SelectAutoWidth filteringCard={filteringCard} /> <span onClick={onCartClick}><IconButtonWithBadge basketData={t}/></span>
      </div>
    </div>
  )
}

export default Navbar
