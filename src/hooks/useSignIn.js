
import { useApolloClient, useMutation } from '@apollo/client';
import { useHistory } from 'react-router';
import {AUTHORIZE} from '../graphql/mutations';
// import { useContext } from 'react';
// import AuthStorageContext from '../contexts/AuthStorageContext';
import useAuthStorage from '../hooks/useAuthStorage';

const useSignIn = () => {
    const apolloClient = useApolloClient();
    const [mutate, result] = useMutation(AUTHORIZE);
    const authStorage = useAuthStorage();
    const history = useHistory();
    
    const signIn = async ({ username, password }) => {
    // call the mutate function here with the right arguments
        const {data} = await mutate({variables:{username, password}});
        console.log('result',data.authorize.accessToken);
        await authStorage.setAccessToken(data.authorize.accessToken);
        apolloClient.resetStore();
        history.push('/');
        console.log('SIGNIN');
    };

    return [signIn, result];
};

export default useSignIn;