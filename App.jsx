import { StatusBar } from 'expo-status-bar';

import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';
import SpaceXLaunchList from './SpaceXLaunchList';

const BASE_URL = 'https://api.spacex.land/graphql/';

const client = new ApolloClient({
    uri: BASE_URL,
    cache: new InMemoryCache(),
});


export default function App() {
    return (<ApolloProvider client={client} >
        <StatusBar style="light"
            backgroundColor="#6600cc" />
        <SpaceXLaunchList />
    </ApolloProvider>
    );
}