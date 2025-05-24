import Table from "./classes/Table";
import { RawTable, RawTableRow } from "./types/RawTable";
import * as fs from "fs";

class TableRepo {
  private tables: Table[];

  constructor(tables: RawTable[]) {
    let lastId: number = 1;

    this.tables = tables.map((table, index) => {
      const id = lastId + 1;
      // const name = table.name;
      const name = table.name;

      //? Meg nemtudom hogy talalom ki
      const x = 40;
      const y = 40 + index * 100;
      const width = this.calculateWidth(table.rows);
      const height = 40 + 30 * table.rows.length;

      const rows =
        table.rows.map((row, rowIndex) => {
          return {
            row: {
              width: width,
            },
            box: {
              primaryKey: row.primaryKey,
            },
            value: {
              type: row.type,
              allowNull: row.allowNull,
              autoIncrement: row.autoIncrement,
              defaultValue: row.defaultValue,
            },
          };
        }) || [];
      const newTable = new Table(id, name, 1, x, y, width, height, rows);
      lastId = newTable.getLastId();
      return newTable;
    });
  }

  private calculateWidth(rows: RawTableRow[]): number {
    let longestRow = 0;
    rows.forEach((row) => {
      let rowWidth = row.name.length;
      if (!row.allowNull) {
        rowWidth += 8;
      }
      if (row.autoIncrement) {
        rowWidth += 14;
      }
      if (row.defaultValue) {
        rowWidth += row.defaultValue.length + 9;
      }
      if (rowWidth > longestRow) {
        longestRow = rowWidth;
      }
    });
    console.log("Longest row: ", longestRow);
    return longestRow * 25;
  }

  public generateXml(): void {
    const xml = this.tables.map((table) => table.getXml()).join("");
    fs.writeFileSync(
      "drawiofile.drawio",
      `<mxfile host="65bd71144e">
    <diagram id="03F6VEOOzAswHKV4Qcjv" name="Page-1">
        <mxGraphModel dx="305" dy="475" grid="1" gridSize="10" guides="1" tooltips="1" connect="1" arrows="1" fold="1" page="1" pageScale="1" pageWidth="1100" pageHeight="850" math="0" shadow="0">
            <root>
                <mxCell id="0"/>
                <mxCell id="1" parent="0"/>
              ${xml}
            </root>
        </mxGraphModel>
    </diagram>
</mxfile>`
    );
  }

  public writeToConsole(): void {
    this.tables.forEach((table) => {
      table.toConsole();
    });
  }
}

export default TableRepo;
