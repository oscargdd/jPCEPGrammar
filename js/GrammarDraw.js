/**

pcep-grammar

Javascript PCEP grammar library

Supported RFCS:

RFC 5440, RFC 5520, RFC 5521, RFC 5886

Oscar Gonzalez de Dios

*/

jPCEPGrammarDraw = {};

(function (gd,pcep,$,undefined) {

	// Version
	gd.version = "0.6-dev"


	//FIXME: Add list of shown constructs to avoid repeating them


		gd.getHTML = function (element, RFCfilter, optional) {
			var newElem;
			console.log("Entrando en "+element.name+" con type "+element.type);
			//Check if the element's RFC is in the filter, otherwise, don't show it
			var found = $.inArray(element.rfc, RFCfilter) > -1;
			if (found) {
				if (element.type == "object"){
					//Check if the object is in the filter, otherwise, don't show it					
						newElem = $('<span />');
						newElem.addClass("object_"+element.rfc);
						if (optional == true){
							newElem.append('[&#60;'+ element.name+'&#62;]');
						}else {
							newElem.append('&#60;'+ element.name+'&#62;');
						}					
					
				} else if (element.type == "header") {
					// The element is the header of a message
					newElem = $('<span />');
					newElem.append('&#60;'+ element.name+'&#62;');
				} else if (element.type == "construct"){
					// The element is a construct
					newElem = $('<span />');
					newElem.addClass("construct_"+element.rfc);				
					if (optional == true){
						newElem.append('[&#60;'+ element.name+'&#62;]');
					}else {
						newElem.append('&#60;'+ element.name+'&#62;');
					}
					//FIXME: CHECK IF CONSTRhUCT HAS ALREADY BEEN DRAWN
					if ($.inArray(element.name,gd.shown)!=0) {
						gd.shown.push(element.name);				
						//A new element defintion is created to define the construct
						var elem_definition= $('<div />');
						$('#grammar_content').append(elem_definition);
						elem_definition.addClass("elem_definition");
						var defined_element = $('<div />');
						defined_element.addClass("defined_element");
						var displayText = '&#60;'+ element.name+'&#62;'+"::==";
						defined_element.append(displayText);
						elem_definition.append(defined_element);
						var definition = $('<div />');
						definition.addClass("definition");
						definition.append(definition);
						elem_definition.append(definition);
						for (var elem in pcep[element.name].elems) {
							definition.append(gd.getHTML(pcep[element.elems[elem].elem], RFCfilter, pcep[element.name].elems[elem].optional));
						}
					}
					
				} else if (element.type == "choice") {
					newElem = $('<span />');
					newElem.addClass("choice");				
					if (optional == true){
						newElem.append('[');
					}
					for (var elem in element.elems) {
						newElem.append(gd.getHTML(element.elems[elem].pcep_elem, RFCfilter, element.elems[elem].optional));
						if (elem < element.elems.length-1){
							newElem.append('|');	
						}						
					}
				} else if (element.type == "list"){
					console.log("Lista: Entrando en "+element.name);
					newElem = $('<span />');
					newElem.addClass("list."+element.rfc);				
					if (optional == true){
						console.log("OPTIONAL "+element.name);
						newElem.append('[&#60;'+ element.name+'&#62;]');
					}else {
						newElem.append('&#60;'+ element.name+'&#62;');
					}
					//FIXME: CHECK IF LIST HAS ALREADY BEEN DRAWN
					if ($)
					var elem_definition= $('<div />');
					$('#grammar_content').append(elem_definition);
					elem_definition.addClass("elem_definition");
					var defined_element = $('<div />');
					defined_element.addClass("defined_element");
					var displayText = '&#60;'+ element.name+'&#62;'+"::==";
					defined_element.append(displayText);
					elem_definition.append(defined_element);
					var definition = $('<div />');
					definition.addClass("definition");
					definition.append(definition);
					console.log("Lista: vamo a ve... "+element.elems[0].elem);
					definition.append(gd.getHTML(pcep[element.elems[0].elem], RFCfilter,false));
					var definition_text = '[&#60;'+ element.name+'&#62]';
					definition.append(definition_text);
					elem_definition.append(definition);
		
				}else {
					console.log("Es un mensajito");
					//It is a message
					newElem = $('<div />');
					newElem.addClass("elem_definition");
					//Create a div for the defined element
					var defined_element = $('<div />');
					defined_element.addClass("defined_element");
					var displayText = element.name+":==";
					defined_element.append(displayText);
					newElem.append(defined_element);
					//Create another div for the defnition itself
					var definition = $('<div />');
					definition.addClass("definition");
					newElem.append(definition);
					for (var elem in element.elems) {
						//definition.append(gd.getHTML(element.elems[elem].elem, RFCfilter, element.elems[elem].optional));
						definition.append(gd.getHTML(pcep[element.elems[elem].elem], RFCfilter, element.elems[elem].optional));
					
					}
					
				}
			}
			return newElem;
		}



	gd.draw_message = function (message_name ) {
		console.log("Draw message: "+message_name);
		var newElem = $('<div />');
		newElem.attr('id', 'grammar_content');
		$('#pcep_grammar').html(newElem);
		//Filter of current view 
	    //Let's try starting by an Array
	    var RFCfilter = new Array();
		$('#RFCs input:checked').each(function() {
    		RFCfilter.push(this.value);
		});
		gd.shown=[];
		newElem.prepend(gd.getHTML(pcep[message_name], RFCfilter));
	}


}

) (jPCEPGrammarDraw, RFC5440,jQuery);


