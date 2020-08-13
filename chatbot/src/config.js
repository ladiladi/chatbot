import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import InformationOptions from "./components/InformationOptions/informationOptions";
import LinkList from "./components/LinkList/LinkList";

const config = {
    botName: "InfoBot",
    initialMessages: [
        createChatBotMessage("Hi, I'm here to help. What do you want to know?", {
        widget: "informationOptions",
    }),
    ],
    customStyles: {
        botMessageBox: {
            backgroundColor: "#376B7E",
        },
        chatButton: {
            backgroundColor: "#376B7E",
        },
    },
    widgets: [
        {
            widgetName: "informationOptions",
            widgetFunc: (props) => <InformationOptions {...props} />,
        },
        {
            widgetName: "projectLinks",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "React Recipe App",
                        url: "https://ladiladi.github.io/react-recipe-app/",
                        id: 1,
                    },
                    {
                        text: "React Quiz App",
                        url: "https://ladiladi.github.io/react-quiz-app/",
                        id: 2,
                    },
                    {
                        text: "Shopping cart",
                        url: "https://ladiladi.github.io/js-shopping-cart/",
                        id: 3,
                    },
                ]
            }
        },
        {
            widgetName: "contactLinks",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Email",
                        url: "mailto:tony.valkama@outlook.com",
                        id: 1,  
                    },
                    {
                        text: "LinkedIn",
                        url: "https://linkedin.com/in/tony-v-55887b88",
                        id: 2,  
                    },
                    {
                        text: "GitHub",
                        url: "https://github.com/ladiladi",
                        id: 3,  
                    },
                ]
            }
        },

    ],
}

export default config;