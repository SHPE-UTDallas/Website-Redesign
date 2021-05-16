import React from "react";
import { ThemeProvider } from "styled-components";
import ChatBot from "react-simple-chatbot";
import Link from "next/link";
import OfficerJson from "../data/Officer.json";
import OfficerIcon from "../components/OfficerIcon";
import { triggerAsyncId } from "node:async_hooks";

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

  const officerIcon = (title: string) => {
    let officerName = "";
    let officerEmail = "";
    let imgPath = "";

    OfficerJson.map((obj) => {
      const { name, position, email, image } = obj;
      if (position === title) {
        officerName = name;
        officerEmail = email;
        imgPath = image;
      }
    });
    return (
      <div>
        <OfficerIcon
          name={officerName}
          position={title}
          imgPath={imgPath}
          email={officerEmail}
        />
      </div>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <ChatBot
        floating={true}
        opened={true}
        botAvatar="/imgs/SHPE_Logo.png"
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
              {
                value: "Professional",
                label: "Professional",
                trigger: "professional",
              },
              { value: "Recruiter", label: "Recruiter", trigger: "recruiter" },
              { value: "Company", label: "Company", trigger: "company" },
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
                trigger: "get_involved",
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
              "Thats awesome! The best way to stay involved is to subscribe to our newletter. Attend enough events and you could get sponsored for the SHPE National Convention. Are you a Freshman, Sophomore, Junior, Senior, or Graduate Student?",
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
              "Welcome to UT Dallas! We'd love to have you join our Freshman round table! You get to participate in officer meetings and pitch in. Links are sent in our newsletter. You can also apply to become a mentee. Clink the button below to join: ",
            trigger: "newsletter_signup",
          },
          {
            id: "sophomore_getting_involved",
            message:
              "Consider applying to become a mentee. We have mentors with great experience that can help you in your professional, academic, or personal life. There is more information in our newsletter, click the link below to join: ",
            trigger: "newsletter_signup",
          },
          {
            id: "junior_getting_involved",
            message:
              "Consier becoming a mentor and helping out our younger members. There is more information in our newsletter, click the link below to join: ",
            trigger: "newsletter_signup",
          },
          {
            id: "senior_getting_involved",
            message:
              "We host a variety of events targeted at helping our members find jobs. Checkout our newsletter for more detailed information: ",
            trigger: "newsletter_signup",
          },
          {
            id: "graduate_getting_involved",
            message:
              "We host a variety of events targeted specifically for our Graduate members. There is more information in our newsletter, click the link below to join: ",
            trigger: "newsletter_signup",
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
          {
            id: "professional",
            message:
              "Thank you for visiting our website! We welcome professionals to come and talk to our members as well as attend our events. Contact our corporate liaison for more information:",
            trigger: "corporate_liaison",
          },
          {
            id: "recruiter",
            message:
              "Thank you for visiting our website! Sponsor companies have access to our ResumeBook website, a collection of all of our member's resumes. Checkout this demo of our ResumeBook website. For full access to our real database of members, please contact our corporate liaison.",
            trigger: "resume_book_link",
          },
          {
            id: "company",
            message:
              "Thank you for visiting our website! We offer a variety of services for our sponsors, including access to our ResumeBook website. Please contact our corporate liaison for more information about the benefits of being a sponsor as well as on how to become one: ",
            trigger: "resume_book_link",
          },
          {
            id: "corporate_liaison",
            component: officerIcon("Corporate Liason"),
          },
          {
            id: "resume_book_demo",
            message:
              "Checkout this demo of our ResumeBook website. For full access to our real database of members, please contact our corporate liaison: ",
            trigger: "resume_book_link",
          },
          {
            id: "resume_book_link",
            component: button(
              "ResumeBook Demo",
              "https://shpe-utdallas.github.io/ResumeBook/",
              true
            ),
            trigger: "corporate_liaison",
          },
        ]}
      />
    </ThemeProvider>
  );
}
