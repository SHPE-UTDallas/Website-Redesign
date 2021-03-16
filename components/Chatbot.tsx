import React from "react";
import { ThemeProvider } from "styled-components";
import ChatBot from "react-simple-chatbot";
import Link from "next/link";

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
  const button = (label: string, link: string, newTab = false) => {
    return (
      <div>
        {newTab ? (
          <a href={link} target="_blank">
            <button className="button is-primary center">{label}</button>
          </a>
        ) : (
          <Link href={link}>
            <button className="button is-primary center">{label}</button>
          </Link>
        )}
      </div>
    );
  };

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
                label: "Getting involved",
                trigger: "grade_level_question_getting_involved",
              },
              {
                value: "Paying membership fees",
                label: "Paying membership fees",
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
              {
                value: "Sophomore",
                label: "Sophomore",
                trigger: "sophomore_getting_involved",
              },
              {
                value: "Junior",
                label: "Junior",
                trigger: "junior_getting_involved",
              },
              {
                value: "Senior",
                label: "Senior",
                trigger: "senior_getting_involved",
              },
              {
                value: "Graduate Student",
                label: "Graduate Student",
                trigger: "graduate_getting_involved",
              },
            ],
          },
          {
            id: "freshman_getting_involved",
            message:
              "Welcome to UT Dallas! We'd love to have you join our Freshman round table! You get to participate in officer meetings and pitch in. Links are sent in our newsletter. Clink the button below to join: ",
            trigger: "newsletter_signup",
          },
          {
              id: "sophomore_getting_involved",
              message: "sophomore"
          },
          {
              id: "junior_getting_involved",
              message: "junior"
          },
          {
              id: "senior_getting_involved",
              message: "senior"
          },
          {
              id: "graduate_getting_involved",
              message: "graduate"
          },
          {
            id: "newsletter_signup",
            component: button("Join Newsletter", "/newsletter"),
          },
          {
            id: "paying_membership_fees",
            message: "Click the button below to pay membership fees:",
            trigger: "pay_fees_button",
          },
          {
            id: "pay_fees_button",
            component: button(
              "Pay Fees",
              "https://docs.google.com/forms/d/e/1FAIpQLScZIFOctfh9P_OKbf4t1OBrv4eZnqnpNoQ0ppXPWEgKTqZAKA/viewform",
              true
            ),
          },
        ]}
      />
    </ThemeProvider>
  );
}
