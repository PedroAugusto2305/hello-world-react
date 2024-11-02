import { useState } from "react";

export default function useTaskCollection() {
  const [tasks, setTasks] = useState([]);

  const addTask = ({ title }) => {
    const id = Math.floor(Math.random() * 1000000);
    const task = { id, title };
    setTasks((state) => {
      return [...state, task];
    });
  };

  const removeTask = (id) => {
    setTasks((state) => {
      return state.filter((task) => task.id !== id);
    });
  };

  const editTask = (id, newTitle) => {
    setTasks((state) => {
      return state.map((task) => task.id === id ? { ...task, title: newTitle } : task)
    })
  }

  return { tasks, addTask, removeTask, editTask };
}
