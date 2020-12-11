import { useState, useEffect } from 'react';

import { useOktaAuth } from '@okta/okta-react';
const useUser = () => {
    const { authState, oktaAuth } = useOktaAuth();
    const [userInfo, setUserInfo] = useState(null);
    useEffect(() => {
        if (!authState.isAuthenticated) {
            // When user isn't authenticated, forget any user info
            setUserInfo(null);
        } else {
            oktaAuth.getUser().then((info) => {
                setUserInfo(info);
            });
        }
    }, [authState, oktaAuth, userInfo]); // Update if authState changes
    return { userInfo: userInfo, authState: authState }


}

export default useUser;