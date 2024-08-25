import React from 'react';

const TabSmallBlock = ({ title, description }: any) => {
  return (
    <div className="tab-small-item">
      <h4 className="tab-small-item-title">{title}</h4>
      <p className="description">{description}</p>
    </div>
  );
}

export default TabSmallBlock;
