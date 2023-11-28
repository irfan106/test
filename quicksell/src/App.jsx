import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircle, faPlus, faEllipsis, faFilter } from '@fortawesome/free-solid-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { utility } from './assets/font_color';
import Navbar from './components/Navbar';
import Section from './components/Section';

library.add(fas, faCircle, faPlus, faEllipsis, faFilter);

function App() {
  const [data, setData] = useState({});
  const [users, setUsers] = useState([]);
  const [groupVal, setGroupVal] = useState(localStorage.getItem('group') || 'status');
  const [orderVal, setOrderVal] = useState(localStorage.getItem('order') || 'priority');
  const [isBoxVisible, setIsBoxVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://api.quicksell.co/v1/internal/frontend-assignment');
        const tickets = res.data.tickets;
        const users = res.data.users;

        let newData = {};

        if (groupVal === 'status') {
          utility.status.forEach(val => {
            newData[val.toLowerCase()] = [];
          });
          tickets.forEach(ticket => {
            newData[ticket.status.toLowerCase()].push(ticket);
          });
        } else if (groupVal === 'user') {
          users.forEach(user => {
            newData[user.id] = [];
          });
          tickets.forEach(ticket => {
            newData[ticket.userId.toLowerCase()].push(ticket);
          });
        } else if (groupVal === 'priority') {
          utility.priority.forEach(value => {
            newData[value.toLowerCase()] = [];
          });
          tickets.forEach(ticket => {
            newData[utility.priority[ticket.priority].toLowerCase()].push(ticket);
          });
        }

        setData(newData);
        setUsers(users);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [groupVal, orderVal]);

  return (
    <>
      <Navbar setOrder={setOrderVal} setGroup={setGroupVal} />
      <div className="ticketSection">
        {Object.keys(data).map((key, index) => (
          <Section key={index} name={groupVal !== 'user' ? key : users.find(({ id }) => id === key)?.name} tickets={data[key]} users={users} order={orderVal} group={groupVal} />
        ))}
      </div>
    </>
  );
}

export default App;
