/**

pcep-grammar

Javascript PCEP grammar library

Supported RFCS:

RFC 5440, RFC 5520, RFC 5521, RFC 5886

Oscar Gonzalez de Dios

*/

jPCEPGrammar = {};

(function (pcep,$,undefined) {
	
	// List of PCEP Messages
	pcep.messages = [];

	// List of PCEP Objects
	pcep.objects = [];

	//List of PCEP Constructs
	pcep.constructs = [];

	//List of PCEP Elements lists
	pcep.lists = [];

	//FIXME: Add list of shown constructs to avoid repeating them

	pcep.pcep_element = function(){

		this.getHTML = function (optional) {
			var newElem;
			if (this.type == "object"){
				newElem = $('<span />');
				newElem.addClass("object."+this.rfc);
				if (optional == true){
					newElem.append('[&#60;'+ this.name+'&#62;]');
				}else {
					newElem.append('&#60;'+ this.name+'&#62;');
				}
			} else if (this.type == "header") {
				newElem = $('<span />');
				newElem.addClass("object."+this.rfc);
				newElem.append('&#60;'+ this.name+'&#62;');
			} else if (this.type == "construct"){
				newElem = $('<span />');
				newElem.addClass("construct."+this.rfc);				
				newElem.append('&#60;'+ this.name+'&#62;');
				//FIXME: CHECK IF CONSTRhUCT HAS ALREADY BEEN DRAWN
				//A new element defintion is created to define the construct
				var elem_definition= $('<div />');
				elem_definition.addClass("elem_definition");
				var defined_element = $('<div />');
				defined_element.addClass("defined_element");
				var displayText = '&#60;'+ this.name+'&#62;'+"::==";
				defined_element.append(displayText);
				elem_definition.append(defined_element);
				var definition = $('<div />');
				definition.addClass("definition");
				definition.append(definition);
				elem_definition.append(definition);
				//FIXME: HAY QUE PASAR EL PARRAFO PADRE
				for (elem in pcep.constructs[this.name].elems) {
					console.log("vamos por "+elem);
					console.log(pcep.constructs[this.name].elems[elem].pcep_elem.name);
					definition.append(this.elems[elem].pcep_elem.getHTML(pcep.constructs[this.name].elems[elem].optional));
				}
				$('#grammar_content').append(elem_definition);
			} else if (this.type == "list"){
				console.log("entramos en lista de "+this.name);
				newElem = $('<span />');
				newElem.addClass("list."+this.rfc);				
				if (optional == true){
					newElem.append('[&#60;'+ this.name+'&#62;]');
				}else {
					newElem.append('&#60;'+ this.name+'&#62;');
				}
				//FIXME: CHECK IF LIST HAS ALREADY BEEN DRAWN
				var elem_definition= $('<div />');
				$('#grammar_content').append(elem_definition);
				elem_definition.addClass("elem_definition");
				var defined_element = $('<div />');
				defined_element.addClass("defined_element");
				var displayText = '&#60;'+ this.name+'&#62;'+"::==";
				defined_element.append(displayText);
				elem_definition.append(defined_element);
				var definition = $('<div />');
				definition.addClass("definition");
				definition.append(definition);
				definition.append(this.pcep_elem.getHTML(false));
				var definition_text = '[&#60;'+ this.name+'&#62]';
				definition.append(definition_text);
				elem_definition.append(definition);
				
			}else {
				newElem = $('<div />');
				newElem.addClass("elem_definition");
				//Create a div for the defined element
				var defined_element = $('<div />');
				defined_element.addClass("defined_element");
				var displayText = this.name+":==";
				defined_element.append(displayText);
				newElem.append(defined_element);
				//Create another div for the defnition itself
				var definition = $('<div />');
				definition.addClass("definition");
				newElem.append(definition);
				for (elem in this.elems) {
					console.log(this.elems[elem].pcep_elem.name);
					definition.append(this.elems[elem].pcep_elem.getHTML());
				}
				
			}
			return newElem;
		}

		
	}

	pcep.draw_message = function (message_name ) {
		console.log(message_name);
		var newElem = $('<div />');
		newElem.attr('id', 'grammar_content');
		$('#pcep_grammar').html(newElem);
		newElem.prepend(pcep.messages[message_name].getHTML());
	}

	//Common Header
	pcep_common_header = new pcep.pcep_element();
	pcep_common_header.type="header";
	pcep_common_header.name="Common Header";
	pcep_common_header.rfc="RFC5440";

	//Objects
	
	//RP Object
	pcep.objects["RP"] = new pcep.pcep_element();
	pcep.objects["RP"].type="object";
	pcep.objects["RP"].name="RP";
	pcep.objects["RP"].rfc="RFC5440";

	//END-POINTS Object
	pcep.objects["ENDPOINTS"] = new pcep.pcep_element();
	pcep.objects["ENDPOINTS"].type="object";
	pcep.objects["ENDPOINTS"].name="END-POINTS";
	pcep.objects["ENDPOINTS"].rfc="RFC5440";

	//LSPA Object
	pcep.objects["LSPA"] = new pcep.pcep_element();
	pcep.objects["LSPA"].type="object";
	pcep.objects["LSPA"].name="LSPA";
	pcep.objects["LSPA"].rfc="RFC5440";

	//BANDWIDTH Object
	pcep.objects["BANDWIDTH"] = new pcep.pcep_element();
	pcep.objects["BANDWIDTH"].type="object",
	pcep.objects["BANDWIDTH"].name="BANDWIDTH",
	pcep.objects["BANDWIDTH"].rfc="RFC5440"
	
	//METRIC Object
	pcep.objects["METRIC"] = new pcep.pcep_element();
	pcep.objects["METRIC"].type="object",
	pcep.objects["METRIC"].name="METRIC",
	pcep.objects["METRIC"].rfc="RFC5440"

	//metric-list
	pcep.lists["metric-list"] = new pcep.pcep_element();
	pcep.lists["metric-list"].type = "list";
	pcep.lists["metric-list"].name = "metric-list";
	pcep.lists["metric-list"].pcep_elem = pcep.objects["METRIC"];
	pcep.lists["metric-list"].rfc="RFC5440";

	//RRO Object
	pcep.objects["RRO"] = new pcep.pcep_element();
	pcep.objects["RRO"].type="object",
	pcep.objects["RRO"].name="RRO",
	pcep.objects["RRO"].rfc="RFC5440"

	//IRO Object
	pcep.objects["IRO"] = new pcep.pcep_element();
	pcep.objects["IRO"].type="object",
	pcep.objects["IRO"].name="IRO",
	pcep.objects["IRO"].rfc="RFC5440"

	//LOADBALANCING Object
	pcep.objects["LOAD-BALANCING"] = new pcep.pcep_element();
	pcep.objects["LOAD-BALANCING"].type="object",
	pcep.objects["LOAD-BALANCING"].name="LOAD-BALANCING",
	pcep.objects["LOAD-BALANCING"].rfc="RFC5440"

	//LOADBALANCING Object
	pcep.objects["SVEC"] = new pcep.pcep_element();
	pcep.objects["SVEC"].type="object",
	pcep.objects["SVEC"].name="SVEC",
	pcep.objects["SVEC"].rfc="RFC5440"

	

	//Constructs
	pcep.constructs["request"] = new pcep.pcep_element();
	pcep.constructs["request"].type = "construct";
	pcep.constructs["request"].name = "request";
	pcep.constructs["request"].elems =[];
	pcep.constructs["request"].elems[1] = {
		pcep_elem : pcep.objects["RP"],
		optional : false
	};
	pcep.constructs["request"].elems[2] = {
		pcep_elem :  pcep.objects["ENDPOINTS"],
		optional : false
	};
	pcep.constructs["request"].elems[3] = {
		pcep_elem :  pcep.objects["LSPA"],
		optional : true
	};
	pcep.constructs["request"].elems[4] = {
		pcep_elem :  pcep.objects["BANDWIDTH"],
		optional : true
	};
	pcep.constructs["request"].elems[5] = {
		pcep_elem :  pcep.lists["metric-list"],
		optional : true
	};
	pcep.constructs["request"].elems[6] = {
		pcep_elem :  pcep.objects["IRO"],
		optional : true
	};
	pcep.constructs["request"].elems[7] = {
		pcep_elem :  pcep.objects["LOAD-BALANCING"],
		optional : true
	};
	pcep.constructs["request"].rfc = "RFC5440";
	

	//Lists

	//request-list
	pcep.lists["request-list"] = new pcep.pcep_element();
	pcep.lists["request-list"].type = "list";
	pcep.lists["request-list"].name = "request-list";
	pcep.lists["request-list"].pcep_elem = pcep.constructs["request"];
	pcep.lists["request-list"].rfc="RFC5440";

	//request-list
	pcep.lists["svec-list"] = new pcep.pcep_element();
	pcep.lists["svec-list"].type = "list";
	pcep.lists["svec-list"].name = "svec-list";
	pcep.lists["svec-list"].pcep_elem = pcep.objects["SVEC"];
	pcep.lists["svec-list"].rfc="RFC5440";



	//Messages
    
   //PCEP Request Message
	pcep.messages["PCReqMessage"] = new pcep.pcep_element();
	pcep.messages["PCReqMessage"].name = "PCReqMessage"
	pcep.messages["PCReqMessage"].elems =[];
	pcep.messages["PCReqMessage"].elems[1] = {
		pcep_elem : pcep_common_header,
		optional : false
	};
	pcep.messages["PCReqMessage"].elems[2] = {
		pcep_elem : pcep.lists["svec-list"],
		optional : true
	};
	pcep.messages["PCReqMessage"].elems[3] = {
		pcep_elem : pcep.lists["request-list"],
		optional : false
	};
     
	pcep.messages["PCRepMessage"] = new pcep.pcep_element();
	pcep.messages["PCRepMessage"].name = "PCReqMessage"
	pcep.messages["PCRepMessage"].elems =[];
	pcep.messages["PCRepMessage"].elems[1] = {
		pcep_elem : pcep_common_header,
		optional : false
	};
	pcep.messages["PCRepMessage"].elems[2] = {
		pcep_elem : pcep.lists["request-list"],
		optional : false
	};

}

) (jPCEPGrammar,jQuery);


