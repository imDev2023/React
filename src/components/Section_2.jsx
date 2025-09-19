import { motion, useInView } from "motion/react";
import React, { useRef } from "react";
import Card from "./elements/Card";

const styles = {
    border: 0,
    margin: "0 auto",
    marginBottom: ".5rem",
    display: "block",
    borderRadius: "10px",
    maxWidth: "960px",
    minWidth: "300px",
}

const Section_2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="max-w-6xl mx-auto my-36" ref={ref}>
      <motion.h2
        className="text-center text-7xl"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -50 }}
        transition={{
          duration: 1.5,
          ease: "linear",
          delay: 0.3,
        }}
      >
        how to buy
      </motion.h2>

      <Card
        title="Create a Wallet"
        description="download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io."
        url="https://static.wixstatic.com/media/1f3f2b_af81019501c549d5b192536bb8680fc5~mv2.png/v1/fill/w_276,h_276,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20-%202023-03-30T212906_738.png"
        isInView={isInView}
        speed={25}
      />
      <Card
        title="get some eth"
        description="have ETH in your wallet to switch to $PEPE. If you don’t have any ETH, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet."
        url="https://static.wixstatic.com/media/1f3f2b_48f30828b7d740d98efb1a2f8febc010~mv2.png/v1/fill/w_276,h_276,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20-%202023-03-30T213620_680.png"
        isInView={isInView}
        speed={50}
      />
      <Card
        title="go to uniswap"
        description="connect to Uniswap. Go to app.uniswap.org in google chrome or on the browser inside your Metamask app. Connect your wallet. Paste the $PEPE token address into Uniswap, select Pepe, and confirm. When Metamask prompts you for a wallet signature, sign."
        url="https://static.wixstatic.com/media/1f3f2b_9d0d4341170c4640b3663065417b3700~mv2.png/v1/fill/w_276,h_276,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/uniswap%20(2).png"
        isInView={isInView}
        speed={75}
      />
      <Card
        title="switch eth for $pepe"
        description="switch ETH for $PEPE. We have ZERO taxes so you don’t need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility."
        url="https://static.wixstatic.com/media/1f3f2b_04aca37507ff420d94bd45bde7547fcc~mv2.png/v1/fill/w_482,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20-%202023-03-30T215146_874.png"
        isInView={isInView}
        speed={100}
      />

      <div className="flex flex-row">
        <div className="flex-1">
          <iframe
            src="https://app.uniswap.org/#/swap?field=input&value=10&inputCurrency=0x6b175474e89094c44da98b954eedeac495271d0f"
            height="660px"
            width="100%"
            style={styles}
          />
        </div>
        <motion.div
          className="flex-1 "
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 100 }}
          transition={{
            duration: 1.5,
            ease: "linear",
            delay: 0.5,
          }}
          
        >
          <img
            src="https://static.wixstatic.com/media/1f3f2b_b1153043afba4b8e841b3f82859d3846~mv2.png/v1/crop/x_0,y_14,w_2472,h_2477/fill/w_908,h_910,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Untitled%20design%20-%202023-03-30T221823_605.png"
            alt="section_three"
            className="w-[100%]"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Section_2;
