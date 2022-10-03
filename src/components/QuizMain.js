import { Box, Divider, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { QUESTION_TAB_PANEL_DATA } from "../data/constants";
import QuestionStack from "./QuestionStack";
import QuizQuestions from "./QuizQuestions";

function QuizMain({ temp_data }) {
    return (
        <Flex
            height={800}
            width={1400}
            mt={6}
            direction={"column"}
            bg={"dark"}
            borderRadius={"md"}
        >
        <Flex
            width={"100%"}
            height={75}
            bg={"primary"}
            align={"center"}
            borderRadius={"md"}
        >
            <Heading ml={2}>Questions</Heading>
        </Flex>
        <Divider
            orientation="horizontal"
            bg={"dark"}
            height={"4px"}
            borderRadius={"md"}
        />
        <Box width={"100%"} height={"100%"} p={2}>
            <QuizQuestions height={"54px"} data={temp_data} />
        </Box>
        </Flex>
    );
}

export default QuizMain;
