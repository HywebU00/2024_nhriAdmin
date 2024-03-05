import menuPages from './menus/pages.menu'
import wraPages from './menus/wraPages.menu'
import hywebPages from './menus/hywebPages.menu'

export default {
  // main navigation - side menu
  menu: [{
    text: '總覽',
    key: '',
    items: [
      { icon: 'mdi-view-dashboard-outline', key: 'menu.dashboard', text: 'Dashboard', link: '/dashboard/analytics', name: 'wra-analytics' },
      { icon: 'mdi-view-dashboard-outline', key: 'menu.dashboardDone', text: 'Dashboard', link: '/dashboard/analyticsDone', name: 'wra-analyticsDone' },
      { icon: 'mdi-view-dashboard-outline', key: 'menu.dashboardNotDone', text: 'Dashboard', link: '/dashboard/analyticsNotDone', name: 'wra-analyticsNotDone' },
      { icon: 'mdi-view-dashboard-outline', key: 'menu.dashboardTK', text: 'Dashboard', link: '/dashboard/analyticsTK', name: 'wra-analyticsTK' },
      { icon: 'mdi-view-dashboard-outline', key: 'menu.dashboardQAQuery', text: 'Dashboard', link: '/dashboard/analyticsQAQuery', name: 'wra-analyticsQAQuery' },
      { icon: 'mdi-view-dashboard-outline', key: 'menu.dashboardQA', text: 'Dashboard', link: '/dashboard/analyticsQA', name: 'wra-analyticsQA' },

      // { icon: 'mdi-file-outline', key: 'menu.blank', text: 'Blank Page', link: '/blank' }
    ]
  },
  {
    text: 'Custom',
    key: 'menu.wraFunctions',
    items: wraPages
  },
    // {
    //   text: 'Custom',
    //   key: 'menu.byDepartment',
    //   items: hywebPages
    // }

    // ,{
    //   text: 'Landing Pages',
    //   items: [
    //     { icon: 'mdi-airplane-landing', key: 'menu.landingPage', text: 'Landing Page', link: '/landing' },
    //     { icon: 'mdi-cash-usd-outline', key: 'menu.pricingPage', text: 'Pricing Page', link: '/landing/pricing' }
    //   ]
    // }, {
    //   text: 'Pages',
    //   key: 'menu.pages',
    //   items: menuPages
    // }
  ],

  // footer links
  footer: [
    // {
    //   text: 'Docs',
    //   key: 'menu.front',
    //   href: '/',
    //   target: '_blank'
    // },
    // {
    //   text: '清潔回報',
    //   key: 'menu.cleaningReport',
    //   href: '#/landing/cleaningReport/1234/CUS',
    //   target: '_blank'
    // },
  ]
}
