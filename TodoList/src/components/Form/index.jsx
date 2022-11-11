import { TextField, Paper, Button } from "@mui/material";
import { useState, useRef } from "react";

export function Form({ createTask }) {
  const [text, setText] = useState([]);
  const [id, setId] = useState(0);
  const form = useRef(null);
  const input = useRef(null);

  const convertObj = () => {
    if (input.current.value == false) {
      return;
    }
    input.current.setAttribute("maxlength", "45");
    const taskObj = { text, id };
    setId(id + 1);
    createTask(taskObj);
  };

  return (
    <form className="w-full mb-5" ref={form}>
      <Paper className="py-4">
        <div className="flex justify-center px-2">
          <TextField
            inputRef={input}
            id="outlined-basic"
            label="Tarefa"
            variant="outlined"
            className="rounded-none rounded-l-lg w-full"
            onChange={(e) => setText(e.target.value)}
          />
          <Button
            variant="solid"
            className="bg-blue-500 text-white hover:bg-blue-500 rounded-none rounded-r-lg"
            onClick={(e) => {
              e.preventDefault();
              convertObj();
              form.current.reset();
            }}
          >
            ADD
          </Button>
        </div>
      </Paper>
    </form>
  );
}
