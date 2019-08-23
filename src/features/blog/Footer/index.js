/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import PropTypes from 'proptypes'
import { FooterBox, FooterText } from './styles'

class Footer extends React.Component {
  render() {
    const { children, className } = this.props
    return (
      <FooterBox className={className}>
        <FooterText>{children}</FooterText>
      </FooterBox>
    )
  }
}

Footer.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
}

Footer.defaultProps = {
  className: '',
}

export default Footer
