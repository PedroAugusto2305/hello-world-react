import Title from "./components/Title";
import NewTaskForm from "./components/NewTaskForm";
import useTaskCollection from "./hooks/useTaskCollection";
import Task from "./components/Task";

function App() {
  const { tasks, addTask, removeTask, editTask } = useTaskCollection();
  return (
    <>
      <Title title="Lista de Tasks" />
      <main>
        <NewTaskForm addTask={addTask} />
        {tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            editTask={editTask}
            changeButton={() => removeTask(task.id)}
          />
        ))}
      </main>
    </>
  );
}

export default App;
