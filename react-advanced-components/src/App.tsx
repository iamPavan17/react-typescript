import Button from "./components/Button.tsx";
import Card from "./components/Card.tsx";
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

      <p>
        <Card
          title="My Card"
          actions={
            <button onClick={() => console.log("Button clicked!")}>
              Click Me!
            </button>
          }
        >
          <p>Some content</p>
        </Card>
      </p>
    </>
  );
}

export default App;
