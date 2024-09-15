import PropTypes from 'prop-types';
MagicCard.propTypes = {
    card: PropTypes.object
  }
export default function MagicCard({ card }) {
    return (
        <div className="magic-card">
            {/* <img src={card.image_uris.small} /> */}
            <p>{card.oracle_text}</p>
    </div>
)

}