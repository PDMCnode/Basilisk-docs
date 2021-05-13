---
id: staking
title: 质押
---

import useBaseUrl from '@docusaurus/useBaseUrl';

本节简要介绍了 HydraDX 网络中的质押。如果您不熟悉基于 Substrate 网络的质押，我们建议您在决定参与之前先阅读此内容。

HydraDX 使用的共识机制，称为 **提名权益证明（NPoS）** 。NPoS 是权益证明的一种变体，其被用于诸如 Polkadot 和 Kusama 这类基于 Substrate 网络的区块链。NPoS 环境中的两个主要角色，被称为 **[验证人](#validators)** 和 **[提名人](#nominators)** 。

### 验证人 {#validators}

验证人通过运行验证节点参与网络，验证节点提供了使 HydraDX 网络安全运行的基础结构。验证节点履行三个职能，这些职能对于共识机制至关重要。第一，验证包含在块中的信息，例如：各方的身份和合约的内容；第二，根据其他验证人的有效性声明参与新块的生产；第三，保证交易的不可改变性。

NPoS 的一个重要特征是，并非所有验证人都同时参与验证过程。只有处于 *活跃验证人集*  中的验证人，才能执行上述操作，并因此获得奖励。活跃验证人集，由固定数量的节点构成。在 **[蛇网](/snakenet)** 中，我们预计这个数字在 300 左右，并随主网升级而增多。

选择验证人进入活跃验证人集，遵循 *比例代表制* 原则。该原则旨在通过“以验证人获得的提名质押比例分配可用插槽”来保证去中心化和公平性。具体到某个验证人，他获得的质押令牌越多，他当选为活跃验证人集节点的几率就越高。落选的验证人会出现在等待名单中。活跃验证人集中的名单，每个 era （时代）(24小时) 更新一次，这为新的验证人提供了进入名单的机会。

:::note

基于 Substrate 的网络中，时间以 *eras* （时代）作为单位进行划分。在 **[蛇网](/snakenet)** 中，*1 era = 24小时* 。

:::

验证人需要具备一定水平的技术知识，才能安全地设置和维护验证节点。验证节点的不当行为，可能会受到严厉惩罚，从而导致您和提名人的非自愿资金损失。如果您认为您具有运行验证节点的必要经验，则可以参考我们的 **[验证节点搭建指南](/node_setup)** 。否则，我们强烈建议您考虑作为提名人参与网络。

### 提名人 {#nominators}

提名人通过提名和选举活跃的验证人，来帮助保护网络。他们将通过质押自己的 HDX 令牌，来选择和提名验证人。提名过程不需要运行和维护节点，这使得所有人都可以更容易地进行的质押提名。用于提名验证人的令牌会被 *绑定* ，这意味着它们会冻结而不能用于其他目的。您可以随时更改或停止您的提名，你的改变将在当前 era （时代）（24小时） 结束时完成。提名人也可以再次自由使用其令牌，但只在解除绑定并等待 *28天* 后才可以。

您应在提名之前，调查并研究所选验证人的信誉。您可以通过检查他们的身份以及历史信息，如 era 得分、参与的质押、奖励&罚没。然而，在蛇网的开始阶段，可能很难找到所有这些信息。如果您对所选择的验证人有所质疑，请通过 Discord 与我们联系，我们将与您分享我们社区中的可信任验证人列表。

另一个选择验证人时要考虑的是 *奖励佣金百分比* ，这代表了将要支付给验证人以奖励其向提名人提供服务的佣金比例。最低的佣金百分比，并不总是最佳的，因为运行性能高效的节点，需要较高的运营成本，这些费用需要通过持续获得适当的奖励佣金来填补。

在 HydraDX中，**最多可以提名 16 个验证人**。 但是，提名多个验证人并不一定意味着您的质押将每次分配给所有选定的验证人。 当下一个 ear （时代）开始时，Substrate 将运行一系列复杂的算法，以确定网络中所有提名的最佳分配，以此来确定哪些验证人可以进入活跃验证人集。 如果您选择的任何验证人，都没有获得足够的支持进入活跃验证人集，则在该 ear （时代）（*24小时*） 内 **您的提名将保持无效** ，在此期间您也不会获得任何奖励。 为了最大程度地将您的质押包含在活跃验证人集中，我们强烈建议您 **提名多个验证人** ，这也将有助于加强我们的去中心化。

:::note

请确保您不会提名过量提名的验证人。当前，单个验证人 **最多有 64 个提名**，超过 64 个将成为过度提名。当下一个 era （时代）(24小时）开始时，被过度提名的验证人，将只被允许使用质押数量靠前的64个提名。如果发生这种情况，则质押多的提名人将优先获得奖励，而质押少的提名人将被忽略，在那个 era （时代）也将不会获得任何奖励。

提名是一种更简易的质押形式，但是它也有风险。违反网络规则的验证人，可能会受到严厉惩罚，从而导致验证人及其提名人的资金损失。这就是为何提名信誉良好之节点很重要的原因。

:::

您是否有兴趣通过质押您的 HDX 令牌来提名验证人呢？查看我们的 **[提名人指南](/start_nominating)** 开始提名吧！