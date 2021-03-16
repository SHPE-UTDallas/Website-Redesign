import React from "react";
import { ThemeProvider } from "styled-components";
import ChatBot from "react-simple-chatbot";

const theme = {
  background: "#f5f8fb",
  headerBgColor: "#0070c0",
  headerFontColor: "#fff",
  headerFontSize: "15px",
  botBubbleColor: "#0070c0",
  botFontColor: "#fff",
  userBubbleColor: "#fff",
  userFontColor: "#4a4a4a",
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        floating={true}
        opened={true}
        botAvatar="/imgs/Dora.png"
        headerTitle="SHPE UTD Chatbot"
        floatingIcon="/imgs/SHPE_Logo.png"
        bubbleStyle={{ maxWidth: "75%" }}
        steps={[
          {
            id: "start",
            message:
              "Hi! Welcome to the SHPE UTDallas chapter website! In order to better assist you, are you a: ",
            trigger: "company_or_student",
          },
          {
            id: "company_or_student",
            options: [
              { value: "Student", label: "Student", trigger: "student" },
              { value: "Company", label: "Professional/Recruiter/Company" },
            ],
          },
          {
            id: "student",
            message: "What are you looking for?",
            trigger: "student_questions",
          },
          {
            id: "student_questions",
            options: [
              {
                value: "Getting involved",
                label: "getting_involved",
                trigger: "grade_level_question_getting_involved",
              },
              {
                value: "Paying membership fees",
                label: "paying_membership_fees",
                trigger: "paying_membership_fees",
              },
            ],
          },
          {
            id: "get_involved",
            message:
              "Thats awesome! Are you a Freshman, Sophomore, Junior, Senior, or Graduate Student?",
            trigger: "grade_level_question_getting_involved",
          },
          {
            id: "grade_level_question_getting_involved",
            options: [
              {
                value: "Freshman",
                label: "Freshman",
                trigger: "freshman_getting_involved",
              },
              { value: "Sophomore", label: "Sophomore" },
              { value: "Junior", label: "Junior" },
              { value: "Senior", label: "Senior" },
              { value: "Graduate Student", label: "Graduate Student" },
            ],
          },
          {
            id: "freshman_getting_involved",
            message:
              "Welcome to UT Dallas! We'd love to have you join our Freshman round table! You get to participate in officer meetings and pitch in. Links are sent in our newsletter",
            trigger: "newsletter_signup",
          },
          {
            id: "newsletter_signup",
            message:
              "Make sure to sign up for the newsletter! (Link is in the homepage)",
          },
          { id: "paying_membership_fees", message: "To pay membership fees follow this link: https://docs.google.com/forms/d/e/1FAIpQLScZIFOctfh9P_OKbf4t1OBrv4eZnqnpNoQ0ppXPWEgKTqZAKA/viewform", },
        ]}
      />
    </ThemeProvider>
  );
}
