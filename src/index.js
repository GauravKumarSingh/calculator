/* Sample for testing, how to publish a package */
class Calculator{

    add(a,b){
        return a+b;
    }

    sub(a,b){
        return a-b;
    }

    div(a,b){
        if(b==0){
            throw "Can't perform division operation, division by 0";
        }
        return a/b;
    }

    mul(a,b){
        return a*b;
    }

}

module.export = {
    calculator:Calculator
}