import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import { useNavigate } from "react-router-dom";
import facts from "./Facts";

const theme = {
    background: "#F4F5F6",
    fontFamily: "sans-serif",
    headerBgColor: "#03719C",
    headerFontColor: "#fff",
    headerFontSize: "16px",
    botBubbleColor: "#03719C",
    botFontColor: "#fff",
    userBubbleColor: "#03719C",
    userFontColor: "#fff",
};

const steps = [
    {
        id: "1",
        message: "Hey! I am Estell a bot, how are you feeling today",
        trigger: "expressions",
    },
    {
        id: "expressions",
        options: [
            { value: "veryHappy", label: "😀", trigger: "veryHappy" },
            { value: "happy", label: "🙂", trigger: "happy" },
            { value: "normal", label: "😐", trigger: "normal" },
            { value: "sad", label: "☹️", trigger: "sad" },
            { value: "angry", label: "😡", trigger: "angry" },
        ],
    },
    {
        id: "veryHappy",
        message: "Great Me too 😍",
        trigger: "help",
    },
    {
        id: "happy",
        message:
            "Hmm, Looks Like You are in good mood. Well I can make it great 😊",
        trigger: "help",
    },
    {
        id: "normal",
        message:
            "Ooh, Are You Confused Sir ? Don't Worry I am here to Assist You 👻",
        trigger: "help",
    },
    {
        id: "sad",
        message:
            "I am sorry to here that 😟 . Well i would suggest to play with our AR models. You will feel better.🙂",
        trigger: "help",
    },
    {
        id: "angry",
        message:
            "😐 Oops, Did i do something wrong....But wait i am a bot i can't do that..🤥.  Well i suggest you to relax your mind, play some games,  watch some movies  and eat a lot of healthy tasty food just like me..😝",
        trigger: "help",
    },
    {
        id: "help",
        message: "How can I help you?",
        trigger: "options",
    },
    {
        id: "options",
        options: [
            { value: "services", label: "Services", trigger: "services" },
            {
                value: "funFact",
                label: "Give a random fact",
                trigger: "funFact",
            },
            { value: "exit", label: "Exit", trigger: "end" },
        ],
    },
    {
        id: "services",
        message: "Select one of these services",
        trigger: "selectServices",
    },
    {
        id: "selectServices",
        options: [
            { value: "Home", label: "Home", trigger: "selectedService" },
            { value: "Donate", label: "Donate", trigger: "selectedService" },
            { value: "Map", label: "Map", trigger: "selectedService" },
            { value: "goBack", label: "go back", trigger: "options" },
        ],
    },
    {
        id: "selectedService",
        message: "opened {previousValue}",
        trigger: "end",
    },
    {
        id: "moreHelp",
        message: "Do you meed more help?",
        trigger: "moreHelp-yes",
    },
    {
        id: "moreHelp-yes",
        options: [
            { value: "yes", label: "Yes", trigger: "help" },
            { value: "no", label: "No", trigger: "end" },
        ],
    },
    {
        id: "funFact",
        component: <FunFact />,
        asMessage: true,
        trigger: "moreHelp",
    },
    {
        id: "end",
        message: "Thank you, see you again!",
        end: true,
    },
];

function FunFact() {
    const randInt = Math.floor(Math.random() * 14);
    return <div>{facts[randInt]}</div>;
}

function Chatbot() {
    const [opened, setOpened] = useState(false);
    const [key, setKey] = useState(Math.random());
    const navigate = useNavigate()

    const handleEnd = ({ steps, values }) => {
        switch (values[values.length - 1]) {
            case "Home":
                navigate({ pathname: '/' })
                break;
            case "Donate":
                navigate({ pathname: '/donate' })
                break;
            case "Map":
                navigate({ pathname: '/map' })
                break;
            default:
                break;
        }
        setTimeout(() => {
            setKey(Math.random());
            setOpened(false);
        }, 1000);
    };

    return (
        <div className="chatbot">
            <ThemeProvider theme={theme}>
                <ChatBot
                    key={key}
                    steps={steps}
                    handleEnd={handleEnd}
                    opened={opened}
                    headerTitle="Estell"
                    botAvatar={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5xhEeeLUqbF_fvOqciKVKBHT-JHonAcKKF2gcUV738X6XSWPdEEHaE7nUEdrr629bE40&usqp=CAU"}
                    avatarStyle={{ borderRadius: "100%" }}
                    floating={true}
                    floatingIcon={
                        <img
                            src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5xhEeeLUqbF_fvOqciKVKBHT-JHonAcKKF2gcUV738X6XSWPdEEHaE7nUEdrr629bE40&usqp=CAU"}
                            style={{ width: "70%" }}
                            alt="chatBot icon"
                        />
                    }
                    floatingStyle={{
                        backgroundColor: "#ffffff",
                        width: "60px",
                        boxShadow: "2px 2px 20px -8px #111",
                    }}
                />
            </ThemeProvider>
        </div>
    );
}

export default Chatbot;
