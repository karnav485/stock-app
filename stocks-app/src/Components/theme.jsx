import React from "react";
import { useColorMode, Button } from "@chakra-ui/react";

const Theme = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Button colorScheme="blue" onClick={toggleColorMode}>
      Switch Theme
    </Button>
  );
};

export default Theme;
