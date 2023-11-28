import "./Headings.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserProfile from "./UserProfile";
import { utility } from "../assets/font_color";

const getIcon = (group, user = { name: "", available: false }, title = "") => {
  const iconMap = {
    user: <UserProfile username={user?.name} available={user?.available} />,
    priority: utility.priorityMap[title.toLowerCase()],
    status: utility.statusMap[title.toLowerCase()],
  };
  return <span className="icon-container">{iconMap[group.toLowerCase()]}</span>;
};

const Headings = (props) => {
  const { title, number, group, user } = props;

  return (
    <div className="container">
      <div className="left-container">
        {getIcon(group, user?.find((user) => user?.name === title), title)}
        <span className="title">{title}</span>
        <span className="nums">{number}</span>
      </div>
      <div className="right-container">
        <FontAwesomeIcon icon="fa-solid fa-plus" style={{ color: "#6e7279" }} />
        <FontAwesomeIcon icon="fa-solid fa-ellipsis" style={{ color: "#6e7279" }} />
      </div>
    </div>
  );
};

export default Headings;
