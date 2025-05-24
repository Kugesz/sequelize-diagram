class Box {
  private id: number;
  private primaryKey: boolean;
  private parent: number;

  constructor(id: number, primaryKey: boolean, parent: number) {
    this.id = id;
    this.primaryKey = primaryKey;
    this.parent = parent;
  }

  public getXml(): string {
    return `
    <mxCell
      id="${this.id}"
      value="${this.primaryKey ? "PK" : ""}"
      style="shape=partialRectangle;
      html=1;
      whiteSpace=wrap;
      connectable=0;
      fillColor=none;
      top=0;
      left=0;
      bottom=0;
      right=0;
      overflow=hidden;
      pointerEvents=1;
      strokeColor=inherit;
      fontSize=16;"
      parent="${this.parent}"
      vertex="1">
      <mxGeometry width="40" height="30" as="geometry">
        <mxRectangle width="40" height="30" as="alternateBounds"/>
      </mxGeometry>
    </mxCell>`;
  }

  public getPK(): string {
    return this.primaryKey ? "PK" : "";
  }
}

export default Box;
