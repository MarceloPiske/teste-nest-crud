import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PersonModel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 120 })
  name: string;

  @Column('int')
  age: number;

  @Column('float')
  altura: number;

  @Column({ length: 150 })
  cidade: string;
}
