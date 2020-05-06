import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';
import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

interface Request {
  date: Date;
  provider_id: string;
}

// Dependency Inversion (SOLID)
// Encapsular as regras de negócio

class CreateAppointmentService {
  public async execute({ date, provider_id }: Request): Promise<Appointment> {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);
    const appointmentDate = startOfHour(date);
    const findAppointmentInSameDate = await appointmentsRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentInSameDate) {
      throw Error('This appointment is already booked');
    }

    // Create não salva, só criar a entidade
    const appointment = appointmentsRepository.create({
      provider_id,
      date: appointmentDate,
    });

    // como create nao salva, é precisa usar o save
    await appointmentsRepository.save(appointment);

    return appointment;
  }
}

export default CreateAppointmentService;
