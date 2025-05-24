export type RawTable = {
  name: string;
  rows: RawTableRow[];
};

export type RawTableRow = {
  name: string;
  type: string;
  sequelizeType: object;
  allowNull: boolean;
  primaryKey: boolean;
  autoIncrement: boolean;
  defaultValue: string | undefined;
};
