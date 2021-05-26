import React from 'react';

const SectionLayout = ({sectionName, children}) => {
  return (
    <section className={"section " + sectionName}>
      <div className="layout-container">
        {children}
      </div>
    </section>
  );
};

export default SectionLayout;