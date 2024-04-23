import React from 'react';
import { useUserAuth } from "./_utils/auth-context";

const Page = () => {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const handleSignIn = async () => {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.error('Error signing in:', error);
        }
    };

    const handleSignOut = async () => {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    return (
        <div className='flex space-x-40 bg-black text-white'>            
            <div className='text-left w-[400px]'>
                <h1 className='text-3xl font-bold mb-6 m-5'>Shopping List</h1>
            </div>
            <div>
                {user ? (
                    <div>
                        <p>Log in as ({user.email})</p>
                        <button onClick={handleSignOut}>Log out</button>
                        <a href="/shopping-list">Continue to Shopping List</a>
                    </div>
                ) : (
                    <div>
                        <p>Please sign in to continue.</p>
                        <button onClick={handleSignIn}>Login with GitHub</button>
                    </div>
                )}
            </div>    
        </div>
    );
};

export default Page;
