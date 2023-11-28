import './Cards.css'; 
import UserProfile from './UserProfile';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {utility} from '../assets/font_color'

const Cards = (props) => {
  const { id, title, tags, user, ticket } = props;
  const groupedBy = localStorage.getItem('group')
  const groupedByUser = groupedBy === 'user';
  return (
    <div className="task-card">
      <div className="task-card-header">
        <span className="task-card-id">{id}</span>
        {!groupedByUser ? <UserProfile username={user.name} available={user.available}/> : null} 
      </div>
      <div className="task-card-title">
        <div className="card-status">
          <div className="card-status-icon">{ (groupedBy !== 'status') ? utility.statusMap[ticket.status.toLowerCase()] : null}</div>
          <div className="card-status-title">{title}</div>
        </div>
      </div>
      <div className="task-tags-and-icon">
        <div className="task-card-tags">
        {(groupedBy !== 'priority') ? utility.priorityArr[ticket.priority] : null}
          {tags.map((tag, index) => (
            <div className='task-request-btn-container' key={index}>
              <FontAwesomeIcon icon="fa-solid fa-circle" style={{color: "#bec2c8",}} />
              <span className="task-request-btn">{tag}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
