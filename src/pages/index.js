import React from 'react';
import Layout from '@theme/Layout';
import {
    HarrekLogo,
    HealerRampHelperAddon,
    PresWowanalyzer,
    QeYoutubePresGuide,
    SpiritbloomPro,
    WowheadMopHolyPriest,
    YoutubeQuickGuides
} from './home/_assets';
import '@site/src/css/home.css';

export default function main() {
    const AssetsMap = {
        HealerRampHelperAddon: HealerRampHelperAddon,
        PresWowanalyzer: PresWowanalyzer,
        QeYoutubePresGuide: QeYoutubePresGuide,
        SpiritbloomPro: SpiritbloomPro,
        WowheadMopHolyPriest: WowheadMopHolyPriest,
        YoutubeQuickGuides: YoutubeQuickGuides
    }

    const Works = [
        {
            key: 'SpiritbloomPro',
            title: 'Spiritbloom.Pro Preservation Guide',
            text: 'Developer and writer',
            link: 'https://spiritbloom.pro'
        },
        {
            key: 'PresWowanalyzer',
            title: 'WowAnalyzer',
            text: 'Preservation Evoker Maintainer',
            link: 'https://wowanalyzer.com/specs'
        },
        {
            key: 'WowheadMopHolyPriest',
            title: 'Wowhead Classic Holy Priest',
            text: 'Guide Writer',
            link: 'https://www.wowhead.com/mop-classic/guide/classes/priest/holy/healer-overview-pve'
        },
        {
            key: 'HealerRampHelperAddon',
            title: 'Healer Ramp Helper Addon',
            text: 'Developer',
            link: 'https://www.curseforge.com/wow/addons/harreks-healer-ramp-helper'
        },
        {
            key: 'QeYoutubePresGuide',
            title: 'QuestionablyEpic Preservation Video Guides',
            text: 'Writer and Editor',
            link: 'https://youtu.be/2IV9ydgzdSM'
        },
        {
            key: 'YoutubeQuickGuides',
            title: 'Healer Quick Guide Videos',
            text: 'Creator',
            link: 'https://www.youtube.com/playlist?list=PLiAJehjjbzuwExXB-Nrq47NKarzA9Olq0'
        }
    ];

    const WorksElements = Works.map((item, index) => (
        <div class='content-center' style={{ flexDirection: 'column'}}>
            <a target='_blank' href={item.link}>
                <div class='work-image-container'>
                    <img src={AssetsMap[item.key]}></img>
                </div>
            </a>
            <div style={{textAlign: 'center'}}>
                <h3>{ item.title }</h3>
                <p> {item.text }</p>
            </div>
        </div>
    ));

    return (
        <Layout title="Harrek Heals" description="The Homepage" slug="/asd">
            <main style={{maxWidth: 1000, margin: '1rem auto'}}>
                <div class='content-center'>
                    <img src={HarrekLogo} style={{height: 200}}></img>
                </div>
                <div style={{textAlign: 'center'}}>
                    <p>
                        Hello! I'm Harrek, and i have been playing healers in WoW for around 15 years now. I am a theorycrafter, guide writer, coach, addon developer and website developer and my work focuses on helping people learn how to play better and improve based on a healthy mix of on-paper theory and real scenarios.
                    </p>
                    <p>
                        Here you will find links to all the different things i work on, plus a good amount of my personal write ups about healing and healer design. Some are educational and some are more opinion pieces about potential improvements to the game.
                    </p>
                    <p>
                        I hope you find whatever you are looking for and if you want to work with me directly please feel free to contact me at any of the links listed below or check the services page.
                    </p>
                </div>
                <div class='content-center'>
                    <h2>My Work</h2>
                </div>
                <div class='content-center works-container' style={{flexWrap: 'wrap', alignItems: 'start', justifyContent: 'space-between'}}>
                    { WorksElements }
                </div>
            </main>
        </Layout>
    )
}