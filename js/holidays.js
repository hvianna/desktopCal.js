/**
 * Checks if a date is a holiday in the currently selected country
 *
 * @param {number} year
 * @param {number} month
 * @param {number} day
 *
 * @returns {string} "holiday" if date is a holiday, empty string otherwise.
 */
function checkHoliday( year, month, day ) {

	var date, d, easter,
		holidays = [],
		easterHolidays = [],
		customHolidays = getCustomHolidays();

	switch ( country ) {
		case 'ar':
			holidays = [
				'1-1', '3-24', '4-2', '5-1', '5-25',
				calcObservation( year, 6, 17, country ),
				'6-20', '7-9',
				calcObservation( year, 8, 17, country ),
				calcObservation( year, 10, 12, country ),
				calcObservation( year, 11, 20, country ),
				'12-8', '12-25'
			];
			easterHolidays = [ -48, -47, -2 ];
			break;

		case 'br':
			holidays = [ '1-1',	'4-21',	'5-1', '9-7', '10-12', '11-2', '11-15', '12-25' ];
			easterHolidays = [ -47, -2, 60 ]; // Carnival, Good Friday, Corpus Christi
			break;

		case 'ca':
			holidays = [
				'1-1',
				floatingDoW( 1, year, 5, 18 ), // Victoria Day
				'7-1',
				floatingDoW( 1, year, 8, 1 ),
				floatingDoW( 1, year, 9, 1 ),
				floatingDoW( 1, year, 10, 8 ),
				'11-11', '12-25', '12-26'
			];
			easterHolidays = [ -2, 1 ];
			break;

		case 'es':
			holidays = [ '1-1', '1-6', '5-1', '8-15', '10-12', '11-1', '12-6', '12-8', '12-25' ];
			easterHolidays = [ -3, -2 ]; // Maundy Thursday, Good Friday
			break;

		case 'fr':
			holidays = [ '1-1', '5-1', '5-8', '7-14', '8-15', '11-1', '11-11', '12-25', '12-26' ];
			easterHolidays = [ -2, 1, 39, 50 ]; // Good Friday, Easter Monday, Ascension Day, Whit Monday
			break;

		case 'mx':
			holidays = [
				calcObservation( year, 1, 1, country ),
				floatingDoW( 1, year, 2, 1 ),
				floatingDoW( 1, year, 3, 15 ),
				calcObservation( year, 5, 1, country ),
				calcObservation( year, 9, 16, country ),
				floatingDoW( 1, year, 11, 15 ),
				calcObservation( year, 12, 25, country )
			];
			break;

		case 'pt':
			holidays = [ '1-1', '4-25', '5-1', '6-10', '8-15', '10-5', '11-1', '12-1', '12-8', '12-25' ]
			easterHolidays = [ -47, -2, 60 ]; // Carnival, Good Friday, Corpus Christi
			break;

		case 'uk':
			holidays = [
				calcObservation( year, 1, 1, country ),
				floatingDoW( 1, year, 5, 1 ), floatingDoW( 1, year, 5, 25 ),
				floatingDoW( 1, year, 8, 25 ),
				calcObservation( year, 12, 25, country ), calcObservation( year, 12, 26, country )
			];
			easterHolidays = [ -2, 1 ]; // Good Friday, Easter Monday, Ascension Day, Whit Monday
			break;

		case 'us':
			holidays = [
				'1-1', floatingDoW( 1, year, 1, 15 ),
				floatingDoW( 1, year, 2, 15 ),
				floatingDoW( 1, year, 5, 25 ),
				'7-4',
				floatingDoW( 1, year, 9, 1 ),
				floatingDoW( 1, year, 10, 8 ),
				'11-11', floatingDoW( 4, year, 11, 22 ),
				'12-25'
			];
			break;

		case 'uy':
			holidays = [
				'1-1', '1-6',
				calcObservation( year, 4, 19, country ),
				'5-1',
				calcObservation( year, 5, 18, country ),
				'6-19',	'7-18', '8-25',
				calcObservation( year, 10, 12, country ),
				'11-2', '12-25'
			];
			break;
	}

	// calculates floating holidays based on Easter Day
	if ( easterHolidays.length ) {
		easter = computus( year );
		for ( d of easterHolidays ) {
			date = new Date( easter.getTime() + d * 86400000);
			holidays.push( `${ date.getMonth() + 1 }-${ date.getDate() }` );
		}
	}

	if ( holidays.includes( `${month}-${day}` ) || customHolidays.includes( `${month}-${day}` ) )
		return 'holiday';
	else
		return '';
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
 * Returns the first occurrence of the specified day of week (for floating holidays)
 *
 * @param {number} dow    day of week: 0 - 6 = Sunday - Saturday
 * @param {number} year
 * @param {number} month
 * @param {number} day    starting day to check
 *
 * @returns {string} date in 'month-day' format that falls on the given day of week.
 */
function floatingDoW( dow, year, month, day ) {

	while ( ( new Date( year, month - 1, day ) ).getDay() != dow ) {
		day++;
	}

	return `${month}-${day}`;
}

/**
 * Calculates the observation date for a given holiday according to a country's rules
 *
 * @param {number} year
 * @param {number} month
 * @param {number} day
 * @param {string} country
 *
 * @returns {string} holiday date in 'month-day' format
 */
function calcObservation( year, month, day, country ) {

	var diff = 0,
		date = new Date( year, month - 1, day ),
		dow = date.getDay();

	switch ( country ) {
		case 'mx' :
			if ( dow == 0 )
				diff = 1;
			else if ( dow == 6 )
				diff = -1;
			break;

		case 'uk' :
			if ( dow == 0 )
				diff = 1;
			else if ( dow == 6 )
				diff = 2;
			break;

		case 'ar' :
		case 'uy' :
			if ( dow == 2 )
				diff = -1;
			else if ( dow == 3 )
				diff = -2;
			else if ( dow == 4 )
				diff = 4;
			else if ( dow == 5 )
				diff = 3;
			break;
	}

	date = new Date( date.getTime() + diff * 86400000 );

	return `${date.getMonth()+1}-${date.getDate()}`;
}


/**
 * Reads custom holidays from browser cookie
 *
 * @returns {array} array of custom holidays
 */
function getCustomHolidays() {

	var holidays;

	try {
		holidays = JSON.parse( docCookies.getItem( 'custom-holidays' ) ) || [];
	}
	catch( err ) {
		holidays = [];
	}

	return holidays;
}

/**
 * Populates the table of custom holidays
 */
function listCustomHolidays() {

	var i, d,
		html = '',
		holidays = getCustomHolidays();

	if ( holidays.length ) {
		for ( i = 0; i < holidays.length; i++ ) {
			d = holidays[ i ].split('-');
			html += `<tr><td>${msg[lang].monthNames[ d[0] ]}</td><td>${d[1]}</td><td><button type="button" onclick="deleteCustomHoliday( ${i} );">${msg[lang].delete}</button></td></tr>`;
		}
	}

	return html;
}

/**
 * Adds a custom holiday and saves it to our cookie
 */
function addCustomHoliday() {

	var m, d,
		holidays = getCustomHolidays();

	m = document.getElementById('custom-holiday-month').value;
	d = document.getElementById('custom-holiday-day').value;

	if ( m > 0 && d > 0 ) {
		holidays.push( `${m}-${d}` );
		docCookies.setItem( 'custom-holidays', JSON.stringify( holidays ), Infinity );
		document.querySelector('#custom-holidays-table tbody').innerHTML = listCustomHolidays();
		document.getElementById('custom-holiday-day').value = '';
		updatePreview();
	}
}

/**
 * Deletes a custom holiday and updates our cookie
 *
 * @param {number} i index of the item to remove from the holidays array
 */
function deleteCustomHoliday( i ) {

	var holidays = getCustomHolidays();

	if ( i < holidays.length )
		holidays.splice( i, 1 );

	docCookies.setItem( 'custom-holidays', JSON.stringify( holidays ), Infinity );
	document.querySelector('#custom-holidays-table tbody').innerHTML = listCustomHolidays();
	updatePreview();
}