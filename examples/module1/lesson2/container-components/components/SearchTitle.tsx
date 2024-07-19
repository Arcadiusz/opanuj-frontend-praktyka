interface SearchTitleProps {
  title?: string;
}

const DEFAULT_TITLE = 'Wyszukiwarka postaci Rick and Morty';

function SearchTitle({ title = DEFAULT_TITLE }: SearchTitleProps) {
  return <h1 className="text-2xl">{title}</h1>;
}

export default SearchTitle;
