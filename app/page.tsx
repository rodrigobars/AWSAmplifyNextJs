"use client";

import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import '@aws-amplify/ui-react/styles.css'
import { Button } from "@nextui-org/react";
import Signout from "./components/Signout";
// import { Container } from "./components/Container";

//Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);
  
  function listTodos() {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }

  useEffect(() => {
    listTodos();
  }, []);

  function createTodo() {
    client.models.Todo.create({
      content: window.prompt("Todo content"),
    });
  }

  function deleteTodo(id: string) {
    client.models.Todo.delete({ id })
  }

  return (
          <main>
            <div>
              <h1>Hello world</h1>
              <Signout />
            </div>
          </main>
      // <Authenticator
      //   socialProviders={['google']}
      //   className="absolute flex self-center w-full h-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-drip-expand">
      //   {({ signOut, user }) => (
      //     <main>
      //       <div>
      //         <h2>User Information:</h2>
      //         <pre>{JSON.stringify(user, null, 2)}</pre>
      //       </div>
      //       <Button color="danger" onClick={signOut}>Sign out</Button>
      //     </main>
      //   )}
      // </Authenticator>
  );
}

{/* <Container>
<h1>My todos</h1>
<button onClick={createTodo}>+ new</button>
<ul>
  {todos.map((todo) => (
    <li onClick={() => deleteTodo(todo.id)} key={todo.id}>{todo.content}</li>
  ))}
</ul>
<div>
  🥳 App successfully hosted. Try creating a new todo.
  <br />
  <a href="https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/">
    Review next steps of this tutorial.
  </a>
</div>
<div>
  <h2>User Information:</h2>
  <pre>{JSON.stringify(user, null, 2)}</pre>
</div>
<Button color="danger" onClick={signOut}>Sign out</Button>
</Container> */}
