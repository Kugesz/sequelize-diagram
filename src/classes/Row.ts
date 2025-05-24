import Box from "./Box";
import Value from "./Value";

class Row {
  private id: number;
  private y: number;
  private width: number;
  private parent: number;
  private box: Box;
  private value: Value;

  constructor(
    row: {
      id: number;
      y: number;
      width: number;
      parent: number;
    },
    box: {
      primaryKey: boolean;
    },
    value: {
      type: string;
      allowNull: boolean;
      autoIncrement: boolean;
      defaultValue: string;
    }
  ) {
    this.id = row.id;
    this.y = row.y;
    this.width = row.width;
    this.parent = row.parent;
    this.box = new Box(row.id + 1, box.primaryKey, row.id);
    this.value = new Value(
      row.id + 2,
      value.type,
      value.type,
      value.allowNull,
      value.autoIncrement,
      value.defaultValue,
      row.id,
      row.width - 40 // 30 is the width of the box
    );
  }

  public getXml(): string {
    const boxXml = this.box.getXml();
    const valueXml = this.value.getXml();
    return `
    <mxCell
      id="${this.id}"
      value=""
        style="
        shape=tableRow;
        horizontal=0;
        startSize=0;
        swimlaneHead=0;
        swimlaneBody=0;
        top=0;
        left=0;
        bottom=0;
        right=0;
        collapsible=0;
        dropTarget=0;
        fillColor=none;
        points=[[0,0.5],[1,0.5]];
        portConstraint=eastwest;
        strokeColor=inherit;
        fontSize=16;"
        parent="${this.parent}"
        vertex="1">
      <mxGeometry y="${this.y}" width="${this.width}" height="30" as="geometry"/>
    </mxCell>
    ${boxXml}
    ${valueXml}`;
  }

  public toConsole(): void {
    console.log(`| ${this.box.getPK()} | ${this.value.getType()} |`);
  }
}

export default Row;
