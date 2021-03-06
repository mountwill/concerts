/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { Flex, Box } from "@rebass/grid/emotion";
import Head from "next/head";
import Header from "../components/Header";

export default ({ children }) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <Box
      css={css`
        position: fixed;
      `}
      width={1}
    >
      <Header />
    </Box>
    <Flex
      css={css`
        height: 100vh;
      `}
      alignItems={"stretch"}
      flexDirection={"row"}
      flexWrap={"wrap"}
    >
      {children}
    </Flex>
  </div>
);
