import Button from "./components/Button.tsx";
import Card from "./components/Card.tsx";
import Container from "./components/Container.tsx";
import IconButton from "./components/IconButton.tsx";
import Input from "./components/Input.tsx";

// import Icon from "./vite.svg";

function HeartIcon() {
  // return <img src={Icon} />;
  return <span>❤️</span>;
}

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

      <p>
        <IconButton
          icon={HeartIcon}
          onClick={() => console.log("Button clicked!")}
        >
          Like
        </IconButton>
      </p>
    </>
  );
}

export default App;
