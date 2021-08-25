import { PartialType } from '@nestjs/mapped-types';
import { CreateImmobileDto } from './create-immobile.dto';

export class UpdateImmobileDto extends PartialType(CreateImmobileDto) {}
