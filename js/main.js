
let weatherNum = ''
let indicatorNum = document.querySelector('.weather__indicator-num')

        
        fetch('http://api.openweathermap.org/data/2.5/weather?id=542420&units=metric&appid=e569f6045bf6921dc38bf84bddd5d74a&lang=ru')
        .then(function(resp) {return resp.json() })
        .then(function(data){
        console.log(data);
        document.querySelector('.weather__city-name').textContent = data.name;
        weatherNum = Math.round(data.main.temp) 
        document.querySelector('.weather__condition').textContent = data.weather[0].description
        document.querySelector('.weather__item-info--pressure').textContent = Math.round(data.main.pressure * 0.750062) + ' мм рт. ст.';
        document.querySelector('.weather__item-info--humidity').textContent = (data.main.humidity)+ '%'
        document.querySelector('.weather__item-info--rain').innerHTML = Math.round(data.clouds.all) + '%'
        let deg = data.wind.deg;

        weatherNum = Math.round(data.main.temp)

        function windDeg(a){
            if(a < 45 || a>315){
                return ' северный'
            }
            else if(a>45 && a<135){
                return ' восточный'
            }
            else if(a>135 && a<225){
                return ' южный'
            }
            else if(a>225 && a<315){
                return ' западный'
            }
        }
        document.querySelector('.weather__item-info--wind').textContent = Math.round(data.wind.speed) + ' м/c,' + windDeg(deg) ;


        let iconNum = data.weather[0].icon;
        let icon = document.querySelector('.weather__img');

        function img(a){
            if(a == '01d' ||  a == '01n'){
                return 'images/icons/sun.png'
            }
            else if(a == '02d' || a == '02n'){
                return 'images/icons/partly-cloudy.png'
            }
            else if(a == '03d' || a == '03n'){
                return 'images/icons/cloud.png'
            }
            else if(a == '10d' || a == '10n'){
                return 'images/icons/rain.png'
            }
            else if(a == '11d' || a == '11n'){
                return 'images/icons/storm.png'
            }
            

        }
        icon.setAttribute('src', img(iconNum))


        function degree(a){
            return a*1.8+32
        }
        
        let temp = document.querySelectorAll('.weather__top-input');
        for(let i = 0; i<temp.length; i++){
            indicatorNum.innerHTML = weatherNum + '&deg;'
            temp[i].onclick= () =>{
                if(temp[0].checked){
                    indicatorNum.innerHTML = weatherNum + '&deg;'
                }
                else{
                    indicatorNum.innerHTML = Math.round(degree(weatherNum)) + '&deg;'
                }
            }  
        }
    }) 

let btnAlert = document.querySelectorAll('.weather__city-btn');
for(let i=0; i<btnAlert.length; i++){
    btnAlert[i].onclick= () =>{
        alert('Не работает (((')
    }
}


