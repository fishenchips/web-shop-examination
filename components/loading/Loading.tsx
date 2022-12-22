import React, { ReactElement } from "react";
import { Spinner, Text } from "@chakra-ui/react";
import { useIsFetching } from "@tanstack/react-query";

export const Loading = (): ReactElement => {
  /* returns a number of how many things are fetching */
  const isFetching = true;

  const display = isFetching ? "display" : "none";

  return (
    <Spinner
      top="50%"
      left="50%"
      /*  transform="translate(-50%, -50%)" */
      zIndex="9999"
      speed="2.5s"
      thickness="4px"
      color="blue"
      emptyColor="yellow"
      role="status"
      size="xl"
    >
      <Text>Loading...</Text>
    </Spinner>
  );
};
