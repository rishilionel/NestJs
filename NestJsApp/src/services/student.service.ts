import { Injectable } from '@nestjs/common';
import { studentRepo } from '../repository/student.repo';
import { student } from '../schemas/student.schema';

@Injectable()
export class studentService {
    constructor(
        private readonly studentRepo: studentRepo
    ) { }

    async findAll(): Promise<student[]> {
        return this.studentRepo.findAll();
    }

    async create(data): Promise<student> {
        data.createddate = new Date();
        return this.studentRepo.create(data);
    }

    async update(studentId, data): Promise<student> {
        return this.studentRepo.update(studentId, data);
    }

    async delete(studentId): Promise<student> {
        return this.studentRepo.delete(studentId);
    }
}