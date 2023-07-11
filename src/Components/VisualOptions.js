import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setVisualCategory, toggleIsVisualCategoryOpen } from '../store/actions';

const VisualOptions = ({number,title}) => {
  const dispatch = useDispatch();
  const visualCategory = useSelector((state) => state.visualCategory);
  const isVisualCategoryOpen = useSelector((state) => state.isVisualCategoryOpen);

  const handleSelectChange = (event) => {
    const selectedCategory = event.target.value;
    dispatch(setVisualCategory(selectedCategory));
    // dispatch(toggleIsVisualCategoryOpen(true));
  };

  return (
    <div>
      <div className="temperature">
          <div className="temperature__nubmer">{number}</div>
          <div className="temperature__wrapper">
            <h2 className="temperature__title">{title}</h2>
            <select className='visual-options' value={visualCategory} onChange={handleSelectChange}>
        <option value="realistic_picture">Realistic Picture</option>
        <option value="picture">Picture</option>
        <option value="poster">Poster</option>
        <option value="logo">Logo</option>
        <option value="design">Design</option>
      </select>
      <p>Selected Category: {visualCategory}</p>
      <p>Is Category Choosed: {isVisualCategoryOpen ? 'Yes' : 'No'}</p>
          </div>
        </div>
    </div>
  );
};

export default VisualOptions;