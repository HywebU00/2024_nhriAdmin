// time format for vue filter `| formatDate`
export default {
  // https://momentjs.com/timezone/docs/#/using-timezones/
  // zone: 'America/New_York',
  zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  // zone: 'Africa/Abidjan',
  // https://momentjs.com/docs/#/displaying/format/
  format: 'LL'
}
