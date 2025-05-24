import Row from "./Row";

class Table {
  private id: number;
  private name: string;
  private parent: number;
  private x: number;
  private y: number;
  private width: number;
  private height: number;
  private rows: Row[];

  constructor(
    id: number,
    name: string,
    parent: number,
    x: number,
    y: number,
    width: number,
    height: number,
    rows: {
      row: {
        width: number;
      };
      box: {
        primaryKey: boolean;
      };
      value: {
        type: string;
        allowNull: boolean;
        autoIncrement: boolean;
        defaultValue: string;
      };
    }[]
  ) {
    this.id = id;
    this.name = name;
    this.parent = parent;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.rows = rows.map((row, index) => {
      const newRowId = id + index * 3 + 1;

      return new Row(
        {
          id: newRowId,
          parent: this.id,
          y: index * 30 + 40, // 40 is the height of the table header
          ...row.row,
        },
        row.box,
        row.value
      );
    });
  }

  public getLastId(): number {
    return this.id + this.rows.length * 3;
  }

  public getXml(): string {
    const rowsXml = this.rows.map((row) => row.getXml()).join("");
    return `
    <mxCell
    id="${this.id}"
    value="${this.name}"
    style="shape=table;
    startSize=30;
    container=1;
    collapsible=0;
    childLayout=tableLayout;
    fixedRows=1;
    rowLines=0;
    fontStyle=0;
    strokeColor=default;
    fontSize=16;"
    parent="${this.parent}"
    vertex="1">
      <mxGeometry x="${this.x}" y="${this.y}" width="${this.width}" height="${this.height}" as="geometry"/>
    </mxCell>
    ${rowsXml}
    `;
  }

  public toConsole() {
    console.log(`Table ${this.id}: ${this.name}`);
    for (const row of this.rows) {
      row.toConsole();
    }
  }
}

export default Table;
