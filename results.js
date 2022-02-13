


function Result(){

    this.result = function(mark){

        let gpa;
        let grade;

        
        if (mark >= 0 && mark < 33){

            gpa   = 0;
            grade = 'F'

        }else if (mark >= 33 && mark < 40){

            gpa   = 1;
            grade = 'C'

        }else if (mark >= 40 && mark < 50){

            gpa   = 2;
            grade = 'D'

        }else if (mark >= 50 && mark < 60){

            gpa   = 3;
            grade = 'B'

        }else if (mark >= 60 && mark < 70){

            gpa   = 3.5;
            grade = 'A-'

        }else if (mark >= 70 && mark < 80){

            gpa   = 4;
            grade = 'A'

        }else if (mark >= 80 && mark <= 100){

            gpa   = 5;
            grade = 'A+'

        }else{

            gpa   = 'invalid';
            grade = 'invalid' 
        }
        return{
            gpacal : gpa,
            gradecal : grade
          
        }

        


    };

    this.fanalResult = function( bn,en,math,s,ss,rel ){

        let cgpa;
        let fainalgrade;


        let totalcgpa = this.result(bn).gpacal + this.result(en).gpacal + this.result(math).gpacal + this.result(s).gpacal + this.result(ss).gpacal + this.result(rel).gpacal ;

        cgpa = totalcgpa / 6;

        if ( bn < 33 || en < 33 || math < 33 || s < 33 || ss < 33 || rel < 33 ){
            fainalgrade = 'F'
        }else if (cgpa >= 0 && cgpa < 1){

            fainalgrade = 'F'

        }else if (cgpa >= 1 && cgpa < 2){

            fainalgrade = 'C'

        }else if (cgpa >= 2 && cgpa < 3){

            fainalgrade = 'D'

        }else if (cgpa >= 3 && cgpa < 3.5){

            fainalgrade = 'B'

        } else if (cgpa >= 3.5 && cgpa < 4){

            fainalgrade = 'A-'

        }else if (cgpa >= 4 && cgpa < 5){

            fainalgrade = 'A'

        }else if (cgpa == 5){

            fainalgrade = 'A+'

        }

        return {
            fainalcgpa : (fainalgrade == 'F') ? 'Failed' : cgpa .toFixed(2),
            totalresult : fainalgrade
        }



    }




};