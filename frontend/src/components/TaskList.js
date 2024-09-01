import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get('/api/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task._id}>{task.title} - {task.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
