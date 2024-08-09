import { type FormEvent, type ComponentPropsWithoutRef } from "react";

type FormProps = ComponentPropsWithoutRef<"form"> & {
  // The type is a bit tricky though, because this form component,
  // can be wrapped around any inputs. So inside the form component,
  // we don't really know what kind of data will be collected here.
  // And which kind of inputs we have between the form.
  // That's why, a good type to use here is an unknown type.
  onSave: (value: unknown) => void;
};

export default function Form(props: FormProps) {
  const { onSave, ...rest } = props;
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    // To make sure that, the default browser behavior,
    // where the page is submitted and an HTTP request
    // is being sent is prevented.
    event.preventDefault();

    // Built into JS, that allows us to automatically gather,
    // that have been entered into any input fields inside of the form.
    // For this to work, all the input fields must have name property.
    const formData = new FormData(event.currentTarget);

    // Convert the form data object into a simpler object.
    const data = Object.fromEntries(formData); // { name: "Rama", age: "100" }
    onSave(data);
  }

  return <form onSubmit={handleSubmit} {...rest}></form>;
}
