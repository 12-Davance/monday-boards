import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BoardSchema } from '../models/boards.model';
import { BoardsService } from './boards.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Board', schema: BoardSchema }]),
  ],
  providers: [BoardsService],
  controllers: [BoardsController],
  exports: [BoardsService],
})
export class BoardsModule {}
