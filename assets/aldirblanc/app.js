!function(e){var a={};function o(t){if(a[t])return a[t].exports;var i=a[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=a,o.d=function(e,a,t){o.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,a){if(1&a&&(e=o(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var i in e)o.d(t,i,function(a){return e[a]}.bind(null,i));return t},o.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(a,"a",a),a},o.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},o.p="/",o(o.s=0)}([function(e,a,o){o(1),e.exports=o(2)},function(e,a){$(document).ready((function(){var e={opportunity:null,category:null},a=null,o=null,t=!1;function i(){var a="",o="",t=$("#modalAlertCadastro"),i=$("input[name=coletivo]:checked").siblings().find(".js-text").text(),n=$("input[name=formalizado]:checked").siblings().find(".js-text").text();i=i.replace(".",""),n=n.replace(".","");var s=$(".js-select-cidade option:selected").text();(t.css("display","flex").hide().fadeIn(900),$("#modalAlertCadastro .modal-content").find(".js-confirmar").show(),a="Confirmação",$("#modalAlertCadastro .modal-content").find(".btn").val("next"),$("#modalAlertCadastro .modal-content").find(".btn").text("Confirmar"),null!=e.opportunity)?(o=(o=(o="Você está solicitando o benefício para <strong>_fomalizado_</strong> para espaço do tipo  <strong>_coletivo_</strong>_cidade_ <br><br><p>Você confirma essas informações?</p>").replace(/_fomalizado_/g,n)).replace(/_coletivo_/g,i),o=s?o.replace(/_cidade_/g," na cidade de <strong>"+s+"</strong>."):o.replace(/_cidade_/g,".")):$(".js-select-cidade option:selected").val()>0?(o=(o=(o="Você está solicitando o benefício para <strong>_fomalizado_</strong> para espaço do tipo  <strong>_coletivo_</strong>_cidade_ <br><br><p>Você confirma essas informações?</p>").replace(/_fomalizado_/g,n)).replace(/_coletivo_/g,i),o=s?o.replace(/_cidade_/g," na cidade de <strong>"+s+"</strong>."):o.replace(/_cidade_/g,".")):(o="Você precisa selecionar a cidade.",a="Atenção");$("#input-cidade").length>0?selectedCityId=$("#input-cidade").val():selectedCityId=$(".js-select-cidade option:selected").val();var d=MapasCulturais.opportunitiesInciso2.filter((function(e){return e.id==selectedCityId}))[0];MapasCulturais.serverDate.date>=d.registrationFrom.date&&MapasCulturais.serverDate.date<=d.registrationTo.date||(a=d.name,o="Infelizmente não será possivel realizar sua inscrição:\n            <br>\n            <br>\n            > Data de inicio das inscrições: <strong> ".concat(new Date(d.registrationFrom.date).toLocaleDateString("pt-BR")," </strong>\n            <br>\n            <br>\n            > Data de fim das inscrições: <strong> ").concat(new Date(d.registrationTo.date).toLocaleDateString("pt-BR")," </strong>"),$(".js-confirmar").hide()),r(a,o),$(".close, .btn-ok").on("click",(function(){t.fadeOut("slow")}))}function r(e,a){var o=$("#modalAlertCadastro"),t=document.getElementById("modal-content-text");$("#modalAlertCadastro .modal-content").find(".js-title").text(e),"Confirmação"!=e&&($("#modalAlertCadastro .modal-content").find(".btn").val("close"),$("#modalAlertCadastro .modal-content").find(".btn").text("OK")),t.innerHTML=a,o.fadeIn("fast"),$(".close, .btn-ok").on("click",(function(){o.fadeOut("fast")}))}function n(){var a=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(a&&$(".js-questions-tab").hide(),t)return $(".js-questions-tab").hide(),void $("#select-cidade").fadeIn("fast");var o=$(".js-questions").find("#select-cidade");null==e.opportunity&&o.length>0?($(".js-questions-tab").hide(),$("#select-cidade").fadeIn("fast"),t=!1):i()}null!=MapasCulturais.opportunityId&&(e.opportunity=MapasCulturais.opportunityId),null!=MapasCulturais.opportunitiesInciso2&&(e.opportunitiesInciso2=MapasCulturais.opportunitiesInciso2),$(".coletivo").click((function(){o=this.value,$(".coletivo").parent().removeClass("selected"),$(this).parent().addClass("selected")})),$(".formalizado").click((function(){a=this.value,$(".formalizado").parent().removeClass("selected"),$(this).parent().addClass("selected")})),$(".js-select-cidade").change((function(){e.opportunity=this.value})),$(".js-back").click((function(){var a=$(this).closest(".js-questions-tab").attr("id");switch(t=!0,a){case"personalidade-juridica":$("#personalidade-juridica").hide(),$("#local-atividade").fadeIn("fast");break;case"local-atividade":$(".js-questions").hide(),$("#personalidade-juridica").hide(),$(".js-lab-item").fadeIn("fast");break;case"select-cidade":$("#select-cidade").hide(),$("#personalidade-juridica").fadeIn("fast"),e.opportunity=null,$(".js-select-cidade").select2("val","-1")}})),$(".js-next").click((function(){var e=$(this).closest(".js-questions-tab").attr("id");if("local-atividade"==e)$("input[name=coletivo]:checked").length>0?($(".js-questions-tab").hide(),$("#personalidade-juridica").fadeIn("fast"),t=!1):r("Atenção!","Você precisa selecionar uma opção para avançar");else if("select-cidade"==e)i();else{$("input[name=formalizado]:checked").length>0?$("#select-cidade").lenght?n():n(!1):r("Atenção!","Você precisa selecionar uma opção para avançar")}})),$("button.js-confirmar").click((function(){"next"==this.value?($(".js-questions-tab").hide(),$(".js-questions").html("<h4>Enviando informações ...</h4>"),$("#modalAlertCadastro").fadeOut("slow"),e.category=o+"-"+a,document.location=MapasCulturais.createUrl("aldirblanc","coletivo",e)):$("#modalAlertCadastro").fadeOut("slow")})),$(window).click((function(e){var a=$("#modalAlertCadastro");"next"!=e.target.value&&"flex"==$(e.target).css("display")&&a.fadeOut("slow")}));$(".js-lab-option").click((function(){$(".js-lab-item").fadeOut(1),$(".js-questions").fadeIn(11),$("#local-atividade").fadeIn("fast"),t=!1})),$("select#opportunity-type").select2({placeholder:"Selecione uma opção",width:"100%",height:"100px"}),$(".form-export-clear").on("click",(function(){$(".form-export-dataprev").trigger("reset")}));var s=document.getElementById("RegraValida");s&&s.addEventListener("keydown",(function(){obj=this,masc=function(e){return e=(e=(e=(e=e.replace(/\D/g,"")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d)/,"$1.$2")).replace(/(\d{3})(\d{1,2})$/,"$1-$2")},setTimeout((function(){obj.value=masc(obj.value)}),1)})),$(".action-formulario .registration-fieldset-moderator").length>0&&($field_validate=!1,$checked_mediacao_contato_tipo=$(".field-mediacao-contato-tipo label input:checked"),$checked_mediacao_contato_tipo.length>0&&($field_validate=!0),0==$field_validate&&$(".ng-scope .registration-fieldset .errors-header").before('<div class="errors erro-mediacao-contato-tipo"><a href="">Forma de contato: <span class="errors-field ng-binding ng-scope"> O campo é obrigatório.</span></a></div>'),$fields_mediacao_contato_tipo=$(".field-mediacao-contato-tipo label input"),$fields_mediacao_contato_tipo.each((function(){$(this).change((function(){$field_validate=!0,$(".erro-mediacao-contato-tipo").remove()}))})),$field_mediacao_contato=$("#field-mediacao-contato"),$normalize_field_mediacao_contato=$field_mediacao_contato.val().replace(/[^0-9]/gi,""),$normalize_field_mediacao_contato.length<10?$(".ng-scope .registration-fieldset .errors-header").after('<div class="errors erro-mediacao-contato"><a href="">Número de telefone: <span class="errors-field ng-binding ng-scope"> O campo é obrigatório.</span></a></div>'):$(".erro-mediacao-contato").remove(),$field_mediacao_contato.change((function(){$normalize_field_mediacao_contato=$field_mediacao_contato.val().replace(/[^0-9]/gi,""),$normalize_field_mediacao_contato.length<10?($(".erro-mediacao-contato").remove(),$(".ng-scope .registration-fieldset .errors-header").after('<div class="errors erro-mediacao-contato"><a href="">Número de telefone: <span class="errors-field ng-binding ng-scope"> O campo é obrigatório.</span></a></div>')):$(".erro-mediacao-contato").remove()})),$field_mediacao_senha=$("#field-mediacao-senha"),$field_mediacao_senha.val().length<1||'""'==$field_mediacao_senha.val()?$(".ng-scope .registration-fieldset .errors-header").after('<div class="errors erro-mediacao-senha"><a href="">Senha: <span class="errors-field ng-binding ng-scope"> O campo é obrigatório.</span></a></div>'):$(".erro-mediacao-senha").remove(),$field_mediacao_senha.change((function(){$field_mediacao_senha.val().length<1||'""'==$field_mediacao_senha.val()?($(".erro-mediacao-senha").remove(),$(".ng-scope .registration-fieldset .errors-header").after('<div class="errors erro-mediacao-senha"><a href="">Senha: <span class="errors-field ng-binding ng-scope"> O campo é obrigatório.</span></a></div>')):$(".erro-mediacao-senha").remove()})),setInterval((function(){$("#mediacao-autorizacao").children().length<1?($(".erro-mediacao-autorizacao").remove(),$(".ng-scope .registration-fieldset .errors-header").after('<div class="errors erro-mediacao-autorizacao"><a href="">Autorização: <span class="errors-field ng-binding ng-scope"> O campo é obrigatório.</span></a></div>')):$(".erro-mediacao-autorizacao").remove(),$("#mediacao-documento").children().length<1?($(".erro-mediacao-documento").remove(),$(".ng-scope .registration-fieldset .errors-header").after('<div class="errors erro-mediacao-documento"><a href="">Documento: <span class="errors-field ng-binding ng-scope"> O campo é obrigatório.</span></a></div>')):$(".erro-mediacao-documento").remove(),$errors=$(".registration-fieldset .errors"),0==$errors.length?$(".btn-validate").css("display","inline-block"):$(".btn-validate").css("display","none")}),1e3))}))},function(e,a){}]);