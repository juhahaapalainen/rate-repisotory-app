import { useQuery } from '@apollo/client';
import { GET_AUTHORIZED_USER } from '../graphql/queries';

const useAuthorizedUser = () => {
   
    const { data, error, loading } = useQuery(GET_AUTHORIZED_USER, {
        fetchPolicy: 'cache-and-network',
    });
    console.log('useAuthUsr', data?.authorizedUser);
    return { authorizedUser: data ? data.authorizedUser : undefined, loading };
};

export default useAuthorizedUser;