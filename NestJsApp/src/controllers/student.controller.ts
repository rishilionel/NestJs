import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { studentDto } from '../dto/student-dto.dto';
import { studentService } from '../services/student.service';


@Controller('student')
export class studentController {
    constructor(private readonly studentService: studentService) { }

    @Post()
    async create(@Body() studentDto: studentDto) {
        const res = this.studentService.create(studentDto);
        return res;
    }

    @Get()
    async findAll() {
        return this.studentService.findAll();
    }

    @Post('/:id')
    update(@Param('id') id: string, @Body() studentDto: studentDto) {
        return this.studentService.update(id, studentDto);
    }

    @Delete('/:id')
    delete(@Param('id') id: string) {
        return this.studentService.delete(id);
    }
}