---
id: basilisk_crowdloan_1
title: Basilisk 众贷
---

## 众贷细节 {#crowdloan-details}

* 访问： **https://loan.bsx.fi/**
* 开始时间： **2021 年 8 月 31 日**
* 平行链持续时间： **48 周**
* 目标平行链插槽： **#6 - #10**
* 众贷上限： **222,222 KSM**
* BSX 总奖励： **15,000,000,000 BSX（总供应量的 15%）**
* HDX 奖励： **56,873,469 HDX（最大）**
* 归属期：BSX 奖励和 HDX 奖金线性分配。一旦 Basilisk LBP 活动结束（赢得平行链插槽后约 2 周），分发将开始，并将持续到平行链插槽到期前 1 周。
* 众贷活动截止日期： **2021 年 10 月 9 日**

## 奖励机制 {#rewards-mechanism}

在 Basilisk 获得平行链插槽后，所有社区支持者都会因参与众贷而获得奖励。可用的奖励包括 BSX 和 HDX 令牌，它们根据贡献时的众贷状态以不同的比率分配。 

奖励机制的设计，考虑到了 Basilisk 利益相关者的最大利益。目的是不要为平行链插槽多付钱，从而最大限度地减少支持者的机会成本并最大限度地提高未来的潜在收益。下面，您将找到 BSX 和 HDX 奖励机制的解释。

### BSX 奖励 {#bsx-rewards}

每个参与者将获得的 BSX 奖励金额，只能在 Basilisk 获得平行链插槽后在众贷活动结束时确定。奖励的计算包括两个步骤。

首先，所有 KSM 贡献都使用奖励系数进行加权。系数是 **介于 1 和 0 之间的浮点值** ，具体取决于做出贡献的时间点。**1** 的奖励系数适用于 **在 #6 目标拍卖开始收市前（9 月 3 日格林威治标准时间 09:00 左右）** 所有质押的 KSM 。之后，系数开始线性下降，至 #6 拍卖 **结束时（9 月 8 日大约格林威治标准时间 09:00）达到 0** 。如果质押的 KSM 总额不足以赢得拍卖 #6 的位置，那么接下来的拍卖 **#7 将成为新的目标拍卖** 。因此，在之前的 6# 拍卖中质押的所有 KSM 的系数将重置为 1。

在使用上述计算并加权 KSM 贡献后，可以计算个人奖励的确切金额。奖励金额根据加权个人贡献占所有加权 KSM 贡献的比例确定，如下公式所示：

```
奖励 = (个人贡献权重 / 总贡献权重) * 众贷总量
```

虽然在实际赢得平行链插槽之前我们无法确定确切的奖励金额，但可以计算任何给定贡献的 **BSX 奖励最低金额** 。

这可以在众贷将设法达到其最大上限 222,222 KSM 的假设下完成，并且所有贡献都将具有最高的奖励系数 1 。当然，这是一种极不可能的情况，但它允许我们在众贷界面中标明贡献者使用 KSM 可以获得 BSX 令牌的最低数量回报。

### HDX 奖金 {#hdx-bonus}

为了进一步激励及时的支持，所有众贷支持者将获得额外的 HDX 奖金，覆盖其 KSM 贡献 **机会成本的 5-30%** 。对于大约 11 个月的锁定期，这些机会成本目前估计为 **13.75%**（基于 KSM 质押 15% 的 APY）。

同样在这里，将被覆盖的机会成本的确切百分比，由 KSM 贡献时的众贷状态决定。HDX 的奖金系数 **最大为 0.3** ，而 Basilisk 在平行链插槽方面落后于其主要竞争对手。一旦 Basilisk 领先对手 **15%** 成为第一名，奖金系数将开始线性下降，**最小为 0.05** 。 Basilisk 领先对手 **20% 或更多** ，就会达到这个最小值。

考虑到上述因素，个人贡献的奖金金额（以 KSM 为单位）使用以下公式计算：

```
奖金（KSM）= 贡献的KSM * 机会成本 * 奖金系数
```

最后，奖金将以 0.08059 美元/HDX 的历史价格转换为 HDX 。