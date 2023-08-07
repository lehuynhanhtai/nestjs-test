import { Expose, Transform } from 'class-transformer';
import { User } from '../../users/user.entity';

export class ReportDto {
  @Expose()
  id: number;

  @Expose()
  model: string;

  @Expose()
  make: string;

  @Transform(({ obj }) => obj.user.id)
  @Expose()
  userId: number;
}
