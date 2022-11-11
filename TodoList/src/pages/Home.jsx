import { Container } from "@mui/material";
import { Form } from "../components/Form";
import { Card } from "../components/Card";
import List from "@mui/material/List";
import { useEffect, useState } from "react";

export function Home() {
  // LocalStorage method to return array empty and next update
  const getLocal = () => {
    let tarefas = localStorage.getItem("tarefas");
    if (tarefas) {
      return JSON.parse(localStorage.getItem("tarefas"));
    } else {
      return [];
    }
  };

  const [tasks, setTasks] = useState(getLocal());

  const createTask = (valor) => {
    setTasks([...tasks, valor]);
  };

  const deleteTask = (id) => {
    const taskFiltered = tasks.filter((task) => task.id !== id);
    setTasks(taskFiltered);
  };

  useEffect(() => {
    localStorage.setItem("tarefas", JSON.stringify(tasks));
  }, [createTask]);

  return (
    <div className="bg-gray-500 w-full h-screen">
      <Container
        maxWidth="sm"
        className="pt-10 flex flex-col items-center justify-center"
      >
        <Form createTask={createTask} />
        <List className="w-full">
          {tasks.map((task) => (
            <div key={task.id}>
              <Card task={task} deleteTask={deleteTask} />
            </div>
          ))}
        </List>
      </Container>
    </div>
  );
}
