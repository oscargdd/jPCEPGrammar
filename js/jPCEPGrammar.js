/**

pcep-grammar

Javascript PCEP grammar library

Supported RFCS:

RFC 5440, RFC 5520, RFC 5521, RFC 5886

Oscar Gonzalez de Dios

*/

jPCEPGrammar = {};

(function (pcep,$,undefined) {

	// Version
	pcep.version = "0.4-dev"
	
	// List of PCEP Messages
	pcep.messages = [];

	// List of PCEP Objects
	pcep.objects = [];

	//List of PCEP Constructs
	pcep.constructs = [];

	//List of PCEP Elements lists
	pcep.lists = [];

	//List of PCEP choices
	pcep.choices = [];

	//FIXME: Add list of shown constructs to avoid repeating them

	pcep.pcep_element = function(){

		this.getHTML = function (RFCfilter, optional) {
			var newElem;
			//Check if the element's RFC is in the filter, otherwise, don't show it
			var found = $.inArray(this.rfc, RFCfilter) > -1;
			if (found) {
				if (this.type == "object"){
					//Check if the object is in the filter, otherwise, don't show it					
						newElem = $('<span />');
						newElem.addClass("object_"+this.rfc);
						if (optional == true){
							newElem.append('[&#60;'+ this.name+'&#62;]');
						}else {
							newElem.append('&#60;'+ this.name+'&#62;');
						}					
					
				} else if (this.type == "header") {
					// The element is the header of a message
					newElem = $('<span />');
					newElem.append('&#60;'+ this.name+'&#62;');
				} else if (this.type == "construct"){
					// The element is a construct
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
					elem_definition.append(definition);
					console.log(this.name+ " tiene "+pcep.constructs[this.name].elems.length);
					for (var elem in pcep.constructs[this.name].elems) {
						definition.append(this.elems[elem].pcep_elem.getHTML(RFCfilter, pcep.constructs[this.name].elems[elem].optional));
					}
					
				} else if (this.type == "choice") {
					newElem = $('<span />');
					newElem.addClass("choice");				
					if (optional == true){
						newElem.append('[');
					}
					for (var elem in this.elems) {
						newElem.append(this.elems[elem].pcep_elem.getHTML(RFCfilter, this.elems[elem].optional));
						if (elem < this.elems.length-1){
							newElem.append('|');	
						}						
					}
				} else if (this.type == "list"){
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
					definition.append(this.pcep_elem.getHTML(RFCfilter,false));
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
					for (var elem in this.elems) {
						console.log("elem num "+this.elems[elem].pcep_elem.name+" de" +this.name);
						definition.append(this.elems[elem].pcep_elem.getHTML(RFCfilter));
					}
					
				}
			}
			return newElem;
		}

		
	}

	pcep.draw_message = function (message_name ) {
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
		newElem.prepend(pcep.messages[message_name].getHTML(RFCfilter));
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

	//BANDWIDTH Object
	pcep.objects["CLOSE"] = new pcep.pcep_element();
	pcep.objects["CLOSE"].type="object",
	pcep.objects["CLOSE"].name="CLOSE",
	pcep.objects["CLOSE"].rfc="RFC5440"

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

	//PATH-KEY Object
	pcep.objects["PATH-KEY"] = new pcep.pcep_element();
	pcep.objects["PATH-KEY"].type="object";
	pcep.objects["PATH-KEY"].name="PATH-KEY";
	pcep.objects["PATH-KEY"].rfc="RFC5520";

	//ERROR Object
	pcep.objects["PCEP-ERROR"] = new pcep.pcep_element();
	pcep.objects["PCEP-ERROR"].type="object";
	pcep.objects["PCEP-ERROR"].name="PCEP-ERROR";
	pcep.objects["PCEP-ERROR"].rfc="RFC5440";

	//request-id-list
	pcep.lists["error-obj-list"] = new pcep.pcep_element();
	pcep.lists["error-obj-list"].type = "list";
	pcep.lists["error-obj-list"].name = "error-obj-list";
	pcep.lists["error-obj-list"].pcep_elem = pcep.objects["PCEP-ERROR"];
	pcep.lists["error-obj-list"].rfc="RFC5440";

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
	pcep.constructs["rro-bw-pair"].elems[0] = {
		pcep_elem : pcep.objects["RRO"],
		optional : false
	};
	pcep.constructs["rro-bw-pair"].elems[1] = {
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
	pcep.constructs["attribute"].elems[0] = {
		pcep_elem : pcep.objects["LSPA"],
		optional : true
	};
	pcep.constructs["attribute"].elems[1] = {
		pcep_elem : pcep.objects["BANDWIDTH"],
		optional : true
	};
	pcep.constructs["attribute"].elems[2] = {
		pcep_elem : pcep.lists["metric-list"],
		optional : true
	};
	pcep.constructs["attribute"].elems[3] = {
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
	pcep.constructs["path"].elems[0] = {
		pcep_elem : pcep.objects["ERO"],
		optional : false
	};
	pcep.constructs["path"].elems[1] = {
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

	// Segment-computation
	pcep.constructs["segment-computation"] = new pcep.pcep_element();
	pcep.constructs["segment-computation"].type = "construct";
	pcep.constructs["segment-computation"].name = "segment-computation";
	pcep.constructs["segment-computation"].elems =[];
	pcep.constructs["segment-computation"].elems[0] = {
		pcep_elem :  pcep.objects["ENDPOINTS"],
		optional : false
	};
	pcep.constructs["segment-computation"].elems[1] = {
		pcep_elem :  pcep.objects["LSPA"],
		optional : true
	};
	pcep.constructs["segment-computation"].elems[2] = {
		pcep_elem :  pcep.objects["BANDWIDTH"],
		optional : true
	};
	pcep.constructs["segment-computation"].elems[3] = {
		pcep_elem :  pcep.lists["metric-list"],
		optional : true
	};
	pcep.constructs["segment-computation"].elems[4] = {
		pcep_elem :  pcep.constructs["rro-bw-pair"],
		optional : true
	};
	pcep.constructs["segment-computation"].elems[5] = {
		pcep_elem :  pcep.objects["IRO"],
		optional : true
	};
	pcep.constructs["segment-computation"].elems[6] = {
		pcep_elem :  pcep.objects["LOAD-BALANCING"],
		optional : true
	};
	pcep.constructs["segment-computation"].elems[7] = {
		pcep_elem :  pcep.objects["XRO"],
		optional : true,
		note: "no ordering in RFC5521 is provided"
	};

	pcep.constructs["segment-computation"].rfc = "RFC5440";
	pcep.constructs["segment-computation"].note = "The construct path-key-expansion really appeard in RF5220, but it contains all the objects of the request as defined in RFC5440";

	//path-key-expansion
	pcep.constructs["path-key-expansion"] = new pcep.pcep_element();
	pcep.constructs["path-key-expansion"].type = "construct";
	pcep.constructs["path-key-expansion"].name = "path-key-expansion";
	pcep.constructs["path-key-expansion"].elems =[];
	pcep.constructs["path-key-expansion"].elems[0] = {
		pcep_elem : pcep.objects["PATH-KEY"],
		optional : false
	};
	pcep.constructs["path-key-expansion"].rfc = "RFC5520";

	pcep.choices["seg-com-pke"] = new pcep.pcep_element();
	pcep.choices["seg-com-pke"].type = "choice";
	pcep.choices["seg-com-pke"].name = "seg-com-pke";
	pcep.choices["seg-com-pke"].elems = [];
	pcep.choices["seg-com-pke"].elems[0] = {
		pcep_elem : pcep.constructs["segment-computation"],
		optional : false
	};
	pcep.choices["seg-com-pke"].elems[1] = {
		pcep_elem : pcep.constructs["path-key-expansion"],
		optional : false
	};
	pcep.choices["seg-com-pke"].rfc = "RFC5440";

	//	Construct request
	pcep.constructs["request"] = new pcep.pcep_element();
	pcep.constructs["request"].type = "construct";
	pcep.constructs["request"].name = "request";
	pcep.constructs["request"].elems =[];
	pcep.constructs["request"].elems[0] = {
		pcep_elem : pcep.objects["RP"],
		optional : false
	};
	pcep.constructs["request"].elems[1] = {
		pcep_elem : pcep.choices["seg-com-pke"],
		optional : false
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
	pcep.constructs["response"].elems[0] = {
		pcep_elem : pcep.objects["RP"],
		optional : false
	};
	pcep.constructs["response"].elems[1] = {
		pcep_elem : pcep.objects["NO-PATH"],
		optional : true
	};
	pcep.constructs["response"].elems[2] = {
		pcep_elem : pcep.lists["attribute-list"],
		optional : true
	};
	pcep.constructs["response"].elems[3] = {
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
	pcep.constructs["notify"].elems[0] = {
		pcep_elem : pcep.lists["request-id-list"],
		optional : true
	};
	pcep.constructs["notify"].elems[1] = {
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

	//error-open construct
	pcep.constructs["error-open"] = new pcep.pcep_element();
	pcep.constructs["error-open"].type = "construct";
	pcep.constructs["error-open"].name = "error-open";
	pcep.constructs["error-open"].elems =[];
	pcep.constructs["error-open"].elems[0] = {
		pcep_elem : pcep.lists["error-obj-list"],
		optional : false
	};
	pcep.constructs["error-open"].elems[1] = {
		pcep_elem : pcep.objects["OPEN"],
		optional : true
	};
	pcep.constructs["error-open"].rfc="RFC5440";

	//error construct
	pcep.constructs["error"] = new pcep.pcep_element();
	pcep.constructs["error"].type = "construct";
	pcep.constructs["error"].name = "error";
	pcep.constructs["error"].elems =[];
	pcep.constructs["error"].elems[0] = {
		pcep_elem : pcep.lists["request-id-list"],
		optional : false
	};
	pcep.constructs["error"].elems[1] = {
		pcep_elem : pcep.lists["error-obj-list"],
		optional : true
	};
	pcep.constructs["error"].rfc="RFC5440";

	//error-list
	pcep.lists["error-list"] = new pcep.pcep_element();
	pcep.lists["error-list"].type = "list";
	pcep.lists["error-list"].name = "error-list";
	pcep.lists["error-list"].pcep_elem = pcep.constructs["error"];
	pcep.lists["error-list"].rfc="RFC5440";

	//Messages

	//PCEP Open Message
	pcep.messages["Open Message"] = new pcep.pcep_element();
	pcep.messages["Open Message"].name = "Open Message"
	pcep.messages["Open Message"].elems =[];
    pcep.messages["Open Message"].elems[0] = {
		pcep_elem : pcep_common_header,
		optional : false
	};
	pcep.messages["Open Message"].elems[1] = {
		pcep_elem : pcep.objects["OPEN"],
		optional : true
	};
	pcep.messages["Open Message"].rfc="RFC5440";

	//PCEP Keepalive Message
	pcep.messages["Keepalive Message"] = new pcep.pcep_element();
	pcep.messages["Keepalive Message"].name = "Keepalive Message"
	pcep.messages["Keepalive Message"].elems =[];
		pcep.messages["Keepalive Message"].elems[0] = {
			pcep_elem : pcep_common_header,
			optional : false
		};
	pcep.messages["Keepalive Message"].rfc="RFC5440";

   //PCEP Request Message
	pcep.messages["PCReqMessage"] = new pcep.pcep_element();
	pcep.messages["PCReqMessage"].name = "PCReqMessage"
	pcep.messages["PCReqMessage"].elems =[];
		pcep.messages["PCReqMessage"].elems[0] = {
			pcep_elem : pcep_common_header,
			optional : false
		};
		pcep.messages["PCReqMessage"].elems[1] = {
			pcep_elem : pcep.lists["svec-list"],
			optional : true
		};
		pcep.messages["PCReqMessage"].elems[2] = {
			pcep_elem : pcep.lists["request-list"],
			optional : false
		};
	pcep.messages["PCReqMessage"].rfc="RFC5440";
     
	pcep.messages["PCRep Message"] = new pcep.pcep_element();
	pcep.messages["PCRep Message"].name = "PCRep Message"
	pcep.messages["PCRep Message"].elems =[];
		pcep.messages["PCRep Message"].elems[0] = {
			pcep_elem : pcep_common_header,
			optional : false
		};
		pcep.messages["PCRep Message"].elems[1] = {
			pcep_elem : pcep.lists["response-list"],
			optional : false
		};
	pcep.messages["PCRep Message"].rfc="RFC5440";

	 //PCEP Notification Message
	pcep.messages["PCNtf Message"] = new pcep.pcep_element();
	pcep.messages["PCNtf Message"].name = "PCNtf Message"
	pcep.messages["PCNtf Message"].elems =[];
		pcep.messages["PCNtf Message"].elems[0] = {
			pcep_elem : pcep_common_header,
			optional : false
		};
		pcep.messages["PCNtf Message"].elems[1] = {
			pcep_elem : pcep.lists["notify-list"],
			optional : false
		};
	pcep.messages["PCNtf Message"].rfc="RFC5440"; 

	//err-choice
	pcep.choices["err-choice"] = new pcep.pcep_element();
	pcep.choices["err-choice"].type = "choice";
	pcep.choices["err-choice"].name = "err-choice";
	pcep.choices["err-choice"].elems = [];
	pcep.choices["err-choice"].elems[0] = {
		pcep_elem : pcep.constructs["error-open"],
		optional : false
	};
	pcep.choices["err-choice"].elems[1] = {
		pcep_elem : pcep.lists["error-obj-list"],
		optional : false
	};
	pcep.choices["err-choice"].rfc = "RFC5440";

	//PCEP Error Message
	pcep.messages["PCErr Message"] = new pcep.pcep_element();
	pcep.messages["PCErr Message"].name = "PCErr Message"
	pcep.messages["PCErr Message"].elems =[];
	pcep.messages["PCErr Message"].elems[0] = {
		pcep_elem : pcep_common_header,
		optional : false
	};
	pcep.messages["PCErr Message"].elems[1] = {
		pcep_elem : pcep.choices["err-choice"],
		optional : false
	};
	pcep.messages["PCErr Message"].elems[2] = {
		pcep_elem : pcep.lists["error-list"],
		optional : false
	};
	pcep.messages["PCErr Message"].rfc="RFC5440"; 


	//PCEP Close Message
	pcep.messages["Close Message"] = new pcep.pcep_element();
	pcep.messages["Close Message"].name = "Close Message"
	pcep.messages["Close Message"].elems = [];
	pcep.messages["Close Message"].elems[0] = {
		pcep_elem : pcep_common_header,
		optional : false
	};
	pcep.messages["Close Message"].elems[1] = {
		pcep_elem : pcep.objects["CLOSE"],
		optional : false
	};
	pcep.messages["Close Message"].rfc="RFC5440"; 


}

) (jPCEPGrammar,jQuery);


