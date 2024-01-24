import { Heading } from "../../Tepography/Heading";

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
    <div className="typeOption">
      <Heading headingText={title} headingType="h4" />
      {options.map((option) => (
        <p onClick={() => onSelect(option.value)}>
          {option.label}
        </p>
      ))}
    </div>
  );
};
