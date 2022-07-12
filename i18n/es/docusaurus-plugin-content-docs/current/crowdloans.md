---
id: crowdloans
title: Crowdloans
---

Los crowdloans ayudan a los candidatos de [parachain](/parachains) a recaudar fondos suficientes para ganar un slot en las [parachain auctions](/parachain_auctions). Este artículo proporciona una comprensión general de cómo funcionan los crowdloans.


## ¿Cómo funciona un Crowdloan? {#how}

Los candidatos a Parachain pueden iniciar una campaña crowdloan usando el modulo dedicado de Kusama. Al hacerlo, establecen su objetivo (cantidad de KSM a recaudar) así como su fecha de finalización (para cuándo). La campaña crowdloan generalmente se inicia antes del inicio del parachain auction, lo que le da al candidato el tiempo suficiente para recaudar fondos.

Los patrocinadores de Crowdloan apoyan al candidato de parachain de su elección bloqueando una cierta cantidad de KSM que se utilizará para realizar una oferta en la subasta de parachain. El KSM permanece bloqueado hasta que se activa uno de los siguientes eventos de desbloqueo:

* El candidato gana un slot parachain: Después de que la duración del slot parachain haya expirado (48 semanas para Basilisk)
* El candidato no gana un slot parachain: Una vez que se ha alcanzado el objetivo impuesto o ha expirado la campaña crowdloan.

Si bien los patrocinadores del crowdloan reciben la devolución total de sus fondos una vez que se ha activado el evento de desbloqueo, la participación en un crowdloan, aún conlleva los llamados **costos de oportunidad**. Estos reflejan los beneficios que se perdieron al bloquear los tokens KSM durante un período determinado en lugar de invertirlos de otra manera. Por ejemplo, en lugar de bloquear los tokens KSM durante 1 año, los usuarios podrían decidir hacer stake de sus KSM, lo que les brindaría recompensas del 10-15%. En este ejemplo, las recompensas del 10 al 15% representan los costos de oportunidad de participar en un Crowdloan
