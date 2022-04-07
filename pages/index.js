import { Heading, Page, TextField, TextContainer, Button } from "@shopify/polaris";
import React, { useState, useCallback } from 'react'

export default function Index() {
  const handleChange = useCallback((newValue) => { console.log("Calling"); setValue(newValue) }, []);
  const enablePopup = () => {
    console.log('Enabling WANDAI');
    
  }
  const [value, setValue] = useState('30');
  return (
    <Page>
      <Heading>
        Welcome to wandAI{" "}
        <span role="img" aria-label="tada emoji">
          🎉
        </span>
      </Heading>
      <TextContainer>
      <Heading>Customise your free shipping threshold</Heading>
        <TextField
          label="Enter checkout threshold value for free shipping"
          value={value}
          type="number"
          onChange={handleChange}
          autoComplete="off"
        />

      </TextContainer>
      <TextContainer>
      <Heading>Customise your free shipping threshold</Heading>
        <Button onClick={enablePopup}>Enable</Button>
        <Button destructive>Disable</Button>
      </TextContainer>
    </Page>
  );
}
