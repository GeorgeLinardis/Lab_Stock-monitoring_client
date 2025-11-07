import { useParams } from "react-router-dom";

const ScorePage = () => {
  const { symbol } = useParams();

  return (
    <div>
      {`Score page for symbol: ${symbol}`}
    </div>
  )
}

export default ScorePage;
