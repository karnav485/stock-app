import React, { useState } from "react";
import {
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuth }) => {
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.userName === "user" && formData.password === "password") {
      navigate("/sales");
      setAuth(true);
      localStorage.setItem("loginSuccess", JSON.stringify(true));
    } else {
      alert("Invalid Crediantials");
    }
  };

  return (
    <Box w={"30%"} m={"30px auto"} boxShadow={"base"} p={10}>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4} align="stretch">
          <FormControl id="firstName" isRequired>
            <FormLabel>Username</FormLabel>
            <Input
              type="text"
              name="userName"
              value={formData.userName}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password </FormLabel>
            <Input
              type="password"
              name="password"
              value={formData.email}
              onChange={handleChange}
            />
          </FormControl>
          <Button type="submit" colorScheme="blue">
            Submit
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default Login;
