function calculate(){

	 var f1= Number(document.getElementById("f1").value);
        var p1= Number(document.getElementById("p1").value);
        var s1=document.getElementById("s1").value=(f1*p1);
        var f2=Number(document.getElementById("f2").value);
        var p2=Number(document.getElementById("p2").value);
        var s2=document.getElementById("s2").value=(f2*p2);
        var f3=Number(document.getElementById("f3").value);
        var p3=Number(document.getElementById("p3").value);
        var s3=document.getElementById("s3").value=(f3*p3);
        var f4=Number(document.getElementById("f4").value);
        var p4=Number(document.getElementById("p4").value);
        var s4=document.getElementById("s4").value=(f4*p4);
        var f5=Number(document.getElementById("f5").value);
        var p5=Number(document.getElementById("p5").value);
        var s5=document.getElementById("s5").value=(f5*p5);
        var f6=Number(document.getElementById("f6").value);
        var p6=Number(document.getElementById("p6").value);
        var s6=document.getElementById("s6").value=(f6*p6);
        var f7=Number(document.getElementById("f7").value);
        var p7=Number(document.getElementById("p7").value);
        var s7=document.getElementById("s7").value=(f7*p7);
        var f8=Number(document.getElementById("f8").value);
        var p8=Number(document.getElementById("p8").value);
        var s8=document.getElementById("s8").value=(f8*p8);
        var f9=Number(document.getElementById("f9").value);
        var p9=Number(document.getElementById("p9").value);
        var s9=document.getElementById("s9").value=(f9*p9);
        var f10=Number(document.getElementById("f10").value);
        var p10=Number(document.getElementById("p10").value);
        var s10=document.getElementById(" s10").value=(f10*p10);
        var f11=Number(document.getElementById("f11").value);
        var p11=Number(document.getElementById("p11").value);
        var s11=document.getElementById("s11").value=(f11*p11);

        
        var R1 =Number(document.getElementById("R1").value);
        var ST1= Number(document.getElementById("ST1").value);
        document.getElementById("ST1").value=(s1+s2+s3+s4+s5+s6+s7+s8+s9+s10+s11);
        var ST1_R1=Number(document.getElementById("ST1_R1").value);
        document.getElementById("ST1_R1").value=(ST1-R1);
        var I1=parseInt(document.getElementById("I1").value+"%");
        var t1=parseInt(document.getElementById("t1").value);
        document.getElementById("t1").value=Math.round((ST1*I1)/100);
        var EXP_m1=Number(document.getElementById("EXP_m1").value);
        var solde=Number(document.getElementById("solde").value);
        document.getElementById("solde").value=(ST1_R1+t1+EXP_m1);
        }
        function access(){
            var username=prompt("Identifiant :");
            var password=prompt("Mot de passe :");
        if (username==="Admin_GSB" && password==="admin"){
            document.location.href="codesource.html";
        }
        else
            { alert("Identifiant ou mot de passe incorrects")}
        }
