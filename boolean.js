//------------Boolean Logics---------------

//AND ,OR, NOT

//AND----> 2 value must be true                         &&
//OR ----> any one is true output is True               ||
//NOT ---->If its true output is false ,direct opposit   ! 



//----------------------switch statements---------------

const day = 'friday';
 switch(day) {
    case 'monday':                              //day===monday
        console.log('plan course structure');
        console.log('go for coding meet up');
        break;
    case 'tuesday':
        console.log("prepare for interview");
        break;
    case 'wednesday':
        console.log("write code bro!")
        break;
    case 'thursday':
        break;
    case 'friday':
        console.log("refresh your week works!");
        console.log("search for any party in sat and sunbday!!");
        break;
    case 'saturday':
        break;
    case 'sunday':
        console.log("sunday..funday!!!");
        break;
    default:
        console.log("Enter any valid day broo!!!")
        break;
 }
