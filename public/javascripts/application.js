App['before'] = function() {
	var tags = 'article|header|time|footer|section'.split('|');
	for (var i = 0, tag; tag = tags[i]; i++) {
		document.createElement(tag);
	}
};

App['users'] = {
	'new': function() {
		$('#user_cpf').mask('999.999.999-99');
		$('#user_state_name').attr('maxlength', '2').css('text-transform', 'uppercase');
	}
};
