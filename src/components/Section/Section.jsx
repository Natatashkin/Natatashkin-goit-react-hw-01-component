import React from 'react';
import PropTypes from 'prop-types';
import { SectionBlock, Title } from './Section.styled';

const Section = ({ title, children }) => (
  <SectionBlock>
    <Title>{title}</Title>
    {children}
  </SectionBlock>
);

Section.propType = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
