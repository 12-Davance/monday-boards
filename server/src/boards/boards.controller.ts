import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { BoardsService } from './boards.service';
import { SaveBoardDTO } from './board.dto';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getBoards(@Query() query?) {
    return this.boardsService.getBoards();
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('search')
  async searchBoards(@Query() query?) {
    return this.boardsService.findBoards(query);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('save')
  async saveBoard(@Body() boardDTO: SaveBoardDTO) {
    return this.boardsService.saveBoard(boardDTO);
  }
}
