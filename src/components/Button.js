import PropTypes from 'prop-types'

const Button = ({ color, text, btnClick }) => {


    return (
        <button
            onClick={btnClick}
            style={{ backgroundColor: color }}
            className="btn">{text}
        </button>
    )
}

// You can use these as default
Button.defaultProps = {
    color: 'steelblue',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button