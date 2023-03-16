import React, { useState } from 'react';
import MultipleChoice from '../Survey/MultipleChoice';
import ShortAnswer from '../Survey/ShortAnswer';
import YesOrNo from '../Survey/YesOrNo';

function Dropdown() {
  const [selectedComponent, setSelectedComponent] = useState('MultipleChoice');

  const handleChange = (event) => {
    setSelectedComponent(event.target.value);
  };

  const renderComponent = () => {
    switch (selectedComponent) {
      case 'MultipleChoice':
        return <MultipleChoice />;
      case 'ShortAnswer':
        return <ShortAnswer />;
      case 'YesOrNo':
        return <YesOrNo />;
      default:
        return null;
    }
  };

  return (
    <div>
      <select value={selectedComponent} onChange={handleChange}>
        <option value="MultipleChoice">객관식</option>
        <option value="ShortAnswer">주관식</option>
        <option value="YesOrNo">찬부식</option>
      </select>
      {renderComponent()}
    </div>
  );
}

export default Dropdown;