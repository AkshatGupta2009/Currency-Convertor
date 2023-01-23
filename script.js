function myFunction() {
m = document.getElementById('OriginalCurrency').value;
amt = document.getElementById('Amount').value;

        switch (m) {
            case "AUD":
                document.getElementById('1').innerHTML = "--> " + amt + " " + m + " = " + Math.round(amt*0.67*100)/100 + " " + "USD";
                document.getElementById('2').innerHTML = "--> " + amt + " " + m + " = " + Math.round(amt*0.09*100)/100 + " " + "CAD";
                document.getElementById('3').innerHTML = "--> " + amt + " " + m + " = " + Math.round(amt*91.22*100)/100 + " " + "YEN";
                document.getElementById('4').innerHTML = "--> " + amt + " " + m + " = " + Math.round(amt*55.49*100)/100 + " " + "INR";
                document.getElementById('5').innerHTML = "--> " + amt + " " + m + " = " + Math.round(amt*0.63*100)/100 + " " + "EURO";
                break;
            case "USD":
                document.getElementById('1').innerHTML = "--> " + amt + " " + m + " = " + Math.round(amt*1.49*100)/100 + " " + "AUD";
                document.getElementById('2').innerHTML = "--> " + amt + " " + m + " = " + Math.round(amt*1.4*100)/100 + " " + "CAD";
                document.getElementById('3').innerHTML = "--> " + amt + " " + m + " = " + Math.round(amt*135.77*100)/100 + " " + "YEN";
                document.getElementById('4').innerHTML = "--> " + amt + " " + m + " = " + Math.round(amt*82.62*100)/100 + " " + "INR";
                document.getElementById('5').innerHTML = "--> " + amt + " " + m + " = " + Math.round(amt*0.95*100)/100 + " " + "EURO";
                break;
            case "CAD":
                document.getElementById('1').innerHTML = "--> " + amt + " " + m + " = " + Math.round(amt*1.09*100)/100 + " " + "AUD";
                document.getElementById('2').innerHTML = "--> " + amt + " " + m + " = " + Math.round(amt*0.73*100)/100 + " " + "USD";
                document.getElementById('3').innerHTML = "--> " + amt + " " + m + " = " + Math.round(amt*99.5*100)/100 + " " + "YEN";
                document.getElementById('4').innerHTML = "--> " + amt + " " + m + " = " + Math.round(amt*60.52*100)/100 + " " + "INR";
                document.getElementById('5').innerHTML = "--> " + amt + " " + m + " = " + Math.round(amt*0.7*100)/100 + " " + "EURO";
                break;
            case "YEN":
                document.getElementById('1').innerHTML = "--> " + amt + " " + m + " = " + Math.round(amt*0.01*100)/100 + " " + "AUD";
                document.getElementById('2').innerHTML = "--> " + amt + " " + m + " = " + Math.round(amt*0.007*100)/100 + " " + "USD";
                document.getElementById('3').innerHTML = "--> " + amt + " " + m + " = " + Math.round(amt*0.01*100)/100 + " " + "CAD";
                document.getElementById('4').innerHTML = "--> " + amt + " " + m + " = " + Math.round(amt*0.61*100)/100 + " " + "INR";
                document.getElementById('5').innerHTML = "--> " + amt + " " + m + " = " + Math.round(amt*0.0069*100)/100 + " " + "EURO";
                break;
            case "INR":
                document.getElementById('1').innerHTML = "--> " + amt + " " + m + " = " + Math.round(amt*0.018*100)/100 + " " + "AUD";
                document.getElementById('2').innerHTML = "--> " + amt + " " + m + " = " + Math.round(amt*0.012*100)/100 + " " + "USD";
                document.getElementById('3').innerHTML = "--> " + amt + " " + m + " = " + Math.round(amt*0.017*100)/100 + " " + "CAD";
                document.getElementById('4').innerHTML = "--> " + amt + " " + m + " = " + Math.round(amt*1.65*100)/100 + " " + "YEN";
                document.getElementById('5').innerHTML = "--> " + amt + " " + m + " = " + Math.round(amt*0.01*100)/100 + " " + "EURO";
                break;
            case "EURO":
                document.getElementById('1').innerHTML = "--> " + amt + " " + m + " = " + Math.round(amt*1.58*100)/100 + " " + "AUD";
                document.getElementById('2').innerHTML = "--> " + amt + " " + m + " = " + Math.round(amt*1.05*100)/100 + " " + "USD";
                document.getElementById('3').innerHTML = "--> " + amt + " " + m + " = " + Math.round(amt*1.45*100)/100 + " " + "CAD";
                document.getElementById('4').innerHTML = "--> " + amt + " " + m + " = " + Math.round(amt*144.45*100)/100 + " " + "YEN";
                document.getElementById('5').innerHTML = "--> " + amt + " " + m + " = " + Math.round(amt*87.80*100)/100 + " " + "INR";
                break;
        }
        document.getElementById('ans').innerHTML = "Your Conversions:";
        
        }
