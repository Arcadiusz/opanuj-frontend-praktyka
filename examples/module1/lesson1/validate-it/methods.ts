const DEFAULT_MIN_RANGE_VALUE = 0;
const DEFAULT_MAX_RANGE_VALUE = 100;

export type RangeCheckParams = {
  value: string;
  minRangeValue?: number;
  maxRangeValue?: number;
};

type IsInRange = (params: RangeCheckParams) => boolean;

type InputValidator = (value: string) => boolean;

type ValidatorWithMessage = {
  validator: InputValidator;
  message: string;
};

export type Validators = Array<ValidatorWithMessage>;

const isInRangeValidator: IsInRange = ({
  value,
  minRangeValue = DEFAULT_MIN_RANGE_VALUE,
  maxRangeValue = DEFAULT_MAX_RANGE_VALUE,
}) => {
    return Number(value) >= minRangeValue && Number(value) <= maxRangeValue;
};

export const isInRange = (param: string) => isInRangeValidator({ value: param });

export const isEven: InputValidator = (input: string): boolean => {
  const value = Number(input);
  return value % 2 === 0;
};

export const isValidInteger: InputValidator = (value: string): boolean => {
  return (
    value !== '' && !isNaN(Number(value)) && Number.isInteger(Number(value))
  );
};
