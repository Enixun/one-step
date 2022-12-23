import React, { useEffect, useState } from "react";

const AttributeMenu = ({ menuType, characterAttribute, updateCharacterAttribute }) =>  {
  const [backendData, setBackendData] = useState({[menuType]: [], active: {}});

  useEffect(() => {
    fetch(`/db/${menuType}`)
      .then(response => response.json())
      .then(attributeList => {
        const active = attributeList.find((attribute) => attribute.name === characterAttribute)
        setBackendData({...backendData, [menuType]: attributeList, active});
      })
      .catch(err => console.log(err));
    }, []); //limits call

  return (
    <div>
      <h2>{menuType}</h2>
      {backendData[menuType].map((attributeObj, i) => {
        return <button 
                className="btn" 
                onClick={(e) => {
                  setBackendData({...backendData, active: attributeObj});
                  updateCharacterAttribute(e.target.value);
                }} 
                value={attributeObj.name}
                key={i}>{attributeObj.name}</button>
      })}
      <p className="description">{backendData.active.description}</p>
    </div>
  );
};

export default AttributeMenu;