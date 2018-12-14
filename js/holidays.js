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

	var holidays, easter, date, d,
		region = document.getElementById('region').value;

	switch ( country ) {
		case 'br':
			holidays = [ '1-1',	'4-21',	'5-1', '9-7', '10-12', '11-2', '11-15', '12-25' ];

			// calculates floating holidays based on Easter Day
			easter = computus( year );
			for ( d of [ -48, -47, -2, 60 ] ) { // Carnival (monday and tuesday), Good Friday, Corpus Christ
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
					holidays.push( '11-30' ); // 4-21 fundação de Bra ia
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
					holidays.push( `3-${ floatingDoW( 0, year, 3, 1 ) }`, '6-24' );
					break;
				case 'PI':
					holidays.push( '3-13', '10-19' );
					break;
				case 'RJ':
					holidays.push( '1-20', '4-23', `3-${ floatingDoW( 1, year, 10, 15 ) }`, '11-20' );
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
					break;
			}
			break;

		case 'us':
			holidays = [
				'1-1', `1-${ floatingDoW( 1, year, 1, 15 ) }`,
				`2-${ floatingDoW( 1, year, 2, 15 ) }`,
				`5-${ floatingDoW( 1, year, 5, 25 ) }`,
				'7-4',
				`9-${ floatingDoW( 1, year, 9, 1 ) }`,
				`10-${ floatingDoW( 1, year, 10, 8 ) }`,
				'11-11', `11-${ floatingDoW( 4, year, 11, 22 ) }`,
				'12-25'
			];
			break;

		case 'fr':
			holidays = [ '1-1', '5-1', '5-8', '7-14', '8-15', '11-1', '11-11', '12-25', '12-26' ];

			easter = computus( year );
			for ( d of [ -2, 1, 39, 50 ] ) { // Good Friday, Easter Monday, Ascension Day, Whit Monday
				date = new Date( easter.getTime() + d * 86400000 );
				holidays.push( `${ date.getMonth() + 1 }-${ date.getDate() }` );
			}
			break;
	}

	if ( holidays.includes( `${month}-${day}` ) )
		return 'holiday';
	else
		return '';
}
