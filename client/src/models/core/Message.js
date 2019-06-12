class Message {
  constructor(properties) {
    this.userId = properties.userId;
    this.messageText = properties.messageText;
    this.isPending = properties.isPending;
    this.isPlaceholder = properties.isPlaceholder;
  }

  static toMessages(messageDataObjects) {
    const msgs = messageDataObjects.map(obj => this.toMessage(obj));
    return msgs;
  }

  static toMessage(messageDataObject) {
    return new Message(messageDataObject);
  }
}

export default Message;
