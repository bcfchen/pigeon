class Message {
  constructor(properties) {
    this.id = properties.id;
    this.userId = properties.userId;
    this.messageText = properties.messageText;
    this.isPending = properties.isPending;
    this.isPlaceholder = properties.isPlaceholder;
    this.isMyMessage = properties.isMyMessage;
    this.createdAt = new Date();
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
