import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

const expansionList = {
    tww: {
        name: 'The War Within',
        dungeons: {
            'city-of-threads': {
                name: 'City of Threads',
                spells: {
                    'bleeding-jab': {
                        name: 'Bleeding Jab',
                        id: 438599
                    },
                    'knife-throw': {
                        name: 'Knife Throw',
                        id: 440107
                    }
                }
            },
            'dawnbreaker': {
                name: 'The Dawnbreaker',
                spells: {
                    'tainted-slash': {
                        name: 'Tainted Slash',
                        id: 431491
                    }
                }
            },
            'cinderbrew-meadery': {
                name: 'Cinderbrew Meadery',
                spells: {
                    'mean-mug': {
                        name: 'Mean Mug',
                        id: 434773
                    },
                    'shredding-sting': {
                        name: 'Shredding Sting',
                        id: 441413
                    }
                }
            },
            'darkflame-cleft': {
                name: 'Darkflame Cleft',
                spells: {
                    'crude-weapons': {
                        name: 'Crude Weapons',
                        id: 425555
                    }
                }
            },
            'operation-floodgate': {
                name: 'Operation: Floodgate',
                spells: {
                    'harpoon': {
                        name: 'Harpoon',
                        id: 468631
                    },
                    'nailed': {
                        name: 'Nailed',
                        id: 1213803
                    }
                }
            },
            'priory': {
                name: 'Priory of the Sacred Flame',
                spells: {
                    'caltrops': {
                        name: 'Caltrops',
                        id: 453461
                    },
                    'grievous-rip': {
                        name: 'Grievous Rip',
                        id: 427635
                    },
                    'lunging-strike': {
                        name: 'Lunging Strike',
                        id: 424426
                    },
                    'pierce-armor': {
                        name: 'Pierce Armor',
                        id: 424414
                    }
                }
            }
        }
    },
    df: {
        name: 'Dragonflight',
        dungeons: {
            'uldaman': {
                name: 'Uldaman: Legacy of Tyr',
                spells: {
                    'earthen-shards': {
                        name: 'Earthen Shards',
                        id: 372718
                    },
                    'chomp': {
                        name: 'Chomp',
                        id: 369828
                    },
                    'jagged-bite': {
                        name: 'Jagged Bite',
                        id: 377732
                    }
                }
            },
            'rubylifepools': {
                name: 'Ruby Life Pools',
                spells: {
                    'searing-wounds': {
                        name: 'Searing Wounds',
                        id: 372860
                    },
                    'blazing-rush': {
                        name: 'Blazing Rush',
                        id: 372796
                    }
                }
            },
            'neltharus': {
                name: 'Neltharus',
                spells: {
                    'bold-ambush': {
                        name: 'Bold Ambush',
                        id: 372570
                    },
                    'dragon-strike': {
                        name: 'Dragon Strike',
                        id: 373735
                    },
                    'dragonbone-axe': {
                        name: 'Dragonbone Axe',
                        id: 372224
                    }
                }
            },
            'algethar-academy': {
                name: 'Algethar Academy',
                spells: {
                    'savage-peck': {
                        name: 'Savage Peck',
                        id: 376997
                    },
                    'splinterbark': {
                        name: 'Splinterbark',
                        id: 396716
                    }
                }
            },
            'brackenhide': {
                name: 'Brackenhide Hollow',
                spells: {
                    'bleeding': {
                        name: 'Bleeding',
                        id: 375416
                    },
                    'bloody-bite': {
                        name: 'Bloody Bite',
                        id: 367481
                    },
                    'bone-bolt': {
                        name: 'Bone Bolt',
                        id: 367521
                    },
                    'crippling-bite': {
                        name: 'Crippling Bite',
                        id: 384575
                    },
                    'gash-frenzy': {
                        name: 'Gash Frenzy',
                        id: 378020
                    }
                }
            },
            'halls-of-infusion': {
                name: 'Halls of Infusion',
                spells: {
                    'gushing-wound': {
                        name: 'Gushing Wound',
                        id: 393444
                    }
                }
            },
            'azure-vault': {
                name: 'Azure Vault',
                spells: {
                    'tear-flesh': {
                        name: 'Tear Flesh',
                        id: 386640
                    }
                }
            },
            'nokhud-offensive': {
                name: 'Nokhud Offensive',
                spells: {
                    'rending-strike': {
                        name: 'Rending Strike',
                        id: 375937
                    },
                    'swift-stab': {
                        name: 'Swift Stab',
                        id: 381692
                    }
                }
            }
        }
    },
    sl: {
        name: 'Shadowlands',
        dungeons: {
            'mists-of-tirna-scithe': {
                name: 'Mists of Tirna Scithe',
                spells: {
                    'bloodletting': {
                        name: 'Bloodletting',
                        id: 323043
                    },
                    'mistveil-tear': {
                        name: 'Mistveil Tear',
                        id: 325021
                    }
                }
            },
            'necrotic-wake': {
                name: 'The Necrotic Wake',
                spells: {
                    'gut-slice': {
                        name: 'Gut Slice',
                        id: 333477
                    },
                    'stitchneedle': {
                        name: 'Stitchneedle',
                        id: 320200
                    },
                    'boneflay': {
                        name: 'Boneflay',
                        id: 321807
                    }
                }
            },
            'theater-of-pain': {
                name: 'Theater of Pain',
                spells: {
                    'bone-spear': {
                        name: 'Bone Spear',
                        id: 432675
                    },
                    'jagged-gash': {
                        name: 'Jagged Gash',
                        id: 323406
                    },
                    'jagged-quarrel': {
                        name: 'Jagged Quarrel',
                        id: 330532
                    },
                    'ricocheting-blade': {
                        name: 'Ricocheting Blade',
                        id: 333861
                    }
                }
            }
        }
    },
    bfa: {
        name: 'Battle for Azeroth',
        dungeons: {
            'Motherlode': {
                name: 'The Motherlode',
                spells: {
                    'heavy-slash': {
                        name: 'Heavy Slash',
                        id: 1213141
                    },
                    'jagged-cut': {
                        name: 'Jagged Cut',
                        id: 257544
                    },
                    'puncture': {
                        name: 'Puncture',
                        id: 1215411
                    }
                }
            }
        }
    },
    cata: {
        name: 'Cataclysm',
        dungeons: {
            'grim-batol': {
                name: 'Grim Batol',
                spells: {
                    'skullsplitter': {
                        name: 'Skullsplitter',
                        id: 447268
                    }
                }
            }
        }
    }
};

export default function BleedList(){
    return  (
        <Tabs>
            {Object.keys(expansionList).map((key, index) => (
                <TabItem value={key} label={expansionList[key].name}>
                    <Tabs>
                        {Object.keys(expansionList[key].dungeons).map((expKey) => (
                            <TabItem value={expKey} label={expansionList[key].dungeons[expKey].name}>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Spell</th>
                                            <th>ID</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Object.keys(expansionList[key].dungeons[expKey].spells).map((dungeonKey) => (
                                            <tr>
                                                <td>{expansionList[key].dungeons[expKey].spells[dungeonKey].name}</td>
                                                <td>{expansionList[key].dungeons[expKey].spells[dungeonKey].id}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>

                            </TabItem>
                        ))}
                    </Tabs>
                </TabItem>
            ))}
        </Tabs>
    )
}


