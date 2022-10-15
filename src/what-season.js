const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  let dateChek = new Date(date),
    month = dateChek.getMonth(),
    season;
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (!(date instanceof Date) || date.hasOwnProperty("toString")) {
    throw Error('Invalid date!');
  }
  if ((month == 11) || (month == 0) || (month == 1)) {
    season = 'winter';
  } else if ((month == 2) || (month == 3) || (month == 4)) {
    season = 'spring';
  } else if ((month == 5) || (month == 6) || (month == 7)) {
    season = 'summer';
  } else if ((month == 8) || (month == 9) || (month == 10)) {
    season = 'autumn';
  } else {
    season = 'Invalid date!';
  }
  return (season);
  // console.log(season);
}
getSeason();

module.exports = {
  getSeason
};
