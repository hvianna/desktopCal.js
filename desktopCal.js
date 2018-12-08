/**
 * desktopCal.js
 * Calendar generator built with HTML, CSS & JavaScript.
 *
 * https://github.com/hvianna/desktopCal.js
 *
 * Copyright (C) 2018 Henrique Vianna <hvianna@gmail.com>
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */
var _VERSION = '18.12';

/**
 * Global variables
 */
var monthName = {
	en: [ '', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
	pt: [ '', 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ]
}

var weekDays = {
	en: [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],
	pt: [ 'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb' ]
}

/**
 * Loads an image from user's computer into a calendar panel
 *
 * @param {HTMLInputElement object} obj    handler of the HTML file element
 * @param {string}                  side   'top' or 'bottom' side of the calendar
 */
function loadImage( obj, side ) {

	var reader = new FileReader();

	reader.onload = function() {
		document.querySelector(`.${side}-half .cal-image`).style = `background-image: url(${ reader.result })`;
	}

	reader.readAsDataURL( obj.files[0] );
}

/**
 * Calculates the Easter Day
 * https://stackoverflow.com/a/1284335/2370385
 *
 * @param {number} year
 *
 * @returns {Date object}
 */
function computus( year ) {

	var date, a, b, c, m, d;

	// Instantiate the date object
	date = new Date;
	date.setHours( 0, 0, 0, 0 );
	date.setFullYear( year );

	// Find the golden number
	a = year % 19;

	// Choose which version of the algorithm to use based on the given year
	b = ( 2200 <= year && year <= 2299 ) ? ( ( 11 * a ) + 4 ) % 30 : ( ( 11 * a ) + 5 ) % 30;

	// Determine whether or not to compensate for the previous step
	c = ( ( b === 0 ) || ( b === 1 && a > 10 ) ) ? ( b + 1 ) : b;

	// Use c first to find the month: April or March
	m = ( 1 <= c && c <= 19 ) ? 3 : 2;

	// Then use c to find the full moon after the northward equinox
	d = ( 50 - c ) % 31;

	// Mark the date of that full moon—the "Paschal" full moon
	date.setMonth( m, d );

	// Count forward the number of days until the following Sunday (Easter)
	date.setMonth( m, d + ( 7 - date.getDay() ) );

	// Gregorian Western Easter Sunday
	return date;
}

/**
 * Returns the first day that falls in the specified day of week (for floating holidays)
 * 
 * @param {number} dow    day of week: 0 - 6 = Sunday - Saturday
 * @param {number} year
 * @param {number} month
 * @param {number} day    starting day to check
 *
 * @returns {number} day of month that falls in the desired day of week.
 */
function floatingDay( dow, year, month, day ) {

	while ( ( new Date( year, month - 1, day ) ).getDay() != dow ) {
		day++;
	}

	return day;
}

/**
 * Checks if date is a holiday in the specified country
 *
 * @param {string} country
 * @param {number} year
 * @param {number} month
 * @param {number} day
 *
 * @returns {string} "holiday" if it's a holiday, empty string otherwise.
 */
function checkHoliday( country, year, month, day ) {

	var holidays, date, m, n;

	switch ( country ) {
		case 'br':
			holidays = {
				1: [ 1 ],
				4: [ 21 ],
				5: [ 1 ],
				9: [ 7 ],
				10: [ 12 ],
				11: [ 2, 15 ],
				12: [ 25 ]
			}

			// calculates floating BR holidays, based on Easter Day
			date = computus( year );

			for ( n of [ -2, -45, 107 ] ) { // Good Friday, Carnival, Corpus Christ

				date.setDate( date.getDate() + n );

				var m = date.getMonth() + 1;
				if ( holidays.hasOwnProperty( m ) )
					holidays[ m ].push( date.getDate() );
				else
					holidays[ m ] = [ date.getDate() ];
			}

			break;

		case 'us':
			// https://en.wikipedia.org/wiki/Federal_holidays_in_the_United_States
			holidays = {
				1: [ 1, floatingDay( 1, year, 1, 15 ) ],
				2: [ floatingDay( 1, year, 2, 15 ) ],
				5: [ floatingDay( 1, year, 5, 25 ) ],
				7: [ 4 ],
				9: [ floatingDay( 1, year, 9, 1 ) ],
				10: [ floatingDay( 1, year, 10, 8 ) ], 
				11: [ 11, floatingDay( 4, year, 11, 22 ) ],
				12: [ 25 ]
			}
			break;
	}

	if ( holidays.hasOwnProperty( month ) && holidays[ month ].includes( day ) )
		return 'holiday';
	else
		return '';
}

/**
 * Generates the calendar for the specified month / year
 *
 * @param {number} month
 * @param {number} year
 *
 * @returns {string} HTML table for the calendar
 */
function generateCalendar( month, year, lang = 'en', country = 'us' ) {

	var ndays = [ 0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

	var html, dow, prevMon,	i, d;

	if ( ( year & 3 ) == 0 && ( ( year % 25 ) != 0 || ( year & 15 ) == 0 ) )
		ndays[2]++; // leap year

	prevMon = month > 1 ? month - 1 : 12;

	dow = ( new Date( year, month - 1, 1 ) ).getDay();
	html = '<table><tr>';

	for ( i = 0; i < 7; i++ )
		html += '<th>' + weekDays[ lang ][ i ];

	html += '<tr>'

	for ( i = dow, d = ndays[ prevMon ] - i + 1; i > 0; i--, d++ )
		html += '<td class="prev-month ' + checkHoliday( country, month == 1 ? year - 1 : year, prevMon, d ) + '">' + d;

	for ( i = 1; i <= ndays[ month ]; i++ ) {
		html += '<td class="' + checkHoliday( country, year, month, i ) + '">' + i;
		dow++;
		if ( dow == 7 ) {
			html += '<tr>';
			dow = 0;
		}
	}

	d = 1;
	if ( month < 12 ) 
		month++;
	else {
		month = 1;
		year++;
	}
	while ( dow > 0 && dow < 7 ) {
		html += '<td class="next-month ' + checkHoliday( country, year, month, d ) + '">' + d;
		d++;
		dow++;
	}

	html += '</table>';

	return html;

}

/**
 * Updates the calendar preview according to the options selected by the user
 */
function updatePreview() {

	var area = [ document.getElementById('top-half'), document.getElementById('bottom-half') ],
		year = [ document.getElementById('top-year').value, document.getElementById('bottom-year').value ],
		month = [ document.getElementById('top-month').value, document.getElementById('bottom-month').value ],
		lang = document.getElementById('lang').value,
		country = document.getElementById('country').value;

	var i, j;

	for ( i = 0; i < 2; i++ ) {
		if ( month[ i ] && year[ i ] ) {
			area[ i ].querySelector('.cal-title').innerText = monthName[ lang ][ month[ i ] ] + ' ' + year[ i ];
			area[ i ].querySelector('.calendar').innerHTML = generateCalendar( month[ i ], year[ i ], lang, country );
		}
	}
}

/**
 * Initialize user interface on page load
 */
function initialize() {

	var images = [ 'xmas.jpg', 'rio.jpg', 'allure.jpg', 'charqueada.jpg', 'st-thomas.jpg', 'peach-flower.jpg' ];

	var area = document.getElementById('cal-header'),
		d = new Date(),
		month = d.getMonth() + 1,
		year = d.getFullYear();

	// display current month calendar on site header
	area.querySelector('.cal-image').style = `background-image: url(img/${ images[ Math.floor( Math.random() * images.length ) ] })`;
	area.querySelector('.cal-title').innerText = monthName.en[ month ] + ' ' + year;
	area.querySelector('.calendar').innerHTML = generateCalendar( month, year );

	// suggest current month for calendar front...
	document.getElementById('bottom-year').value = year;
	document.getElementById('bottom-month').selectedIndex = month;

	if ( month == 12 ) {
		month = 1;
		year++;
	}
	else
		month++;

	// ...and next month for calendar back
	document.getElementById('top-year').value = year;
	document.getElementById('top-month').selectedIndex = month;

	updatePreview();

}

window.onload = initialize;
