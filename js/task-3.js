function checkForSpam(message) {
    const lowerMessage = message.toLowerCase();
    const lowerSpam = 'spam'.toLowerCase();
    const lowerSale = 'sale'.toLowerCase();

    if (lowerMessage.includes(lowerSpam) || lowerMessage.includes(lowerSale)) {
        return true;
    } else {
        return false;
    }
}




