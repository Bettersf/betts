// src/pages/_app.tsx
import "@/styles/globals.css";
import "@solana/wallet-adapter-react-ui/styles.css";

import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import {
  FAKE_TOKEN_MINT,
  GambaPlatformProvider,
  TokenMetaProvider,
  makeHeliusTokenFetcher,
} from "gamba-react-ui-v2";
import {
  LIVE_EVENT_TOAST,
  PLATFORM_CREATOR_ADDRESS,
  PLATFORM_CREATOR_FEE,
  PLATFORM_JACKPOT_FEE,
  TOKENLIST,
} from "../../config";

import { AppProps } from "next/app";
import Footer from "@/components/layout/Footer";
import { GAMES } from "../games";
import { GambaProvider } from "gamba-react-v2";
import GameToast from "@/hooks/useGameEvent";
import React from "react";
import { Toaster } from "sonner";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { useDisclaimer } from "@/hooks/useDisclaimer";

function MyApp({ Component, pageProps }: AppProps) {
  const { showDisclaimer, DisclaimerModal } = useDisclaimer();
  const RPC_ENDPOINT =
    process.env.NEXT_PUBLIC_RPC_ENDPOINT ??
    "https://api.mainnet-beta.solana.com";

    return (
    <div
      style={{
        backgroundImage: 'url("/galaxy.png")',
        backgroundSize: "cover", // Adjust the size here (e.g., "50%", "contain", "cover")
        backgroundPosition: "center",
        minHeight: "100vh",
        overflow: "hidden",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat", // Prevent image from repeating
      }}
    >
      <ConnectionProvider
        endpoint={RPC_ENDPOINT}
        config={{ commitment: "processed" }}
      >
        <WalletProvider autoConnect wallets={[]}>
          <TokenMetaProvider tokens={TOKENLIST}>
            <GambaProvider>
              <GambaPlatformProvider
                creator={PLATFORM_CREATOR_ADDRESS}
                defaultCreatorFee={PLATFORM_CREATOR_FEE}
                defaultJackpotFee={PLATFORM_JACKPOT_FEE}
              >
                <Component {...pageProps} />
                <Footer />
                <Toaster
                  position="bottom-right"
                  richColors
                  toastOptions={{
                    style: { background: "#15151f" },
                  }}
                />
                {LIVE_EVENT_TOAST && <GameToast />}
                {showDisclaimer && <DisclaimerModal />}
              </GambaPlatformProvider>
            </GambaProvider>
          </TokenMetaProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  );
}

export default MyApp;
