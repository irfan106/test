import './Dropdown.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useBoxVisible from '../assets/hooks/useBoxVisible';
import { HiMiniAdjustmentsHorizontal } from "react-icons/hi2";

const Dropdown = ({ setOrder, setGroup }) => {
  const group = localStorage.getItem('group');
  const order = localStorage.getItem('order');
  const { ref, parentRef, isBoxVisible } = useBoxVisible(false);

  const handleGroupChange = (e) => {
    setGroup(e.target.value.toLowerCase());
    localStorage.setItem('group', e.target.value.toLowerCase());
  }

  const handleOrderChange = (e) => {
    setOrder(e.target.value.toLowerCase());
    localStorage.setItem('order', e.target.value.toLowerCase());
  }

  return (
    <div className="container">
      <div role="button" ref={parentRef} className='dropdown-container'>
        <HiMiniAdjustmentsHorizontal />
        <div className="button-text">
          <span>Display</span>
          <span>
            <FontAwesomeIcon icon="fa-solid fa-chevron-down" style={{ color: "#6e7279" }} />
          </span>
        </div>
      </div>
      {isBoxVisible && (
        <div className="box" ref={ref}>
          <div className='box-unit'>
            <span className='title-drop-down'>Grouping</span>
            <select className='select-tags' onChange={handleGroupChange} value={group}>
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className='box-unit'>
            <span className='title-drop-down'>Ordering</span>
            <select className='select-tags' onChange={handleOrderChange} value={order}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
