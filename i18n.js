/**
 * i18n functions and global variables
 */

var lang; // current language

var msg = {
	en: {
		design:     'Design your calendar',
		language:   'Language',
		front:      'Front',
		back:       'Back',
		loadImage:  'Load Image',
		holidays:   'National Holidays', 
		year:       'Year',
		imgNotice:  'Images are NOT uploaded anywhere outside your computer. All processing takes place on your browser.',
		printIt:    'Print It!',
		print:      'Print',
		tipBgImg:   'Configure your printer to print <strong>background images;</strong>',
		tipMargins: 'Set the minimum margins allowed;',
		tipHeaders: 'Turn off all headers and footers.',
		preview:    'Preview',
		fold:       'fold on all dashed lines',
	},

	pt: {
		design:     'Monte seu calendário',
		language:   'Idioma',
		front:      'Frente',
		back:       'Verso',
		loadImage:  'Carregar Imagem',
		holidays:   'Feriados Nacionais', 
		year:       'Ano',
		imgNotice:  'As imagens NÃO são enviadas para fora de seu computador. Todo o processamento ocorre dentro do seu navegador.',
		printIt:    'Imprimir',
		print:      'Imprimir',
		tipBgImg:   'Configure sua impressora para imprimir <strong>imagens de fundo;</strong>',
		tipMargins: 'Ajuste as margens para os valores mínimos permitidos;',
		tipHeaders: 'Desative todos os cabeçalhos e rodapés.',
		preview:    'Prévia',
		fold:       'dobre nas linhas pontilhadas',
	}
}

var monthName = {
	en: [ 'Month', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
	pt: [ 'Mês', 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ]
}

var weekDays = {
	en: [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],
	pt: [ 'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb' ]
}


function langOptions() {

	var languages = [
		{ value: 'en', text: 'English' },
		{ value: 'es', text: 'Español' },
		{ value: 'fr', text: 'Français' },
		{ value: 'pt', text: 'Português' },
	];

	var html = '';

	for ( var i = 0; i < languages.length; i++ )
		html += `<option value="${ languages[ i ].value }" ${ languages[ i ].value == lang ? ' selected' : '' }>${ languages[ i ].text }</option>`;

	return html;
}

function monthOptions() {

	var html = '';

	for ( var i = 0; i < 13; i++ )
		html += `<option value="${ i }">${ monthName[ lang ][ i ] }</option>`;

	return html;
}

function countryOptions() {

	var countries = [
		{ value: 'us', text: 'United States' },
		{ value: 'br', text: 'Brasil' },
	];

	var html = '';

	for ( var i = 0; i < countries.length; i++ )
		html += `<option value="${ countries[ i ].value }">${ countries[ i ].text }</option>`;

	return html;
}


function changeLang( obj ) {

	if ( typeof obj == 'object' )
		lang = obj.value;
	else
		lang = obj;

	// save values from input and select elements, so we can restore them after changing the language

	var elems = document.querySelectorAll('input[type="text"], select:not(#lang)');
	var values = [];

	for ( i = 0; i < elems.length; i++ ) {
		if ( elems[ i ].localName == 'select' )
			values[ i ] = elems[ i ].selectedIndex;
		else
			values[ i ] = elems[ i ].value;
	}

//	console.log(elems);

	document.getElementById('container').innerHTML = pageTemplate();

	elems = document.querySelectorAll('input[type="text"], select:not(#lang)');

	for ( i = 0; i < elems.length; i++ ) {
		if ( elems[ i ].localName == 'select' )
			elems[ i ].selectedIndex = values[ i ];
		else
			elems[ i ].value = values[ i ];
	}

	updateSiteHeader();
	updatePreview();

}