import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../store';
import Skeleton from './skeleton';

export default function UsersList() {
  const dispatch = useDispatch();

  const { isLoading, listOfUsers, error } = useSelector((state) => {
    return state.users;
  });

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) {
    return <Skeleton nofGreyBoxes={10} className="h-10 w-full" />;
  }
  if (error) {
    return <div>Oups Bugsies happened</div>;
  }

  const renderedUsers = listOfUsers.map((user) => {
    return (
      <div key={user.id} className="mb-2 border rounded">
        <div className="flex p-2 justify-between items-center cursor-pointer">
          {user.name}
        </div>
      </div>
    );
  });

  return <div>{renderedUsers}</div>;

  return 'USersList';
}
