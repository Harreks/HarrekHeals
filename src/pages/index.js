import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Card from '@site/src/components/Card';

export default function main() {

    const Works = {
        WowheadRestoShaman: {
            title: 'Wowhead Restoration Shaman Guide Writer',
            text: 'New guide writer for Midnight',
            img: 'WowheadRestoShaman.png',
            link: 'https://www.wowhead.com/guide/classes/shaman/restoration/overview-pve-healer'
        },
        SpiritbloomPro: {
            title: 'Spiritbloom.Pro Preservation & Resto Shaman Guides',
            text: 'Site developer and main writer',
            img: 'SpiritbloomPro.png',
            link: 'https://spiritbloom.pro'
        },
        WowheadMopHolyPriest: {
            title: 'Wowhead Classic Holy Priest Guide Writer',
            text: 'Writer since late Cataclysm',
            img: 'WowheadMopHolyPriest.png',
            link: 'https://www.wowhead.com/mop-classic/guide/classes/priest/holy/healer-overview-pve'
        },
        PresWowAnalyzer: {
            title: 'Preservation Evoker WowAnalyzer',
            text: 'Spec maintainer since early War Within',
            img: 'PresWowanalyzer.png',
            link: 'https://wowanalyzer.com/'
        },
        RestoShamWowAnalyzer: {
            title: 'Restoration Shaman WowAnalyzer',
            text: 'Spec maintainer starting Midnight',
            img: 'RestoShamWowAnalyzer.png',
            link: 'https://wowanalyzer.com/'
        },
        AdvancedTooltips: {
            title: 'Harrek\'s Advanced Tooltips Addon',
            text: 'Most popular spell info tooltips addon',
            img: 'AdvancedTooltips.png',
            link: 'https://www.curseforge.com/wow/addons/harreks-advanced-tooltips'
        },
        HarrekUI: {
            title: 'HarrekUI Addon',
            text: 'Wide set of customizations and one-click setup for the base ui',
            img: 'HarrekUI.png',
            link: 'https://www.curseforge.com/wow/addons/harrekui'
        },
        PreservationStasisTracker: {
            title: 'Preservation Stasis Tracker Addon',
            text: 'Go-to replacement for the popular weakaura',
            img: 'PreservationStasisTracker.png',
            link: 'https://www.curseforge.com/wow/addons/preservation-stasis-tracker'
        },
        QEPresVideoGuides: {
            title: 'QuestionablyEpic Preservation Video Guides',
            text: 'Video editor and writer',
            img: 'QeYoutubePresGuide.png',
            link: 'https://youtu.be/2IV9ydgzdSM'
        },
        VideoQuickGuides: {
            title: 'Healer Quick Guide Videos',
            text: '',
            img: 'HealerQuickGuideVideos.png',
            link: 'https://www.youtube.com/playlist?list=PLiAJehjjbzuwExXB-Nrq47NKarzA9Olq0'
        }
    };

    function WorkElement(key){
        const element = Works[key]
        return (
            <div style={{display: 'flex', marginBottom: '2rem'}}>
                <a target='_blank' href={element.link}>
                    <div class='work-image-container'>
                        <img src={'/img/' + element.img}></img>
                    </div>
                </a>
                <div style={{marginLeft: '2rem'}}>
                    <a href={element.link}><h3>{element.title}</h3></a>
                    <p>{element.text}</p>
                </div>
            </div>
        )
    }

    return (
        <Layout title="Harrek Heals">
            <Head>
                <meta property="og:description" content="Healer Guide Writing And Coaching" data-rh="true" />
            </Head>
            <main style={{maxWidth: 1000, margin: '1rem auto'}}>
                <div class='content-center'>
                    <img src='/img/harrek-logo.png' style={{height: 200}}></img>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <p style={{textAlign: 'center', maxWidth: 800}}>
                        Hello! I'm Harrek, and i have been playing healers in WoW for around 15 years now. I am a theorycrafter, guide writer, coach, addon developer and website developer. I try to focus on helping people learn and get better based on a good mix of theory and real scenarios, while also trying to solve common community problems by creating tools and resources.
                        <br/><br/>
                        Here you will find a list of things i currently work on. I often find myself involved in all kinds of projects because i have trouble saying no, so while the list should be pretty exhaustive it might miss some things, but this should give you a good idea of what i do and my areas of expertise.
                        <br/><br/>
                        If you have questions about anything or want to work with me on something please reach out, i am always happy to chat and love doing interesting things, all the ways to contact me will be listed at the bottom of the page. If you are interested in learning from me i would heavily recommend joining any of the discords i participate in, they are great sources of information and a good place to hang out with like-minded people.
                        <br/><br/>
                        If you are looking for coaching there is more information on the page below and you can contact me by any method you prefer so we can decide how to best help you and schedule it. And thanks for considering me!
                        <br/><br/>
                        Consider supporting me on <a href='https://www.patreon.com/harrek'>patreon</a> if you think my work deserves it.
                        <br/><br/>
                    </p>
                </div>
                <div>
                    <h1>Guide Writing</h1>
                    { WorkElement('WowheadRestoShaman') }
                    { WorkElement('SpiritbloomPro') }
                    { WorkElement('WowheadMopHolyPriest') }

                    <h1>Development</h1>
                    { WorkElement('PresWowAnalyzer') }
                    { WorkElement('RestoShamWowAnalyzer') }
                    { WorkElement('AdvancedTooltips') }
                    { WorkElement('HarrekUI') }
                    { WorkElement('PreservationStasisTracker') }

                    <h1>Content</h1>
                    { WorkElement('QEPresVideoGuides') }
                    { WorkElement('VideoQuickGuides') }

                    <h1>Coaching</h1>
                    <p style={{maxWidth: 800}}>
                        My primary goal is helping people, but as time is limited i inevitably have to charge for it at some point. I don't want money to get in the way of people getting help so even if you can't or don't want to pay for it please message me anyway if you want me to take a look at something, i am always happy to chat and assist in whatever way possible.
                    </p>
                    <p style={{maxWidth: 800}}>
                        I am very flexible about pricing and we can do either written reviews via discord dms or live sessions where we go over material to help you solve your issues. It can cover from the very basics of starting as a healer to high level optimizations for Preservation Evoker or Restoration Shaman, including some niche topics like UI, macros, and external tools.
                    </p>
                    <p style={{maxWidth: 800}}>
                        If you are looking for help with a spec i don't personally cover i will be happy to refer you to high level players that are also my friends and will be happy to help you.
                    </p>

                    <h1>Contact</h1>
                    <Card to='mailto:contact@harrekheals.me' title='Email' description='contact@harrekheals.me'/>
                    <Card to='https://discord.gg/MMjNrUTxQe' title='SB.P Discord' description='Spiritbloom.Pro'/>
                    <Card to='https://discord.gg/evoker' title='Evoker Discord' description='Wyrmrest Temple'/>
                    <br/>
                    <Card to='https://discord.gg/earthshrine' title='Shaman Discord' description='Earthshrine'/>
                </div>
            </main>
        </Layout>
    )
}