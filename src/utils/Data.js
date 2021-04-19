import companyLogo from "./../resources/images/guesthouse-logo.png";
const assessmentData = {
  active: false,
  number: 0,
  status: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  commentary:
    "Integer sit amet libero dictum, porttitor eros vel, cursus nulla.",
  todo: [
    "Aliquam neque nibh",
    "tempor eu turpis non",
    "aliquet pellentesque nulla",
  ],
  history: {
    columns: [
      { field: "assessment", headerName: "Assessment", width: 100 },
      { field: "date", headerName: "Date", width: 100 },
      { field: "status", headerName: "Cost", width: 200 },
      { field: "commentary", headerName: "Commentary", width: 200 },
    ],
    rows: [
      {
        id: 1,
        assessment: 0,
        status: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        commentary:
          "Integer sit amet libero dictum, porttitor eros vel, cursus nulla.",
      },
      {
        id: 2,
        assessment: 0,
        status: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        commentary:
          "Integer sit amet libero dictum, porttitor eros vel, cursus nulla.",
      },
      {
        id: 3,
        assessment: 0,
        status: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        commentary:
          "Integer sit amet libero dictum, porttitor eros vel, cursus nulla.",
      },
      {
        id: 4,
        assessment: 0,
        status: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        commentary:
          "Integer sit amet libero dictum, porttitor eros vel, cursus nulla.",
      },
    ],
  },
};
const financingData = {
  active: false,
  history: {
    columns: [
      { field: "round", headerName: "Round", width: 100 },
      { field: "date", headerName: "Date", width: 100 },
      { field: "size", headerName: "Size", width: 150 },
      { field: "value", headerName: "Value (Post)", width: 150 },
      { field: "investment", headerName: "Investment", width: 150 },
      { field: "stake", headerName: "Stake", width: 100 },
      { field: "commentary", headerName: "Commentary", width: 200 },
      { field: "coinvestors", headerName: "Co-Investors", width: 150 },
    ],
    rows: [
      {
        id: 1,
        round: "Seed",
        date: "1/1/11",
        size: "$1,000,000",
        value: "$10,000,000",
        investment: "$100,000",
        stake: "10%",
        commentary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        coinvestors: "a16z",
      },
      {
        id: 2,
        round: "Seed",
        date: "1/1/11",
        size: "$1,000,000",
        value: "$10,000,000",
        investment: "$100,000",
        stake: "10%",
        commentary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        coinvestors: "a16z",
      },
      {
        id: 3,
        round: "Seed",
        date: "1/1/11",
        size: "$1,000,000",
        value: "$10,000,000",
        investment: "$100,000",
        stake: "10%",
        commentary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        coinvestors: "a16z",
      },
      {
        id: 4,
        round: "Seed",
        date: "1/1/11",
        size: "$1,000,000",
        value: "$10,000,000",
        investment: "$100,000",
        stake: "10%",
        commentary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        coinvestors: "a16z",
      },
    ],
  },
};
const portfolioCompanyOverview = {
  companyName: "GuestHouse",
  logo: companyLogo,
  dealTeam: "Wes",
  traction: "Revenue ($580K gross / $280K net in 2020)",
  terms:
    "Seed round $2.5M / $9.5M post; CEO taking $500K secondary. RP allocation would be $700-750K",
  coinvestors:
    "Range Ventures (Lead), v1.vc, Break Point, Sam Hinkie (pending), Claire Cormier Thielke (RE pro, Zillow BOD)",
};
const notes = [
  {
    id: 1,
    title: "Memo",
    note:
      "Key Stats \
    * 1M of 5M homes used a stager (20% penetration)\
    * 10K professional stagers in the market\
    * 2/3 of stagers stage higher end properties\
    * 3 steps/tiers in staging: consultation ($100-350), staging with only owner's furnishings ($250-3,000), staging with supplemental items ($250-3,000)\
    * - Avg staging cost ranges from $1,500-10,000\
    ## Thesis\n \
    They will do insanely great. I think they are the best team ever",
  },
  {
    id: 2,
    title: "Memo",
    note:
      "Key Stats \
    * 1M of 5M homes used a stager (20% penetration)\
    * 10K professional stagers in the market\
    * 2/3 of stagers stage higher end properties\
    * 3 steps/tiers in staging: consultation ($100-350), staging with only owner's furnishings ($250-3,000), staging with supplemental items ($250-3,000)\
    * - Avg staging cost ranges from $1,500-10,000\
    ## Thesis\
    They will do insanely great. I think they are the best team ever",
  },
  {
    id: 3,
    title: "Memo",
    note:
      "Key Stats \
    * 1M of 5M homes used a stager (20% penetration)\
    * 10K professional stagers in the market\
    * 2/3 of stagers stage higher end properties\
    * 3 steps/tiers in staging: consultation ($100-350), staging with only owner's furnishings ($250-3,000), staging with supplemental items ($250-3,000)\
    * - Avg staging cost ranges from $1,500-10,000\
    ## Thesis \n\
    They will do insanely great. I think they are the best team ever",
  },
];
export const portfolioCompanyData = {
  notes: notes,
  overview: portfolioCompanyOverview,
  assessmentData: assessmentData,
  financingData: financingData,
};

export const homeData = {
  name: "Wes",
  agenda: [
    "Eat a good breakfast",
    "Discuss Coinbase IPO",
    "Buy ETH",
    "Wear an NFT",
  ],
  today: [
    {
      time: "2:00PM",
      name: "Wes <> Grace / Mia",
      link: "https://calendar.google.com",
    },
    {
      time: "3:30PM",
      name: "Braid <> RPVC",
      link: "https://calendar.google.com",
    },
    {
      time: "4:00PM",
      name: "Wes <> Marissa <> Daisy ",
      link: "https://calendar.google.com",
    },
  ],
  week: [
    {
      time: "TUE",
      name: "Braid Board Meeting",
      link: "https://calendar.google.com",
    },
    {
      time: "TUE",
      name: "RPVC Weekly Meeting",
      link: "https://calendar.google.com",
    },
    {
      time: "WED",
      name: "1:1 Marissa",
      link: "https://calendar.google.com",
    },
  ],
  deals: {
    columns: [{ field: "deals", headerName: "Company", width: 200 }],
    rows: [
      {
        id: 1,
        deals: "OpenSea",
      },
      {
        id: 2,
        deals: "Coinbase",
      },
      {
        id: 3,
        deals: "WeWork",
      },
      {
        id: 4,
        deals: "SoftBank",
      },
    ],
  },
  portfolio: {
    columns: [
      { field: "company", headerName: "Company", width: 200 },
      { field: "todo", headerName: "TODO", width: 400 },
    ],
    rows: [
      {
        id: 1,
        company: "Standard",
        todo: "Help with Series F raise",
      },
      {
        id: 2,
        company: "Eighth Fund",
        todo: "Hire one million people",
      },
      {
        id: 3,
        company: "Contrary",
        todo: "Ask for investment advice",
      },
      {
        id: 4,
        company: "Dorm Room Fund",
        todo: "Recruit associates",
      },
    ],
  },
};
export const portfolioData = {
  headerLeft: [
    { label: "Lorem ipsum", value: "dolor sit amet" },
    { label: "Lorem ipsum", value: "dolor sit amet" },
    { label: "Lorem ipsum", value: "dolor sit amet" },
  ],
  headerRight:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eros risus, volutpat at tristique id,\
    lacinia sit amet ex. Nam ultricies arcu eros, quis cursus libero sollicitudin non. Pellentesque ac \
    est in tortor convallis congue non et risus.",
  lastUpdated: new Date(),
};
