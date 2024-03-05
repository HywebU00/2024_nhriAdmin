export default [


  {
    icon: 'mdi-human-male-board-poll', key: 'menu.legislator', text: '立委案件', regex: /^\/auth/,
    items: [
      { key: 'menu.legislatorTakingCareCases', text: '關切案件查詢', link: '/legislator/takingCareCases', name: 'wra-takingCareCases' },
      { key: 'menu.legislatorTakingCareCasesOwn', text: '主辦關切案件', link: '/legislator/takingCareCasesOwn', name: 'wra-takingCareCasesOwn' },
      { key: 'menu.legislatorTakingCareCasesHistory', text: '關切案件歷史區', link: '/legislator/takingCareCasesHistory', name: 'wra-takingCareCasesHistory' },
      { key: 'menu.legislatorQaCases', text: '本組質詢議題（QA）查詢', link: '/legislator/qaCases', name: 'wra-qaCases' },
      { key: 'menu.legislatorQaCasesAll', text: '全部質詢議題（QA）查詢', link: '/legislator/qaCasesAll', name: 'wra-qaCasesAll' },
      { key: 'menu.legislatorQaCasesOwn', text: '個人主辦質詢議題(QA)', link: '/legislator/qaCasesOwn', name: 'wra-qaCasesOwn' },
      { key: 'menu.legislatorQaCasesHistory', text: '質詢議題(QA)歷史區', link: '/legislator/qaCasesHistory', name: 'wra-qaCasesHistory' },
    ]
  },
  {
    icon: 'mdi-file-sign', key: 'menu.promisedCasesTitle', text: '承諾事項', regex: /^\/auth/,
    items: [
      { key: 'menu.promisedCases', text: '本組質詢議題（QA）查詢', link: '/promisedCases', name: 'wra-promisedCases' },
      { key: 'menu.promisedCasesAll', text: '全部質詢議題（QA）查詢', link: '/promisedCasesAll', name: 'wra-promisedCasesAll' },
    ]
  },
  // { icon: 'mdi-file-sign', key: 'menu.promisedCases', text: '承諾事項', link: '/promisedCases', name: 'wra-signin' },
  { icon: 'mdi-waves', key: 'menu.riverZoneTopics', text: '河川區域議題', link: '/riverZoneTopics', name: 'wra-riverZoneTopics' },












]
