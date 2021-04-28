import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
    constructor(namespace = 'auth') {
        this.namespace = namespace;
    }

    getAccessToken = async() => {
    // Get the access token for the storage
        const accessToken = await AsyncStorage.getItem(
            `${this.namespace}:accessToken`,
        );

        return accessToken ? accessToken: null;
    }

    setAccessToken = async(accessToken) => {
    // Add the access token to the storage
        await AsyncStorage.setItem(
            `${this.namespace}:accessToken`,
            accessToken
        );  

    }

    removeAccessToken = async() => {
    // Remove the access token from the storage
        await AsyncStorage.removeItem(`${this.namespace}:accessToken`);
    }
}

export default AuthStorage;