import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from "react-simple-chatbot";

const theme = {
    background: '#f5f8fb',
    headerBgColor: '#0070c0',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#0070c0',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
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
        bubbleStyle={{maxWidth: "75%"}}
        steps={[
            {
                id: "start",
                message:"Hi! Welcome to the SHPE UTDallas chapter website! In order to better assist you, are you a: ",
                trigger: "company_or_student"
            },
            {
                id: "company_or_student",
                options: [ 
                    { value: "Student", label: "Student", trigger: "student" },
                    { value: "Company", label: "Professional/Recruiter/Company"}
                ]
            },
            {
                id: "student",
                message: "Thats awesome! Are you a Freshman, Sophomore, Junior, Senior, or Graduate Student?",
                trigger: "student_questions"
            },
            {
                id: "student_questions",
                options: [
                    { value: "Freshman", label: "Freshman", trigger: "freshman"},
                    { value: "Sophomore", label: "Sophomore"},
                    { value: "Junior", label: "Junior"},
                    { value: "Senior", label: "Senior"},
                    { value: "Graduate Student", label: "Graduate Student"},
                ]
            },
            {
                id: "freshman",
                message: "Welcome to UT Dallas! We'd love to have you join our Freshman round table! [put more info here]"
            },
            
            
            ]}
    />
  </ThemeProvider>
  )
}