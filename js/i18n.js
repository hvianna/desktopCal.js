/**
 * i18n functions and global variables
 */

// current language and country
var lang, country;

// countries for holiday selection list
var countries = {
	ar: { name: 'Argentina' },
	br: { name: 'Brasil' },
	ca: { name: 'Canada' },
	es: { name: 'España' },
	fr: { name: 'France' },
	mx: { name: 'Mexico' },
	pt: { name: 'Portugal' },
	uk: { name: 'United Kingdom' },
	us: { name: 'United States' },
	uy: { name: 'Uruguay' }
}

// translations of messages
var msg = {
	en: {
		langName:   'English',
		defCountry: 'us',
		monthNames: [ 'Month', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
		weekDays:   [ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ],
		year:       'Year',
		day:        'Day',
		front:      'Side 1',
		back:       'Side 2',
		design:     'Choose your layout',
		edit:       'Select year, month and image',
		language:   'Language',
		layout:     'Layout',
		desktopCal: 'Desktop calendar',
		wallSingle: 'Wall calendar',
		digitalBg:  'Digital wallpaper',
		screenConf: 'Screen configuration',
		screenRes:  'Screen resolution',
		chgOrient:  'Change orientation',
		calSize:    'Style / Size',
		small:      'Small block',
		medium:     'Medium block',
		large:      'Large block',
		column:     'Vertical bar',
		row:        'Horizontal bar',
		horAlign:   'Horizontal alignment',
		verAlign:   'Vertical alignment',
		left:       'Left',
		horCenter:  'Center',
		right:      'Right',
		top:        'Top',
		verCenter:  'Center',
		bottom:     'Bottom',
		width:      'Width',
		height:     'Height',
		pixels:     'pixels',
		rotate:     'Rotate',
		flipH:      'Flip H',
		flipV:      'Flip V',
		bgColor:    'Background color',
		bgOpacity:  'Background opacity',
		textColor:  'Text color',
		holidayColor:'Holidays color',
		loadImage:  'Load Image',
		holidays:   'Holidays',
		countryholidays: 'National holidays',
		customHolidays: 'Custom holidays',
		none:       'None',
		add:        'Add',
		delete:     'Delete',
		imgNotice:  'Images are NOT uploaded anywhere outside your computer. All processing takes place in your browser.',
		printIt:    'Print It!',
		paperSize:  'Paper size / aspect ratio',
		paperIso:   'A3 or A4',
		paperLegal: 'Legal',
		paperLetter:'Letter',
		paperTabloid:'Tabloid',
		print:      'Generate & Print',
		tipBgImg:   'Configure your printer to print <strong>background images;</strong>',
		tipPortrait:'Set page orientation to <strong>Portrait;</strong>',
		tipMargins: 'Set the minimum margins allowed;',
		tipHeaders: 'Turn off all headers and footers.',
		downloadIt: 'Download your wallpaper',
		download:   'Download',
		fileFormat: 'File format',
		preview:    'Preview',
		fold:       'fold on the dashed lines',
	},

	es: {
		langName:   'Español',
		defCountry: 'us',
		monthNames: [ 'Mes', 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubure', 'Noviembre', 'Diciembre' ],
		weekDays:   [ 'Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb' ],
		year:       'Año',
		day:        'Día',
		front:      'Lado 1',
		back:       'Lado 2',
		design:     'Elige tu diseño',
		edit:       'Seleccione el año, mes e imagen',
		language:   'Idioma',
		layout:     'Layout',
		desktopCal: 'Calendario de escritorio',
		wallSingle: 'Calendario de pared',
		digitalBg:  'Fondo de pantalla',
		screenConf: 'Configuración de pantalla',
		screenRes:  'Resolución de la pantalla',
		chgOrient:  'Cambiar orientación',
		calSize:    'Estilo / Tamaño',
		small:      'Bloque pequeño',
		medium:     'Bloque mediano',
		large:      'Bloque grande',
		column:     'Barra vertical',
		row:        'Barra horizontal',
		horAlign:   'Alineación horizontal',
		verAlign:   'Alineación vertical',
		left:       'Izquierda',
		horCenter:  'Centrado',
		right:      'Derecha',
		top:        'Superior',
		verCenter:  'Centrado',
		bottom:     'Inferior',
		width:      'Anchura',
		height:     'Altura',
		pixels:     'píxeles',
		rotate:     'Girar',
		flipH:      'Invertir H',
		flipV:      'Invertir V',
		bgColor:    'Color de fondo',
		bgOpacity:  'Opacidad del fondo',
		textColor:  'Color de texto',
		holidayColor:'Color de feriados',
		loadImage:  'Cargar Imagen',
		holidays:   'Feriados',
		countryHolidays: 'Feriados nacionales',
		customHolidays: 'Feriados personalizados',
		none:       'Ninguno',
		add:        'Añadir',
		delete:     'Borrar',
		imgNotice:  'Las imágenes NO se envían fuera de su computadora. Todo el procesamiento se lleva a cabo en su navegador.',
		printIt:    '¡Imprímelo!',
		paperSize:  'Tamaño de papel',
		paperIso:   'A3 o A4',
		paperLegal: 'Legal',
		paperLetter:'Carta',
		paperTabloid:'Tabloide',
		print:      'Generar e imprimir',
		tipBgImg:   'Configure su impresora para imprimir <strong>imágenes de fondo;</strong>',
		tipPortrait:'Establezca la orientación de la página en <strong>Retrato;</strong>',
		tipMargins: 'Ajuste los márgenes para los valores más bajos permitidos;',
		tipHeaders: 'Desactive todos los encabezados y pies de página.',
		downloadIt: 'Descarga tu fondo de pantalla',
		download:   'Descargar',
		fileFormat: 'Formato',
		preview:    'Vista previa',
		fold:       'doblar en las líneas punteadas',
	},

	fr: {
		langName:   'Français',
		defCountry: 'fr',
		monthNames: [ 'Mois', 'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre' ],
		weekDays:   [ 'Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam' ],
		year:       'Année',
		day:        'Jour',
		front:      'Côté 1',
		back:       'Côté 2',
		design:     'Choisissez votre design',
		edit:       'Sélectionnez l\'année, le mois et l\'image',
		language:   'Langue',
		layout:     'Layout',
		desktopCal: 'Calendrier de bureau',
		wallSingle: 'Calendrier mural',
		digitalBg:  'Fond d\'écran',
		screenConf: 'Configuration de l\'écran',
		screenRes:  'Résolution d\'écran',
		chgOrient:  'Changer d\'orientation',
		calSize:    'Style / Taille',
		small:      'Petit bloc',
		medium:     'Bloc moyen',
		large:      'Gros bloc',
		column:     'Barre verticale',
		row:        'Barre Horizontale',
		horAlign:   'Alignement horizontale',
		verAlign:   'Alignement verticale',
		left:       'Gauche',
		horCenter:  'Centré',
		right:      'Droit',
		top:        'Haut',
		verCenter:  'Centré',
		bottom:     'Bas',
		width:      'Largeur',
		height:     'Hauteur',
		pixels:     'pixels',
		rotate:     'Tourner',
		flipH:      'Retourner H',
		flipV:      'Retourner V',
		bgColor:    'Couleur du fond',
		bgOpacity:  'Opacité du fond',
		textColor:  'Couleur du texte',
		holidayColor:'Couleur de jours fériés',
		loadImage:  'Charger Image',
		holidays:   'Jours fériés',
		countryHolidays: 'Fêtes nationales',
		customHolidays: 'Jours fériés personnalisées',
		none:       'Aucun',
		add:        'Ajouter',
		delete:     'Effacer',
		imgNotice:  'Les images NE sont PAS envoyées sur votre ordinateur. Tous les traitements ont lieu dans votre navigateur.',
		printIt:    'Imprime le!',
		paperSize:  'Format de papier',
		paperIso:   'A3 ou A4',
		paperLegal: 'Légal',
		paperLetter:'Lettre',
		paperTabloid:'Tabloïde',
		print:      'Générer et imprimer',
		tipBgImg:   'Configurez votre imprimante pour imprimer des <strong>images d’arrière-plan;</strong>',
		tipPortrait:'Définissez l\'orientation de la page sur <strong>Portrait;</strong>',
		tipMargins: 'Ajuster les marges aux valeurs les plus basses autorisées;',
		tipHeaders: 'Désactiver tous les en-têtes et pieds de page.',
		downloadIt: 'Téléchargez votre fond d\'écran',
		download:   'Télécharger',
		fileFormat: 'Format',
		preview:    'Aperçu',
		fold:       'plier sur les lignes pointillées',
	},

	pt: {
		langName:   'Português',
		defCountry: 'br',
		monthNames: [ 'Mês', 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro' ],
		weekDays:   [ 'Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb' ],
		year:       'Ano',
		day:        'Dia',
		front:      'Lado 1',
		back:       'Lado 2',
		design:     'Escolha o layout',
		edit:       'Selecione o ano, o mês e a imagem',
		language:   'Idioma',
		layout:     'Layout',
		desktopCal: 'Calendário de mesa',
		wallSingle: 'Calendário de parede',
		digitalBg:  'Papel de parede digital',
		screenConf: 'Configuração da tela',
		screenRes:  'Resolução da tela',
		chgOrient:  'Alterar orientação',
		calSize:    'Estilo / Tamanho',
		small:      'Quadro pequeno',
		medium:     'Quadro médio',
		large:      'Quadro grande',
		column:     'Barra vertical',
		row:        'Barra horizontal',
		horAlign:   'Alinhamento horizontal',
		verAlign:   'Alinhamento vertical',
		left:       'Esquerda',
		horCenter:  'Centro',
		right:      'Direita',
		top:        'Superior',
		verCenter:  'Centro',
		bottom:     'Inferior',
		width:      'Largura',
		height:     'Altura',
		bgColor:    'Cor de fundo',
		bgOpacity:  'Opacidade do fundo',
		textColor:  'Cor do texto',
		holidayColor:'Cor dos feriados',
		pixels:     'pixels',
		rotate:     'Girar',
		flipH:      'Inverter H',
		flipV:      'Inverter V',
		loadImage:  'Carregar Imagem',
		holidays:   'Feriados',
		countryHolidays: 'Feriados nacionais',
		customHolidays: 'Feriados personalizados',
		none:       'Nenhum',
		add:        'Adicionar',
		delete:     'Excluir',
		imgNotice:  'As imagens NÃO são enviadas para fora de seu computador. Todo o processamento ocorre no seu navegador.',
		printIt:    'Imprima',
		paperSize:  'Formato do papel',
		paperIso:   'A3 ou A4',
		paperLegal: 'Ofício',
		paperLetter:'Carta',
		paperTabloid:'Ofício 2',
		print:      'Gerar e Imprimir',
		tipBgImg:   'Configure sua impressora para imprimir <strong>imagens de fundo;</strong>',
		tipPortrait:'Ajuste a orientação da página para <strong>Retrato;</strong>',
		tipMargins: 'Ajuste as margens para os menores valores permitidos;',
		tipHeaders: 'Desative todos os cabeçalhos e rodapés.',
		downloadIt: 'Baixe seu papel de parede',
		download:   'Baixar',
		fileFormat: 'Formato',
		preview:    'Pré-visualização',
		fold:       'dobre nas linhas tracejadas',
	}
}


function langOptions() {

	var html = '',
		keys = Object.keys( msg );

	for ( var i = 0; i < keys.length; i++ )
		html += `<li><a href="javascript:changeLang('${ keys[ i ] }');" title="${ msg[ keys[ i ] ].langName }"><img src="img/icons8-${ keys[ i ] }-flag.png"></a></li>`;

	return html;
}

function monthOptions() {

	var html = '';

	for ( var i = 0; i < 13; i++ )
		html += `<option value="${ i }">${ msg[ lang ].monthNames[ i ] }</option>`;

	return html;
}

function countryOptions() {

	var html = `<option value="">${msg[lang].none}</option>`,
		keys = Object.keys( countries );

	for ( var i = 0; i < keys.length; i++ )
		html += `<option value="${ keys[ i ] }" ${ keys[ i ] == country ? 'selected' : '' }>${ countries[ keys[ i ] ].name }</option>`;

	return html;
}

function changeCountry( newCountry ) {

	country = newCountry;
	localStorage.setItem( 'country', country );
	updatePreview();
}

function changeLang( newLang ) {

	if ( ! Object.keys( msg ).includes( newLang ) ) // invalid language?
		return false;

	lang = newLang;
	localStorage.setItem( 'lang', lang );

	// save values from input and select elements, so we can restore them after changing the language

	var elems = document.querySelectorAll('input[type="text"], input[type="radio"], input[type="color"], select');
	var values = [];

	for ( var i = 0; i < elems.length; i++ ) {
		if ( elems[ i ].localName == 'select' )
			values[ i ] = elems[ i ].selectedIndex;
		else if ( elems[ i ].attributes.type.nodeValue == 'radio' )
			values[ i ] = elems[ i ].checked;
		else
			values[ i ] = elems[ i ].value;
	}

	// save user selected pictures

	var pics = [];

	for ( let i of [0,1] ) {
		pics[ i ] = document.getElementById( `image${i}` ).src;
		cropper[ i ].destroy();
	}

	// update page HTML

	document.getElementById('container').innerHTML = pageTemplate();
	configUIElements();

	// restore input and select values

	elems = document.querySelectorAll('input[type="text"], input[type="radio"], input[type="color"], select');

	for ( i = 0; i < elems.length; i++ ) {
		if ( elems[ i ].localName == 'select' )
			elems[ i ].selectedIndex = values[ i ];
		else if ( elems[ i ].attributes.type.nodeValue == 'radio' )
			elems[ i ].checked = values[ i ];
		else
			elems[ i ].value = values[ i ];
	}

	// restore calendar pictures

	for ( let i of [0,1] )
		document.getElementById( `image${i}` ).src = pics[ i ];

	// update layout

	changeLayout();
}
