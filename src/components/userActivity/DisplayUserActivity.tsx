import { FormData } from '@/interfaces/userActivity';
import DisplayActivity from './DisplayActivity';

const DisplayUserActivity = (props: { usersActivity: FormData[] }) => {
  const { usersActivity } = props;
  return (
    <>
      <div className=" mx-32 mb-4 mt-10 grid grid-cols-2 border-b-2 border-black p-2">
        <div>UserName</div>
        <div className="flex justify-between">
          <div>Activity Description</div>
          <div>TimeSpent</div>
        </div>
      </div>
      {usersActivity.map((userActivity, index) => {
        return <DisplayActivity userActivity={userActivity} key={index} />;
      })}
    </>
  );
};

export default DisplayUserActivity;
