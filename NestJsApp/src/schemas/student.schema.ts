import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type studentDocument = student & Document;

@Schema()
export class student {
   
   @Prop()
   name: string; 
   
   @Prop()
   age: int; 
   
}

export const studentSchema = SchemaFactory.createForClass(student);