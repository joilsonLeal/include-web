import { Test, TestingModule } from '@nestjs/testing';
import { ImmobileController } from './immobile.controller';
import { ImmobileService } from './immobile.service';

describe('ImmobileController', () => {
  let controller: ImmobileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImmobileController],
      providers: [ImmobileService],
    }).compile();

    controller = module.get<ImmobileController>(ImmobileController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
