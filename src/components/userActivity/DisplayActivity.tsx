import { FormData } from '@/interfaces/userActivity';

const DisplayActivity = (props: { userActivity: FormData }) => {
  const { userActivity } = props;
  return (
    <div className="mx-32 mb-4 grid grid-cols-2 rounded-lg bg-slate-50 p-2">
      <h1 className="self-center">{userActivity.user.name}</h1>
      <div>
        {userActivity.activities.map((activity, index) => {
          return (
            <div key={index} className="flex justify-between">
              <span>- {activity.description}</span>
              <span>{activity.timeSpent}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayActivity;
