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
    return <div>Loading ....</div>;
  }
  if (error) {
    return <div>Oups Bugsies happened</div>;
  }
  return <div>{listOfUsers.length}</div>;

  return 'USersList';
}
