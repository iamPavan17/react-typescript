import Button from "./components/Button.tsx";
import Container from "./components/Container.tsx";
import Input from "./components/Input.tsx";

function App() {
  return (
    <>
      <Input id="name" label="Your name" type="text" />
      <Input id="age" label="Your age" type="number" />

      <p>
        <Button element="button">A Button</Button>
      </p>
      <p>
        <Button element="anchor" href="https://www.google.com">
          A Link
        </Button>
      </p>

      <p>
        <Container as="a" href="http://www.google.com">
          Click me
        </Container>
      </p>
    </>
  );
}

export default App;
