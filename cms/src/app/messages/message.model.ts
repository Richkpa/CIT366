export class Message {
  public id: string;
  public subject: string;
  public msgText: string;
  public sender: string;

  constructor(Id: string, subject: string, msgText: string, sender: string) {
    this.id = Id;
    this.subject = subject;
    this.msgText = msgText;
    this.sender = sender;
  }
}
