import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: {
        id: "al-jazeera-english",
        name: "Al Jazeera English",
      },
      author: "Alasdair Soussi",
      title: "Israel says Gaza war is like WWII. Experts say it’s ‘justifying brutality’",
      description: "Netanyahu has compared the Gaza war with World War II. But this narrative is ahistorical and dangerous, say experts.",
      url: "https://www.aljazeera.com/news/2023/12/23/israel-gaza-war-wwii-palestine",
      urlToImage: "https://www.aljazeera.com/wp-content/uploads/2023/12/2023-12-18T124600Z_1863379646_RC2OZ4AISSUE_RTRMADP_3_ISRAEL-PALESTINIANS-GAZA-1703225412.jpg?resize=1920%2C1440",
      publishedAt: "2023-12-23T09:48:50Z",
      content: "Israels campaign of relentless bombardment against the Gaza Strip had been raging for three weeks when the countrys Prime Minister Benjamin Netanyahu was asked to address the heavy civilian death tol… [+6506 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "NAJIB JOBAIN and SAMY MAGDY",
      title: "Israeli strike kills 76 members of one Gaza family, rescue officials say as combat expands in south",
      description: "RAFAH, Gaza Strip (AP) — An Israeli airstrike killed 76 members of an extended family, rescue officials said Saturday, a day after the U.N. chief warned again that nowhere is safe in Gaza and that Israel's ongoing offensive is creating “massive obstacles” to …",
      url: "https://apnews.com/982fae4d0802b20d2a90423445c9f64b",
      urlToImage: "https://storage.googleapis.com/afs-prod/media/ef01d65383c445b6982022e54c1ef8b6/3000.jpeg",
      publishedAt: "2023-12-23T09:31:19Z",
      content: "RAFAH, Gaza Strip (AP) — An Israeli airstrike killed 76 members of an extended family, rescue officials said Saturday, a day after the U.N. chief warned again that nowhere is safe in Gaza and that Is… [+5874 chars]",
    },
    {
      source: {
        id: "fox-news",
        name: "Fox News",
      },
      author: "Houston Keene",
      title: "Minnesota professor calls to 'decolonize' and 'dismantle' the US: 'Go as hard as possible'",
      description: 'University of Minnesota professor Melanie Yazzie called to "dismantle" and "decolonize" America during a recent pro-Palestinian "teach-in" about the Hamas-Israel war.',
      url: "https://www.foxnews.com/politics/minnesota-professor-calls-decolonize-dismantle-us-go-hard-possible",
      urlToImage: "https://static.foxnews.com/foxnews.com/content/uploads/2023/12/Melanie-Yazzie.jpg",
      publishedAt: "2023-12-23T09:00:06Z",
      content: "Read this article for free!\r\nPlus get unlimited access to thousands of articles, videos and more with your free account!\r\nPlease enter a valid email address.\r\nBy entering your email, you are agreeing… [+4312 chars]",
    },
    {
      source: {
        id: "cnn-es",
        name: "CNN Spanish",
      },
      author: "Ángela Reyes Haczek",
      title: "Médicos acusan a las tropas israelíes de profanar cadáveres y disparar contra civiles en un hospital",
      description: "Los soldados israelíes que asaltaron un hospital en el norte de Gaza profanaron los cadáveres de pacientes con topadoras, dejaron que un perro militar maltratara a un hombre en silla de ruedas y dispararon a varios médicos incluso después de descartar que tuv…",
      url: "https://cnnespanol.cnn.com/2023/12/23/medicos-acusan-tropas-israelies-profanar-cuerpos-hospital-gaza-trax/",
      urlToImage: "https://cnnespanol.cnn.com/wp-content/uploads/2023/12/231221155633-02-kamal-adwan-hospital.jpg?quality=100&strip=info",
      publishedAt: "2023-12-23T07:28:59Z",
      content: "(CNN) -- Los soldados israelíes que asaltaron un hospital en el norte de Gaza profanaron los cadáveres de pacientes con topadoras, dejaron que un perro militar maltratara a un hombre en silla de rued… [+13873 chars]",
    },
    {
      source: {
        id: "al-jazeera-english",
        name: "Al Jazeera English",
      },
      author: "Maram Humaid",
      title: "Palestinians in central Gaza flee along ‘death corridor’ after Israel order",
      description: "The Israeli army has ordered Palestinians to evacuate Bureij and Nuseirat as attacks resume and death toll mounts.",
      url: "https://www.aljazeera.com/features/2023/12/23/palestinians-in-central-gaza-flee-along-death-corridor-after-israel-order",
      urlToImage: "https://www.aljazeera.com/wp-content/uploads/2023/12/1E3A2452-1703286768.jpg?resize=1920%2C1440",
      publishedAt: "2023-12-23T07:04:34Z",
      content: "Central Gaza Strip Israel has ordered Palestinians to evacuate from parts of central Gaza, its latest such directive as it pushes more of the besieged enclaves 2.3 million-strong population into a sm… [+6137 chars]",
    },
    {
      source: {
        id: "associated-press",
        name: "Associated Press",
      },
      author: "GEOFF MULVIHILL",
      title: "Israel and Hamas measures get a look as most US state legislatures meet for first time since Oct. 7",
      description: "Most U.S. state legislatures will reconvene in January for the first time since Hamas' Oct. 7 attack on Israel sparked a war in Gaza and protests worldwide — and they're preparing to take action in response, both symbolic and concrete.",
      url: "https://apnews.com/6f21af19b7ccb55ad3f6cfcd41a9aac6",
      urlToImage: "https://storage.googleapis.com/afs-prod/media/cfd5ed9068a34288b1755ad6fda5d6c6/3000.jpeg",
      publishedAt: "2023-12-23T05:23:31Z",
      content: "Most U.S. state legislatures will reconvene in January for the first time since Hamas' Oct. 7 attack on Israel sparked a war in Gaza and protests worldwide — and they're preparing to take action in r… [+5777 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "Israel pounds Gaza as UN calls for more aid",
      description: "An overnight air strike reportedly kills 18 in one refugee camp while another is told to evacuate.",
      url: "https://www.bbc.co.uk/news/world-middle-east-67809242",
      urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/EDF1/production/_132131906_2730b9a799673048870e724e20e9319a32b1e6c40_0_6986_39302000x1125.jpg",
      publishedAt: "2023-12-23T04:52:12.4166134Z",
      content: "Israel's bombardment of the Gaza Strip continued late into the night on Friday, with reports of sustained air strikes and bombardments.\r\nAn Israeli air strike on the Nuseirat refugee camp killed at l… [+3672 chars]",
    },
    {
      source: {
        id: "bbc-news",
        name: "BBC News",
      },
      author: "BBC News",
      title: "Stakes are immense as Biden presses Israel to change course",
      description: "The US wants Israel to scale back its offensive in Gaza - the next few weeks will be crucial in testing its influence.",
      url: "https://www.bbc.co.uk/news/world-middle-east-67788359",
      urlToImage: "https://ichef.bbci.co.uk/news/1024/branded_news/4D4F/production/_132119791_briefings_promo_usher_zurcher.png",
      publishedAt: "2023-12-23T03:07:17.3542082Z",
      content: "The US has a new diplomatic objective in the Gaza War - to convince Israel to scale back its military operations in coming weeks. This is a crucial test of the Biden administration, and whether it su… [+9699 chars]",
    },
    {
      source: {
        id: "fox-news",
        name: "Fox News",
      },
      author: "Sarah Rumpf-Whitten",
      title: "WATCH: Israel's four-legged soldiers uncover Hamas tunnel in Gaza City",
      description: "The Israel Defense Forces released video footage Friday from a camera attached to an army canine sent into Hamas tunnels in the southern part of Gaza City.",
      url: "https://www.foxnews.com/world/israels-four-legged-fighters-uncover-hamas-tunnel-gaza-city",
      urlToImage: "https://static.foxnews.com/foxnews.com/content/uploads/2023/12/IDF-Canine-Tunnels.jpg",
      publishedAt: "2023-12-23T02:36:26Z",
      content: "With the help of Israels specialized canine unit, Oketz\r\n, soldiers discovered and raided a tunnel built by Hamas terrorists in the southern part of Gaza City, an IDF spokesperson said on Friday.\r\nVi… [+1448 chars]",
    },
    {
      source: {
        id: "cbc-news",
        name: "CBC News",
      },
      author: "CBC News",
      title: "Russia blames U.S. for 'toothless' UN resolution for Gaza aid that axes Israel-Hamas ceasefire | CBC News",
      description: 'The UN Security Council has adopted a watered-down resolution calling for immediately speeding up aid deliveries to desperate civilians in Gaza, but without the original call for an "urgent suspension of hostilities" between Israel and Hamas.',
      url: "http://www.cbc.ca/news/world/israel-hamas-war-day-77-1.7068007",
      urlToImage: "https://i.cbc.ca/1.7068359.1703275573!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/1866475293.jpg",
      publishedAt: "2023-12-23T01:37:10.6205097Z",
      content: "WARNING: This story contains distressing images\r\nThe United Nations Security Council adopted a watered-down resolution Friday calling for immediate speeded-up aid deliveries to hungry and desperate c… [+5493 chars]",
    },
    {
      source: {
        id: "al-jazeera-english",
        name: "Al Jazeera English",
      },
      author: "Jillian Kestler-D'Amours, Kevin Doyle",
      title: "Israel-Hamas war live: Israel keeps up Gaza attacks as UN urges more aid",
      description: "UN chief welcomes Security Council push to boost aid to Gaza but says only a ceasefire can end ‘ongoing nightmare’.",
      url: "https://www.aljazeera.com/news/liveblog/2023/12/23/israel-hamas-war-live-israel-keeps-up-gaza-attacks-as-un-urges-more-aid",
      urlToImage: "https://www.aljazeera.com/wp-content/uploads/2023/12/2023-12-22T112914Z_1372815513_RC2825ABOYDE_RTRMADP_3_ISRAEL-PALESTINIANS-1703280604.jpg?resize=1920%2C1440",
      publishedAt: "2023-12-23T00:00:46Z",
      content: "blinking-dot\r\nLive updatesLive updates, \r\nUN chief welcomes Security Council push to boost aid to Gaza but says only a ceasefire can end ongoing nightmare.",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: "Michelle Nichols, Nidal Al-Mughrabi, Dan Williams",
      title: "UN pushes for more aid into Gaza, Israel widens offensive",
      description: 'The U.N. Security Council approved <a href="/world/middle-east/un-security-council-acts-boost-aid-gaza-after-us-abstains-2023-12-22/">a toned-down bid</a> to boost humanitarian aid to Gaza on Friday that stopped short of a call for a ceasefire, hours after Is…',
      url: "https://www.reuters.com/world/middle-east/un-security-council-delays-vote-gaza-aid-until-friday-2023-12-22/",
      urlToImage: "https://www.reuters.com/resizer/KxJnt_H4Q8KlSKOMwOvTIUTGYPw=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/CYJBSBGHURKABNCMNBJT535NIY.jpg",
      publishedAt: "2023-12-22T21:55:52Z",
      content: "UNITED NATIONS/CAIRO/JERUSALEM, Dec 22 (Reuters) - The U.N. Security Council approved a toned-down bid to boost humanitarian aid to Gaza on Friday that stopped short of a call for a ceasefire, hours … [+6719 chars]",
    },
    {
      source: {
        id: "breitbart-news",
        name: "Breitbart News",
      },
      author: "Joel B. Pollak",
      title: "WATCH: Antony Blinken Asks Why World Isn't Demanding Hamas Surrender",
      description: 'Blinken asked why the world was pressuring the victim of terror, Israel, instead of pressuring the terrorist "aggressor," Hamas.',
      url: "http://www.breitbart.com/middle-east/2023/12/22/watch-antony-blinken-asks-why-world-isnt-demanding-hamas-surrender/",
      urlToImage: "https://media.breitbart.com/media/2023/12/Antony-Blinken-Getty-640x335.jpg",
      publishedAt: "2023-12-22T21:45:13Z",
      content: "Secretary of State Antony Blinken asked Wednesday why the world was pressuring the victim of terror, Israel, instead of pressuring the terrorist “aggressor,” Hamas, whose surrender would end the war … [+1898 chars]",
    },
    {
      source: {
        id: "australian-financial-review",
        name: "Australian Financial Review",
      },
      author: "Henry Meyer",
      title: "Israel Hamas: US says Red Sea ‘highway patrol’ will thwart Houthi attacks",
      description: "While the US sought to reassure shippers, A.P. Moller-Maersk said it expected the chaos impacting transit through the Red Sea to continue for months.",
      url: "http://www.afr.com/world/middle-east/us-says-red-sea-highway-patrol-will-thwart-houthi-attacks-20231223-p5etfz",
      urlToImage: "https://static.ffx.io/images/$zoom_0.2043%2C$multiply_3%2C$ratio_1.777778%2C$width_1059%2C$x_0%2C$y_95/t_crop_custom/c_scale%2Cw_800%2Cq_88%2Cf_jpg/t_afr_no_label_no_age_social_wm/6d2bd0e0fd0ca27288d628aaedb02de1b64935b5",
      publishedAt: "2023-12-22T21:38:39Z",
      content: "The group has vowed to keep up attacks against commercial shippers along the Red Sea, which carries some 12 per cent of global maritime trade, even after the coalition was created, and warned they wi… [+3415 chars]",
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
    console.log("Inside News Class Constructor");
  }

  render() {
    return (
      <div className="container my-3">
        <h2> NewsNest- Top Headlines For You</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem title={element.title.slice(0, 45)} description={element.description.slice(0, 88)} imageUrl={element.urlToImage} newsUrl={element.url} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
