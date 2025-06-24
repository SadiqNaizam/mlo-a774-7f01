import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MsalAuthenticationTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import { InteractionType } from '@azure/msal-browser';
import { loginRequest } from './authConfig';

import IndexPage from './pages/Index';
import { Button } from '@/components/ui/button';
import { Layers3 } from 'lucide-react';

/**
 * Renders a loading screen while MSAL is performing authentication operations.
 */
const LoadingComponent = () => (
    <div className="flex items-center justify-center h-screen bg-background">
        <p className="text-foreground">Authentication in progress...</p>
    </div>
);

/**
 * Renders the sign-in page for unauthenticated users.
 */
const SignInPage = () => {
    const { instance } = useMsal();

    const handleLogin = () => {
        instance.loginRedirect(loginRequest).catch(e => {
            console.error(e);
        });
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-background text-foreground">
             <div className="flex items-center gap-2 mb-8 p-2">
                <div className="bg-foreground text-background p-2 rounded-lg">
                    <Layers3 size={32} />
                </div>
                <span className="font-bold text-2xl">Dashboard</span>
            </div>
            <h1 className="text-3xl font-bold mb-4">Welcome</h1>
            <p className="text-muted-foreground mb-8">Please sign in with your Microsoft account to continue.</p>
            <Button onClick={handleLogin}>Sign In with Microsoft</Button>
        </div>
    );
};

/**
 * The main application component.
 * It handles the routing and conditionally renders content based on authentication status.
 */
const App: React.FC = () => {
    return (
        <Router>
            {/* Show sign-in page if user is not authenticated */}
            <UnauthenticatedTemplate>
                <SignInPage />
            </UnauthenticatedTemplate>

            {/* Show main application content if user is authenticated */}
            <MsalAuthenticationTemplate
                interactionType={InteractionType.Redirect}
                authenticationRequest={loginRequest}
                loadingComponent={LoadingComponent}
            >
                <Routes>
                    <Route path="/" element={<IndexPage />} />
                    {/* Add other protected routes here */}
                </Routes>
            </MsalAuthenticationTemplate>
        </Router>
    );
};

export default App;