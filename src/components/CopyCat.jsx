import React from 'react';
import { styles } from '../styles'
import PropTypes from 'prop-types';

export class CopyCat extends React.Component {
  render() {
    return (
      <div style={styles.divStyles}>
        <h1 style={{marginBottom: 80}}>Copy Cat {this.props.name || 'Tom'}</h1>
        <input 
          type='text'
          value={this.props.input}
          onChange={this.props.handleChange}
        />
        <img 
          alt='cat'
          src={this.props.copying ? this.props.images.copycat : this.props.images.quietcat}
          onClick={this.props.toggleTape}
          style={styles.imgStyles}
        />
        <p>{this.props.copying && this.props.input}</p>
      </div>
    );
  };
}

CopyCat.propTypes = {
  input: PropTypes.string.isRequired,
  copying: PropTypes.bool.isRequired,
  toggleTape: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  images: PropTypes.object.isRequired,
  name: PropTypes.string
}