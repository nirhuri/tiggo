import {
  IsInt,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from "class-validator";

export class CreateTransactionCommand {
//   @IsNotEmpty()
  @IsInt()
//   @MinLength(1, { message: "Invalid amount." })
//   @MaxLength(20, { message: "Invalid amount." })
  amount: number;

//   @IsNotEmpty()
//   @IsString()
//   @MinLength(3, { message: "Title is too short." })
//   @MaxLength(20, { message: "Title is too long. Maximum of 20 characters." })
  title: string;
}
