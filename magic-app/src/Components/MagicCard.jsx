import PropTypes from 'prop-types';
MagicCard.propTypes = {
    card: PropTypes.object
  }
export default function MagicCard({ card }) {
    return (
        <div className="magic-card">
            {card.image_uris && card.image_uris.border_crop ? <img src={card.image_uris.border_crop} /> : <></> }
            {/* <p>{card.oracle_text}</p> */}
    </div>
)

}