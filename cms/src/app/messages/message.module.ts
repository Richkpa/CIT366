export class Message {
  public Id: string;
  public subject: string;
  public msgText: string;
  public sender: string;

  constructor(Id: string, subject: string, msgText: string, sender: string) {
    this.Id = Id;
    this.subject = subject;
    this.msgText = msgText;
    this.sender = sender;
  }
}
