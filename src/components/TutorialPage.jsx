import { useParams } from 'react-router-dom';

export default function TutorialPage() {
  const { topicName } = useParams();

  return (
    <div className="p-6 text-black">
        <h1>Working.......</h1>
        {console.log("working....")}
      <h1 className="text-xl font-bold">Tutorial: {topicName}</h1>
      {/* Add logic to fetch or render content based on topicName */}
    </div>
  );
};

