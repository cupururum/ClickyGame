import React from "react";
import PropTypes from 'prop-types'

const Image = (props) => (
  <div key={props.id} className="image">
        <img src={props.src} />
  </div>
);

Image.propTypes = {
    id: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
}

export default Image;