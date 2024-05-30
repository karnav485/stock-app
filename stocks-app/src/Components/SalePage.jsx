import {
  Button,
  Flex,
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  useDisclosure,
  TableContainer,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import React from "react";
import { useColorModeValue } from "@chakra-ui/react";
import Theme from "./theme";
import Model from "./model";
import coutomer from "../../coutomer";
import { useNavigate } from "react-router-dom";

export default function SalePage() {
  const bgColor = useColorModeValue(
    "colors.background.light",
    "colors.background.dark"
  );
  const { isOpen, onOpen, onClose } = useDisclosure();
  const textColor = useColorModeValue("colors.text.light", "colors.text.dark");

  const navigate = useNavigate();

  const handleLogOut = () => {
    navigate("/login");
    localStorage.setItem("loginSuccess", JSON.stringify(false));
  };

  return (
    <Box style={{ background: bgColor, color: textColor }}>
      <Flex m={10} justifyContent={"space-between"}>
        <Flex>
          <Button mr={5} colorScheme="blue">
            Active Sale Order
          </Button>
          <Button mr={5} colorScheme="blue">
            Completed Sale Order
          </Button>
        </Flex>
        <Flex>
          <Button mr={5} colorScheme="blue" onClick={onOpen}>
            + Sale Order{" "}
          </Button>
          <Theme />
          <Button ml={5} colorScheme="blue" onClick={handleLogOut}>
            Log Out
          </Button>
        </Flex>
      </Flex>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Customer Name</Th>
              <Th>Price</Th>
              <Th>Last Modified</Th>
              <Th>Edit/View</Th>
            </Tr>
          </Thead>
          <Tbody>
            {coutomer.map((elem, i) => {
              return (
                <Tr key={elem.id}>
                  <Td>{elem.customer}</Td>
                  <Td>{elem.customer_profile.name}</Td>
                  <Td>30000</Td>
                  <Td>18-05-2023</Td>
                  <Td>
                    <EditIcon cursor={"pointer"} onClick={onOpen} />
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <Model isOpen={isOpen} onClose={onClose} />
    </Box>
  );
}
