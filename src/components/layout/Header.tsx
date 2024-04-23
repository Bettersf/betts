import React, { useState } from "react";
import Link from "next/link";
import { Modal } from "@/components/ui/Modal";
import TokenSelect from "../ui/TokenSelect";
import { UserButton } from "../ui/UserButton";
import { TokenValue, GambaUi, useCurrentPool, useTokenBalance } from "gamba-react-ui-v2";

export default function Header() {
  const pool = useCurrentPool(); // Fetching pool data
  const balance = useTokenBalance(); // Fetching token balance data
  const [bonusHelp, setBonusHelp] = useState(false);
  const [jackpotHelp, setJackpotHelp] = useState(false);

  return (
    <>
      {bonusHelp && (
        <Modal onClose={() => setBonusHelp(false)}>
          <h1>You have a bonus!</h1>
          <p>
            You have{" "}
            <b>
              <TokenValue amount={balance.bonusBalance} />
            </b>{" "}
            worth of free plays. This bonus will be applied automatically when
            you play.
          </p>
        </Modal>
      )}
      {jackpotHelp && (
        <Modal onClose={() => setJackpotHelp(false)}>
          <div className="text-lg font-semibold text-center">
            {token.name} Jackpot Details
          </div>
          {pool.jackpotBalance > 0 && (
            <div className="flex text-[#003c00] rounded-lg bg-[#03ffa4] px-2.5 py-0.5 uppercase font-bold">
              <TokenValue amount={pool.jackpotBalance} />
            </div>
          )}
          <div className="mt-4">
            <p>
              The Jackpot grows with each game played, funded by fees from
              unsuccessful attempts to win it. Winning the jackpot not only
              grants substantial rewards but also recycles a tiny portion of the
              winnings back into the main liquidity pool, sustaining the games
              economy.
            </p>
            <div className="mt-4">
              <div>
                <strong>Pool Fee:</strong> {pool.poolFee}%
              </div>
              <div>
                <strong>Liquidity:</strong>{" "}
                <TokenValue amount={Number(pool.liquidity)} />
              </div>
              <div>
                <strong>Minimum Wager:</strong>{" "}
                <TokenValue amount={pool.minWager} />
              </div>
              <div>
                <strong>Maximum Payout:</strong>{" "}
                <TokenValue amount={pool.maxPayout} />
              </div>
            </div>
            <div className="mt-4 text-center">
              <GambaUi.Button main>
                <a
                  href={`https://explorer.gamba.so/pool/${pool.publicKey.toString()}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  View Pool on Explorer
                </a>
              </GambaUi.Button>
            </div>
          </div>
        </Modal>
      )}
      <div className="flex items-center justify-between w-full p-2 bg-gray-900 fixed top-0 left-0 z-50 backdrop-blur-[20px]">
        <div className="flex gap-5 items-center">
          <Link href="/" passHref>
            <div className="h-16 m-0 cursor-pointer">
              <img alt="Gamba logo" src="/DogeBets.png" className="h-full w-auto" />
            </div>
          </Link>
          <GambaUi.Button className="headerButton">$DOGE</GambaUi.Button>
          <GambaUi.Button className="headerButton">STAKING (TBA)</GambaUi.Button>
        </div>
        <div className="max-sm:text-xs max-sm:gap-1 flex gap-2.5 items-center relative">
          {pool.jackpotBalance > 0 && (
            <button
              onClick={() => setJackpotHelp(true)}
              className="hidden md:flex all-unset cursor-pointer text-[#003c00] rounded-lg bg-[#03ffa4] px-2.5 py-0.5 text-xs uppercase font-bold transition-colors duration-200 hover:bg-white"
            >
              <TokenValue amount={pool.jackpotBalance} />
            </button>
          )}
          {balance.bonusBalance > 0 && (
            <button
              onClick={() => setBonusHelp(true)}
              className="hidden md:flex all-unset cursor-pointer text-[#003c00] rounded-lg bg-[#03ffa4] px-2.5 py-0.5 text-xs uppercase font-bold transition-colors duration-200 hover:bg-white"
            >
              +<TokenValue amount={balance.bonusBalance} />
            </button>
          )}
          <TokenSelect />
          <UserButton />
        </div>
      </div>
    </>
  );
}
