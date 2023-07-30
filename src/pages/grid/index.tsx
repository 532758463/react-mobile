import React from 'react';
import './index.css';

export const Grid: React.FC = () => {
  return (
    <div>
      <div id="container">
        <div className="item item-1">1</div>
        <div className="item item-2">2</div>
        <div className="item item-3">3</div>
        <div className="item item-4">4</div>
        <div className="item item-5">5</div>
        <div className="item item-6">6</div>
        <div className="item item-7">7</div>
        <div className="item item-8">8</div>
        <div className="item item-9">9</div>
      </div>
      <div className="container2">
        <div className="item item-1">1</div>
        <div className="item item-2">2</div>
        <div className="item item-3">3</div>
        <div className="item item-4">4</div>
        <div className="item item-5">5</div>
        <div className="item item-6">6</div>
        <div className="item item-7">7</div>
        <div className="item item-8">8</div>
        <div className="item item-9">9</div>
      </div>
      {/* 两栏布局 */}
      <div className="two-flex">
        <div className="item-1">1</div>
        <div className="item-2">2</div>
      </div>
    </div>
  );
};

export default Grid;
