var I18n = I18n || {};
I18n.translations = {"en":{"date":{"formats":{"default":"%Y-%m-%d","short":"%b %d","long":"%B %d, %Y"},"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"month_names":[null,"January","February","March","April","May","June","July","August","September","October","November","December"],"abbr_month_names":[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"order":["year","month","day"]},"time":{"formats":{"default":"%a, %d %b %Y %H:%M:%S %z","short":"%d %b %H:%M","long":"%B %d, %Y %H:%M"},"am":"am","pm":"pm"},"support":{"array":{"words_connector":", ","two_words_connector":" and ","last_word_connector":", and "}},"errors":{"format":"%{attribute} %{message}","messages":{"inclusion":"is not included in the list","exclusion":"is reserved","invalid":"is invalid","confirmation":"doesn't match confirmation","accepted":"must be accepted","empty":"can't be empty","blank":"can't be blank","too_long":"is too long (maximum is %{count} characters)","too_short":"is too short (minimum is %{count} characters)","wrong_length":"is the wrong length (should be %{count} characters)","not_a_number":"is not a number","not_an_integer":"must be an integer","greater_than":"must be greater than %{count}","greater_than_or_equal_to":"must be greater than or equal to %{count}","equal_to":"must be equal to %{count}","less_than":"must be less than %{count}","less_than_or_equal_to":"must be less than or equal to %{count}","odd":"must be odd","even":"must be even"}},"activerecord":{"errors":{"messages":{"taken":"has already been taken","record_invalid":"Validation failed: %{errors}"}}},"number":{"format":{"separator":".","delimiter":",","precision":3,"significant":false,"strip_insignificant_zeros":false},"currency":{"format":{"format":"%u%n","unit":"$","separator":".","delimiter":",","precision":2,"significant":false,"strip_insignificant_zeros":false}},"percentage":{"format":{"delimiter":""}},"precision":{"format":{"delimiter":""}},"human":{"format":{"delimiter":"","precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"kb":"KB","mb":"MB","gb":"GB","tb":"TB"}},"decimal_units":{"format":"%n %u","units":{"unit":"","thousand":"Thousand","million":"Million","billion":"Billion","trillion":"Trillion","quadrillion":"Quadrillion"}}}},"datetime":{"distance_in_words":{"half_a_minute":"half a minute","less_than_x_seconds":{"one":"less than 1 second","other":"less than %{count} seconds"},"x_seconds":{"one":"1 second","other":"%{count} seconds"},"less_than_x_minutes":{"one":"less than a minute","other":"less than %{count} minutes"},"x_minutes":{"one":"1 minute","other":"%{count} minutes"},"about_x_hours":{"one":"about 1 hour","other":"about %{count} hours"},"x_days":{"one":"1 day","other":"%{count} days"},"about_x_months":{"one":"about 1 month","other":"about %{count} months"},"x_months":{"one":"1 month","other":"%{count} months"},"about_x_years":{"one":"about 1 year","other":"about %{count} years"},"over_x_years":{"one":"over 1 year","other":"over %{count} years"},"almost_x_years":{"one":"almost 1 year","other":"almost %{count} years"}},"prompts":{"year":"Year","month":"Month","day":"Day","hour":"Hour","minute":"Minute","second":"Seconds"}},"helpers":{"select":{"prompt":"Please select"},"submit":{"create":"Create %{model}","update":"Update %{model}","submit":"Save %{model}"}},"swiss_knife":{"submit":"Submit","cancel":"Cancel"},"hello":"Hello world","simple_form":{"yes":"Yes","no":"No","required":{"text":"required","mark":"*"},"error_notification":{"default_message":"Some errors were found, please take a look:"}}},"pt-BR":{"swiss_knife":{"submit":"Enviar","cancel":"Cancelar"},"date":{"formats":{"default":"%d/%m/%Y","short":"%d de %B","long":"%d de %B de %Y"},"day_names":["Domingo","Segunda","Ter\u00e7a","Quarta","Quinta","Sexta","S\u00e1bado"],"abbr_day_names":["Dom","Seg","Ter","Qua","Qui","Sex","S\u00e1b"],"month_names":[null,"Janeiro","Fevereiro","Mar\u00e7o","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],"abbr_month_names":[null,"Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"],"order":["day","month","year"]},"time":{"formats":{"default":"%A, %d de %B de %Y, %H:%M h","short":"%d/%m, %H:%M h","long":"%A, %d de %B de %Y, %H:%M h"},"am":"","pm":""},"support":{"array":{"words_connector":", ","two_words_connector":" e ","last_word_connector":" e "},"select":{"prompt":"Por favor selecione"}},"number":{"format":{"separator":",","delimiter":".","precision":3,"significant":false,"strip_insignificant_zeros":false},"currency":{"format":{"format":"%u %n","unit":"R$","separator":",","delimiter":".","precision":2,"significant":false,"strip_insignificant_zeros":false}},"percentage":{"format":{"delimiter":"."}},"precision":{"format":{"delimiter":"."}},"human":{"format":{"delimiter":".","precision":2,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"kb":"KB","mb":"MB","gb":"GB","tb":"TB"}},"decimal_units":{"format":"%n %u","units":{"unit":"","thousand":"mil","million":{"one":"milh\u00e3o","other":"milh\u00f5es"},"billion":{"one":"bilh\u00e3o","other":"bilh\u00f5es"},"trillion":{"one":"trilh\u00e3o","other":"trilh\u00f5es"},"quadrillion":{"one":"quatrilh\u00e3o","other":"quatrilh\u00f5es"}}}}},"datetime":{"distance_in_words":{"half_a_minute":"meio minuto","less_than_x_seconds":{"one":"menos de 1 segundo","other":"menos de %{count} segundos"},"x_seconds":{"one":"1 segundo","other":"%{count} segundos"},"less_than_x_minutes":{"one":"menos de um minuto","other":"menos de %{count} minutos"},"x_minutes":{"one":"1 minuto","other":"%{count} minutos"},"about_x_hours":{"one":"aproximadamente 1 hora","other":"aproximadamente %{count} horas"},"x_days":{"one":"1 dia","other":"%{count} dias"},"about_x_months":{"one":"aproximadamente 1 m\u00eas","other":"aproximadamente %{count} meses"},"x_months":{"one":"1 m\u00eas","other":"%{count} meses"},"about_x_years":{"one":"aproximadamente 1 ano","other":"aproximadamente %{count} anos"},"over_x_years":{"one":"mais de 1 ano","other":"mais de %{count} anos"},"almost_x_years":{"one":"quase 1 ano","other":"quase %{count} anos"}},"prompts":{"year":"Ano","month":"M\u00eas","day":"Dia","hour":"Hora","minute":"Minuto","second":"Segundo"}},"helpers":{"select":{"prompt":"Por favor selecione"},"submit":{"create":"Criar %{model}","update":"Atualizar %{model}","submit":"Salvar %{model}","user":{"create":"Cadastrar"}},"female":"Feminino","male":"Masculino"},"errors":{"format":"%{attribute} %{message}","template":{"header":{"one":"N\u00e3o foi poss\u00edvel gravar %{model}: 1 erro","other":"N\u00e3o foi poss\u00edvel gravar %{model}: %{count} erros."},"body":"Por favor, verifique o(s) seguinte(s) campo(s):"},"messages":{"inclusion":"n\u00e3o est\u00e1 inclu\u00eddo na lista","exclusion":"n\u00e3o est\u00e1 dispon\u00edvel","invalid":"n\u00e3o \u00e9 v\u00e1lido","confirmation":"n\u00e3o est\u00e1 de acordo com a confirma\u00e7\u00e3o","accepted":"deve ser aceito","empty":"n\u00e3o pode ficar vazio","blank":"n\u00e3o pode ficar em branco","too_long":"\u00e9 muito longo (m\u00e1ximo: %{count} caracteres)","too_short":"\u00e9 muito curto (m\u00ednimo: %{count} caracteres)","wrong_length":"n\u00e3o possui o tamanho esperado (%{count} caracteres)","not_a_number":"n\u00e3o \u00e9 um n\u00famero","not_an_integer":"n\u00e3o \u00e9 um n\u00famero inteiro","greater_than":"deve ser maior que %{count}","greater_than_or_equal_to":"deve ser maior ou igual a %{count}","equal_to":"deve ser igual a %{count}","less_than":"deve ser menor que %{count}","less_than_or_equal_to":"deve ser menor ou igual a %{count}","odd":"deve ser \u00edmpar","even":"deve ser par"}},"activerecord":{"errors":{"template":{"header":{"one":"N\u00e3o foi poss\u00edvel gravar %{model}: 1 erro","other":"N\u00e3o foi poss\u00edvel gravar %{model}: %{count} erros."},"body":"Por favor, verifique o(s) seguinte(s) campo(s):"},"messages":{"taken":"j\u00e1 est\u00e1 em uso","record_invalid":"A valida\u00e7\u00e3o falhou: %{errors}","inclusion":"n\u00e3o est\u00e1 inclu\u00eddo na lista","exclusion":"n\u00e3o est\u00e1 dispon\u00edvel","invalid":"n\u00e3o \u00e9 v\u00e1lido","confirmation":"n\u00e3o est\u00e1 de acordo com a confirma\u00e7\u00e3o","accepted":"deve ser aceito","empty":"n\u00e3o pode ficar vazio","blank":"n\u00e3o pode ficar em branco","too_long":"\u00e9 muito longo (m\u00e1ximo: %{count} caracteres)","too_short":"\u00e9 muito curto (m\u00ednimo: %{count} caracteres)","wrong_length":"n\u00e3o possui o tamanho esperado (%{count} caracteres)","not_a_number":"n\u00e3o \u00e9 um n\u00famero","not_an_integer":"n\u00e3o \u00e9 um n\u00famero inteiro","greater_than":"deve ser maior que %{count}","greater_than_or_equal_to":"deve ser maior ou igual a %{count}","equal_to":"deve ser igual a %{count}","less_than":"deve ser menor que %{count}","less_than_or_equal_to":"deve ser menor ou igual a %{count}","odd":"deve ser \u00edmpar","even":"deve ser par","invalid_cpf":"N\u00famero do CPF inv\u00e1lido","invalid_email":"Endere\u00e7o de e-mail inv\u00e1lido"},"full_messages":{"format":"%{attribute} %{message}"}}},"flash_messages":{"users":{"create":{"notice":"Sua inscri\u00e7\u00e3o foi feita com sucesso!"}}},"links":{"home":"In\u00edcio","organization":"Organiza\u00e7\u00e3o","register":"Inscri\u00e7\u00e3o","schedule":"Programa\u00e7\u00e3o","speakers":"Palestrantes","sponsors":"Patroc\u00ednadores","venue":"Local"},"texts":{"greeting":"DevInVale, 05 nov 2011 (s\u00e1bado)"},"titles":{"home":{"index":"In\u00edcio"},"speakers":{"index":"Palestrantes"},"users":{"new":"Inscri\u00e7\u00e3o"}},"user_mailer":{"confirmation":{"subject":"[DevInVale] Confirma\u00e7\u00e3o de inscri\u00e7\u00e3o"}},"simple_form":{"yes":"Sim","no":"N\u00e3o","required":{"text":"Obrigat\u00f3rio","mark":"*"},"error_notification":{"default_message":"Alguns erros foram encontrados, por favor confira:"},"labels":{"name":"Nome:","email":"E-mail:","remember_me":"Lembre-me","user":{"city_name":"Cidade:","college":"Faculdade:","company":"Empresa que trabalha:","cpf":"CPF:","foreigner":"Voc\u00ea \u00e9 estrangeiro?","ita_badge":"Voc\u00ea possui crach\u00e1 do ITA?","ita_student":"Voc\u00ea \u00e9 aluno do ITA?","state_name":"Estado:","twitter":"Twitter:"}},"hints":{"password":"Use somente caracteres de [A..Z], [0..9] e n\u00e3o utilize ponto final.","password_confirmation":"Repita sua senha.","twitter":"Digite somente seu usu\u00e1rio, sem a URL.","cpf":"Digite somente n\u00fameros."}}},"en-US":{"date":{"formats":{"default":"%Y-%m-%d","short":"%b %d","long":"%B %d, %Y"},"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"month_names":[null,"January","February","March","April","May","June","July","August","September","October","November","December"],"abbr_month_names":[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"order":["year","month","day"]},"time":{"formats":{"default":"%a, %d %b %Y %H:%M:%S %z","short":"%d %b %H:%M","long":"%B %d, %Y %H:%M"},"am":"am","pm":"pm"},"support":{"array":{"words_connector":", ","two_words_connector":" and ","last_word_connector":", and "},"select":{"prompt":"Please select"}},"number":{"format":{"separator":".","delimiter":",","precision":3,"significant":false,"strip_insignificant_zeros":false},"currency":{"format":{"format":"%u%n","unit":"$","separator":".","delimiter":",","precision":2,"significant":false,"strip_insignificant_zeros":false}},"percentage":{"format":{"delimiter":""}},"precision":{"format":{"delimiter":""}},"human":{"format":{"delimiter":"","precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"kb":"KB","mb":"MB","gb":"GB","tb":"TB"}},"decimal_units":{"format":"%n %u","units":{"unit":"","thousand":"Thousand","million":"Million","billion":"Billion","trillion":"Trillion","quadrillion":"Quadrillion"}}}},"datetime":{"distance_in_words":{"half_a_minute":"half a minute","less_than_x_seconds":{"one":"less than 1 second","other":"less than %{count} seconds"},"x_seconds":{"one":"1 second","other":"%{count} seconds"},"less_than_x_minutes":{"one":"less than a minute","other":"less than %{count} minutes"},"x_minutes":{"one":"1 minute","other":"%{count} minutes"},"about_x_hours":{"one":"about 1 hour","other":"about %{count} hours"},"x_days":{"one":"1 day","other":"%{count} days"},"about_x_months":{"one":"about 1 month","other":"about %{count} months"},"x_months":{"one":"1 month","other":"%{count} months"},"about_x_years":{"one":"about 1 year","other":"about %{count} years"},"over_x_years":{"one":"over 1 year","other":"over %{count} years"},"almost_x_years":{"one":"almost 1 year","other":"almost %{count} years"}},"prompts":{"year":"Year","month":"Month","day":"Day","hour":"Hour","minute":"Minute","second":"Seconds"}},"helpers":{"select":{"prompt":"Please select"},"submit":{"create":"Create %{model}","update":"Update %{model}","submit":"Save %{model}"}},"errors":{"format":"%{attribute} %{message}","messages":{"inclusion":"is not included in the list","exclusion":"is reserved","invalid":"is invalid","confirmation":"doesn't match confirmation","accepted":"must be accepted","empty":"can't be empty","blank":"can't be blank","too_long":{"one":"is too long (maximum is 1 character)","other":"is too long (maximum is %{count} characters)"},"too_short":{"one":"is too short (minimum is 1 character)","other":"is too short (minimum is %{count} characters)"},"wrong_length":{"one":"is the wrong length (should be 1 character)","other":"is the wrong length (should be %{count} characters)"},"not_a_number":"is not a number","not_an_integer":"must be an integer","greater_than":"must be greater than %{count}","greater_than_or_equal_to":"must be greater than or equal to %{count}","equal_to":"must be equal to %{count}","less_than":"must be less than %{count}","less_than_or_equal_to":"must be less than or equal to %{count}","odd":"must be odd","even":"must be even"}},"activerecord":{"errors":{"template":{"header":{"one":"1 error prohibited this %{model} from being saved","other":"%{count} errors prohibited this %{model} from being saved"},"body":"There were problems with the following fields:"},"messages":{"taken":"has already been taken","record_invalid":"Validation failed: %{errors}","inclusion":"is not included in the list","exclusion":"is reserved","invalid":"is invalid","confirmation":"doesn't match confirmation","accepted":"must be accepted","empty":"can't be empty","blank":"can't be blank","too_long":{"one":"is too long (maximum is 1 character)","other":"is too long (maximum is %{count} characters)"},"too_short":{"one":"is too short (minimum is 1 character)","other":"is too short (minimum is %{count} characters)"},"wrong_length":{"one":"is the wrong length (should be 1 character)","other":"is the wrong length (should be %{count} characters)"},"not_a_number":"is not a number","not_an_integer":"must be an integer","greater_than":"must be greater than %{count}","greater_than_or_equal_to":"must be greater than or equal to %{count}","equal_to":"must be equal to %{count}","less_than":"must be less than %{count}","less_than_or_equal_to":"must be less than or equal to %{count}","odd":"must be odd","even":"must be even"},"full_messages":{"format":"%{attribute} %{message}"}}}}};