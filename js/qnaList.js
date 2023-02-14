var requestURL = 'http://127.0.0.1:8080/webTest/qna/list.json';
var request=new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType='json';
request.send();

request.onload=function(){
    var superHeroes = request.response;
    showQnaList(superHeroes);
}

function showQnaList(jsonObj){
    var tbody = document.querySelector('tbody');
    for(obj of jsonObj){
        var qnaTr=document.createElement('tr');
        var qnaNum=document.createElement('td');
        var qnaSub=document.createElement('td');
        var qnaWriter=document.createElement('td');
        var qnaDate=document.createElement('td');

        qnaNum.textContent=obj.num;
        qnaSub.textContent=obj.sub;
        qnaWriter.textContent=obj.writer;
        qnaDate.textContent=obj.writedate;

        qnaTr.appendChild(qnaNum);
        qnaTr.appendChild(qnaSub);
        qnaTr.appendChild(qnaWriter);
        qnaTr.appendChild(qnaDate);

        tbody.appendChild(qnaTr);
    }
}

