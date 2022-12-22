import { ReactElement } from "react";
import { Spinner, Text } from "@chakra-ui/react";
import { useIsFetching } from "@tanstack/react-query";

export const Loading = (): ReactElement => {
  /* returns a number of how many things are currently fetching */
  const isFetching = useIsFetching();

  const display = isFetching ? "display" : "none";

  return (
    <Spinner
      position="fixed"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      zIndex="9999"
      speed="0.7s"
      thickness="4px"
      size="xl"
      color="#339CD8"
      emptyColor="#D2DEE5"
      role="status"
      display={display}
    >
      <Text display="none">Loading...</Text>
    </Spinner>
  );
};
