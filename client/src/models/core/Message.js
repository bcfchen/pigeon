class Message {
  constructor(properties) {
    this.userId = properties.userId;
    this.messageText = properties.messageText;
    this.isPending = properties.isPending;
    this.isPlaceholder = properties.isPlaceholder;
  }

  static toMessages(messageDataObjects) {
    return messageDataObjects.map(obj => new Message(obj));
  }
}

export default Message;
