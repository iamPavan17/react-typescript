import Input from "./components/Input.tsx";

function App() {
  return (
    <>
      <Input id="name" label="Your name" type="text" />
      <Input id="age" label="Your age" type="number" />
    </>
  );
}

export default App;
