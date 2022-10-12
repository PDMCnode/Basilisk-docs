---
id: howto_snek_lbp_mechanics
title: LBP Mechanics
---

import useBaseUrl from '@docusaurus/useBaseUrl';

This article contains a general description of the **mechanics behind a Liquidity Bootstrapping Pool (LBP)**. We recommend that you go through this information before participating in an LBP.

You can also refer to the [Snek LBP product description](/product_snek_lbp) and the [step-by-step guide on buying tokens in an LBP](/howto_snek_lbp_buy).

:::warning
The information in this article is for illustrative purposes only. Every LBP is different and it is impossible to predict in advance how the price will develop.

The starting price of the LBP, its weights settings and the overall general interest in the project raising liquidity are all factors which will affect the price navigation during LBP.

Do your own research before aping!
:::

## Overview of General LBP Trajectory
### **At Start**
An LBP event begins with a predefined starting price. Projects can decide to set an unrealistically high price and let the weights push it down, but this is not necessarily always the case. You should DYOR with regard to the starting price.

If the starting price is (many times higher) than the expected valuation, it may not be wise to buy at the very beginning of the LBP event.

### During the LBP Event
Every LBP event is set to run for a specific amount of time (usually 3-5 days). Through the pre-programmed changing of the token weights in the pool, a downward price pressure will begin to be exerted during the course of the LBP event. This programmed decline will have its highest downward pressure at the beginning periods of the LBP. This is because when the token weight ratio changes from, say, 90-10 to 89-11, that is a 10% increase in supply of the latter asset vs if the weighting changes from 60-40 to 59-41, which is a 2.5% increase in supply.

As such, this programmed downward pressure allows participants to enter once price reaches what they deem a reasonable level. When participants begin to buy from the LBP, this will change the expected price trajectory because this will change the ratio between the two tokens. In addition, the size and timing of the buy order also affects how large the price impact will be. Placing a very large order will drive the price up (a lot), meaning that splitting orders into smaller chuncks may be a good idea.

Eventually, as the downward pressure decreases, the buy pressure from participants will overcome the further downward pressure (supply) programmed and prices will begin to rise. At this time, some participants may also sell back their acquired tokens to the LBP. This would also change the expected price trajectory of the LBP.

## Model Scenario Examples (illustrative)
Let’s take a look at how the LBP price trajectory may change based on user actions. Please note that the examples and prices below are for illustrative purposes only.

### Chart 1: If nobody buys

If nobody buys, the price will continually decline based on a similar curve displayed below:

<div style={{textAlign: 'center'}}>
  <img alt="lbp" src={useBaseUrl('/img/howto_lbp/model_1.jpg')} />
</div>

### Chart 2: If someone buys (with small bids)

In case of a small but consistent buy pressure just above the $0.01 mark, the curve would look something like this:

<div style={{textAlign: 'center'}}>
  <img alt="lbp" src={useBaseUrl('/img/howto_lbp/model_2.jpg')} />
</div>

### Chart 3: If someone buys (with a large bid)

If someone buys 1/4 of all tokens at the price of $0.005, and nobody else buys or sells, the curve would look like this:

<div style={{textAlign: 'center'}}>
  <img alt="lbp" src={useBaseUrl('/img/howto_lbp/model_3.jpg')} />
</div>

### Chart 4: If someone buys (with a large bid at the end)
In cases of large buy orders towards the end of the LBP event, the price may pump significantly. This is because at the end of the LBP, the downward pressure from the weights is very small while the effect of large buy orders is relatively bigger:

<div style={{textAlign: 'center'}}>
  <img alt="lbp" src={useBaseUrl('/img/howto_lbp/model_4.jpg')} />
</div>

## Real-world LBP **Examples**
The abstract model scenarios above should shed some light on the interaction between user orders and the shifting weights.

Now let's take a look at several real-world examples of an LBP:

### Exhibit A

Price was initially sniped by bots/whales and pumped significantly over the initial price. This was eventually counteracted by the reweighting over time and demand picking up once a more reasonable price was reached.

<div style={{textAlign: 'center'}}>
  <img alt="lbp" src={useBaseUrl('/img/howto_lbp/exhibit_a.jpg')} />
</div>

### Exhibit B

Initial price was not sniped and allowed to fall before the significant demand from buyers pushed up prices materially. Buyers still had a good window of opportunity to enter in on acceptable prices given the duration of the LBP.

<div style={{textAlign: 'center'}}>
  <img alt="lbp" src={useBaseUrl('/img/howto_lbp/exhibit_b.jpg')} />
</div>

### Exhibit C: HydraDX LBP
Finally, you can take a look at our [analysis of the HydraDX LBP](https://hydradx.substack.com/p/lbp-analysis) back in February 2021 which helped HydraDX raise 22.9M DAI to become one of the most successful LBPs ever conducted.

<div style={{textAlign: 'center'}}>
  <img alt="lbp" src={useBaseUrl('/img/howto_lbp/exhibit_c.jpg')} />
</div>
