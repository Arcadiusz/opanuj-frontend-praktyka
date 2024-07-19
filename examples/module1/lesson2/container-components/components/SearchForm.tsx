import { Input } from './Input';
import { Select } from './Select';

type SearchFormProps = {
  name: string;
  setName: (name: string) => void;
  gender: string;
  setGender: (gender: string) => void;
  sortOption: string;
  setSortOption: (sortOption: string) => void;
};

const genderOptions = [
  {
    value: '',
    label: 'Any Gender',
  },
  {
    value: 'female',
    label: 'Female',
  },
  {
    value: 'Male',
    label: 'Male',
  },
  {
    value: 'Genderless',
    label: 'Genderless',
  },
  {
    value: 'Unknown',
    label: 'Unknown',
  },
];

const sortOptions = [
  {
    value: '',
    label: 'Initial',
  },
  {
    value: 'name',
    label: 'Name',
  },
  {
    value: 'created',
    label: 'Created Date',
  },
];

function SearchForm({
  name,
  setName,
  gender,
  setGender,
  sortOption,
  setSortOption,
}: SearchFormProps) {
  return (
    <form className="space-x-4 flex items-end justify-center">
      <Input value={name} setValue={setName} label="Name" />
      <Select
        label="Gender"
        value={gender}
        setValue={setGender}
        options={genderOptions}
      />
      <Select label="Sort by" value={sortOption} setValue={setSortOption} options={sortOptions} />
    </form>
  );
}

export default SearchForm;
