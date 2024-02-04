import { useState } from 'react';
import AddActivity from './AddActivity';
import DisplayUserActivity from './DisplayUserActivity';
import { FormData } from '@/interfaces/userActivity';

const UserActivity = () => {
  const [usersActivity, setUsersActivity] = useState<FormData[]>([]);

  return (
    <div className="bg-gradient-to-b from-slate-400 pt-4">
      <div className=" flex justify-center">
        <AddActivity setUsersActivity={setUsersActivity} />
      </div>
      <div>
        {usersActivity.length <= 0 ? null : (
          <DisplayUserActivity usersActivity={usersActivity} />
        )}
      </div>
    </div>
  );
};

export default UserActivity;
