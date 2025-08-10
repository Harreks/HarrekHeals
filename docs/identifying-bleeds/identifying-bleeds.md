---
title: 'Identifying Bleed Effects'
description: 'How to identify and deal with bleed effects'
sidebar_position: 2
---

The way debuffs normally work in WoW is that specific debuffs that can be removed have special flags marking them as belonging to a certain type, you can check this information mostly via addons or weakauras to mark these debuffs and easily notice if you can dispell something. These tags are Magic, Curse, Poison, and Disease; and different healer specs can remove different combinations of them while all healers can dispell magic.

Bleeds are a special kind. They are not marked at all and simply look like regular debuffs with no flags, however behind the scenes they are actually special and can be removed with spells like Cauterizing Flame from Evokers, Blessing of Protection from Paladins and the Dwarf racials. This is a particularly annoying problem as you can sometimes get a lot of value from removing a bleed but the game will not tell you what is a bleed and what isn't, so the only real way to do it is for players to manually figure it out by trying to dispell every debuff they come across and then writing down which ones actually get removed and so, are actually bleeds.

Sometimes its very obvious as the spell directly mentions "bleed" in the tooltip. Sometimes a spell that really looks like it has nothing to do with bleeding is actually marked as a bleed and can be removed, and sometimes even spells that specifically mention bleeding are not true bleeds and can't be removed.

Below you will find tables for all the spells that are confirmed to be bleeds from all the dungeons that have been part of the M+ season since Dragonflight

import BleedList from '@site/src/components/BleedList';

<BleedList/>

