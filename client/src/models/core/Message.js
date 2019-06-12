
class Message {
  constructor(properties) {
    this.userId = properties.userId;
    this.messageText = properties.messageText;
    this.isPending = properties.isPending;
    this.isPlaceholder = properties.isPlaceholder;
  }
}

export default Message;
