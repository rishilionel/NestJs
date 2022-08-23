import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { studentController } from '../controllers/student.controller';
import { studentService } from '../services/student.service';
import { studentRepo } from '../repository/student.repo';
import { student, studentSchema } from '../schemas/student.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: student.name, schema: studentSchema }])
    ],
    controllers: [studentController],
    providers: [studentService, studentRepo],
    exports: [studentService, studentRepo]
  })
  export class studentModule { }