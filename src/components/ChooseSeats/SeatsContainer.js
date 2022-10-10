import styled from "styled-components";

export default function SeatsContainer({
  seats,
  selected,
  setSelected,
  seatsSelecteds,
  setSeatsSelecteds,
}) {
  function statusCheckColor(status) {
    if (status.isAvailable === true) {
      return selected.includes(status.id) ? "#1AAE9E" : "#C3CFD9";
    } else {
      return "#FBE192";
    }
  }

  function statusCheckBorder(status) {
    if (status.isAvailable === true) {
      return selected.includes(status.id) ? "#0E7D71" : "#7B8B99";
    } else {
      return "#F7C52B";
    }
  }

  function selectAndDeselect(status) {
    if (status.isAvailable === true) {
      if (!selected.includes(status.id)) {
        setSelected([...selected, status.id]);
        setSeatsSelecteds([...seatsSelecteds, status.name]);
      } else if (window.confirm("Deseja mesmo desselecionar assento?")){
        const idsFiltered = selected.filter((ids) => ids !== status.id);
        setSelected([...idsFiltered]);
        const namesFiltered = seatsSelecteds.filter(
          (names) => names !== status.name
        );
        setSeatsSelecteds([...namesFiltered]);
      }
    } else {
      alert("Esse assento não está disponível")
    }
  }

  return (
    <AllSeats>
      {seats.seats.map((s, i) => (
        <Seat
          onClick={() => selectAndDeselect(s)}
          iconBorder={() => statusCheckBorder(s)}
          iconColor={() => statusCheckColor(s)}
          key={i}
          data-identifier="seat"
        >
          {s.name}
        </Seat>
      ))}
    </AllSeats>
  );
}

const AllSeats = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 320px;
`;
const Seat = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  border-radius: 13px;
  background-color: ${(props) => props.iconColor};
  border: 1px solid ${(props) => props.iconBorder};
  margin-left: 3px;
  margin-right: 3px;
  margin-bottom: 18px;
  font-family: Roboto;
  font-size: 11px;
`;
