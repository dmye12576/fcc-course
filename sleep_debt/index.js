const getSleepHours = day => {
    day.toLowerCase ();
    switch (day) {
        case 'monday':
            return 6;
            
        case 'tueday':
            return 6;  

         case 'wednesday':
            return 7;  

        case 'thursday':
            return 7; 

        case 'friday':
            return 6; 

        case 'saturday':
            return 9;   
        
        case 'sunday':
            return 10;

         default:  
            return 'Input is not a valid day';
    }
}
    const getActaulSleepHours = () => 
        getSleepHours('monday') +
        getSleepHours('tueday') + getSleepHours('wednesday') + getSleepHours('thursay') +
        getSleepHours('friday') + getSleepHours('saturday')  + getSleepHours('sunday');
    
    
    const getIdealSleepHours = () => {
        let idealHours = '8';
         return idealHours *7;
    }

    console.log (getActualSleepHours ());

    const calculateSleepdebt = () => {
        const actualSleepHours = getActualSleepHours ();
        const idealSleepHours = getIdealSleepHours ();
        if (actualSleepHours === idealSleepHours) {
            console.log (`You got the perfect amount ${actualSleepHours} hours of sleep`);
        } else if (actualSleepHours > idealSleepHours ){
            console.log (`You slept ${actualSleepHours - idealSleepHours} hours more. You got more sleep than needed`);
        } else {
            console.log (`You slept ${idealSleepHours - actualSleepHours} hours less. You should get some rest`); 
        }

    };
    calculateSleepdebt ();