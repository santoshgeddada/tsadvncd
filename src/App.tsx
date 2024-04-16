import { useRef, type FC } from 'react';
import './App.css';
import Input from './components/Input';
import Button from './components/Button';
import Container from './components/Container';
import Form from './components/Form';

const App: FC=()=>{
  const input = useRef<HTMLInputElement>(null)


  const handleSave = (data:unknown)=>{
    const extractedData = data as {name: string, age: string}
    console.log(extractedData)

  }
  
  return (
    <>
      <Button el="button">A button</Button>
      <Button el='anchor' href='https://google.com' target='_blank'>A Link</Button>
      <Input type='number' label='Your age' id='age' ref={input} />
      <Container as="button">Click Me</Container>
      <Form onSave={handleSave}>
        <Input type='text' label='Name' id='name'/>
        <Input type='number' label='Age' id='age' />
        <Button el= "button">Save</Button>
      </Form>
    </>
  )
}

export default App;
