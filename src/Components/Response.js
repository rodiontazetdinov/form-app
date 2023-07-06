const Response = ({ item, onItemClick, isSelected, isConceptPair }) => {
  const handleItemClick = ()=> {
    onItemClick(item)
  };

  return (
    <li className='responses__response'>
        <label className='responses__lable'>
        <input
          className='responses__checkbox'
          type="radio"
          name="selectedItem"
          checked={isSelected}
          onChange={handleItemClick}
        />
        {!isConceptPair && <p className="responses__text">{item}</p>}
        {isConceptPair && 
          <>
          <h2 className="responses__header">{item.name}</h2>
          <p className="responses__text">{item.concept}</p>
          </>
        }
        
        </label>
    </li>
    )
};

export default Response;