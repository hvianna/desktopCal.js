/**
 * Checks if date is a holiday in currently selected country and region
 *
 * @param {number} year
 * @param {number} month
 * @param {number} day
 *
 * @returns {string} "holiday" if date is a holiday, empty string otherwise.
 */
function checkHoliday( year, month, day ) {

	var holidays, date, d,
		easter = computus( year ),
		region = document.getElementById('region').value;

	switch ( country ) {
		case 'br':
			holidays = [ '1-1',	'4-21',	'5-1', '9-7', '10-12', '11-2', '11-15', '12-25' ];

			// calculates floating holidays based on Easter Day
			for ( d of [ -48, -47, -2, 60 ] ) { // Carnival (monday and tuesday), Good Friday, Corpus Christi
				date = new Date( easter.getTime() + d * 86400000);
				holidays.push( `${ date.getMonth() + 1 }-${ date.getDate() }` );
			}

			switch ( region ) {
				case 'AC':
					holidays.push( '6-15', '8-6', '9-5', '11-17' );
					break;
				case 'AL':
					holidays.push( '6-24', '6-29', '9-16', '11-20' );
					break;
				case 'AP':
					holidays.push( '3-19', '10-5', '11-20' );
					break;
				case 'AM':
					holidays.push( '9-5', '10-24', '11-20', '12-8' );
					break;
				case 'BA':
					holidays.push( '7-2' );
					break;
				case 'CE':
					holidays.push( '3-25' );
					break;
				case 'DF':
					holidays.push( '11-30' ); // 4-21 fundação de Brasília
					break;
				case 'ES':
					holidays.push( '5-23' );
					break;
				case 'GO':
					holidays.push( '7-26' );
					break;
				case 'MA':
					holidays.push( '7-28', '9-8', '12-8' );
					break;
				case 'MG':
					break; // 4-21 Data magna do estado
				case 'MT':
					holidays.push( '11-20' );
					break;
				case 'MS':
					holidays.push( '10-11', '11-20' );
					break;
				case 'PA':
					holidays.push( '8-15', '12-8' );
					break;
				case 'PB':
					holidays.push( '8-5' );
					break;
				case 'PR':
					holidays.push( '9-8', '12-19' );
					break;
				case 'PE':
					holidays.push( floatingDoW( 0, year, 3, 1 ), '6-24' );
					break;
				case 'PI':
					holidays.push( '3-13', '10-19' );
					break;
				case 'RJ':
					holidays.push( '1-20', '4-23', floatingDoW( 1, year, 10, 15 ), '11-20' );
					break;
				case 'RN':
					holidays.push( '1-6', '6-29', '10-3', '11-21' );
					break;
				case 'RS':
					holidays.push( '2-2', '9-20' );
					break;
				case 'RO':
					holidays.push( '1-4' );
					break;
				case 'RR':
					holidays.push( '10-5', '12-8' );
					break;
				case 'SC':
					holidays.push( '8-11' );
					break;
				case 'SP':
					holidays.push( '7-9', '11-20' );
					break;
				case 'SE':
					holidays.push( '7-8' );
					break;
				case 'TO':
					holidays.push( '3-18', '9-8', '10-5' );
			}
			break;

		case 'es':
			holidays = [ '1-1', '1-6', '5-1', '8-15', '10-12', '11-1', '12-6', '12-8', '12-25' ];

			for ( d of [ -3, -2 ] ) { // Maundy Thursday, Good Friday
				date = new Date( easter.getTime() + d * 86400000 );
				holidays.push( `${ date.getMonth() + 1 }-${ date.getDate() }` );
			}
			break;

		case 'fr':
			holidays = [ '1-1', '5-1', '5-8', '7-14', '8-15', '11-1', '11-11', '12-25', '12-26' ];

			for ( d of [ -2, 1, 39, 50 ] ) { // Good Friday, Easter Monday, Ascension Day, Whit Monday
				date = new Date( easter.getTime() + d * 86400000 );
				holidays.push( `${ date.getMonth() + 1 }-${ date.getDate() }` );
			}
			break;

		case 'pt':
			holidays = [ '1-1', '4-25', '5-1', '6-10', '8-15', '10-5', '11-1', '12-1', '12-8', '12-25' ]

			for ( d of [ -47, -2, 60 ] ) { // Carnival, Good Friday, Corpus Christi
				date = new Date( easter.getTime() + d * 86400000);
				holidays.push( `${ date.getMonth() + 1 }-${ date.getDate() }` );
			}

			switch ( region ) {
				case 'Açores':
					holidays.push( '6-1' );
					break;

				case 'Madeira':
					holidays.push( '7-1', '12-26' );
			}
			break;

		case 'uk':
			holidays = [
				checkSatSun( year, 1, 1 ),
				floatingDoW( 1, year, 5, 1 ), floatingDoW( 1, year, 5, 25 ),
				floatingDoW( 1, year, 8, 25 ),
				checkSatSun( year, 12, 25 ), checkSatSun( year, 12, 26 )
			];

			for ( d of [ -2, 1 ] ) { // Good Friday, Easter Monday, Ascension Day, Whit Monday
				date = new Date( easter.getTime() + d * 86400000 );
				holidays.push( `${ date.getMonth() + 1 }-${ date.getDate() }` );
			}

			if ( region == 'N. Ireland' )
				holidays.push( checkSatSun( year, 3, 17 ), checkSatSun( year, 7, 12 ) );

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
	}

	if ( holidays.includes( `${month}-${day}` ) )
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
 * Checks if a holiday falls on a saturday or sunday and adjusts the date for the following monday
 * (for UK holidays)
 *
 * @param {number} year
 * @param {number} month
 * @param {number} day
 *
 * @returns {string} holiday date in 'month-day' format
 */
function checkSatSun( year, month, day ) {

	var date;

	date = new Date( year, month - 1, day );
	if ( date.getDay() == 0 )
		day++;
	else if ( date.getDay() == 6 )
		day += 2;

	return `${month}-${day}`;
}