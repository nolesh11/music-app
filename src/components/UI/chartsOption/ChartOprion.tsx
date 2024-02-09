interface Option {
  label: string;
  value: string;
}

interface GenreSelectorProps {
  title: string;
  options: Option[];
  onSelect: (value: string) => void;
}

export const ChartGenre = ({
  title,
  options,
  onSelect,
}: GenreSelectorProps) => {
  return (
    <div className="typeOption" key={title}>
      <p>{title}</p>
      {options.map((option) => (
        <p onClick={() => onSelect(option.value)} key={option.value}>
          {option.label}
        </p>
      ))}
    </div>
  );
};
