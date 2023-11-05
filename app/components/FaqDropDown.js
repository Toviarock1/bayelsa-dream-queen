import React from "react";
import Accordion from "react-bootstrap/Accordion";

const FaqDropDown = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          What is the purpose of this program?
        </Accordion.Header>
        <Accordion.Body>
          The Bayelsa Dream Queen is a platform that empowers and encourage the
          female youth and up comers, being an aspiring model, aspiring
          influencer, fashionista, or pageant lover bringing them closer to the
          limelight, by creating social awareness, visibility and exposure.
          Being a model or popular face is now acquirable at the corner of your
          home, Let your face be on the screens of thousands of millions of
          people. Our main purpose is to create social visibility which aspires
          female, and to also explore their best selves by practicing and
          participating in a digital modeling platforms for their own best
          evaluation.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Who can paticipate in this program</Accordion.Header>
        <Accordion.Body>
          The competition is only open to female participants. To participate,
          you must be a Nigerian female from the age of 16 to 30 years old.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>What is the voting process like?</Accordion.Header>
        <Accordion.Body>
          No, it’s an on-site contest which require physical audition and
          activities. Which will happen live in Bayelsa
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>
          Can I participate in-spite of my location?
        </Accordion.Header>
        <Accordion.Body>
          Registration is the sum of 10,000 naira only
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>
          Can I participate in-spite of my location?
        </Accordion.Header>
        <Accordion.Body>
          To Register as a contestant, you can use the Button next in this
          section to Join Us. When you click to become a contestant, a form will
          appear, fill all required field and in the next step make payment for
          approval. You will be automatically redirected to our official
          WhatsApp to confirm your registration is received.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>
          Can I participate in-spite of my location?
        </Accordion.Header>
        <Accordion.Body>
          To Register as a contestant, you can use the Button next in this
          section to Join Us. When you click to become a contestant, a form will
          appear, fill all required field and in the next step make payment for
          approval. You will be automatically redirected to our official
          WhatsApp to confirm your registration is received.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default FaqDropDown;
