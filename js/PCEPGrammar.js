/**

pcep-grammar

Javascript PCEP grammar library

Supported RFCS:

RFC 5440, RFC 5520, RFC 5521, RFC 5886

Oscar Gonzalez de Dios

*/

PCEPGrammar = {};

(function (pcep,$,undefined) {

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

	//Common Header
	pcep_common_header = {
		type: "header",
		name: "Common Header",
		rfc: "RFC5440"
	};

	//Objects & Object lists

	//BANDWIDTH Object
	pcep.objects["BANDWIDTH"] = {
		type: "object",
		name: "BANDWIDTH",
		rfc: "RFC5440"
	};

	//CLOSE Object
	pcep.objects["CLOSE"] = {
		type: "object",
		name: "CLOSE",
		rfc: "RFC5440"
	};

	//CLASSTYPE Object
	pcep.objects["CLASSTYPE"] = {
		type: "object",
		name: "CLASSTYPE",
		rfc: "RFC5455"
	};

	//END-POINTS Object
	pcep.objects["END-POINTS"] = {
		type: "object",
		name: "END-POINTS",
		rfc: "RFC5440"
	};

	//ERO Object
	pcep.objects["ERO"] = {
		type: "object",
		name: "ERO",
		rfc: "RFC5440"
	};

	//IRO Object
	pcep.objects["IRO"] = {
		type: "object",
		name: "ERO",
		rfc: "RFC5440"
	};

	//LOADBALANCING Object
	pcep.objects["LOAD-BALANCING"] = {
		type: "object",
		name: "LOAD-BALANCING",
		rfc: "RFC5440"
	};

	//LSPA Object
	pcep.objects["LSPA"] = {
		type: "object",
		name: "LSPA",
		rfc: "RFC5440"
	};

	//METRIC Object
	pcep.objects["METRIC"] = {
		type: "object",
		name: "METRIC",
		rfc: "RFC5440"
	};

	//metric-list
	pcep.lists["metric-list"] = {};
	pcep.lists["metric-list"].type = "list";
	pcep.lists["metric-list"].name = "metric-list";
	pcep.lists["metric-list"].pcep_elem = pcep.objects["METRIC"];
	pcep.lists["metric-list"].rfc="RFC5440";

	//NO-PATH Object
	pcep.objects["NO-PATH"] = {
		type: "object",
		name: "NO-PATH",
		rfc: "RFC5440"
	};

	//NOTIFICATION Object
	pcep.objects["NOTIFICATION"] = {
		type: "object",
		name: "NOTIFICATION",
		rfc: "RFC5440"
	};	

	//NOTIFICATION-list
	pcep.lists["notification-list"] ={};
	pcep.lists["notification-list"].type = "list";
	pcep.lists["notification-list"].name = "notification-list";
	pcep.lists["notification-list"].pcep_elem = pcep.objects["NOTIFICATION"];
	pcep.lists["notification-list"].rfc="RFC5440";

	//OPEN Object
	pcep.objects["OPEN"] = {
		type: "object",
		name: "OPEN",
		rfc: "RFC5440"
	};	

	//PATH-KEY Object
	pcep.objects["PATH-KEY"] = {
		type: "object",
		name: "PATH-KEY",
		rfc: "RFC5520"
	};		

	//ERROR Object
	pcep.objects["PCEP-ERROR"] = {
		type: "object",
		name: "PCEP-ERROR",
		rfc: "RFC5440"
	};	

	//request-id-list
	pcep.lists["error-obj-list"] ={};
	pcep.lists["error-obj-list"].type = "list";
	pcep.lists["error-obj-list"].name = "error-obj-list";
	pcep.lists["error-obj-list"].pcep_elem = pcep.objects["PCEP-ERROR"];
	pcep.lists["error-obj-list"].rfc="RFC5440";

	//RP Object
	pcep.objects["RP"] = {
		type: "object",
		name: "RP",
		rfc: "RFC5440"
	};	

	//request-id-list
	pcep.lists["request-id-list"] ={};
	pcep.lists["request-id-list"].type = "list";
	pcep.lists["request-id-list"].name = "request-id-list";
	pcep.lists["request-id-list"].pcep_elem = pcep.objects["RP"];
	pcep.lists["request-id-list"].rfc="RFC5440";

	//RRO Object
	pcep.objects["RRO"] = {
		type: "object",
		name: "RRO",
		rfc: "RFC5440"
	};	

	//LOADBALANCING Object
	pcep.objects["SVEC"] = {
		type: "object",
		name: "SVEC",
		rfc: "RFC5440"
	};	

	//XRO Object
	pcep.objects["XRO"] = {
		type: "object",
		name: "XRO",
		rfc: "RFC5521"
	};	

	//Constructs

	//rro-bw-pair
	pcep.constructs["rro-bw-pair"] = {
		type: "object",
		name: "rro-bw-pair",
		elems: [ 
			{
				pcep_elem : pcep.objects["RRO"],
				optional : false
			}, {
				pcep_elem :  pcep.objects["BANDWIDTH"],
				optional : true
			}
		],
		rfc: "RFC5440",
		note: "In RFC 5440, rro-bw-pair was defined inside the request, not as a construct"
	};	

	//	attribute-list construct 
	pcep.constructs["attribute-list"] ={};
	pcep.constructs["attribute-list"].type = "construct";
	pcep.constructs["attribute-list"].name = "attribute-list";
	pcep.constructs["attribute-list"].elems =[];
	pcep.constructs["attribute-list"].elems[0] = {
		pcep_elem : pcep.objects["LSPA"],
		optional : true
	};
	pcep.constructs["attribute-list"].elems[1] = {
		pcep_elem : pcep.objects["BANDWIDTH"],
		optional : true
	};
	pcep.constructs["attribute-list"].elems[2] = {
		pcep_elem : pcep.lists["metric-list"],
		optional : true
	};
	pcep.constructs["attribute-list"].elems[3] = {
		pcep_elem : pcep.objects["IRO"],
		optional : true
	};
	pcep.constructs["attribute-list"].rfc="RFC5440";

	//	path construct 
	pcep.constructs["path"] ={};
	pcep.constructs["path"].type = "construct";
	pcep.constructs["path"].name = "path";
	pcep.constructs["path"].elems =[];
	pcep.constructs["path"].elems[0] = {
		pcep_elem : pcep.objects["ERO"],
		optional : false
	};
	pcep.constructs["path"].elems[1] = {
		pcep_elem : pcep.constructs["attribute-list"],
		optional : true
	};

	pcep.constructs["path"].rfc="RFC5440";


	//attribute-list
	pcep.lists["path-list"] ={};
	pcep.lists["path-list"].type = "list";
	pcep.lists["path-list"].name = "path-list";
	pcep.lists["path-list"].pcep_elem = pcep.constructs["path"];
	pcep.lists["path-list"].rfc="RFC5440";

	// Segment-computation
	pcep.constructs["segment-computation"] = {};
	pcep.constructs["segment-computation"].type = "construct";
	pcep.constructs["segment-computation"].name = "segment-computation";
	pcep.constructs["segment-computation"].elems =[];
	pcep.constructs["segment-computation"].elems[0] = {
		pcep_elem :  pcep.objects["END-POINTS"],
		optional : false
	};
	pcep.constructs["segment-computation"].elems[1] = {
		pcep_elem :  pcep.objects["CLASSTYPE"],
		optional : true,
		note: "RFC5455 mentions that CLASSTYPE object be inserted after the END-POINT objects is provided"
	};
	pcep.constructs["segment-computation"].elems[2] = {
		pcep_elem :  pcep.objects["LSPA"],
		optional : true
	};
	pcep.constructs["segment-computation"].elems[3] = {
		pcep_elem :  pcep.objects["BANDWIDTH"],
		optional : true
	};
	pcep.constructs["segment-computation"].elems[4] = {
		pcep_elem :  pcep.lists["metric-list"],
		optional : true
	};
	pcep.constructs["segment-computation"].elems[5] = {
		pcep_elem :  pcep.constructs["rro-bw-pair"],
		optional : true
	};
	pcep.constructs["segment-computation"].elems[6] = {
		pcep_elem :  pcep.objects["IRO"],
		optional : true
	};
	pcep.constructs["segment-computation"].elems[7] = {
		pcep_elem :  pcep.objects["LOAD-BALANCING"],
		optional : true
	};
	pcep.constructs["segment-computation"].elems[8] = {
		pcep_elem :  pcep.objects["XRO"],
		optional : true,
		note: "no ordering in RFC5521 is provided"
	};

	pcep.constructs["segment-computation"].rfc = "RFC5440";
	pcep.constructs["segment-computation"].note = "The construct path-key-expansion really appeard in RF5220, but it contains all the objects of the request as defined in RFC5440";

	//path-key-expansion
	pcep.constructs["path-key-expansion"] ={};
	pcep.constructs["path-key-expansion"].type = "construct";
	pcep.constructs["path-key-expansion"].name = "path-key-expansion";
	pcep.constructs["path-key-expansion"].elems =[];
	pcep.constructs["path-key-expansion"].elems[0] = {
		pcep_elem : pcep.objects["PATH-KEY"],
		optional : false
	};
	pcep.constructs["path-key-expansion"].rfc = "RFC5520";

	pcep.choices["seg-com-pke"] ={};
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
	pcep.constructs["request"] ={};
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
	pcep.lists["request-list"] ={};
	pcep.lists["request-list"].type = "list";
	pcep.lists["request-list"].name = "request-list";
	pcep.lists["request-list"].pcep_elem = pcep.constructs["request"];
	pcep.lists["request-list"].rfc="RFC5440";

	//	Construct response
	pcep.constructs["response"] ={};
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
		pcep_elem : pcep.constructs["attribute-list"],
		optional : true
	};
	pcep.constructs["response"].elems[3] = {
		pcep_elem : pcep.lists["path-list"],
		optional : true
	};
	pcep.constructs["response"].rfc="RFC5440";

	//Lists

	//response-list
	pcep.lists["response-list"] ={};
	pcep.lists["response-list"].type = "list";
	pcep.lists["response-list"].name = "response-list";
	pcep.lists["response-list"].pcep_elem = pcep.constructs["response"];
	pcep.lists["response-list"].rfc="RFC5440";

//	Construct response
	pcep.constructs["notify"] ={};
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
	pcep.lists["notify-list"] ={};
	pcep.lists["notify-list"].type = "list";
	pcep.lists["notify-list"].name = "notify-list";
	pcep.lists["notify-list"].pcep_elem = pcep.constructs["notify"];
	pcep.lists["notify-list"].rfc="RFC5440";

	//svec-list
	pcep.lists["svec-list"] ={};
	pcep.lists["svec-list"].type = "list";
	pcep.lists["svec-list"].name = "svec-list";
	pcep.lists["svec-list"].pcep_elem = pcep.objects["SVEC"];
	pcep.lists["svec-list"].rfc="RFC5440";

	//error-open construct
	pcep.constructs["error-open"] ={};
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
	pcep.constructs["error"] ={};
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
	pcep.lists["error-list"] ={};
	pcep.lists["error-list"].type = "list";
	pcep.lists["error-list"].name = "error-list";
	pcep.lists["error-list"].pcep_elem = pcep.constructs["error"];
	pcep.lists["error-list"].rfc="RFC5440";

	//err-choice
	pcep.choices["err-choice"] ={};
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

	//Messages

	//PCEP Open Message
	pcep.messages["Open Message"] ={
		type: "message"
	};
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
	pcep.messages["Keepalive Message"] ={
		type: "message"
	};
	pcep.messages["Keepalive Message"].name = "Keepalive Message"
	pcep.messages["Keepalive Message"].elems =[];
		pcep.messages["Keepalive Message"].elems[0] = {
			pcep_elem : pcep_common_header,
			optional : false
		};
	pcep.messages["Keepalive Message"].rfc="RFC5440";

   //PCEP Request Message
	pcep.messages["PCReqMessage"] ={
		type: "message"
	};
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
     
	pcep.messages["PCRep Message"] ={};
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
	pcep.messages["PCNtf Message"] ={
		type: "message"
	};
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

	//PCEP Error Message
	pcep.messages["PCErr Message"] ={
		type: "message"
	};
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
	pcep.messages["Close Message"] = {
		type: "message",
		elems: [{
			pcep_elem : pcep_common_header,
			optional : false
			}, {
			pcep_elem : pcep.objects["CLOSE"],
			optional : false
		}],
		name: "Close Message",
		rfc: "RFC5440"
	};	


}

) (PCEPGrammar,jQuery);


