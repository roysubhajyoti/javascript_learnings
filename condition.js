let a=10;
let b=20;
let c=54;

if (a>b && b>c) 
    console.log("greatr is a");
else if(b>a && b>c )
        console.log("b is greater");
    else
        console.log("c is greater");   


let role="CEO";
let Salary=100000;



switch (role) {
    case "Employee":
    case "hr":
    case "manager":
        Salary +=0.05*Salary;
        console.log(Salary);
        break;
    case "CEO":
    case "CFO":
    case "CTO":
        Salary +=1.5*Salary;
        console.log(Salary);
        break;

    default:
        console.log("INVALID ROLE");
        break;
}

