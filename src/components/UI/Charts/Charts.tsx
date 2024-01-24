import { useState } from "react";
import { useGetChartSongsQuery } from "../../../store/API/chartsApi";
import { Heading } from "../../Tepography/Heading";
import { StyledCharts } from "./Charts.style";
import { Link } from "react-router-dom";
import { ChartGenre } from "../chartsOption/ChartOprion";

export const Charts = () => {
  const [selectedType, setSelectedType] = useState("songs");
  const [timePeriod, setTimePeriod] = useState("day");
  const [chartGenre, setChartGenre] = useState("all");
  const [isOpen, setIsOpen] = useState(false);

  const {
    data: chartSongs,
    isLoading,
    isError,
  } = useGetChartSongsQuery([timePeriod, chartGenre]);
  const chartData = chartSongs?.chart_items;
  console.log(chartData);
  

  const genreOptions = [
    { label: "All", value: "all" },
    { label: "Rap", value: "rap" },
    { label: "Pop", value: "pop" },
    { label: "R&B", value: "rb" },
    { label: "Rock", value: "rock" },
    { label: "Country", value: "country" },
  ];
  const timeOptions = [
    { label: "Day", value: "day" },
    { label: "Week", value: "week" },
    { label: "Month", value: "month" },
    { label: "All Time", value: "all_time" },
  ];
  const typeOptions = [
    { label: "Songs", value: "songs" },
    { label: "Albums", value: "albums" },
    { label: "Artists", value: "artists" },
    { label: "Lyrics", value: "referents" },
    { label: "", value: "" },
    { label: "", value: "" },
  ];

  const handleTypeChange = (newType: string) => {
    setSelectedType(newType);
    setIsOpen(false);
  };
  const handleTimePeriodChange = (newPeriod: string) => {
    setTimePeriod(newPeriod);
    setIsOpen(false);
  };
  const handleChartGenreChange = (newGenre: string) => {
    setChartGenre(newGenre);
    setIsOpen(false);
  };

  return (
    <StyledCharts>
      <div className="chartsHeader">
        <Heading headingText="Charts" headingType="h1" />
        <div className="dropdown">
          <div className="chartsOption" onClick={() => setIsOpen(!isOpen)}>
            <div className="firstBlockText">
              <p>SONGS / ALL GENRES / TODAY</p>
            </div>
            <div className="chartsBtn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="16"
                viewBox="0 0 512 512"
              >
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
              </svg>
            </div>
          </div>
          <div className={`chartDropdown ${isOpen ? "active" : ""}`}>
            <ChartGenre
              title="Type"
              options={typeOptions}
              onSelect={handleTypeChange}
            />
            <ChartGenre
              title="Genre"
              options={genreOptions}
              onSelect={handleChartGenreChange}
            />
            <ChartGenre
              title="Time"
              options={timeOptions}
              onSelect={handleTimePeriodChange}
            />
          </div>
        </div>
      </div>
      {selectedType === "songs" && (
        <div className="chartsListSongs">
          {isLoading && <p>Loading</p>}
          {isError && <p>Error</p>}
          {chartData &&
            chartData.map(
              (
                elem: any, // eslint-disable-line
                i: number
              ) => (
                <Link to={`/song-details/${elem.item.id}`}>
                  <div className="chartsElems">
                    <p className="chartNum">{i + 1}</p>
                    <img
                      className="chartImg"
                      src={elem.item.song_art_image_url}
                      alt=""
                    />
                    <p className="chartTitle">{elem.item.title}</p>
                    <p className="chartArtist">{elem.item.artist_names}</p>
                    <p className="chartView">
                      {elem.item.stats.pageviews > 1000000
                        ? (elem.item.stats.pageviews / 1000000)
                            .toFixed(1)
                            .replace(/\.0+$/, "") + "M"
                        : (elem.item.stats.pageviews / 100000)
                            .toFixed(1)
                            .replace(/\.0+$/, "") + "k"}
                    </p>
                  </div>
                </Link>
              )
            )}
        </div>
      )}
    </StyledCharts>
  );
};
