import AsyncStorage from "@react-native-async-storage/async-storage";

export const 
isLoggedIn = async () => {
    // check for stored login
    try {
        const loginCredential = await AsyncStorage.getItem('@loginCredential');
        if (loginCredential !== null) {
            // check for login expiration
            try {
                const loginExpires = await AsyncStorage.getItem('@loginExpires');
                // check if login is expired
                if (loginExpires !== null) {
                    const now = new Date()
                    const expiryDate = JSON.parse(loginExpires);
                    try {
                        return (expiryDate.year >= now.getFullYear() 
                                    && expiryDate.month >= now.getMonth() 
                                    && expiryDate.day >= now.getDate())
                    } catch(e) {
                        console.log('error parsing expiration date')
                    }
                // no expiration date found
                } else {
                    logOut();
                    return false;
                }
            } catch(e) {
                console.log('error checking login expiration')
                logOut();
                return false;
            }
        // no stored login found
        } else { return false }
    } catch(e) {
        console.log('error checking login credential')
        return false;
    }
    return false;
}, 

logOut = async () => {
    try {
        await AsyncStorage.removeItem('@loginCredential');
    } catch(e) {
        console.log('error removing login credential key')
    }
}

logIn = async (loginCredential) => {
    try {
        await AsyncStorage.setItem('loginCredential', loginCredential);
        try {
            const expiryDate = new Date();
            expiryDate.setDate(result.getDate() + 30);
            await AsyncStorage.setItem('loginExpires', {'year' : expiryDate.getFullYear(), 'month' : expiryDate.getMonth(), 'day' : expiryDate.getDate()});
        } catch(e) {
            console.log('error setting expiry date')
        }
    } catch(e) {
        console.log('error adding login credentials')
    }
}

;