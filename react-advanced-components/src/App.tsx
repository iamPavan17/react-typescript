import { useRef } from "react";

import Button from "./components/Button.tsx";
import Card from "./components/Card.tsx";
import Container from "./components/Container.tsx";
import IconButton from "./components/IconButton.tsx";
import Input from "./components/Input.tsx";
import Form from "./components/Form.tsx";

// import Icon from "./vite.svg";

function HeartIcon() {
  // return <img src={Icon} />;
  return <span>❤️</span>;
}

function App() {
  const input = useRef<HTMLInputElement>(null);

  function handleSave(data: unknown) {
    /* Type Casting - 
        Means conversion of one data type to 
        another data type, such as a number to a string.
    */
    const extractedData = data as {
      name: string;
      age: string;
    };
    console.log(extractedData);
  }

  return (
    <>
      <h2>Form Wrapper</h2>
      <Form onSave={handleSave}>
        <Input label="Name" type="text" id="name" />
        <Input label="Age" type="number" id="age" />
        <p>
          <Button element="button">Save</Button>
        </p>
      </Form>

      <hr />

      <Input id="name" label="Your name" type="text" ref={input} />
      <button onClick={() => console.log(input.current!.value)}>Submit</button>

      {/* <Input id="age" label="Your age" type="number" /> */}

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

      <Card
        title="My Card heading"
        actions={
          <button onClick={() => console.log("Button clicked!")}>
            Click Me!
          </button>
        }
      >
        <p>Some content</p>
      </Card>

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
