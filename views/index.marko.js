function create(__helpers) {
  var str = __helpers.s,
      empty = __helpers.e,
      notEmpty = __helpers.ne,
      escapeXml = __helpers.x;

  return function render(data, out) {
    out.w("<!DOCTYPE html> <html lang=\"en\"> <head> <title>Ingenico Node.js S2S example</title> <link rel=\"stylesheet\" href=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css\"> <style>\r\n    .output-wrapper {\r\n      display: none;\r\n    }\r\n  </style> </head> <body> <div class=\"container\"> <div class=\"row\"> <div class=\"col-xs-12\"> <h1>Node.js S2S SDK explorer</h1> <p>You can explore the various calls of the Node.js S2S SDK by clicking the method in the menu; the response will be rendered when the call finishes. This tool is for development use only and must never be made public.</p> </div> </div> <div class=\"row\"> <div class=\"col-xs-12 col-md-3\"> <div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\"> <div class=\"panel panel-default\"> <div class=\"panel-heading\" role=\"tab\" id=\"headingCaptures\"> <h4 class=\"panel-title\"> <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseCaptures\" aria-expanded=\"true\" aria-controls=\"collapseCaptures\"> Captures </a> </h4> </div> <div id=\"collapseCaptures\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingCaptures\"> <ul class=\"list-group\"> <li class=\"list-group-item\"><a data-href=\"/captures/get\" href=\"#\" data-input=\"captureId\">Get capture</a></li> </ul> </div> </div> <div class=\"panel panel-default\"> <div class=\"panel-heading\" role=\"tab\" id=\"headingHostedCheckouts\"> <h4 class=\"panel-title\"> <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseHostedCheckouts\" aria-expanded=\"true\" aria-controls=\"collapseHostedCheckouts\"> HostedCheckouts </a> </h4> </div> <div id=\"collapseHostedCheckouts\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingHostedCheckouts\"> <ul class=\"list-group\"> <li class=\"list-group-item\"><a data-href=\"/hostedcheckout\" href=\"#\">Create hosted checkout</a></li> <li class=\"list-group-item\"><a data-href=\"/hostedcheckoutstatus\" href=\"#\" data-input=\"hostedCheckoutId\">Get hosted checkout status</a></li> </ul> </div> </div> <div class=\"panel panel-default\"> <div class=\"panel-heading\" role=\"tab\" id=\"headingPayments\"> <h4 class=\"panel-title\"> <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePayments\" aria-expanded=\"true\" aria-controls=\"collapsePayments\"> Payments </a> </h4> </div> <div id=\"collapsePayments\" class=\"panel-collapse collapse in\" role=\"tabpanel\" aria-labelledby=\"headingPayments\"> <ul class=\"list-group\"> <li class=\"list-group-item\"><a data-href=\"/payments/findPayments\" href=\"#\" data-input=\"merchantReference\">Find payments</a></li> <li class=\"list-group-item\"><a data-href=\"/payments/createPayment\" href=\"#\">Create payment</a></li> <li class=\"list-group-item\"><a data-href=\"/payments/retrievePayment\" href=\"#\" data-input=\"paymentId\">Retrieve payment</a></li> <li class=\"list-group-item\"><a data-href=\"/payments/approvesChallengedPayment\" href=\"#\" data-input=\"paymentId\">Approves challenged payment</a></li> <li class=\"list-group-item\"><a data-href=\"/payments/approvePayment\" href=\"#\" data-input=\"paymentId\">Approve payment</a></li> <li class=\"list-group-item\"><a data-href=\"/payments/capturePayment\" href=\"#\" data-input=\"paymentId\">Capture payment</a></li> <li class=\"list-group-item\"><a data-href=\"/payments/getPaymentCaptures\" href=\"#\" data-input=\"paymentId\">Get captures of payment</a></li> <li class=\"list-group-item\"><a data-href=\"/payments/tokenizePayment\" href=\"#\" data-input=\"paymentId\">Tokenize payment</a></li> <li class=\"list-group-item\"><a data-href=\"/payments/cancelPayment\" href=\"#\" data-input=\"paymentId\">Cancel payment</a></li> <li class=\"list-group-item\"><a data-href=\"/payments/createRefund\" href=\"#\" data-input=\"paymentId\">Create refund</a></li> <li class=\"list-group-item\"><a data-href=\"/payments/cancelApprovalPayment\" href=\"#\" data-input=\"paymentId\">Cancel approval payment</a></li> <li class=\"list-group-item\"><a data-href=\"/payments/thirdPartyStatus\" href=\"#\" data-input=\"paymentId\">Get third party status</a></li> <li class=\"list-group-item\"><a data-href=\"/payments/completePayment\" href=\"#\" data-input=\"paymentId\">Complete payment</a></li> </ul> </div> </div> <div class=\"panel panel-default\"> <div class=\"panel-heading\" role=\"tab\" id=\"headingPayouts\"> <h4 class=\"panel-title\"> <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapsePayouts\" aria-expanded=\"true\" aria-controls=\"collapsePayouts\"> Payouts </a> </h4> </div> <div id=\"collapsePayouts\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingPayouts\"> <ul class=\"list-group\"> <li class=\"list-group-item\"><a data-href=\"/payouts/findPayouts\" href=\"#\" data-input=\"merchantReference\">Find payouts</a></li> <li class=\"list-group-item\"><a data-href=\"/payouts/createPayout\" href=\"#\">Create payout</a></li> <li class=\"list-group-item\"><a data-href=\"/payouts/retrievePayout\" href=\"#\" data-input=\"payoutId\">Retrieve payout</a></li> <li class=\"list-group-item\"><a data-href=\"/payouts/approvesPayout\" href=\"#\" data-input=\"payoutId\">Approve payout</a></li> <li class=\"list-group-item\"><a data-href=\"/payouts/cancelApprovalPayout\" href=\"#\" data-input=\"payoutId\">Undo approve payout</a></li> <li class=\"list-group-item\"><a data-href=\"/payouts/cancelPayout\" href=\"#\" data-input=\"payoutId\">Cancel payout</a></li> </ul> </div> </div> <div class=\"panel panel-default\"> <div class=\"panel-heading\" role=\"tab\" id=\"headingProducts\"> <h4 class=\"panel-title\"> <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseProducts\" aria-expanded=\"true\" aria-controls=\"collapseProducts\"> Products </a> </h4> </div> <div id=\"collapseProducts\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingProducts\"> <ul class=\"list-group\"> <li class=\"list-group-item\"><a data-href=\"/products/retrievePaymentProducts\" href=\"#\">Retrieve payment products</a></li> <li class=\"list-group-item\"><a data-href=\"/products/retrievePaymentProductFields\" data-input=\"paymentProductId\" href=\"#\">Retrieve payment product fields</a></li> <li class=\"list-group-item\"><a data-href=\"/products/networks\" data-input=\"paymentProductId\" href=\"#\">Get supported networks</a></li> <li class=\"list-group-item\"><a data-href=\"/products/publickey\" data-input=\"paymentProductId\" href=\"#\">Get public key</a></li> <li class=\"list-group-item\"><a data-href=\"/products/retrievePaymentProductFieldDirectory\" data-input=\"paymentProductId\" href=\"#\">Retrieve payment product directory</a></li> <li class=\"list-group-item\"><a data-href=\"/products/getCustomerDetails\" data-input=\"paymentProductId, fiscalNumber\" href=\"#\">Get customer details</a></li> </ul> </div> </div> <div class=\"panel panel-default\"> <div class=\"panel-heading\" role=\"tab\" id=\"headingProductGroups\"> <h4 class=\"panel-title\"> <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseProductGroups\" aria-expanded=\"true\" aria-controls=\"collapseProductGroups\"> Product Groups </a> </h4> </div> <div id=\"collapseProductGroups\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingProductGroups\"> <ul class=\"list-group\"> <li class=\"list-group-item\"><a data-href=\"/products/retrievePaymentProductGroups\" href=\"#\">Retrieve payment product groups</a></li> <li class=\"list-group-item\"><a data-href=\"/products/retrievePaymentProductGroup\" data-input=\"paymentProductGroupId\" href=\"#\">Retrieve payment product group</a></li> </ul> </div> </div> <div class=\"panel panel-default\"> <div class=\"panel-heading\" role=\"tab\" id=\"headingRefunds\"> <h4 class=\"panel-title\"> <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseRefunds\" aria-expanded=\"true\" aria-controls=\"collapseRefunds\"> Refunds </a> </h4> </div> <div id=\"collapseRefunds\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingRefunds\"> <ul class=\"list-group\"> <li class=\"list-group-item\"><a data-href=\"/refunds/findRefunds\" href=\"#\" data-input=\"merchantReference\">Find refunds</a></li> <li class=\"list-group-item\"><a data-href=\"/refunds/retrieveRefund\" data-input=\"refundId\" href=\"#\">Retrieve refund</a></li> <li class=\"list-group-item\"><a data-href=\"/refunds/approveRefund\" data-input=\"refundId\" href=\"#\">Approve refund</a></li> <li class=\"list-group-item\"><a data-href=\"/refunds/undoApproveRefund\" data-input=\"refundId\" href=\"#\">Undo approve refund</a></li> <li class=\"list-group-item\"><a data-href=\"/refunds/cancelRefund\" data-input=\"refundId\" href=\"#\">Cancel refund</a></li> </ul> </div> </div> <div class=\"panel panel-default\"> <div class=\"panel-heading\" role=\"tab\" id=\"headingRiskAssessments\"> <h4 class=\"panel-title\"> <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseRiskAssessments\" aria-expanded=\"true\" aria-controls=\"collapseRiskAssessments\"> Risk Assessments </a> </h4> </div> <div id=\"collapseRiskAssessments\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingRiskAssessments\"> <ul class=\"list-group\"> <li class=\"list-group-item\"><a data-href=\"/riskassessments/card\" href=\"#\">Risk-assess card</a></li> <li class=\"list-group-item\"><a data-href=\"/riskassessments/bankaccount\" href=\"#\">Risk-assess bank account</a></li> </ul> </div> </div> <div class=\"panel panel-default\"> <div class=\"panel-heading\" role=\"tab\" id=\"headingServices\"> <h4 class=\"panel-title\"> <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseServices\" aria-expanded=\"true\" aria-controls=\"collapseServices\"> Services </a> </h4> </div> <div id=\"collapseServices\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingServices\"> <ul class=\"list-group\"> <li class=\"list-group-item\"><a data-href=\"/services/testconnection\" href=\"#\">Test connection</a></li> <li class=\"list-group-item\"><a data-href=\"/services/retrieveIINdetails\" href=\"#\">Retrieve IIN details</a></li> <li class=\"list-group-item\"><a data-href=\"/services/convertbankaccount\" href=\"#\">Convert Bankaccount</a></li> <li class=\"list-group-item\"><a data-href=\"/services/convertAmount\" href=\"#\">Convert amount</a></li> </ul> </div> </div> <div class=\"panel panel-default\"> <div class=\"panel-heading\" role=\"tab\" id=\"headingSessions\"> <h4 class=\"panel-title\"> <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseSessions\" aria-expanded=\"true\" aria-controls=\"collapseSessions\"> Sessions </a> </h4> </div> <div id=\"collapseSessions\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingSessions\"> <ul class=\"list-group\"> <li class=\"list-group-item\"><a data-href=\"/sessions/createSession\" href=\"#\">Create session</a></li> </ul> </div> </div> <div class=\"panel panel-default\"> <div class=\"panel-heading\" role=\"tab\" id=\"headingTokens\"> <h4 class=\"panel-title\"> <a role=\"button\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTokens\" aria-expanded=\"true\" aria-controls=\"collapseTokens\"> Tokens </a> </h4> </div> <div id=\"collapseTokens\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingTokens\"> <ul class=\"list-group\"> <li class=\"list-group-item\"><a data-href=\"/tokens/createToken\" href=\"#\">Create token</a></li> <li class=\"list-group-item\"><a data-href=\"/tokens/retrieveToken\" href=\"#\" data-input=\"tokenId\">Retrieve token</a></li> <li class=\"list-group-item\"><a data-href=\"/tokens/updateToken\" href=\"#\" data-input=\"tokenId\">Update token</a></li> <li class=\"list-group-item\"><a data-href=\"/tokens/deleteToken\" href=\"#\" data-input=\"tokenId\">Delete token</a></li> <li class=\"list-group-item\"><a data-href=\"/tokens/approveSepaDirectdebit\" href=\"#\" data-input=\"tokenId\">Approve SEPA DD mandate</a></li> </ul> </div> </div> </div> </div> <div class=\"col-xs-12 col-md-9 output-wrapper\"> <p>Status: <span id=\"outputStatusCode\"></span>, Roundtrip: <span id=\"roundTrip\"></span> ms</p> <pre id=\"output\"></pre> </div> </div> </div> <div class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" id=\"themodal\"> <div class=\"modal-dialog\"> <div class=\"modal-content\"> <div class=\"modal-header\"> <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button> <h4 class=\"modal-title\">Enter input</h4> </div> <div class=\"modal-body\"> <form class=\"form-horizontal\" id=\"inputs\"> </form> </div> <div class=\"modal-footer\"> <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button> <button type=\"button\" class=\"btn btn-primary\" id=\"sendOverlay\">Send</button> </div> </div> </div> </div> <script src=\"//code.jquery.com/jquery-2.2.2.min.js\" integrity=\"sha256-36cp2Co+/62rEAAYHLmRCPIych47CvdM+uTBJwSzWjI=\" crossorigin=\"anonymous\"></script> <script src=\"//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js\"></script> <script>\r\n    $(function () {\r\n      var clicked = '';\r\n\r\n      var inputValues = {};\r\n\r\n      var doSend = function (url, params) {\r\n      var start = new Date().getTime();\r\n        if (params) {\r\n          $.each(params, function (index, param) {\r\n            url = url + \"/\" + param;\r\n          });\r\n        }\r\n        $(\".output-wrapper\").show();\r\n        $(\"#output\").text('Loading ...');\r\n        $(\"#roundTrip\").text('-');\r\n        $(\"#outputStatusCode\").text('Loading ...');\r\n        $.getJSON(url, function (json) {\r\n          $(\"#output\").text(JSON.stringify(json, null, '  '));\r\n        }).fail(function (error) {\r\n          $(\"#output\").text(JSON.stringify(error.responseJSON, null, '  '));\r\n        }).always(function(jqxhr, textStatus, _jqxhr) {\r\n          if (textStatus === \"success\" || textStatus === \"nocontent\") {\r\n            // the always callback has parameters based on the statusText\r\n            // jqXHR.always(function( data|jqXHR, textStatus, jqXHR|errorThrown ) { });\r\n            // so if the status is 'success' I copy the jqxhr.\r\n            jqxhr = _jqxhr;\r\n          }\r\n          $(\"#outputStatusCode\").text(jqxhr.status + \" \" + jqxhr.statusText);\r\n          $(\"#roundTrip\").text(new Date().getTime() - start);\r\n        });\r\n      };\r\n\r\n      $(\"a[data-href]\").click(function (e) {\r\n        e.preventDefault();\r\n        if ($(this).data(\"input\")) {\r\n          // fill popup\r\n          var properties = $(this).data(\"input\").split(\",\");\r\n          clicked = $(this).data(\"href\");\r\n\r\n          // store existing input values\r\n          $(\"#inputs input\").each(function (index, input) {\r\n            inputValues[$(input).data(\"key\")] = $(input).val();\r\n          });\r\n          var $inputs = $(\"#inputs\").empty();\r\n          $.each(properties, function (index, property) {\r\n            var id = \"i\" + (index + 1);\r\n            var prop = property.trim();\r\n            var $label = $(\"<label>\").attr(\"for\", id).addClass(\"col-sm-3 control-label\").text(prop);\r\n            var $input = $(\"<input>\").attr({ \"type\": \"text\", \"id\": id, \"placeholder\": prop }).addClass(\"form-control\").data(\"key\", prop).val(inputValues[prop]);\r\n            var $formGroup = $(\"<div>\").addClass(\"form-group\").append($label).append($(\"<div>\").addClass(\"col-sm-9\").append($input));\r\n            $inputs.append($formGroup);\r\n          });\r\n\r\n          $(\"#themodal\").modal({backdrop: 'static'});\r\n        } else {\r\n          doSend($(this).data(\"href\"));\r\n        }\r\n      });\r\n\r\n      $('#themodal').on('shown.bs.modal', function () {\r\n        $('#inputs #i1').focus();\r\n      });\r\n\r\n      $('#inputs').on(\"keyup\", \"input\", function (e) {\r\n        if (e.which == 13) {\r\n          e.preventDefault();\r\n          $(\"#sendOverlay\").click();\r\n        }\r\n      });\r\n\r\n      $(\"#sendOverlay\").on('click', function (e) {\r\n        var params = [];\r\n        $('#inputs input').each(function (index, input) {\r\n            params.push($(input).val());\r\n        });\r\n        doSend(clicked, params);\r\n        $(\"#themodal\").modal('hide');\r\n      });\r\n    });\r\n  </script> </body> </html>");
  };
}

(module.exports = require("marko").c(__filename)).c(create);
