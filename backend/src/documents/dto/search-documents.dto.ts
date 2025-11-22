import { Transform } from 'class-transformer';
import {
  IsEnum,
  IsInt,
  IsOptional,
  IsPositive,
  IsString,
  Max,
  MaxLength,
} from 'class-validator';

const toNumber = ({ value }: { value: unknown }) => {
  if (value === undefined || value === null || value === '') {
    return undefined;
  }

  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : value;
};

export enum SearchSortOption {
  NEWEST = 'newest',
  OLDEST = 'oldest',
  AZ = 'az',
  ZA = 'za',
}

export class SearchDocumentsDto {
  @IsOptional()
  @IsString()
  @MaxLength(128)
  keyword?: string;

  @IsOptional()
  @Transform(toNumber)
  @IsInt()
  @IsPositive()
  fieldId?: number;

  @IsOptional()
  @Transform(toNumber)
  @IsInt()
  @IsPositive()
  subjectId?: number;

  @IsOptional()
  @Transform(toNumber)
  @IsInt()
  @IsPositive()
  page?: number;

  @IsOptional()
  @Transform(toNumber)
  @IsInt()
  @IsPositive()
  @Max(50)
  limit?: number;

  @IsOptional()
  @IsEnum(SearchSortOption)
  sort?: SearchSortOption;
}
