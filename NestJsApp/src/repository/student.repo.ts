import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { student, studentDocument } from 'src/schemas/student.schema';

@Injectable()
export class studentRepo {
    constructor(
        @InjectModel(student.name)
        private readonly studentModel: Model<studentDocument>) {}

    async create(data): Promise<student> {
        return new this.studentModel(data).save();
    }

    async findAll(): Promise<student[]> {
        return this.studentModel.find({})
            .exec();
    }

    async update(studentId, data): Promise<student> {
        const filter = { _id: studentId };
        return this.studentModel.findOneAndUpdate(filter, data);
    }

    async delete(studentId): Promise<student> {
        const filter = { _id: studentId };
        return this.studentModel.findByIdAndDelete(studentId);
    }
}