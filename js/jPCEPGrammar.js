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
				console.log("esto es "+this.name);
				newElem = $('<span />');
				newElem.addClass("object_"+this.rfc);
				if (optional == true){
					newElem.append('[&#60;'+ this.name+'&#62;]');
				}else {
					newElem.append('&#60;'+ this.name+'&#62;');
				}
			} else if (this.type == "header") {
				newElem = $('<span />');
				newElem.append('&#60;'+ this.name+'&#62;');
			} else if (this.type == "construct"){
				console.log("entramos en construct "+this.name);
				newElem = $('<span />');
				newElem.addClass("construct_"+this.rfc);				
				if (optional == true){
					newElem.append('[&#60;'+ this.name+'&#62;]');
				}else {
					newElem.append('&#60;'+ this.name+'&#62;');
				}
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
				console.log(this.name+ " tiene "+pcep.constructs[this.name].elems.length);
				for (elem in pcep.constructs[this.name].elems) {
					console.log("vaaamos por "+elem+" de "+this.name);
					console.log("sale"+pcep.constructs[this.name].elems[elem].pcep_elem.name);
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

	//Objects & Object lists

	//BANDWIDTH Object
	pcep.objects["BANDWIDTH"] = new pcep.pcep_element();
	pcep.objects["BANDWIDTH"].type="object",
	pcep.objects["BANDWIDTH"].name="BANDWIDTH",
	pcep.objects["BANDWIDTH"].rfc="RFC5440"

	//END-POINTS Object
	pcep.objects["ENDPOINTS"] = new pcep.pcep_element();
	pcep.objects["ENDPOINTS"].type="object";
	pcep.objects["ENDPOINTS"].name="END-POINTS";
	pcep.objects["ENDPOINTS"].rfc="RFC5440";

	//ERO Object
	pcep.objects["ERO"] = new pcep.pcep_element();
	pcep.objects["ERO"].type="object";
	pcep.objects["ERO"].name="ERO";
	pcep.objects["ERO"].rfc="RFC5440";

	//IRO Object
	pcep.objects["IRO"] = new pcep.pcep_element();
	pcep.objects["IRO"].type="object";
	pcep.objects["IRO"].name="IRO";
	pcep.objects["IRO"].rfc="RFC5440";

	//LOADBALANCING Object
	pcep.objects["LOAD-BALANCING"] = new pcep.pcep_element();
	pcep.objects["LOAD-BALANCING"].type="object";
	pcep.objects["LOAD-BALANCING"].name="LOAD-BALANCING";
	pcep.objects["LOAD-BALANCING"].rfc="RFC5440";

	//LSPA Object
	pcep.objects["LSPA"] = new pcep.pcep_element();
	pcep.objects["LSPA"].type="object";
	pcep.objects["LSPA"].name="LSPA";
	pcep.objects["LSPA"].rfc="RFC5440";

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

	//NO-PATH Object
	pcep.objects["NO-PATH"] = new pcep.pcep_element();
	pcep.objects["NO-PATH"].type="object";
	pcep.objects["NO-PATH"].name="NO-PATH";
	pcep.objects["NO-PATH"].rfc="RFC5440";

	//NOTIFICATION Object
	pcep.objects["NOTIFICATION"] = new pcep.pcep_element();
	pcep.objects["NOTIFICATION"].type="object";
	pcep.objects["NOTIFICATION"].name="NOTIFICATION";
	pcep.objects["NOTIFICATION"].rfc="RFC5440";

	//NOTIFICATION-list
	pcep.lists["notification-list"] = new pcep.pcep_element();
	pcep.lists["notification-list"].type = "list";
	pcep.lists["notification-list"].name = "notification-list";
	pcep.lists["notification-list"].pcep_elem = pcep.objects["NOTIFICATION"];
	pcep.lists["notification-list"].rfc="RFC5440";

	//OPEN Object
	pcep.objects["OPEN"] = new pcep.pcep_element();
	pcep.objects["OPEN"].type="object";
	pcep.objects["OPEN"].name="OPEN";
	pcep.objects["OPEN"].rfc="RFC5440";

	//RP Object
	pcep.objects["RP"] = new pcep.pcep_element();
	pcep.objects["RP"].type="object";
	pcep.objects["RP"].name="RP";
	pcep.objects["RP"].rfc="RFC5440";

	//request-id-list
	pcep.lists["request-id-list"] = new pcep.pcep_element();
	pcep.lists["request-id-list"].type = "list";
	pcep.lists["request-id-list"].name = "request-id-list";
	pcep.lists["request-id-list"].pcep_elem = pcep.objects["RP"];
	pcep.lists["request-id-list"].rfc="RFC5440";

	//RRO Object
	pcep.objects["RRO"] = new pcep.pcep_element();
	pcep.objects["RRO"].type="object";
	pcep.objects["RRO"].name="RRO";
	pcep.objects["RRO"].rfc="RFC5440";

	//LOADBALANCING Object
	pcep.objects["SVEC"] = new pcep.pcep_element();
	pcep.objects["SVEC"].type="object";
	pcep.objects["SVEC"].name="SVEC";
	pcep.objects["SVEC"].rfc="RFC5440";

	//XRO Object
	pcep.objects["XRO"] = new pcep.pcep_element();
	pcep.objects["XRO"].type="object";
	pcep.objects["XRO"].name="XRO";
	pcep.objects["XRO"].rfc="RFC5521";

	//Constructs

	//rro-bw-pair
	pcep.constructs["rro-bw-pair"] = new pcep.pcep_element();
	pcep.constructs["rro-bw-pair"].type = "construct";
	pcep.constructs["rro-bw-pair"].name = "rro-bw-pair";
	pcep.constructs["rro-bw-pair"].elems =[];
	pcep.constructs["rro-bw-pair"].elems[1] = {
		pcep_elem : pcep.objects["RRO"],
		optional : false
	};
	pcep.constructs["rro-bw-pair"].elems[2] = {
		pcep_elem :  pcep.objects["BANDWIDTH"],
		optional : true
	};
	pcep.constructs["rro-bw-pair"].rfc = "RFC5440";
	pcep.constructs["rro-bw-pair"].note = "In RFC 5440, rro-bw-pair was defined inside the request, not as a construct";

	//	attribute construct 
	pcep.constructs["attribute"] = new pcep.pcep_element();
	pcep.constructs["attribute"].type = "construct";
	pcep.constructs["attribute"].name = "attribute";
	pcep.constructs["attribute"].elems =[];
	pcep.constructs["attribute"].elems[1] = {
		pcep_elem : pcep.objects["LSPA"],
		optional : true
	};
	pcep.constructs["attribute"].elems[2] = {
		pcep_elem : pcep.objects["BANDWIDTH"],
		optional : true
	};
	pcep.constructs["attribute"].elems[3] = {
		pcep_elem : pcep.lists["metric-list"],
		optional : true
	};
	pcep.constructs["attribute"].elems[4] = {
		pcep_elem : pcep.objects["IRO"],
		optional : true
	};
	pcep.constructs["attribute"].rfc="RFC5440";


	//attribute-list
	pcep.lists["attribute-list"] = new pcep.pcep_element();
	pcep.lists["attribute-list"].type = "list";
	pcep.lists["attribute-list"].name = "attribute-list";
	pcep.lists["attribute-list"].pcep_elem = pcep.constructs["attribute"];
	pcep.lists["attribute-list"].rfc="RFC5440";

	//	path construct 
	pcep.constructs["path"] = new pcep.pcep_element();
	pcep.constructs["path"].type = "construct";
	pcep.constructs["path"].name = "path";
	pcep.constructs["path"].elems =[];
	pcep.constructs["path"].elems[1] = {
		pcep_elem : pcep.objects["ERO"],
		optional : false
	};
	pcep.constructs["path"].elems[2] = {
		pcep_elem : pcep.lists["attribute-list"],
		optional : true
	};

	pcep.constructs["path"].rfc="RFC5440";


	//attribute-list
	pcep.lists["path-list"] = new pcep.pcep_element();
	pcep.lists["path-list"].type = "list";
	pcep.lists["path-list"].name = "path-list";
	pcep.lists["path-list"].pcep_elem = pcep.constructs["path"];
	pcep.lists["path-list"].rfc="RFC5440";


	//	Construct request
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
		pcep_elem :  pcep.constructs["rro-bw-pair"],
		optional : true
	};
	pcep.constructs["request"].elems[7] = {
		pcep_elem :  pcep.objects["IRO"],
		optional : true
	};
	pcep.constructs["request"].elems[8] = {
		pcep_elem :  pcep.objects["LOAD-BALANCING"],
		optional : true
	};
	pcep.constructs["request"].elems[9] = {
		pcep_elem :  pcep.objects["XRO"],
		optional : true,
		note: "no ordering in RFC5521 is provided"
	};
	pcep.constructs["request"].rfc = "RFC5440";

	//request-list
	pcep.lists["request-list"] = new pcep.pcep_element();
	pcep.lists["request-list"].type = "list";
	pcep.lists["request-list"].name = "request-list";
	pcep.lists["request-list"].pcep_elem = pcep.constructs["request"];
	pcep.lists["request-list"].rfc="RFC5440";

	//	Construct response
	pcep.constructs["response"] = new pcep.pcep_element();
	pcep.constructs["response"].type = "construct";
	pcep.constructs["response"].name = "response";
	pcep.constructs["response"].elems =[];
	pcep.constructs["response"].elems[1] = {
		pcep_elem : pcep.objects["RP"],
		optional : false
	};
	pcep.constructs["response"].elems[2] = {
		pcep_elem : pcep.objects["NO-PATH"],
		optional : true
	};
	pcep.constructs["response"].elems[3] = {
		pcep_elem : pcep.lists["attribute-list"],
		optional : true
	};
	pcep.constructs["response"].elems[4] = {
		pcep_elem : pcep.lists["path-list"],
		optional : true
	};
	pcep.constructs["response"].rfc="RFC5440";

	//Lists

	//response-list
	pcep.lists["response-list"] = new pcep.pcep_element();
	pcep.lists["response-list"].type = "list";
	pcep.lists["response-list"].name = "response-list";
	pcep.lists["response-list"].pcep_elem = pcep.constructs["response"];
	pcep.lists["response-list"].rfc="RFC5440";

//	Construct response
	pcep.constructs["notify"] = new pcep.pcep_element();
	pcep.constructs["notify"].type = "construct";
	pcep.constructs["notify"].name = "notify";
	pcep.constructs["notify"].elems =[];
	pcep.constructs["notify"].elems[1] = {
		pcep_elem : pcep.lists["request-id-list"],
		optional : true
	};
	pcep.constructs["notify"].elems[2] = {
		pcep_elem : pcep.lists["notification-list"],
		optional : false
	};
	pcep.constructs["notify"].rfc="RFC5440";

	//Lists

	//notify-list
	pcep.lists["notify-list"] = new pcep.pcep_element();
	pcep.lists["notify-list"].type = "list";
	pcep.lists["notify-list"].name = "notify-list";
	pcep.lists["notify-list"].pcep_elem = pcep.constructs["notify"];
	pcep.lists["notify-list"].rfc="RFC5440";

	//svec-list
	pcep.lists["svec-list"] = new pcep.pcep_element();
	pcep.lists["svec-list"].type = "list";
	pcep.lists["svec-list"].name = "svec-list";
	pcep.lists["svec-list"].pcep_elem = pcep.objects["SVEC"];
	pcep.lists["svec-list"].rfc="RFC5440";



	//Messages

	//PCEP Open Message
	pcep.messages["Open Message"] = new pcep.pcep_element();
	pcep.messages["Open Message"].name = "Open Message"
	pcep.messages["Open Message"].elems =[];
    pcep.messages["Open Message"].elems[1] = {
		pcep_elem : pcep_common_header,
		optional : false
	};
	pcep.messages["Open Message"].elems[2] = {
		pcep_elem : pcep.objects["OPEN"],
		optional : true
	};
	pcep.messages["Open Message"].rfc="RFC5440";

	//PCEP Keepalive Message
	pcep.messages["Keepalive Message"] = new pcep.pcep_element();
	pcep.messages["Keepalive Message"].name = "Keepalive Message"
	pcep.messages["Keepalive Message"].elems =[];
	pcep.messages["Keepalive Message"].elems[1] = {
		pcep_elem : pcep_common_header,
		optional : false
	};
	pcep.messages["Keepalive Message"].rfc="RFC5440";

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
     
	pcep.messages["PCRep Message"] = new pcep.pcep_element();
	pcep.messages["PCRep Message"].name = "PCRep Message"
	pcep.messages["PCRep Message"].elems =[];
	pcep.messages["PCRep Message"].elems[1] = {
		pcep_elem : pcep_common_header,
		optional : false
	};
	pcep.messages["PCRep Message"].elems[2] = {
		pcep_elem : pcep.lists["response-list"],
		optional : false
	};
	pcep.messages["PCRep Message"].rfc="RFC5440";

	 //PCEP Request Message
	pcep.messages["PCNtf Message"] = new pcep.pcep_element();
	pcep.messages["PCNtf Message"].name = "PCNtf Message"
	pcep.messages["PCNtf Message"].elems =[];
	pcep.messages["PCNtf Message"].elems[1] = {
		pcep_elem : pcep_common_header,
		optional : false
	};
	pcep.messages["PCNtf Message"].elems[2] = {
		pcep_elem : pcep.lists["notify-list"],
		optional : false
	};
	 

}

) (jPCEPGrammar,jQuery);


