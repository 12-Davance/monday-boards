import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Board } from '../types/board';
import { SaveBoardDTO } from './board.dto';

@Injectable()
export class BoardsService {
  constructor(
    @InjectModel('Board') private readonly boardModel: Model<Board>,
  ) {}

  async getBoards(): Promise<Board[]> {
    return this.boardModel.find();
  }

  async findBoards(query): Promise<Board[]> {
    const { searchValue, start, end } = query;
    let queryObject = {};

    if (searchValue) {
      queryObject['$or'] = [
        { id: new RegExp(searchValue, 'i') },
        { name: new RegExp(searchValue, 'i') },
        { board_kind: new RegExp(searchValue, 'i') },
        { state: new RegExp(searchValue, 'i') },
      ];
    }

    if (start && end) {
      queryObject['$and'] = [
        {
          savedAt: {
            $gte: new Date(start),
          },
        },
        {
          savedAt: {
            $lte: new Date(end),
          },
        },
      ];
    } else {
      if (!start && !end) {
        // If neither start nor end are provided, use all dates
        queryObject['savedAt'] = { $exists: true };
      } else if (start && !end) {
        // If only start is provided, use start as the minimum date and today's date as the maximum date
        queryObject['savedAt'] = { $gte: new Date(start), $lte: new Date() };
      } else if (!start && end) {
        // If only end is provided, use January 1st, 1970 as the minimum date and end as the maximum date
        queryObject['savedAt'] = { $gte: new Date(0), $lte: new Date(end) };
      }
    }

    return this.boardModel.find(queryObject);
  }

  async saveBoard(boardDTO: SaveBoardDTO): Promise<any> {
    return this.boardModel.create(boardDTO);
  }
}
