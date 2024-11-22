import {
  Table,
  Column,
  Model,
  DataType,
  PrimaryKey,
  AutoIncrement,
  CreatedAt,
  DeletedAt,
} from 'sequelize-typescript';

@Table({
  timestamps: true,
  paranoid: true,
})
export class Product extends Model<Product> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.STRING)
  name: string;

  @Column(DataType.TEXT)
  description: string;

  @Column(DataType.STRING)
  thumbnail_url: string;

  @Column(DataType.FLOAT)
  price: string;

  @CreatedAt
  @Column({ type: DataType.DATE, allowNull: false })
  createdAt: Date;

  @DeletedAt
  @Column({ type: DataType.DATE, allowNull: true })
  deletedAt?: Date;
}
