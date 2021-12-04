import MaterialTable from "material-table";
import CARD_DATA from "../data/cards.json";

export const Table = () => {
  const data = CARD_DATA;

  const columns = [
    {
      title: "Habit",
      field: "cardTitle"
    },
    {
      title: "Impact",
      field: "impact"
    }
  ];

  return (
    <MaterialTable title="Habit Scorecard" data={data} columns={columns} />
  );
};



  
