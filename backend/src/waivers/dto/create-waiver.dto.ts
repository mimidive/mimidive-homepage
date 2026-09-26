import { IsBoolean, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateWaiverDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(80)
  name: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(40)
  phone: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(80)
  emergencyContact: string;

  @IsBoolean()
  agreed: boolean;

  @IsString()
  @MinLength(100)
  signatureDataUrl: string;
}
