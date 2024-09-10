import PropTypes from 'prop-types';
MagicCard.propTypes = {
    img: PropTypes.string.isRequired
  }
export default function MagicCard({ img }) {
    return (
        <div className="magic-card">
            <img src={img} />
    </div>
)

}