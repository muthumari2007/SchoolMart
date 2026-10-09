import Accordion from "react-bootstrap/Accordion";
import "./Acc.css"

function AccordionApp() {
  return (
    <div className="accordion">
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>What is React?</Accordion.Header>
        <Accordion.Body>
          React is a JavaScript library.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>What is HTML?</Accordion.Header>
        <Accordion.Body>
          HTML is used to create web pages.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>What is CSS?</Accordion.Header>
        <Accordion.Body>
          CSS is used to style web pages.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventkey="3">
        <Accordion.Header>What is a Component in React?</Accordion.Header>
        <Accordion.Body>
          A Component is a reusable part of a React application.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventkey="4">
        <Accordion.Header>What is JavaScript?</Accordion.Header>
        <Accordion.Body>
          JavaScript is used to add interactiity to web pages.
          </Accordion.Body>

          <Accordion.Item eventKey="5">
            <Accordion.Header>What is JSX?</Accordion.Header>
            <Accordion.Body>
              JSX allows us to write HTML-Like code inside JavaScript
            </Accordion.Body>
          </Accordion.Item>
      </Accordion.Item>
    </Accordion>
    </div>
  );
}

export default AccordionApp;