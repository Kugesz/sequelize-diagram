class Value {
  private id: number;
  private name: string;
  private type: string;
  private allowNull: boolean;
  private autoIncrement: boolean;
  private defaultValue: string;
  private parent: number;
  private width: number;

  constructor(
    id: number,
    name: string,
    type: string,
    allowNull: boolean,
    autoIncrement: boolean,
    defaultValue: string,
    parent: number,
    widht: number
  ) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.allowNull = allowNull;
    this.autoIncrement = autoIncrement;
    this.defaultValue = defaultValue;
    this.parent = parent;
    this.width = widht;
  }

  public getXml(): string {
    const createValue = () => {
      let parts = [this.type];

      parts.push(this.allowNull ? "" : "NOT NULL");
      if (this.autoIncrement) parts.push("AUTO INCREMENT");
      if (this.defaultValue) parts.push(`DEFAULT ${this.defaultValue}`);

      return parts.join(" ");
    };

    return `
      <mxCell
        id="${this.id}"
        value="${createValue()}"
        style="
          shape=partialRectangle;
          html=1;
          whiteSpace=wrap;
          connectable=0;
          fillColor=none;
          top=0;
          left=0;
          bottom=0;
          right=0;
          align=left;
          spacingLeft=6;
          overflow=hidden;
          strokeColor=inherit;
          fontSize=16;"
          parent="${this.parent}"
          vertex="1">
            <mxGeometry x="40" width="${this.width}" height="30" as="geometry">
              <mxRectangle width="${
                this.width
              }" height="30" as="alternateBounds"/>
            </mxGeometry>
       </mxCell>`;
  }

  public getType(): string {
    return this.type;
  }
}

export default Value;
