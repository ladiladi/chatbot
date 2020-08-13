class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }

    greet() {
        const greetingMessage = this.createChatBotMessage("Hello there.");
        this.updateChatbotState(greetingMessage)
    }

    handleProjects = () => {
        const message = this.createChatBotMessage(
          "Here are some of my projects:",
          {
            widget: "projectLinks",
          }
        );
    
        this.updateChatbotState(message);
    };
    handleWorkExperience = () => {
      const message = this.createChatBotMessage(
        "I am currently working at Enfo Service Desk. I have worked there for three years. More about Enfo's services: https://www.enfogroup.com/"
      );
      this.updateChatbotState(message);
    }
    handleContact = () => {
      const message = this.createChatBotMessage(
        "Here are my contact information:",
        {
          widget: "contactLinks",
        }
      );
      this.updateChatbotState(message);
    }
    handleCourses = () => {
      const message = this.createChatBotMessage(
        "My completed studies include topics like Software Engineering, Artificial Intelligence, User-Centered Design and Smart Learning Environments."
      );
      this.updateChatbotState(message);
    }

    handlePersonal = () => {
      const message = this.createChatBotMessage(
        "I have two cats with my wife and I enjoy sports, especially martial arts."
      );
      this.updateChatbotState(message);
    }

    updateChatbotState(message) {
        this.setState(prevState => ({
            ...prevState, messages: [...prevState.messages, message]
        }))
    }
}

export default ActionProvider;
