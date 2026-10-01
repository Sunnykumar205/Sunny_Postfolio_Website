import React from 'react';

const SectionTitle = ({ title, subtitle, centered = false }) => {
  return (
    <div className={`section-title ${centered ? 'centered' : ''}`}>
      <h2>{title}</h2>
      {subtitle && <span className="section-subtitle">{subtitle}</span>}
    </div>
  );
};

export default SectionTitle;