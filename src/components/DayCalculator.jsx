function dayCalculator(date1,date2,shift) {
    
    date1 = new Date(date1);
    date2 = new Date(date2);
    shift = parseInt(shift);
    const weekDays = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
    const months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
    const shiftMeaning = ['dia','noche']
    const msPerDay = 24 * 60 * 60 * 1000;

    let daysDifference = Math.floor((parseInt(date2.getTime()) - parseInt(date1.getTime()))/msPerDay)+1;

    while(daysDifference > 0){
        console.log(daysDifference);
        daysDifference-= 5;
        if(daysDifference <= 3 && daysDifference > 0 && shift === 1){
            return(`El ${weekDays[date2.getDay()]} ${date2.getDate()} de ${months[date2.getMonth()]} del año ${date2.getFullYear()} se encuentra en el día libre número ${daysDifference} después de la semana de noche`);           
        };
        if(daysDifference <= 2 && daysDifference > 0 && shift === 0){
            return(`El ${weekDays[date2.getDay()]} ${date2.getDate()} de ${months[date2.getMonth()]} del año ${date2.getFullYear()} se encuentra en el día libre número ${daysDifference} después de la semana de dia`);
        };
        if(daysDifference<= 0){
            return(`El ${weekDays[date2.getDay()]} ${date2.getDate()} de ${months[date2.getMonth()]} del año ${date2.getFullYear()}
            se encuentra trabajando en el día número ${5 + daysDifference} en la semana de ${shiftMeaning[shift]}`);
        };
        if(shift===1){
            daysDifference -=3
            shift = 0;
            console.log("he restado los 3 dias libres "+daysDifference);
        }else{
            daysDifference -=2
            shift = 1;
            console.log("he restado los 2 dias libres "+daysDifference);
        };
    }
}

export default dayCalculator;