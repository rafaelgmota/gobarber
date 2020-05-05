import { EntityRepository, Repository } from 'typeorm';
import Appointment from '../models/Appointment';

// Vai ser responsável por fazer operações no banco de dados
// Aqui vai fazer tudo que tem relação com mudanças do repositório
@EntityRepository(Appointment)
class AppointmentsRepository extends Repository<Appointment> {
  public async findByDate(date: Date): Promise<Appointment | null> {
    const findAppointment = await this.findOne({
      where: { date },
    });

    return findAppointment || null;
  }
}

export default AppointmentsRepository;
