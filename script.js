Survey.Survey.cssType = "bootstrap";

var surveyJSON = {pages:[{name:"page1",elements:[{type:"checkbox",name:"question1",choices:[{value:"item1",text:"Oui"},{value:"item2",text:"Non"},"item3"]},{type:"rating",name:"question2"}]}]}

function sendDataToServer(survey) {
    survey.sendResult('ea61953b-f241-4d6d-bf61-ac71227caee5');
}

var survey = new Survey.Model(surveyJSON);
$("#surveyContainer").Survey({
    model: survey,
    onComplete: sendDataToServer
});