console.log('Script is running');

document.getElementById('button').addEventListener('click', calculateRating);

function calculateRating() {
  var uniName = document.getElementById('input_name').value;

  //SGD1 I1 Calculations
  var dropdown_i1_1 = document.getElementById('dropdown_i1_1').value;
  var dropdown_i1_2 = document.getElementById('dropdown_i1_2').value;
  var dropdown_i1_3 = document.getElementById('dropdown_i1_3').value;

  var selectedValue_i1_1 = parseFloat(dropdown_i1_1);
  var selectedValue_i1_2 = parseFloat(dropdown_i1_2);
  var selectedValue_i1_3 = parseFloat(dropdown_i1_3);

  var sumID1 = (selectedValue_i1_1 + selectedValue_i1_2 + selectedValue_i1_3) * 0.784;


  if (sumID1 > 2.25)
  {
    localStorage.setItem('result_i1', 'The university is rated good, no improvement needed! SDG1 I1 > 2.25');
  } else {
    localStorage.setItem('result_i1', 'The university is rated bad, improvement needed! SDG1 I1<= 2.25');
  }

  if (sumID1 > 1.764)
  {
    localStorage.setItem('improvement_i1', 'The university has been improved since 2022. SDG1 I1 > 1.764');
  } else {
    localStorage.setItem('improvement_i1', 'The university has not been improved since 2022. SDG1 I1 <= 1.764');
  }

  //SGD 1 I2 Calculations
  var dropdown_i2_1 = document.getElementById('dropdown_i2_1').value;
  var dropdown_i2_2 = document.getElementById('dropdown_i2_2').value;
  var dropdown_i2_3 = document.getElementById('dropdown_i2_3').value;

  var selectedValue_i2_1 = parseFloat(dropdown_i2_1);
  var selectedValue_i2_2 = parseFloat(dropdown_i2_2);
  var selectedValue_i2_3 = parseFloat(dropdown_i2_3);

  var sumID2 = (selectedValue_i2_1 + selectedValue_i2_2 + selectedValue_i2_3) * 0.216;


  if (sumID2 > 2.25)
  {
    localStorage.setItem('result_i2', 'The university is rated good, no improvement needed! SDG01 I2 > 2.25');
  } else {
    localStorage.setItem('result_i2', 'The university is rated bad, improvement needed! SDG01 I2 <= 2.25');
  }

  if (sumID2 > 0.486)
  {
    localStorage.setItem('improvement_i2', 'The university has been improved since 2022. SDG01 I2 > 0.486');
  } else {
    localStorage.setItem('improvement_i2', 'The university has not been improved since 2022. SDG01 I2 <= 0.486');
  }

  //SGD 2 I3 Calculations

  var calculateF = 115000/12000;
  var input_i3_1 = document.getElementById('input_i3_1').value;
  var input_i3_2 = document.getElementById('input_i3_2').value;

  var kilos = parseFloat(input_i3_1);
  var population = parseFloat(input_i3_2);

  var percentageThisYear = kilos/population;

  var sumDiff = calculateF/percentageThisYear;

  if (sumDiff > 1){

      var percentageChange = 0;
  }
  else if (sumDiff < 1){

    var percentageChange = 1/sumDiff;
  }

  var sumID3 = percentageChange * 0.58;


  //SGD 2 I4 Calculations

  var dropdown_i4_1 = document.getElementById('dropdown_i4_1').value;
  var dropdown_i4_2 = document.getElementById('dropdown_i4_2').value;
  var dropdown_i4_3 = document.getElementById('dropdown_i4_3').value;

  var selectedValue_i4_1 = parseFloat(dropdown_i4_1);
  var selectedValue_i4_2 = parseFloat(dropdown_i4_2);
  var selectedValue_i4_3 = parseFloat(dropdown_i4_3);

  var sumID4 = (selectedValue_i4_1 + selectedValue_i4_2 + selectedValue_i4_3) * 0.42;


  if (sumID4 > 2.25)
  {
    localStorage.setItem('result_i4', 'The university is rated good, no improvement needed! SDG02 I4 > 2.25');
  } else {
    localStorage.setItem('result_i4', 'The university is rated bad, improvement needed! SDG02 I4 <= 2.25');
  }

  if (sumID4 > 1.26)
  {
    localStorage.setItem('improvement_i4', 'The university has been improved since 2022. SDG02 I4 > 1.26');
  } else {
    localStorage.setItem('improvement_i4', 'The university has not been improved since 2022. SDG02 I4 <= 1.26');
  }

  //SDG03 I5 Calculations

  var dropdown_i5_1 = document.getElementById('dropdown_i5_1').value;
  var dropdown_i5_2 = document.getElementById('dropdown_i5_2').value;
  var dropdown_i5_3 = document.getElementById('dropdown_i5_3').value;

  var selectedValue_i5_1 = parseFloat(dropdown_i5_1);
  var selectedValue_i5_2 = parseFloat(dropdown_i5_2);
  var selectedValue_i5_3 = parseFloat(dropdown_i5_3);

  var sumID5 = (selectedValue_i5_1 + selectedValue_i5_2 + selectedValue_i5_3) * 0.663;

  if (sumID5 > 2.25)
    {
      localStorage.setItem('result_i5', 'The university is rated good, no improvement needed! SDG03 I5 > 2.25');
    } else {
      localStorage.setItem('result_i5', 'The university is rated bad, improvement needed! SDG03 I5 <= 2.25');
    }
  
    if (sumID5 > 1.989)
    {
      localStorage.setItem('improvement_i5', 'The university has been improved since 2022. SDG03 I5 > 1.989');
    } else {
      localStorage.setItem('improvement_i5', 'The university has not been improved since 2022. SDG03 I5 <= 1.989');
    }


    //SDG03 I6 Calculations
    var dropdown_i6_1 = document.getElementById('dropdown_i6_1').value;
    var dropdown_i6_2 = document.getElementById('dropdown_i6_2').value;
    var dropdown_i6_3 = document.getElementById('dropdown_i6_3').value;
  
    var selectedValue_i6_1 = parseFloat(dropdown_i6_1);
    var selectedValue_i6_2 = parseFloat(dropdown_i6_2);
    var selectedValue_i6_3 = parseFloat(dropdown_i6_3);

    var sumID6 = (selectedValue_i6_1 + selectedValue_i6_2 + selectedValue_i6_3) * 0.337;
    if (sumID6 > 2.25)
      {
        localStorage.setItem('result_i6', 'The university is rated good, no improvement needed! SDG03 I6 > 2.25');
      } else {
        localStorage.setItem('result_i6', 'The university is rated bad, improvement needed! SDG03 I6 <= 2.25');
      }
    
      if (sumID6 > 0)
      {
        localStorage.setItem('improvement_i6', 'The university has been improved since 2022. SDG03 I6 > 0');
      } else {
        localStorage.setItem('improvement_i6', 'The university has not been improved since 2022. SDG03 I6 <= 0');
      }

      //SDG04 I7 Calculations
      var dropdown_i7_1 = document.getElementById('dropdown_i7_1').value;
      var dropdown_i7_2 = document.getElementById('dropdown_i7_2').value;
      var dropdown_i7_3 = document.getElementById('dropdown_i7_3').value;

      var selectedValue_i7_1 = parseFloat(dropdown_i7_1);
      var selectedValue_i7_2 = parseFloat(dropdown_i7_2);
      var selectedValue_i7_3 = parseFloat(dropdown_i7_3);

      var sumID7 = (selectedValue_i7_1 + selectedValue_i7_2 + selectedValue_i7_3) * 0.701;
      if (sumID7 > 2.25)
        {
          localStorage.setItem('result_i7', 'The university is rated good, no improvement needed! SDG04 I7 > 2.25');
        } else {
          localStorage.setItem('result_i7', 'The university is rated bad, improvement needed! SDG04 I7 <= 2.25');
        }
      
        if (sumID7 > 2.103)
        {
          localStorage.setItem('improvement_i7', 'The university has been improved since 2022. SDG04 I7 > 2.103');
        } else {
          localStorage.setItem('improvement_i7', 'The university has not been improved since 2022. SDG04 I7 <= 2.103');
        }

        //SDG04 I8 Calculations
        var input_i8_1 = document.getElementById('input_i8_1').value;
        var input_i8_2 = document.getElementById('input_i8_2').value;

        var selectedValue_i8_1 = parseFloat(input_i8_1);
        var selectedValue_i8_2 = parseFloat(input_i8_2);

        var perI8_ThisYear = selectedValue_i8_1/selectedValue_i8_2;
        var calculateFI8 = 1600/980;
        var percentageChangeI8 = calculateFI8/perI8_ThisYear;

        if(percentageChangeI8 < 1){
          var percentageChangeI8 = 0;
        }

        var sumID8 = percentageChangeI8 * 0.299;
       
       //SDG05 I9 Calculations
       var input_i9_1 = document.getElementById('input_i9_1').value;
       var input_i9_2 = document.getElementById('input_i9_2').value;

       var selectedValue_i9_1 = parseFloat(input_i9_1);
       var selectedValue_i9_2 = parseFloat(input_i9_2);

       var perI9_ThisYear = selectedValue_i9_1/selectedValue_i9_2;
       var calculateFI9 = 350/80;
       var percentageChangeI9 = calculateFI9/perI9_ThisYear;

       if(percentageChangeI9 < 1){
        var percentageChangeI9 = 0;
       }

       var sumID9 = percentageChangeI9 * 0.193;

       //SDG05 I10 Calculations

       var dropdown_i10_1 = document.getElementById('dropdown_i10_1').value;
       var dropdown_i10_2 = document.getElementById('dropdown_i10_2').value;
       var dropdown_i10_3 = document.getElementById('dropdown_i10_3').value;

       var selectedValue_i10_1 = parseFloat(dropdown_i10_1);
       var selectedValue_i10_2 = parseFloat(dropdown_i10_2);
       var selectedValue_i10_3 = parseFloat(dropdown_i10_3);

       var sumID10 = (selectedValue_i10_1 + selectedValue_i10_2 + selectedValue_i10_3) * 0.257;

       if (sumID10 > 2)
        {
          localStorage.setItem('result_i10', 'The university is rated good, no improvement needed! SDG05 I10 > 2');
        } else {
          localStorage.setItem('result_i10', 'The university is rated bad, improvement needed! SDG05 I10 <= 2');
        }
      
        if (sumID10 > 0.771)
        {
          localStorage.setItem('improvement_i10', 'The university has been improved since 2022. SDG05 I10 > 0.771');
        } else {
          localStorage.setItem('improvement_i10', 'The university has not been improved since 2022. SDG05 I10 <= 0.771');
        }

        //SDG05 I11 Calculations

        var dropdown_i11_1 = document.getElementById('dropdown_i11_1').value;
       var dropdown_i11_2 = document.getElementById('dropdown_i11_2').value;
       var dropdown_i11_3 = document.getElementById('dropdown_i11_3').value;

       var selectedValue_i11_1 = parseFloat(dropdown_i11_1);
       var selectedValue_i11_2 = parseFloat(dropdown_i11_2);
       var selectedValue_i11_3 = parseFloat(dropdown_i11_3);

       var sumID11 = (selectedValue_i11_1 + selectedValue_i11_2 + selectedValue_i11_3) * 0.427;

       if (sumID11 > 2)
        {
          localStorage.setItem('result_i11', 'The university is rated good, no improvement needed! SDG05 I11 > 2');
        } else {
          localStorage.setItem('result_i11', 'The university is rated bad, improvement needed! SDG05 I11 <= 2');
        }
      
        if (sumID11 > 1.281)
        {
          localStorage.setItem('improvement_i11', 'The university has been improved since 2022. SDG05 I11 > 1.281');
        } else {
          localStorage.setItem('improvement_i11', 'The university has not been improved since 2022. SDG05 I11 <= 1.281');
        }

        //SDG05 I12 Calculations

       var dropdown_i12_1 = document.getElementById('dropdown_i12_1').value;
       var dropdown_i12_2 = document.getElementById('dropdown_i12_2').value;
       var dropdown_i12_3 = document.getElementById('dropdown_i12_3').value;

       var selectedValue_i12_1 = parseFloat(dropdown_i12_1);
       var selectedValue_i12_2 = parseFloat(dropdown_i12_2);
       var selectedValue_i12_3 = parseFloat(dropdown_i12_3);

       var sumID12 = (selectedValue_i12_1 + selectedValue_i12_2 + selectedValue_i12_3) * 0.123;

       if (sumID12 > 2)
        {
          localStorage.setItem('result_i12', 'The university is rated good, no improvement needed! SDG05 I12 > 2');
        } else {
          localStorage.setItem('result_i12', 'The university is rated bad, improvement needed! SDG05 I12 <= 2');
        }
      
        if (sumID12 > 0.369)
        {
          localStorage.setItem('improvement_i12', 'The university has been improved since 2022. SDG05 I12 > 0.369');
        } else {
          localStorage.setItem('improvement_i12', 'The university has not been improved since 2022. SDG05 I12 <= 0.369');
        }

        //SDG06 I13 Calculations
        var input_i13_1 = document.getElementById('input_i13_1').value;
        var input_i13_2 = document.getElementById('input_i13_2').value;

        var selectedValue_i13_1 = parseFloat(input_i13_1);
        var selectedValue_i13_2 = parseFloat(input_i13_2);

        var percentageThisYear_I13 = selectedValue_i13_1 / selectedValue_i13_2;
        var calculateFI13 = 1155477/12000;

        var percentageChangeI13 = calculateFI13 / percentageThisYear_I13;
        
        if (percentageChangeI13 > 1){
          var percentageChangeI13 = 0;
        }
        else if (percentageChangeI13 < 1){
          var temp = 1/percentageThisYear_I13;
          var percentageChangeI13 = temp;
        }

        var sumID13 = percentageChangeI13 * 0.552;


        //SDG06 I14 Calculations

        
       var dropdown_i14_1 = document.getElementById('dropdown_i14_1').value;
       var dropdown_i14_2 = document.getElementById('dropdown_i14_2').value;
       var dropdown_i14_3 = document.getElementById('dropdown_i14_3').value;

       var selectedValue_i14_1 = parseFloat(dropdown_i14_1);
       var selectedValue_i14_2 = parseFloat(dropdown_i14_2);
       var selectedValue_i14_3 = parseFloat(dropdown_i14_3);

       var sumID14 = (selectedValue_i14_1 + selectedValue_i14_2 + selectedValue_i14_3) * 0.448;

       if (sumID14 > 2)
        {
          localStorage.setItem('result_i14', 'The university is rated good, no improvement needed! SDG06 I14 > 2');
        } else {
          localStorage.setItem('result_i14', 'The university is rated bad, improvement needed! SDG06 I14 <= 2');
        }
      
        if (sumID14 > 0.896)
        {
          localStorage.setItem('improvement_i14', 'The university has been improved since 2022. SDG06 I12 > 0.896');
        } else {
          localStorage.setItem('improvement_i14', 'The university has not been improved since 2022. SDG06 I12 <= 0.896');
        }

        //SDG07 I15 Calculations

       var dropdown_i15_1 = document.getElementById('dropdown_i15_1').value;
       var dropdown_i15_2 = document.getElementById('dropdown_i15_2').value;
       var dropdown_i15_3 = document.getElementById('dropdown_i15_3').value;

       var selectedValue_i15_1 = parseFloat(dropdown_i15_1);
       var selectedValue_i15_2 = parseFloat(dropdown_i15_2);
       var selectedValue_i15_3 = parseFloat(dropdown_i15_3);

       var sumID15 = (selectedValue_i15_1 + selectedValue_i15_2 + selectedValue_i15_3) * 0.58;

       if (sumID15 > 2)
        {
          localStorage.setItem('result_i15', 'The university is rated good, no improvement needed! SDG07 I15 > 2');
        } else {
          localStorage.setItem('result_i15', 'The university is rated bad, improvement needed! SDG07 I15 <= 2');
        }
      
        if (sumID15 > 1.74)
        {
          localStorage.setItem('improvement_i15', 'The university has been improved since 2022. SDG07 I15 > 1.74');
        } else {
          localStorage.setItem('improvement_i15', 'The university has not been improved since 2022. SDG07 I15 <= 1.74');
        }


        //SDG07 I16 Calculation 

        var dropdown_i16_1 = document.getElementById('dropdown_i16_1').value;
        var dropdown_i16_2 = document.getElementById('dropdown_i16_2').value;
        var dropdown_i16_3 = document.getElementById('dropdown_i16_3').value;
 
        var selectedValue_i16_1 = parseFloat(dropdown_i16_1);
        var selectedValue_i16_2 = parseFloat(dropdown_i16_2);
        var selectedValue_i16_3 = parseFloat(dropdown_i16_3);
 
        var sumID16 = (selectedValue_i16_1 + selectedValue_i16_2 + selectedValue_i16_3) * 0.264;
 
        if (sumID16 > 2)
         {
           localStorage.setItem('result_i16', 'The university is rated good, no improvement needed! SDG07 I16 > 2');
         } else {
           localStorage.setItem('result_i16', 'The university is rated bad, improvement needed! SDG07 I16 <= 2');
         }
       
         if (sumID16 > 0.792)
         {
           localStorage.setItem('improvement_i16', 'The university has been improved since 2022. SDG07 I16 > 0.792');
         } else {
           localStorage.setItem('improvement_i16', 'The university has not been improved since 2022. SDG07 I16 <= 0.792');
         }

        //SDG07 I17 Calculation
        var input_i17_1 = document.getElementById('input_i17_1').value;
        var input_i17_2 = document.getElementById('input_i17_2').value;

        var selectedValue_i17_1 = parseFloat(input_i17_1);
        var selectedValue_i17_2 = parseFloat(input_i17_2);

        var percentageThisYear_I17 = selectedValue_i17_1 / selectedValue_i17_2;
        var calculateFI17 = 1998997/46700;

        var percentageChangeI17 = calculateFI17 / percentageThisYear_I17;
        
        if (percentageChangeI17 > 1){
          var percentageChangeI17 = 0;
        }
        else if (percentageChangeI17 < 1){
          var temp = 1/percentageThisYear_I17;
          var percentageChangeI17 = temp;
        }

        var sumID17 = percentageChangeI17 * 0.176;

       //SDG09 I18 Calculations
       var input_i18_1 = document.getElementById('input_i18_1').value;
       var input_i18_2 = document.getElementById('input_i18_2').value;

       var selectedValue_i18_1 = parseFloat(input_i18_1);
       var selectedValue_i18_2 = parseFloat(input_i18_2);

       var percentageThisYear_I18 = selectedValue_i18_1 / selectedValue_i18_2;
       var calculateFI18 = 11189998/262;

       var percentageChangeI18 = calculateFI18 / percentageThisYear_I18;
       if (percentageChangeI18 < 1){
         var percentageChangeI18 = 0;
       }

       var sumID18 = percentageChangeI18 * 1;

       //I19 Calculations
       var dropdown_i19_1 = document.getElementById('dropdown_i19_1').value;
       var dropdown_i19_2 = document.getElementById('dropdown_i19_2').value;
       var dropdown_i19_3 = document.getElementById('dropdown_i19_3').value;

       var selectedValue_i19_1 = parseFloat(dropdown_i19_1);
       var selectedValue_i19_2 = parseFloat(dropdown_i19_2);
       var selectedValue_i19_3 = parseFloat(dropdown_i19_3);

       var sumID19 = (selectedValue_i19_1 + selectedValue_i19_2 + selectedValue_i19_3) * 1;

       if (sumID19 > 2)
        {
          localStorage.setItem('result_i19', 'The university is rated good, no improvement needed! SDG10 I19 > 2');
        } else {
          localStorage.setItem('result_i19', 'The university is rated bad, improvement needed! SDG10 I19 <= 2');
        }
      
        if (sumID19 > 3)
        {
          localStorage.setItem('improvement_i19', 'The university has been improved since 2022. SDG10 I19 > 3');
        } else {
          localStorage.setItem('improvement_i19', 'The university has not been improved since 2022. SDG10 I19 <= 3');
        }

        //I20 Calculations
        var dropdown_i20_1 = document.getElementById('dropdown_i20_1').value;
        var dropdown_i20_2 = document.getElementById('dropdown_i20_2').value;
        var dropdown_i20_3 = document.getElementById('dropdown_i20_3').value;
 
        var selectedValue_i20_1 = parseFloat(dropdown_i20_1);
        var selectedValue_i20_2 = parseFloat(dropdown_i20_2);
        var selectedValue_i20_3 = parseFloat(dropdown_i20_3);
 
        var sumID20 = (selectedValue_i20_1 + selectedValue_i20_2 + selectedValue_i20_3) * 0.465;
 
        if (sumID20 > 2.25)
         {
           localStorage.setItem('result_i20', 'The university is rated good, no improvement needed! SDG11 I20 > 2.25');
         } else {
           localStorage.setItem('result_i20', 'The university is rated bad, improvement needed! SDG11 I20 <= 2.25');
         }
       
         if (sumID20 > 0)
         {
           localStorage.setItem('improvement_i20', 'The university has been improved since 2022. SDG11 I20 > 0');
         } else {
           localStorage.setItem('improvement_i20', 'The university has not been improved since 2022. SDG11 I20 <= 0');
         }        
       
         //I21 Calculations
         var dropdown_i21_1 = document.getElementById('dropdown_i21_1').value;
         var dropdown_i21_2 = document.getElementById('dropdown_i21_2').value;
         var dropdown_i21_3 = document.getElementById('dropdown_i21_3').value;
  
         var selectedValue_i21_1 = parseFloat(dropdown_i21_1);
         var selectedValue_i21_2 = parseFloat(dropdown_i21_2);
         var selectedValue_i21_3 = parseFloat(dropdown_i21_3);
  
         var sumID21 = (selectedValue_i21_1 + selectedValue_i21_2 + selectedValue_i21_3) * 0.535;
  
         if (sumID21 > 2)
          {
            localStorage.setItem('result_i21', 'The university is rated good, no improvement needed! SDG11 I21 > 2');
          } else {
            localStorage.setItem('result_i21', 'The university is rated bad, improvement needed! SDG11 I21 <= 2');
          }
        
          if (sumID21 > 1.07)
          {
            localStorage.setItem('improvement_i21', 'The university has been improved since 2022. SDG11 I21 > 1.07');
          } else {
            localStorage.setItem('improvement_i21', 'The university has not been improved since 2022. SDG11 I21 <= 1.07');
          }

          //I22 Calculation
          var dropdown_i22_1 = document.getElementById('dropdown_i22_1').value;
          var dropdown_i22_2 = document.getElementById('dropdown_i22_2').value;
          var dropdown_i22_3 = document.getElementById('dropdown_i22_3').value;
   
          var selectedValue_i22_1 = parseFloat(dropdown_i22_1);
          var selectedValue_i22_2 = parseFloat(dropdown_i22_2);
          var selectedValue_i22_3 = parseFloat(dropdown_i22_3);
   
          var sumID22 = (selectedValue_i22_1 + selectedValue_i22_2 + selectedValue_i22_3) * 0.291;
   
          if (sumID22 > 2)
           {
             localStorage.setItem('result_i22', 'The university is rated good, no improvement needed! SDG12 I22 > 2');
           } else {
             localStorage.setItem('result_i22', 'The university is rated bad, improvement needed! SDG12 I22 <= 2');
           }
         
           if (sumID22 > 0.873)
           {
             localStorage.setItem('improvement_i22', 'The university has been improved since 2022. SDG12 I22 > 0.873');
           } else {
             localStorage.setItem('improvement_i22', 'The university has not been improved since 2022. SDG12 I22 <= 0.873');
           }
           
           //I23 Calculation
           var dropdown_i23_1 = document.getElementById('dropdown_i23_1').value;
           var dropdown_i23_2 = document.getElementById('dropdown_i23_2').value;
           var dropdown_i23_3 = document.getElementById('dropdown_i23_3').value;
    
           var selectedValue_i23_1 = parseFloat(dropdown_i23_1);
           var selectedValue_i23_2 = parseFloat(dropdown_i23_2);
           var selectedValue_i23_3 = parseFloat(dropdown_i23_3);
    
           var sumID23 = (selectedValue_i23_1 + selectedValue_i23_2 + selectedValue_i23_3) * 0.422;
    
           if (sumID23 > 2)
            {
              localStorage.setItem('result_i23', 'The university is rated good, no improvement needed! SDG12 I23 > 2');
            } else {
              localStorage.setItem('result_i23', 'The university is rated bad, improvement needed! SDG12 I23 <= 2');
            }
          
            if (sumID23 > 1.266)
            {
              localStorage.setItem('improvement_i23', 'The university has been improved since 2022. SDG12 I23 > 1.266');
            } else {
              localStorage.setItem('improvement_i23', 'The university has not been improved since 2022. SDG12 I23 <= 1.266');
            }
            //I24 Calculation
            var input_i24_1 = document.getElementById('input_i24_1').value;
            var input_i24_2 = document.getElementById('input_i24_2').value;
     
            var selectedValue_i24_1 = parseFloat(input_i24_1);
            var selectedValue_i24_2 = parseFloat(input_i24_2);
     
            var percentageThisYear_I24 = selectedValue_i24_1 / selectedValue_i24_2;
            var calculateFI24 = 30000/45000;
     
            var percentageChangeI24 = calculateFI24 / percentageThisYear_I24;
            if (percentageChangeI24 > 1){
              var percentageChangeI24 = 0;
            }
            else{
              var percentageChangeI24 = 1/percentageChangeI24;
            }
     
            var sumID24 = percentageChangeI24 * 0.266;

            //I25 Calculation
            var input_i25_1 = document.getElementById('input_i25_1').value;
            var selectedValue_i25_1 = parseFloat(input_i25_1);
            var sumID25 = selectedValue_i25_1 * 0.589;
            if(sumID25 > 2.25){
              localStorage.setItem('result_i25', 'The university is rated good, no improvement needed! SDG13 I25 > 2.25');
            } else {
              localStorage.setItem('result_i25', 'The university is rated bad, improvement needed! SDG13 I25 <= 2.25');
            }
            if(sumID25 > 1.178){
              localStorage.setItem('improvement_i25', 'The university has been improved since 2022. SDG13 I25 > 1.178');
            } else {
              localStorage.setItem('improvement_i25', 'The university has not been improved since 2022. SDG13 I25 <= 1.178');
            }

            //I26 Calculation
            var dropdown_i26_1 = document.getElementById('dropdown_i26_1').value;
            var dropdown_i26_2 = document.getElementById('dropdown_i26_2').value;
            var dropdown_i26_3 = document.getElementById('dropdown_i26_3').value;

            var selectedValue_i26_1 = parseFloat(dropdown_i26_1);
            var selectedValue_i26_2 = parseFloat(dropdown_i26_2);
            var selectedValue_i26_3 = parseFloat(dropdown_i26_3);
            var sumID26 = (selectedValue_i26_1 + selectedValue_i26_2 + selectedValue_i26_3) * 0.411;
            if(sumID26 > 2){
              localStorage.setItem('result_i26', 'The university is rated good, no improvement needed! SDG13 I26 > 2');
            } else {
              localStorage.setItem('result_i26', 'The university is rated bad, improvement needed! SDG13 I26 <= 2');
            }
            if(sumID26 > 1.233){
              localStorage.setItem('improvement_i26', 'The university has been improved since 2022. SDG13 I26 > 1.233');
            } else {
              localStorage.setItem('improvement_i26', 'The university has not been improved since 2022. SDG13 I26 <= 1.233');
              
            }
            //I27 Calculation
            var dropdown_i27_1 = document.getElementById('dropdown_i27_1').value;
            var dropdown_i27_2 = document.getElementById('dropdown_i27_2').value;
            var dropdown_i27_3 = document.getElementById('dropdown_i27_3').value;

            var selectedValue_i27_1 = parseFloat(dropdown_i27_1);
            var selectedValue_i27_2 = parseFloat(dropdown_i27_2);
            var selectedValue_i27_3 = parseFloat(dropdown_i27_3);
            var sumID27 = (selectedValue_i27_1 + selectedValue_i27_2 + selectedValue_i27_3) * 1;
            if(sumID27 > 2){              
              localStorage.setItem('result_i27', 'The university is rated good, no improvement needed! SDG14 I27 > 2');
            } else {
              localStorage.setItem('result_i27', 'The university is rated bad, improvement needed! SDG14 I27 <= 2');
            }
            if(sumID27 > 0){
              localStorage.setItem('improvement_i27', 'The university has been improved since 2022. SDG14 I27 > 0');
            } else {
              localStorage.setItem('improvement_i27', 'The university has not been improved since 2022. SDG14 I27 <= 0');
            } 

            //I28 Calculation
            var dropdown_i28_1 = document.getElementById('dropdown_i28_1').value;
            var dropdown_i28_2 = document.getElementById('dropdown_i28_2').value;
            var dropdown_i28_3 = document.getElementById('dropdown_i28_3').value;

            var selectedValue_i28_1 = parseFloat(dropdown_i28_1);
            var selectedValue_i28_2 = parseFloat(dropdown_i28_2);
            var selectedValue_i28_3 = parseFloat(dropdown_i28_3);
            var sumID28 = (selectedValue_i28_1 + selectedValue_i28_2 + selectedValue_i28_3) * 1;
            if(sumID28 > 2){              
              localStorage.setItem('result_i28', 'The university is rated good, no improvement needed! SDG15 I28 > 2');
            } else {
              localStorage.setItem('result_i28', 'The university is rated bad, improvement needed! SDG15 I28 <= 2');
            }
            if(sumID28 > 0){
              localStorage.setItem('improvement_i28', 'The university has been improved since 2022. SDG15 I28 > 0');
            } else {
              localStorage.setItem('improvement_i28', 'The university has not been improved since 2022. SDG15 I28 <= 0');
            }

            //Result I29
            var dropdown_i29_1 = document.getElementById('dropdown_i29_1').value;
            var dropdown_i29_2 = document.getElementById('dropdown_i29_2').value;
            var dropdown_i29_3 = document.getElementById('dropdown_i29_3').value;

            var selectedValue_i29_1 = parseFloat(dropdown_i29_1);
            var selectedValue_i29_2 = parseFloat(dropdown_i29_2);
            var selectedValue_i29_3 = parseFloat(dropdown_i29_3);
            var sumID29 = (selectedValue_i29_1 + selectedValue_i29_2 + selectedValue_i29_3) * 1;
            if(sumID29 > 2){
              localStorage.setItem('result_i29', 'The university is rated good, no improvement needed! SDG16 I29 > 2');
            } else {
              localStorage.setItem('result_i29', 'The university is rated bad, improvement needed! SDG16 I29 <= 2');
            }
            if(sumID29 > 3){
              localStorage.setItem('improvement_i29', 'The university has been improved since 2022. SDG16 I29 > 3');
            } else {
              localStorage.setItem('improvement_i29', 'The university has not been improved since 2022. SDG16 I29 <= 3');
            }

            //Result SDG I30
            var input_i30_1 = document.getElementById('input_i30_1').value;
            var input_i30_2 = document.getElementById('input_i30_2').value;

            var selectedValue_i30_1 = parseFloat(input_i30_1);
            var selectedValue_i30_2 = parseFloat(input_i30_2);
            
            var calculateFI30 = 1000/250;
            var percentageThisYear_I30 = selectedValue_i30_1 + selectedValue_i30_2;
            var percentageChangeI30 = calculateFI30 / percentageThisYear_I30;
            if (percentageChangeI30 < 1){
              var percentageChangeI30 = 0;
            }
            var sumID30 = percentageChangeI30 * 0.241;

            //Result SDG17 I31
            var selectedValue_i31_1 = document.getElementById('dropdown_i31_1').value;
            var selectedValue_i31_2 = document.getElementById('dropdown_i31_2').value;
            var selectedValue_i31_3 = document.getElementById('dropdown_i31_3').value;

            var sumID31 = (selectedValue_i31_1 + selectedValue_i31_2 + selectedValue_i31_3) * 0.322;
            if(sumID31 > 2.25){
              localStorage.setItem('result_i31', 'The university is rated good, no improvement needed! SDG17 I31 > 2.25');
            } else {
              localStorage.setItem('result_i31', 'The university is rated bad, improvement needed! SDG17 I31 <= 2.25');
            }
            if(sumID31 > 0.966){              
              localStorage.setItem('improvement_i31', 'The university has been improved since 2022. SDG17 I31 > 0.966');
            } else {
              localStorage.setItem('improvement_i31', 'The university has not been improved since 2022. SDG17 I31 <= 0.966');
            }

            //Result SDG17 I32
            var selectedValue_i32_1 = document.getElementById('dropdown_i32_1').value;
            var selectedValue_i32_2 = document.getElementById('dropdown_i32_2').value;
            var selectedValue_i32_3 = document.getElementById('dropdown_i32_3').value;

            var sumID32 = (selectedValue_i32_1 + selectedValue_i32_2 + selectedValue_i32_3) * 0.18;
            if(sumID32 > 2.25){
              localStorage.setItem('result_i32', 'The university is rated good, no improvement needed! SDG17 I32 > 2.25');
            } else {
              localStorage.setItem('result_i32', 'The university is rated bad, improvement needed! SDG17 I32 <= 2.25');
            }
            if(sumID32 > 0.45){              
              localStorage.setItem('improvement_i32', 'The university has been improved since 2022. SDG17 I32 > 0.45');
            } else {
              localStorage.setItem('improvement_i32', 'The university has not been improved since 2022. SDG17 I32 <= 0.45');
            }

            //Result SDG17 I33
            var selectedValue_i33_1 = document.getElementById('dropdown_i33_1').value;
            var selectedValue_i33_2 = document.getElementById('dropdown_i33_2').value;
            
            var sumID33 = (selectedValue_i33_1 + selectedValue_i33_2) * 0.114;
            if(sumID33 > 2){
              localStorage.setItem('result_i33', 'The university is rated good, no improvement needed! SDG17 I33 > 2');
            } else {
              localStorage.setItem('result_i33', 'The university is rated bad, improvement needed! SDG17 I33 <= 2');
            } 
            if(sumID33 > 0){
              localStorage.setItem('improvement_i33', 'The university has been improved since 2022. SDG17 I33 > 0');
            } else {
              localStorage.setItem('improvement_i33', 'The university has not been improved since 2022. SDG17 I33 <= 0');
            }

            //Result SDG17 I34
            var selectedValue_i34_1 = document.getElementById('dropdown_i34_1').value;
            var selectedValue_i34_2 = document.getElementById('dropdown_i34_2').value;
            var selectedValue_i34_3 = document.getElementById('dropdown_i34_3').value;

            var sumID34 = (selectedValue_i34_1 + selectedValue_i34_2 + selectedValue_i34_3) * 0.143;
            if(sumID34 > 2){
              localStorage.setItem('result_i34', 'The university is rated good, no improvement needed! SDG17 I34 > 2');
            } else {
              localStorage.setItem('result_i34', 'The university is rated bad, improvement needed! SDG17 I34 <= 2');
            }
            if(sumID34 > 0.429){
              localStorage.setItem('improvement_i34', 'The university has been improved since 2022. SDG17 I34 > 0.429');
            } else {
              localStorage.setItem('improvement_i34', 'The university has not been improved since 2022. SDG17 I34 <= 0.429');
            }


            var sumTotal = sumID1 + sumID2 + sumID3 + sumID4 + sumID5 + sumID6 + sumID7 + sumID8 + sumID9 + sumID10 + sumID11 + sumID12 + sumID13 + sumID14 + sumID15 + sumID16 + sumID17 + sumID8 + sumID19 + sumID20 + sumID21 + sumID22 + sumID23 + sumID24 + sumID25 + sumID26 + sumID27 + sumID28 + sumID29 + sumID30 + sumID31 + sumID32 + sumID33 + sumID34;
            if(sumTotal > 26.916){
              localStorage.setItem('result_Total', 'The university has improved overall since 2022! Total  > 26.916');
            } else {
              localStorage.setItem('result_Total', 'The university has not improved overall since 2022! Total <= 26.916');
            }



  //Save to local storage
  localStorage.setItem('uniName', uniName);
  localStorage.setItem('sumID1', sumID1);
  localStorage.setItem('sumID2', sumID2);
  localStorage.setItem('sumID3', sumID3);
  localStorage.setItem('sumID4', sumID4);
  localStorage.setItem('sumID5', sumID5);
  localStorage.setItem('sumID6', sumID6);
  localStorage.setItem('sumID7', sumID7);
  localStorage.setItem('sumID8', sumID8);
  localStorage.setItem('sumID9', sumID9);
  localStorage.setItem('sumID10', sumID10);
  localStorage.setItem('sumID11', sumID11);
  localStorage.setItem('sumID12', sumID12);
  localStorage.setItem('sumID13', sumID13);
  localStorage.setItem('sumID14', sumID14);
  localStorage.setItem('sumID15', sumID15);
  localStorage.setItem('sumID16', sumID16);
  localStorage.setItem('sumID17', sumID17);
  localStorage.setItem('sumID18', sumID18);
  localStorage.setItem('sumID19', sumID19);
  localStorage.setItem('sumID20', sumID20);
  localStorage.setItem('sumID21', sumID21);
  localStorage.setItem('sumID22', sumID22);
  localStorage.setItem('sumID23', sumID23);
  localStorage.setItem('sumID24', sumID24);
  localStorage.setItem('sumID25', sumID25);
  localStorage.setItem('sumID26', sumID26);
  localStorage.setItem('sumID27', sumID27);
  localStorage.setItem('sumID28', sumID28);
  localStorage.setItem('sumID29', sumID29);
  localStorage.setItem('sumID30', sumID30);
  localStorage.setItem('sumID31', sumID31);
  localStorage.setItem('sumID32', sumID32);
  localStorage.setItem('sumID33', sumID33);
  localStorage.setItem('sumID34', sumID34);
  localStorage.setItem('sumTotal', sumTotal);


  window.location.href = './rate_results.html';
}
