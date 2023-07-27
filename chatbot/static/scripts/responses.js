function getBotResponse(input) {
    //rock paper scissors
    if (input == "stone") {
        return "paper";
    } else if (input == "paper") {
        return "sissors";
    } else if (input == "sissors") {
        return "stone";
    }

    // Simple responses
    if (input == "hey") {
        return "Hello there! How's it going?";
    }else if (input == "fine") {
        return "Do you want to play stone-paper-sissors ?";
    }else if (input == "yes") {
        return "Enter your choice. Once you want to end the game, type END";
    } else if (input == "end") {
        return "Goodbye!Thank you for visiting!";
    } else {
        return "Try asking something else!";
    }
}