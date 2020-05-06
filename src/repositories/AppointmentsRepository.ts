import { EntityRepository, Repository } from 'typeorm';
import Appointment from '../models/Appointment';

// Vai ser responsável por fazer operações no banco de dados
// Aqui vai fazer tudo que tem relação com mudanças do repositório

// So foi criado para adicionar a funcao findByDate se nao houvesse a funcao
// nao era necessario criar esse repo
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
