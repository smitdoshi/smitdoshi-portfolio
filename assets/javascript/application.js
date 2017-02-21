/**
 * Created by SMITDOSHI on 2/19/17.
 */

// Skill Bar Creation
var callback = function(){
    $('.item-skills').each(function(){
        newWidth = $(this).parent().width() * $(this).data('percent');
        $(this).width(0);
        $(this).animate({
            width: newWidth,
        }, 1000);
    });
    $('.icons-red').each(function(){
        height = $(this).height();
        $(this).animate({
            height: 14,
        }, 2000);
    });
};
$(document).ready(callback);

var resize;
window.onresize = function() {
    clearTimeout(resize);
    resize = setTimeout(function(){
        callback();
    }, 100);
};

// Terminal Type Animation using Type.JS

$(function(){

    $("#typed").typed({
        strings: ["Actively seeking <em>Full Time Job Opportunities</em>.", "Experienced:<em>Full Stack Developer</em>.", "<em>iOS Application Developer</em>.",
            "<em>Python Programmer.</em>.","Working in <em>Agile Model</em> and Knowledge of <em>Git</em>.", "Available for Immediate Hire<br>smitdoshi007@gmail.com  ||  <span>" +
            "Phone No: 424-999-2546</span>"],
        typeSpeed: 20,
        callback: function(){
            shift();
        }
    });

});
function shift(){
    $(".head-wrap").addClass("shift-text");
    terminalHeight();
}

function terminalHeight(){
    var termHeight = $(".terminal-height");
    var value = termHeight.text();
    value = parseInt(value);
    setTimeout(function(){
        if (value > 10){
            value = value-1;
            this.txtValue = value.toString();
            termHeight.text(this.txtValue);
            self.terminalHeight();
        }
        else{
            clearTimeout();
        }
    }, 10);
}
