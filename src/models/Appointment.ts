import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// Mapeia para a tabela appointment
@Entity('appointments')
class Appointment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  provider: string;

  @Column('timestamp with time zone')
  date: Date;
}

export default Appointment;
