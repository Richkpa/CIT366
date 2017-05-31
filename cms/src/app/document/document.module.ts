export class Document {
  public Id: string;
  public name: string;
  public description: string;
  public Url: string;
  public children: string;

  constructor(Id: string, name: string, description: string, Url: string, children: string) {
    this.Id = Id;
    this.name = name;
    this.description = description;
    this.Url = Url;
    this.children = children;
  }
}
