import { IsInt, IsString } from "class-validator";

export class CreateCatDto {
  @IsString()
  readonly userName: string;

  @IsString()
  readonly passWord: string;

  @IsInt()
  readonly age: number;
}
