import React from 'react';
import PropTypes from 'prop-types';
import "../index.css";

const BlurBlob = ({ position, size }) => {
  const { top = "50%", left = "50%" } = position || {};
  const { width = "200px", height = "200px" } = size || {};

  return (
    <div
      className="absolute"
      style={{
        top,
        left,
        width,
        height,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <div
        className="w-full h-full bg-purple-500 rounded-full opacity-20 blur-3xl animate-blob"
      ></div>
    </div>
  );
};

BlurBlob.propTypes = {
  position: PropTypes.shape({
    top: PropTypes.string,
    left: PropTypes.string,
  }),
  size: PropTypes.shape({
    width: PropTypes.string,
    height: PropTypes.string,
  }),
};

export default BlurBlob;
