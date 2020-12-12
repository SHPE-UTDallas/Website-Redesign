import React from 'react';
import ChatBot from "react-simple-chatbot";
export default function App() {
  return (
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
  )
}