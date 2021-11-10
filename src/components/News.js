import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
     articles = [
        {
            "source": {
                "id": null,
                "name": "TMZ"
            },
            "author": "TMZ Staff",
            "title": "Astroworld Security Guard Felt Unprepared, Training Day Before Festival - TMZ",
            "description": "One Astroworld Fest security officer is speaking out on his experience.",
            "url": "https://www.tmz.com/2021/11/09/astroworld-security-guard-felt-unprepared-training-day-before-festival/",
            "urlToImage": "https://imagez.tmz.com/image/c8/16by9/2021/11/08/c88c4be0362648fab158d62da8ca548f_xl.jpg",
            "publishedAt": "2021-11-09T09:00:00Z",
            "content": "Many wonder why nobody working security at Astroworld Fest didn't do more to stop the show as the tragedy unfolded  ... and one guard says it's because they were woefully unprepared.\r\nDarius Williams… [+2070 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ESPN"
            },
            "author": "Jeff Dickerson",
            "title": "Chicago Bears LB Cassius Marsh says he was 'hip-checked' by ref before being hit with taunting penalty - 'Incredibly inappropriate' - ESPN",
            "description": "Bears LB Cassius Marsh accused official Tony Corrente of \"hip-checking\" him moments before Corrente flagged Marsh for taunting in the fourth quarter of Monday night's game: \"I just think that that was incredibly inappropriate.\"",
            "url": "https://www.espn.com/nfl/story/_/id/32588927/chicago-bears-lb-cassius-marsh-says-was-hip-checked-ref-being-hit-taunting-penalty-incredibly-inappropriate",
            "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F1109%2Fr935039_1296x729_16%2D9.jpg",
            "publishedAt": "2021-11-09T07:38:53Z",
            "content": "PITTSBURGH -- Bears linebacker Cassius Marsh accused official Tony Corrente of \"hip-checking\" him moments before Corrente flagged Marsh for taunting in the fourth quarter of Chicago's 29-27 loss to t… [+1645 chars]"
        },
        {
            "source": {
                "id": "financial-times",
                "name": "Financial Times"
            },
            "author": null,
            "title": "Latest news updates: SoftBank shares jump after $8.8bn buyback plan revealed - Financial Times",
            "description": "",
            "url": "https://www.ft.com/content/20c222b5-9cbd-40ad-a2e5-f4125403c01a",
            "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2F8d4924f1-a533-47d2-bcbe-6b56136e2000.jpg?source=next-opengraph&fit=scale-down&width=900",
            "publishedAt": "2021-11-09T06:39:16Z",
            "content": "European equities and Wall Street stock futures drifted on Tuesday as caution ahead of US inflation data tempered a long winning streak for equities. \r\nThe Stoxx Europe 600, which has closed higher f… [+1856 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CBS Sports"
            },
            "author": "",
            "title": "Steph Curry posts first 50-point, 10-assist game of career, passes Wilt Chamberlain as oldest player to do so - CBS Sports",
            "description": "The Warriors defeated the Hawks on Monday to improve to an NBA-best 9-1",
            "url": "https://www.cbssports.com/nba/news/steph-curry-posts-first-50-point-10-assist-game-of-career-passes-wilt-chamberlain-as-oldest-player-to-do-so/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2021/11/09/68c59f92-48b3-48b4-bd78-3664f5e83675/thumbnail/1200x675/192dc42c8ed62f946eca9fc9a909f143/untitled-design-44.png",
            "publishedAt": "2021-11-09T06:39:00Z",
            "content": "Entering Monday night's game against the Atlanta Hawks, Stephen Curry had been held to 20 or fewer points in four consecutive games for the first time since 2014. It wasn't a matter of if an eruption… [+2837 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Associated Press",
            "title": "Nikola Jokic lays out Markieff Morris with cheap shot in wild scene - New York Post ",
            "description": "Nikola Jokic had 25 points before the NBA MVP was ejected for violently slamming his shoulder into Markieff Morris, and the Nuggets beat the Miami Heat 113-96 on Monday night.",
            "url": "https://nypost.com/2021/11/09/nuggets-nikola-jokic-lays-out-markieff-morris-with-cheap-shot/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2021/11/newspress-collage-20079067-1636435923586.png?w=1024",
            "publishedAt": "2021-11-09T06:11:00Z",
            "content": "DENVER Nikola Jokic had 25 points, 15 rebounds and 10 assists before the NBA MVP was ejected for violently slamming his shoulder into Markieff Morris, and the Denver Nuggets beat the Miami Heat 113-9… [+2335 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Sara Sidner and Meridith Edwards, CNN",
            "title": "A mother murdered. Her toddler missing. And the family left to search for her year after year - CNN",
            "description": "Arianna Fitts was just two years old the last time she was seen by her family. Her aunt believes she is still alive, one of many missing Black children and young people not to have become household names.",
            "url": "https://www.cnn.com/2021/11/09/us/missing-black-people-arianna-fitts-daniel-robinson/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211108203928-arianna-fitts-super-tease.jpeg",
            "publishedAt": "2021-11-09T06:06:00Z",
            "content": "By Sara Sidner and Meridith Edwards, CNN\r\nUpdated 1:06 AM ET, Tue November 9, 2021\r\n (CNN)Arianna Fitts was just two-and-a-half years old the last time she was seen by family. \r\nThe search for her be… [+7012 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Daily Beast"
            },
            "author": "Marlow Stern",
            "title": "Jimmy Kimmel Drags Ted Cruz to Hell for Feuding With Big Bird Over the COVID Vaccine - The Daily Beast",
            "description": "“It’s interesting because not only is Ted Cruz vaccinated himself, Ted Cruz was born with an immunity that protects him from contracting any friends,” joked Kimmel.",
            "url": "https://www.thedailybeast.com/jimmy-kimmel-brutally-mocks-ted-cruz-for-feuding-with-big-bird-over-the-covid-vaccine",
            "urlToImage": null,
            "publishedAt": "2021-11-09T05:30:09Z",
            "content": "On Monday night, Jimmy Kimmel gleefully took aim at one of his favorite targets, Ted Cruz, the Republican senator from Texas who bent the knee to Donald Trump after he accused Cruzs father of killing… [+1669 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "Kenneth Garger",
            "title": "SpaceX returns 4 astronauts to Earth, ending 200-day flight - New York Post ",
            "description": "Four astronauts aboard SpaceX’s flagship Dragon capsule returned to Earth on Monday night after spending 200 days in space.",
            "url": "https://nypost.com/2021/11/09/spacex-returns-4-astronauts-to-earth-ending-200-day-flight/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2021/11/space-x-returns-index.jpg?quality=90&strip=all&w=1024",
            "publishedAt": "2021-11-09T05:22:00Z",
            "content": "Four astronauts aboard SpaceXs flagship Dragon capsule returned to Earth on Monday night after spending 200 days in space.\r\nThe capsule splashed down into the Gulf of Mexico off the coast of Pensacol… [+1895 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Bitcoin, ether scale new peaks as flows pour in to crypto - Reuters",
            "description": "Bitcoin and ether made record peaks in Asia trade on Tuesday, with enthusiasm for cryptocurrency adoption and worry about inflation driving momentum and flows into the asset class.",
            "url": "https://www.reuters.com/technology/bitcoin-hits-new-record-crypto-market-cap-exceeds-3-tln-2021-11-08/",
            "urlToImage": "https://www.reuters.com/resizer/InHvCiSZm4U-VU8bDnCg_6ScF8s=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/UGHMBKNQAJIUNAN7OCRGXCKYOM.jpg",
            "publishedAt": "2021-11-09T05:19:00Z",
            "content": "A representation of the virtual cryptocurrency Ethereum is seen among representations of other cryptocurrencies in this picture illustration taken June 14, 2021. REUTERS/Edgar Su/IllustrationSYDNEY, … [+2914 chars]"
        },
        {
            "source": {
                "id": "al-jazeera-english",
                "name": "Al Jazeera English"
            },
            "author": "Al Jazeera",
            "title": "Singapore urged to halt execution of mentally-impaired man - Al Jazeera English",
            "description": "Five UN experts join calls to stop hanging of convicted Malaysian drug offender Nagaenthran Dharmalingam.",
            "url": "https://www.aljazeera.com/news/2021/11/9/singapore-urged-to-halt-execution-of-mentally-impaired-man",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2021/11/AP21312396793606.jpg?resize=1200%2C630",
            "publishedAt": "2021-11-09T04:47:13Z",
            "content": "Five United Nations human rights experts have joined the growing calls for Singapore to halt the execution of Nagaenthran Dharmalingam, a Malaysian convicted of drug smuggling more than 10 years ago,… [+3099 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "Jesus Jiménez",
            "title": "Metallurgist Admits She Falsified Test Results for Steel Used in Navy Submarines - The New York Times",
            "description": "For more than 30 years, Elaine Thomas altered test results for more than 240 steel productions while working for a foundry that provides metal for U.S. Navy submarines.",
            "url": "https://www.nytimes.com/2021/11/08/us/metallurgist-navy-false-steel-tests.html",
            "urlToImage": "https://static01.nyt.com/images/2021/11/08/multimedia/08xp-metallurgist-new/08xp-metallurgist-new-facebookJumbo.jpg",
            "publishedAt": "2021-11-09T04:19:08Z",
            "content": "A former metallurgist at a foundry that provides steel used to make U.S. Navy submarines pleaded guilty in federal court in Tacoma, Wash., on Monday to falsifying test results that measured the stren… [+1174 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Esha Mitra, CNN and Reuters",
            "title": "India hospital fire kills 4 newborn babies - CNN",
            "description": "Four of 40 infants in the newborn-care unit of a government hospital died in central India when a fire swept through the unit late on Monday, government officials said, the latest in a string of hospital fires in the country this year that have killed dozens.",
            "url": "https://www.cnn.com/2021/11/08/asia/india-hospital-fire-kills-newborns-intl-hnk/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211108225338-kamla-nehru-hospital-fire-map-super-tease.jpg",
            "publishedAt": "2021-11-09T04:17:00Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Eonline.com"
            },
            "author": "Ryan Gajewski",
            "title": "See Which Two Pairs Went Home on Dancing With the Stars' Janet Jackson Night - E! NEWS",
            "description": "The Dancing With the Stars partners got nasty in honor of Janet Jackson Night. Find out which two stars lost their rhythm ahead of the semifinals, and see everyone's scores.",
            "url": "https://www.eonline.com/news/1308907/see-which-two-pairs-went-home-on-dancing-with-the-stars-janet-jackson-night",
            "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/2021108/rs_1200x1200-211108181135-1200-amanda-kloots-dwts.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
            "publishedAt": "2021-11-09T03:03:00Z",
            "content": "The Dancing With the Stars pairs stamped their passports for rhythm nation this week.\r\nAs E! News exclusively learned earlier this month, the ABC competition series celebrated Janet Jackson Night on … [+739 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Nosheen Iqbal, Jonathan Freedland, Sami Kent, Axel Kacoutié, Phil Maynard, Archie Bland",
            "title": "'Politically corrupt': the sleaze allegations engulfing the Tories - The Guardian",
            "description": "Following the resignation of Owen Paterson, MPs have been debating changes to their disciplinary procedures and the government has been forced to defend itself against a number of allegations of ‘sleaze’",
            "url": "https://www.theguardian.com/news/audio/2021/nov/09/politically-corrupt-the-sleaze-allegations-engulfing-the-tories-podcast",
            "urlToImage": "https://i.guim.co.uk/img/media/f2b26e40e7d599374ea323fc24c4d6438a59ccbc/0_151_3500_2101/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=2b09d07729f5d703b72dfbf99d933a5f",
            "publishedAt": "2021-11-09T03:00:46Z",
            "content": "When parliaments all-party standards committee recommended a 30-day suspension for the Conservative MP Owen Paterson it set off a chain of events that has now mired the government in sleaze allegatio… [+993 chars]"
        },
        {
            "source": {
                "id": "the-hill",
                "name": "The Hill"
            },
            "author": "Sarah Polus",
            "title": "Singapore to no longer offer free COVID-19 treatment to the unvaccinated | TheHill - The Hill",
            "description": "Singapore announced Monday that it will stop covering the medical bills of its citizens infe...",
            "url": "https://thehill.com/homenews/news/580661-singapore-to-no-longer-offer-free-covid-19-treatment-to-the-unvaccinated",
            "urlToImage": "https://thehill.com/sites/default/files/singapore_080320getty.jpg",
            "publishedAt": "2021-11-09T02:43:54Z",
            "content": "Singapore announced Monday that it will stop covering the medical bills of its citizens infected by COVID-19 if they are \"unvaccinated by choice\" starting next month. \r\nThe government has been footin… [+1367 chars]"
        },
        {
            "source": {
                "id": "the-hill",
                "name": "The Hill"
            },
            "author": "Sarakshi Rai",
            "title": "Study links particular kind of fat, not amount, to higher stroke risk | TheHill - The Hill",
            "description": "A new study finds that eating more animal fat is linked to a higher risk of stroke but...",
            "url": "https://thehill.com/policy/healthcare/nutrition/580641-study-links-particular-kind-of-fat-not-amount-to-higher-stroke",
            "urlToImage": "https://thehill.com/sites/default/files/ca_meat_012520getty_1.jpg",
            "publishedAt": "2021-11-09T02:21:00Z",
            "content": "A new study finds that eating more animal fat is linked to a higher risk of stroke but the risk is significantly reduced if people get their fat from vegetable sources, even in larger amounts, NBC Ne… [+1839 chars]"
        },
        {
            "source": {
                "id": "nbc-news",
                "name": "NBC News"
            },
            "author": "The Associated Press",
            "title": "No more Elf on the Shelf, Georgia judge orders - NBC News",
            "description": "banned the Elf on the Shelf.",
            "url": "https://www.nbcnews.com/news/us-news/no-elf-shelf-georgia-judge-orders-rcna4903",
            "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2021-11/211108-elf-on-the-shelf-jm-1954-3e3efc.jpg",
            "publishedAt": "2021-11-09T01:37:00Z",
            "content": "MARIETTA, Ga. Santa may have fewer eyes in homes this Christmas season after a Georgia judge jokingly banned the Elf on the Shelf.\r\nCobb County Superior Court Chief Judge Robert Leonard posted a mock… [+1236 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "SciTechDaily"
            },
            "author": null,
            "title": "Land Ahoy: First Continents Bobbed to the Surface of Earth 500 Million Years Earlier Than Thought - SciTechDaily",
            "description": "Most people know that the land masses on which we all live represent just 30% of Earth’s surface, and the rest is covered by oceans. The emergence of the continents was a pivotal moment in the history of life on Earth, not least because they are the humble ab…",
            "url": "https://scitechdaily.com/land-ahoy-first-continents-bobbed-to-the-surface-of-earth-500-million-years-earlier-than-thought/",
            "urlToImage": "https://scitechdaily.com/images/Ancient-Earth-Artists-Concept.jpg",
            "publishedAt": "2021-11-09T01:27:30Z",
            "content": "Most people know that the land masses on which we all live represent just 30% of Earth’s surface, and the rest is covered by oceans.\r\nThe emergence of the continents was a pivotal moment in the histo… [+5045 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "KTRK-TV"
            },
            "author": "Pooja Lodhia",
            "title": "Astroworld Festival tragedy: Texas A&M student Bharti Shahani in critical condition after Travis Scott concert - KTRK-TV",
            "description": "Bharti Shahani, a 22-year old-Texas A&M senior, remains on a ventilator after Friday's disaster at the Astroworld music festival.",
            "url": "https://abc13.com/bharti-shahani-houston-astroworld-festival-deaths-concert-tragedy/11213462/",
            "urlToImage": "https://cdn.abcotvs.com/dip/images/11213490_110821-ktrk-6pm-ewn-plo-astroworld-tamu-icu-victim-gl-vid.jpg?w=1600",
            "publishedAt": "2021-11-09T01:19:31Z",
            "content": "HOUSTON, Texas (KTRK) -- A 22-year old-Texas A&amp;M senior remains on a ventilator Monday evening after Friday's disaster at the Astroworld music festival.Bharti Shahani, her sister Namrata Shahani … [+2042 chars]"
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": "Zoe Zoe",
            "title": "Mia Brailford, 16-year-old high school student, found after she went missing during JROTC field trip - CBS News",
            "description": "Police said they located 16-year-old Mia Brailford at an Alabama address and detained a male subject in connection with her disappearance.",
            "url": "https://www.cbsnews.com/news/mia-brailford-jrotc-missing-found-florida-school-trip/",
            "urlToImage": "https://cbsnews1.cbsistatic.com/hub/i/r/2021/11/08/00826868-a9c0-4cf6-8187-922be0191fde/thumbnail/1200x630/2bac0a9484788f4538f4d1749ad16243/student.jpg",
            "publishedAt": "2021-11-09T00:55:39Z",
            "content": "A Florida high school student was found safe after she went missing during a school field trip in Georgia, officials announced Monday. Police said they located 16-year-old Mia Brailford at an Alabama… [+1208 chars]"
        }
    ];
    constructor(){
        super();
        console.log("Hello I am a constructor from news component");
        this.state = {
            articles: this.articles,
            loading:true,
            page:1
        }
    }
    
    handlePrevClick = async()=>{
        console.log("handlePrevClick");
        let url =`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ba327cfdf2e44bd296a8c5fb9ca602f5&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({articles:parseData.articles, page: this.state.page - 1, loading:false});
    }
    
    handleNextClick = async()=>{
        console.log("handleNextClick");
    
        let url =`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ba327cfdf2e44bd296a8c5fb9ca602f5&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({articles:parseData.articles, page: this.state.page + 1, loading:false});
        
    }
     async  componentDidMount(){
        let url =`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ba327cfdf2e44bd296a8c5fb9ca602f5&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parseData = await data.json();
        console.log(parseData);
        this.setState({articles:parseData.articles, totalResults:parseData.totalResults, loading:false});
    }

    render() {
        return (
            <div className="container my-3">
                <h1 className="text-center">NewMonkey - Top Headline</h1>
                { this.state.loading && <Spinner/>}
                <div className="row my-3"> 
                    {!this.state.loading && this.state.articles.map((element)=>{
                       return <div className="col-md-4 row my-3" key={element.url}>
                        {/* <NewsItem title={element.title?element.title.slice(0, 90):""} description={element.description?element.description.slice(0, 60):""} imageUrl={element.urlToImage} newUrl={element.url}/>       */}
                        <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} newUrl={element.url}/>      
                        </div>
                    })};
                </div>
                <div className="d-flex justify-content-between">
                <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick} > &larr; Previous</button>
                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick} >Next &rarr; </button>
                </div>

            </div>
        )
    }
}

export default News
