import React, { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Input,
  Button,
  FormLabel,
  FormControl,
  ModalCloseButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Flex,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { product } from "../../products";

export default function Model({ isOpen, onClose }) {
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [select, setSelect] = useState("Select Product");
  const [selectProductIndex, setSelectProductIndex] = useState(null);

  return (
    <>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader required>All Products</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Box w={"100%"} m={"auto"}>
              <Menu>
                <MenuButton
                  as={Button}
                  w={"100%"}
                  rightIcon={<ChevronDownIcon />}
                >
                  {select}
                </MenuButton>
                <MenuList w={400}>
                  {product.map((elem, i) => {
                    return (
                      <MenuItem
                        key={elem.id}
                        value={elem.name}
                        onClick={(e) => {
                          console.log(e.target.value);
                          setSelectProductIndex(i);
                          setSelect(e.target.value);
                        }}
                      >
                        {elem.name}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </Menu>
            </Box>

            <Box
              style={{
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              }}
              p={5}
              my={5}
            >
              <Flex pb={2} w={"100%"} justifyContent={"space-between"}>
                <Box>
                  <b>
                    1. SKU{" "}
                    {selectProductIndex === null
                      ? ""
                      : product[selectProductIndex].sku[0].id}
                  </b>
                </Box>
                <Box>
                  <b>
                    Rate $
                    {selectProductIndex === null
                      ? ""
                      : product[selectProductIndex].sku[0].selling_price}
                  </b>
                </Box>
              </Flex>
              <hr />
              <Flex gap={5}>
                <FormControl mt={4}>
                  <FormLabel>Selling Rate </FormLabel>
                  <Input placeholder="Enter Selling Rate" />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Total Items</FormLabel>
                  <Input placeholder="Enter Quantity" />
                </FormControl>
              </Flex>
            </Box>

            <Box
              style={{
                boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              }}
              p={5}
              my={10}
            >
              <Flex pb={2} w={"100%"} justifyContent={"space-between"}>
                <Box>
                  <b>
                    2. SKU{" "}
                    {selectProductIndex === null
                      ? ""
                      : product[selectProductIndex].sku[1].id}
                  </b>
                </Box>
                <Box>
                  <b>
                    Rate $
                    {selectProductIndex === null
                      ? ""
                      : product[selectProductIndex].sku[1].selling_price}
                  </b>
                </Box>
              </Flex>
              <hr />
              <Flex gap={5}>
                <FormControl mt={4}>
                  <FormLabel>Selling Rate </FormLabel>
                  <Input placeholder="Enter Selling Rate" />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Total Items</FormLabel>
                  <Input placeholder="Enter Quantity" />
                </FormControl>
              </Flex>
            </Box>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
