import React, { useEffect, useState } from 'react';
import Headings from './Headings';
import Cards from './Cards';
import './section.css';

export default function Section({ name, tickets, users, order, group }) {
  const [sortedTickets, setSortedTickets] = useState([]);

  useEffect(() => {
    function checkOrder() {
      let sorted;

      if (order === 'priority') {
        sorted = [...tickets].sort((x, y) => y.priority - x.priority);
      } else if (order === 'title') {
        sorted = [...tickets].sort((x, y) => x.title.toLowerCase().localeCompare(y.title.toLowerCase()));
      }

      setSortedTickets(sorted || tickets);
    }

    checkOrder();
  }, [tickets, order]);

  return (
    <div className="section-container">
      <Headings title={name} number={tickets.length} order={order} group={group} user={users} />
      {sortedTickets.map((ticket, index) => (
        <Cards key={index} id={ticket.id} title={ticket.title} tags={ticket.tag} user={users.find(({ id }) => id === ticket.userId)} ticket={ticket} />
      ))}
    </div>
  );
}
