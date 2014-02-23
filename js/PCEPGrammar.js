grammar= {
    "rfcs": [
        "RFC5440",
        "RFC5520",
        "RFC5551",
        "RFC5455",
        "RFC5541",
        "RFC5557",
        "RFC5886",
        "draft-ietf-pce-stateful-pce-08",
        "draft-ietf-pce-pce-initiated-lsp-00"
    ],
    "elements": {
        "Open Message": {
            "name": "Open Message",
            "elems": [
                {
                    "elem": "Common Header",
                    "optional": false
                },
                {
                    "elem": "OPEN",
                    "optional": false
                }
            ],
            "type": "message",
            "rfc": "RFC5440"
        },
        "Common Header": {
            "name": "Common Header",
            "type": "object",
            "rfc": "RFC5440"
        },
        "OPEN": {
            "name": "OPEN",
            "type": "object",
            "rfc": "RFC5440"
        },
        "Keepalive Message": {
            "name": "Keepalive Message",
            "elems": [
                {
                    "elem": "Common Header",
                    "optional": false
                }
            ],
            "type": "message",
            "rfc": "RFC5440"
        },
        "PCReq Message": {
            "name": "PCReq Message",
            "elems": [
                {
                    "elem": "Common Header",
                    "optional": false
                },
                {
                    "elem": "svec-tuple-list",
                    "optional": true
                },
                {
                    "elem": "request-list",
                    "optional": false
                }
            ],
            "type": "message",
            "rfc": "RFC5440"
        },
        "svec-list": {
            "name": "svec-list",
            "elems": [
                {
                    "elem": "SVEC",
                    "optional": false
                }
            ],
            "type": "list",
            "rfc": "RFC5440"
        },
        "request-list": {
            "name": "request-list",
            "elems": [
                {
                    "elem": "request",
                    "optional": false
                }
            ],
            "type": "list",
            "rfc": "RFC5440"
        },
        "SVEC": {
            "name": "SVEC",
            "type": "object",
            "rfc": "RFC5440"
        },
        "request": {
            "name": "request",
            "elems": [
                {
                    "elem": "RP",
                    "optional": false
                },
                {
                    "elem": "computation-choice",
                    "optional": false
                }
            ],
            "type": "construct",
            "rfc": "RFC5440"
        },
        "RP": {
            "name": "RP",
            "type": "object",
            "rfc": "RFC5440"
        },
        "END-POINTS": {
            "name": "END-POINTS",
            "type": "object",
            "rfc": "RFC5440"
        },
        "LSPA": {
            "name": "LSPA",
            "type": "object",
            "rfc": "RFC5440"
        },
        "BANDWIDTH": {
            "name": "BANDWIDTH",
            "type": "object",
            "rfc": "RFC5440"
        },
        "metric-list": {
            "name": "metric-list",
            "elems": [
                {
                    "elem": "METRIC",
                    "optional": false
                }
            ],
            "type": "list",
            "rfc": "RFC5440"
        },
        "rro-bw-pair": {
            "name": "rro-bw-pair",
            "elems": [
                {
                    "elem": "RRO",
                    "optional": false
                },
                {
                    "elem": "BANDWIDTH",
                    "optional": true
                }
            ],
            "type": "construct",
            "rfc": "RFC5440"
        },
        "IRO": {
            "name": "IRO",
            "type": "object",
            "rfc": "RFC5440"
        },
        "LOAD-BALANCING": {
            "name": "LOAD-BALANCING",
            "type": "object",
            "rfc": "RFC5440"
        },
        "RRO": {
            "name": "RRO",
            "type": "object",
            "rfc": "RFC5440"
        },
        "METRIC": {
            "name": "METRIC",
            "type": "object",
            "rfc": "RFC5440"
        },
        "PCRep Message": {
            "name": "PCRep Message",
            "elems": [
                {
                    "elem": "Common Header",
                    "optional": false
                },
                {
                    "elem": "response-list",
                    "optional": false
                }
            ],
            "type": "message",
            "rfc": "RFC5440"
        },
        "response-list": {
            "name": "response-list",
            "elems": [
                {
                    "elem": "response",
                    "optional": false
                }
            ],
            "type": "list",
            "rfc": "RFC5440"
        },
        "response": {
            "name": "response",
            "elems": [
                {
                    "elem": "RP",
                    "optional": false
                },
                {
                    "elem": "NO-PATH",
                    "optional": true
                },
                {
                    "elem": "attribute-list",
                    "optional": true
                },
                {
                    "elem": "path-list",
                    "optional": true
                }
            ],
            "type": "construct",
            "rfc": "RFC5440"
        },
        "NO-PATH": {
            "name": "NO-PATH",
            "type": "object",
            "rfc": "RFC5440"
        },
        "attribute-list": {
            "name": "attribute-list",
            "elems": [
                {
                    "elem": "OF",
                    "optional": true
                },
                {
                    "elem": "LSPA",
                    "optional": true
                },
                {
                    "elem": "BANDWIDTH",
                    "optional": true
                },
                {
                    "elem": "metric-list",
                    "optional": true
                },
                {
                    "elem": "IRO",
                    "optional": true
                },
                {
                    "elem": "XRO",
                    "optional": true
                }
            ],
            "type": "construct",
            "rfc": "RFC5440"
        },
        "path-list": {
            "name": "path-list",
            "elems": [
                {
                    "elem": "path",
                    "optional": false
                }
            ],
            "type": "list",
            "rfc": "RFC5440"
        },
        "path": {
            "name": "path",
            "elems": [
                {
                    "elem": "ERO",
                    "optional": false
                },
                {
                    "elem": "attribute-list",
                    "optional": false
                }
            ],
            "type": "construct",
            "rfc": "RFC5440"
        },
        "ERO": {
            "name": "ERO",
            "type": "object",
            "rfc": "RFC5440"
        },
        "PCNtf Message": {
            "name": "PCNtf Message",
            "elems": [
                {
                    "elem": "Common Header",
                    "optional": false
                },
                {
                    "elem": "notify-list",
                    "optional": false
                }
            ],
            "type": "message",
            "rfc": "RFC5440"
        },
        "notify-list": {
            "name": "notify-list",
            "elems": [
                {
                    "elem": "notify",
                    "optional": false
                }
            ],
            "type": "list",
            "rfc": "RFC5440"
        },
        "notify": {
            "name": "notify",
            "elems": [
                {
                    "elem": "request-id-list",
                    "optional": true
                },
                {
                    "elem": "notification-list",
                    "optional": false
                }
            ],
            "type": "construct",
            "rfc": "RFC5440"
        },
        "request-id-list": {
            "name": "request-id-list",
            "elems": [
                {
                    "elem": "RP",
                    "optional": false
                }
            ],
            "type": "list",
            "rfc": "RFC5440"
        },
        "notification-list": {
            "name": "notification-list",
            "elems": [
                {
                    "elem": "NOTIFICATION",
                    "optional": false
                }
            ],
            "type": "list",
            "rfc": "RFC5440"
        },
        "NOTIFICATION": {
            "name": "NOTIFICATION",
            "type": "object",
            "rfc": "RFC5440"
        },
        "PCErr Message": {
            "name": "PCErr Message",
            "elems": [
                {
                    "elem": "Common Header",
                    "optional": false
                },
                {
                    "elem": "err-choice",
                    "optional": false
                },
                {
                    "elem": "error-list",
                    "optional": true
                }
            ],
            "type": "message",
            "rfc": "RFC5440"
        },
        "err-choice": {
            "name": "err-choice",
            "elems": [
                {
                    "elem": "err-open"
                },
                {
                    "elem": "error"
                }
            ],
            "type": "choice",
            "rfc": "RFC5440"
        },
        "error-list": {
            "name": "error-list",
            "elems": [
                {
                    "elem": "error",
                    "optional": false
                }
            ],
            "type": "list",
            "rfc": "RFC5440"
        },
        "err-open": {
            "name": "err-open",
            "elems": [
                {
                    "elem": "error-obj-list",
                    "optional": false
                },
                {
                    "elem": "OPEN",
                    "optional": true
                }
            ],
            "type": "construct",
            "rfc": "RFC5440"
        },
        "error": {
            "name": "error",
            "elems": [
                {
                    "elem": "request-id-list",
                    "optional": true
                },
                {
                    "elem": "error-obj-list",
                    "optional": false
                }
            ],
            "type": "construct",
            "rfc": "RFC5440"
        },
        "error-obj-list": {
            "name": "error-obj-list",
            "elems": [
                {
                    "elem": "PCEP-ERROR",
                    "optional": false
                }
            ],
            "type": "list",
            "rfc": "RFC5440"
        },
        "PCEP-ERROR": {
            "name": "PCEP-ERROR",
            "type": "object",
            "rfc": "RFC5440"
        },
        "Close Message": {
            "name": "Close Message",
            "elems": [
                {
                    "elem": "Common Header",
                    "optional": false
                },
                {
                    "elem": "CLOSE",
                    "optional": false
                }
            ],
            "type": "message",
            "rfc": "RFC5440"
        },
        "CLOSE": {
            "name": "CLOSE",
            "type": "object",
            "rfc": "RFC5440"
        },
        "computation-choice": {
            "name": "computation-choice",
            "elems": [
                {
                    "elem": "segment-computation"
                },
                {
                    "elem": "path-key-expansion"
                }
            ],
            "type": "choice",
            "rfc": "RFC5440"
        },
        "segment-computation": {
            "name": "segment-computation",
            "elems": [
                {
                    "elem": "END-POINTS",
                    "optional": false
                },
                {
                    "elem": "CLASSTYPE",
                    "optional": true
                },
                {
                    "elem": "LSPA",
                    "optional": true
                },
                {
                    "elem": "BANDWIDTH",
                    "optional": true
                },
                {
                    "elem": "metric-list",
                    "optional": true
                },
                {
                    "elem": "OF",
                    "optional": true
                },
                {
                    "elem": "rro-bw-pair",
                    "optional": true
                },
                {
                    "elem": "IRO",
                    "optional": true
                },
                {
                    "elem": "LOAD-BALANCING",
                    "optional": true
                },
                {
                    "elem": "XRO",
                    "optional": true
                }
            ],
            "type": "construct",
            "rfc": "RFC5440"
        },
        "path-key-expansion": {
            "name": "path-key-expansion",
            "elems": [
                {
                    "elem": "PATH-KEY",
                    "optional": false
                }
            ],
            "type": "construct",
            "rfc": "RFC5520"
        },
        "PATH-KEY": {
            "name": "PATH-KEY",
            "type": "object",
            "rfc": "RFC5520"
        },
        "XRO": {
            "name": "XRO",
            "type": "object",
            "rfc": "RFC5521"
        },
        "CLASSTYPE": {
            "name": "CLASSTYPE",
            "type": "object",
            "rfc": "RFC5455"
        },
        "svec-tuple": {
            "name": "svec-tuple",
            "elems": [
                {
                    "elem": "SVEC",
                    "optional": false
                },
                {
                    "elem": "OF",
                    "optional": true
                },
                {
                    "elem": "metric-list",
                    "optional": true
                },
                {
                    "elem": "GC",
                    "optional": true
                },
                {
                    "elem": "XRO",
                    "optional": true
                }
            ],
            "type": "construct",
            "rfc": "RFC5440"
        },
        "OF": {
            "name": "OF",
            "type": "object",
            "rfc": "RFC5541"
        },
        "vendor-info-list": {
            "name": "vendor-info-list",
            "type": "object",
            "rfc": "RFC5557"
        },
        "GC": {
            "name": "GC",
            "type": "object",
            "rfc": "RFC5557"
        },
        "svec-tuple-list": {
            "name": "svec-tuple-list",
            "elems": [
                {
                    "elem": "svec-tuple",
                    "optional": false
                }
            ],
            "type": "list",
            "rfc": "RFC5440"
        },
        "PCMonReq Message": {
            "name": "PCMonReq Message",
            "elems": [
                {
                    "elem": "Common Header",
                    "optional": false
                },
                {
                    "elem": "MONITORING",
                    "optional": false
                },
                {
                    "elem": "PCC-ID-REQ",
                    "optional": false
                },
                {
                    "elem": "pce-list",
                    "optional": true
                },
                {
                    "elem": "svec-list",
                    "optional": true
                },
                {
                    "elem": "request-list",
                    "optional": true
                }
            ],
            "type": "message",
            "rfc": "RFC5886"
        },
        "MONITORING": {
            "name": "MONITORING",
            "type": "object",
            "rfc": "RFC5886"
        },
        "PCC-ID-REQ": {
            "name": "PCC-ID-REQ",
            "type": "object",
            "rfc": "RFC5886"
        },
        "pce-list": {
            "name": "pce-list",
            "elems": [
                {
                    "elem": "PCE-ID",
                    "optional": false
                }
            ],
            "type": "list",
            "rfc": "RFC5886"
        },
        "PCE-ID": {
            "name": "PCE-ID",
            "type": "object",
            "rfc": "RFC5886"
        },
        "PCMonRep Message": {
            "name": "PCMonRep Message",
            "elems": [
                {
                    "elem": "Common Header",
                    "optional": false
                },
                {
                    "elem": "MONITORING",
                    "optional": false
                },
                {
                    "elem": "PCC-ID-REQ",
                    "optional": false
                },
                {
                    "elem": "RP",
                    "optional": true
                },
                {
                    "elem": "metric-pce-list",
                    "optional": true
                }
            ],
            "type": "message",
            "rfc": "RFC5886"
        },
        "metric-pce-list": {
            "name": "metric-pce-list",
            "elems": [
                {
                    "elem": "metric-pce",
                    "optional": false
                }
            ],
            "type": "list",
            "rfc": "RFC5886"
        },
        "metric-pce": {
            "name": "metric-pce",
            "elems": [
                {
                    "elem": "PCE-ID",
                    "optional": false
                },
                {
                    "elem": "PROC-TIME",
                    "optional": true
                },
                {
                    "elem": "OVERLOAD",
                    "optional": true
                }
            ],
            "type": "construct",
            "rfc": "RFC5886"
        },
        "PROC-TIME": {
            "name": "PROC-TIME",
            "type": "object",
            "rfc": "RFC5886"
        },
        "OVERLOAD": {
            "name": "OVERLOAD",
            "type": "object",
            "rfc": "RFC5886"
        },
              "PCRpt Message": {
            "name": "PCRpt Message",
            "elems": [
                {
                    "elem": "Common Header",
                    "optional": false
                },
                {
                    "elem": "state-report-list",
                    "optional": false
                }
            ],
            "type": "message",
            "rfc": "draft-ietf-pce-stateful-pce-08"
        },
                "state-report-list": {
            "name": "state-report-list",
            "elems": [
                {
                    "elem": "state-report",
                    "optional": false
                }
            ],
            "type": "list",
            "rfc": "draft-ietf-pce-stateful-pce-08"
        },
        "state-report": {
            "name": "state-report",
            "elems": [
                {
                    "elem": "SRP",
                    "optional": true
                },
                {
                    "elem": "LSP",
                    "optional": false
                },
                {
                    "elem": "path",
                    "optional": false
                }
            ],
            "type": "construct",
            "rfc": "draft-ietf-pce-stateful-pce-08"
        },
        "SRP": {
            "name": "SRP",
            "type": "object",
            "rfc": "draft-ietf-pce-stateful-pce-08"
        },
        "LSP": {
            "name": "LSP",
            "type": "object",
            "rfc": "draft-ietf-pce-stateful-pce-08"
        },
               "PCUpd Message": {
            "name": "PCUpd Message",
            "elems": [
                {
                    "elem": "Common Header",
                    "optional": false
                },
                {
                    "elem": "update-request-list",
                    "optional": false
                }
            ],
            "type": "message",
            "rfc": "draft-ietf-pce-stateful-pce-08"
        },
        "update-request-list": {
            "name": "update-request-list",
            "elems": [
                {
                    "elem": "update-request",
                    "optional": false
                }
            ],
            "type": "list",
            "rfc": "draft-ietf-pce-stateful-pce-08"
        },
        "update-request": {
            "name": "update-request",
            "elems": [
                {
                    "elem": "SRP",
                    "optional": false
                },
                {
                    "elem": "LSP",
                    "optional": false
                },
                {
                    "elem": "path",
                    "optional": false
                }
            ],
            "type": "construct",
            "rfc": "draft-ietf-pce-stateful-pce-08"
        },
        "PCInitiate Message": {
            "name": "PCInitiate Message",
            "elems": [
                {
                    "elem": "Common Header",
                    "optional": false
                },
                {
                    "elem": "PCE-initiated-lsp-list",
                    "optional": false
                }
            ],
            "type": "message",
            "rfc": "draft-ietf-pce-pce-initiated-lsp-00"
        },
        "PCE-initiated-lsp-list": {
            "name": "PCE-initiated-lsp-list",
            "elems": [
                {
                    "elem": "PCE-initiated-lsp-request",
                    "optional": false
                }
            ],
            "type": "list",
            "rfc": "draft-ietf-pce-pce-initiated-lsp-00"
        },
        "PCE-initiated-lsp-request": {
            "name": "PCE-initiated-lsp-request",
            "elems": [
                {
                    "elem": "PCE-initiated-lsp-instantiation"
                },
                {
                    "elem": "PCE-initiated-lsp-deletion"
                }
            ],
            "type": "choice",
            "rfc": "draft-ietf-pce-pce-initiated-lsp-00"
        },
        "PCE-initiated-lsp-instantiation": {
            "name": "PCE-initiated-lsp-instantiation",
            "elems": [
                {
                    "elem": "SRP",
                    "optional": false
                },
                {
                    "elem": "LSP",
                    "optional": false
                },
                {
                    "elem": "END-POINTS",
                    "optional": false
                },
                {
                    "elem": "ERO",
                    "optional": false
                },
                {
                    "elem": "attribute-list",
                    "optional": true
                }
            ],
            "type": "construct",
            "rfc": "draft-ietf-pce-pce-initiated-lsp-00"
        },
        "PCE-initiated-lsp-deletion": {
            "name": "PCE-initiated-lsp-deletion",
            "elems": [
                {
                    "elem": "SRP",
                    "optional": false
                },
                {
                    "elem": "LSP",
                    "optional": false
                }
            ],
            "type": "construct",
            "rfc": "draft-ietf-pce-pce-initiated-lsp-00"
        },
        "SRP": {
            "name": "SRP",
            "type": "object",
            "rfc": "draft-ietf-pce-pce-initiated-lsp-00"
        },
        "LSP": {
            "name": "LSP",
            "type": "object",
            "rfc": "draft-ietf-pce-pce-initiated-lsp-00"
        }
    }
}