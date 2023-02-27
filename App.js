import React from 'react'
import Routes from './routes'
import WalletConnectProvider from "react-native-walletconnect";
import { LivepeerConfig } from '@livepeer/react-native';
import LPClient from './clients/livepeer';
import { ApolloProvider } from '@apollo/client';
import APClient from './clients/apollo';

export default function App() {
  return (
    <WalletConnectProvider>
      <ApolloProvider client={APClient}>
        <LivepeerConfig client={LPClient}>
          <Routes />
        </LivepeerConfig>
      </ApolloProvider>
    </WalletConnectProvider>
  )
}