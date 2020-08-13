class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
        const lowerCaseMessage = message.toLowerCase();

        if (lowerCaseMessage.includes("hello")) {
            this.actionProvider.greet();
        }

        if (lowerCaseMessage.includes("projects")) {
            this.actionProvider.handleProjects();
        }

        if (lowerCaseMessage.includes("contact")) {
            this.actionProvider.handleContact();
        }

        if (lowerCaseMessage.includes("courses")) {
            this.actionProvider.handleCourses();
        }

        if (lowerCaseMessage.includes("about") || lowerCaseMessage.includes("more")) {
            this.actionProvider.handlePersonal();
        }
    }
}

export default MessageParser;

  