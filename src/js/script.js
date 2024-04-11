function displayCanvas(){
	
    var canvasHTML = document.getElementById('myCanvas');
    var contextHTML = canvasHTML.getContext('2d');
    contextHTML.strokeRect(0,0,canvasHTML.width, canvasHTML.height);
            
    //Расчет координат центра и радиуса часов
    var radiusClock = canvasHTML.width/2 - 15 ;
    var xCenterClock = canvasHTML.width/2;
    var yCenterClock = canvasHTML.height/2;
            
    //Очистка экрана. 
    contextHTML.fillStyle = "#E6E6FA";
    contextHTML.fillRect(0,0,canvasHTML.width,canvasHTML.height);
            
    var radiusNum = radiusClock - 15 ;   //Радиус расположения
    var arrowColor = "#FF0000";  //изначальный цвет
            
    //Рисуем стрелки
    var lengthSeconds = radiusNum - 10;
    var lengthMinutes = radiusNum - 15;
    var lengthHour = lengthMinutes / 1.5
    var d = new Date();   //Получаем экземпляр даты
    var t_sec = 6*d.getSeconds();   //Определяем угол для секунд
    var t_min = 6*(d.getMinutes() + (1/60)*d.getSeconds()); //Определяем угол для минут
    var t_hour = 30*(d.getHours() + (1/60)*d.getMinutes()); //Определяем угол для часов
     
    //Рисуем секунды
    contextHTML.beginPath();
    contextHTML.strokeStyle =  "#FF0000";
    contextHTML.moveTo(xCenterClock, yCenterClock);
    contextHTML.lineTo(xCenterClock + lengthSeconds*Math.cos(Math.PI/2 - t_sec*(Math.PI/180)),
                       yCenterClock - lengthSeconds*Math.sin(Math.PI/2 - t_sec*(Math.PI/180)));
    contextHTML.stroke();
    contextHTML.closePath();
        
    //Рисуем минуты
    contextHTML.beginPath(); //новый путь рисования, сбрасывает старый
    contextHTML.strokeStyle =  arrowColor;
    contextHTML.lineWidth = 3;   //установка ширины линии
    contextHTML.moveTo(xCenterClock, yCenterClock); //еремещает начальную точку нового подпути к указанным координатам (x, y), без рисования линии
    contextHTML.lineTo(xCenterClock + lengthMinutes*Math.cos(Math.PI/2 - t_min*(Math.PI/180)),
                       yCenterClock - lengthMinutes*Math.sin(Math.PI/2 - t_min*(Math.PI/180))); //добавляет линию от последней точки в пути до указанных координат (x, y)
    contextHTML.stroke(); //рисуем путь(контур)
    contextHTML.closePath(); //закрытие нового пути
        
    //Рисуем часы
    contextHTML.beginPath();
	contextHTML.strokeStyle =  arrowColor;
    contextHTML.lineWidth = 5;
    contextHTML.moveTo(xCenterClock, yCenterClock);
    contextHTML.lineTo(xCenterClock + lengthHour*Math.cos(Math.PI/2 - t_hour*(Math.PI/180)),
        yCenterClock - lengthHour*Math.sin(Math.PI/2 - t_hour*(Math.PI/180)));
    contextHTML.stroke();
    contextHTML.closePath();	

    return;
}  
window.setInterval(function(){
    var cd = new Date();
    document.getElementById("clock").innerHTML =  cd.toLocaleTimeString();
    displayCanvas();
}, 1000); // Выполняем каждую секунду
