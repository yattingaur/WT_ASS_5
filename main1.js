let base_url = "handler.php";
        var today = new Date();
        var t = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            var x = document.getElementById("home");
            var y= document.getElementById("register_form");
            var z= document.getElementById("registrant_list");
            x.style.display="block";
                y.style.display="none";
                z.style.display="none";
        function initial(){
            if(x.style.display==="none")
            {
                x.style.display="block";
                y.style.display="none";
                z.style.display="none";
            }
        }
        function initial1(){
            if(y.style.display==="none")
            {
                document.getElementById("temp").innerHTML="";
                x.style.display="none";
                y.style.display="block";
                z.style.display="none";
            }
        }
        function initial2(){
            if(z.style.display==="none")
            {
                x.style.display="none";
                y.style.display="none";
                z.style.display="block"; 
                initial7();
            }
        }
        function initial3()
        {   
            var b,c,d,f,g;
            b=document.getElementById("user").value;
            c=document.getElementById("pass").value;
            d=document.getElementById("mobileNumber").value;
            f=document.getElementById("emails").value;
            
            var e = document.getElementById("ddlView");
            var strUser = e.options[e.selectedIndex].value;

            var strUser1 = e.options[e.selectedIndex].text;

            if (strUser == 0) {
                document.getElementById("drop").innerHTML = " ** Please Select a Event";
                // alert("Please select a Event");
                setTimeout(() => {
                    document.getElementById("drop").innerHTML = "";
                  }, 2000);
                  
                return false;
              }
              

            if(b == ""){
				document.getElementById('username').innerHTML =" **Please fill the Name field";
                setTimeout(() => {
                    document.getElementById("username").innerHTML = "";
                  }, 2000);
                return false;
			}
            else if((b.length <= 2) || (b.length > 20)) {
				document.getElementById('username').innerHTML =" **Name length must be between 2 and 20";
                setTimeout(() => {
                    document.getElementById("username").innerHTML = "";
                  }, 2000);
                return false;
			}
            else if(!isNaN(b)){
				document.getElementById('username').innerHTML =" **only characters are allowed";
                setTimeout(() => {
                    document.getElementById("username").innerHTML = "";
                  }, 2000);
                return false;
			}
            else{
                document.getElementById('username').innerHTML ="";
            }
            if(c == ""){
				document.getElementById('passwords').innerHTML =" **Please fill the College Name field";
                setTimeout(() => {
                    document.getElementById("passwords").innerHTML = "";
                  }, 2000);
                return false;
			}
            else if((c.length <= 2) || (c.length > 20)) {
				document.getElementById('passwords').innerHTML =" **College Name length must be between 2 and 20";
                setTimeout(() => {
                    document.getElementById("passwords").innerHTML = "";
                  }, 2000);
                return false;
			}
            else if(!isNaN(c)){
				document.getElementById('passwords').innerHTML =" **only characters are allowed";
                setTimeout(() => {
                    document.getElementById("passwords").innerHTML = "";
                  }, 2000);
                return false;
			}
            else{
                document.getElementById('passwords').innerHTML ="";
            }

            

            var at="@"
            var dot="."
            var lat=f.indexOf(at)
            var lstr=f.length
            var ldot=f.indexOf(dot)
            if(f == "")
            {
                document.getElementById('emailids').innerHTML ="**Please enter E-mail ID";
                setTimeout(() => {
                    document.getElementById("emailids").innerHTML = "";
                  }, 2000);
                return false;
            }
            if (f.indexOf(at)==-1){
                document.getElementById('emailids').innerHTML ="**Invalid E-mail ID";
                setTimeout(() => {
                    document.getElementById("emailids").innerHTML = "";
                  }, 2000);
                return false;
            }
            else if (f.indexOf(at)==-1 || f.indexOf(at)==0 || f.indexOf(at)==lstr){
                document.getElementById('emailids').innerHTML ="**Invalid E-mail ID";
                setTimeout(() => {
                    document.getElementById("emailids").innerHTML = "";
                  }, 2000);
                return false;
            }
            else if (f.indexOf(dot)==-1 || f.indexOf(dot)==0 || f.indexOf(dot)==lstr){
                document.getElementById('emailids').innerHTML ="**Invalid E-mail ID";
                setTimeout(() => {
                    document.getElementById("emailids").innerHTML = "";
                  }, 2000);
                return false;
            }
            else if (f.indexOf(at,(lat+1))!=-1){
                document.getElementById('emailids').innerHTML ="**Invalid E-mail ID";
                setTimeout(() => {
                    document.getElementById("emailids").innerHTML = "";
                  }, 2000);
                return false;
            }
            else if (f.substring(lat-1,lat)==dot || f.substring(lat+1,lat+2)==dot){
                document.getElementById('emailids').innerHTML ="**Invalid E-mail ID";
                setTimeout(() => {
                    document.getElementById("emailids").innerHTML = "";
                  }, 2000);
                return false;
            }
            else if (f.indexOf(dot,(lat+2))==-1){
                document.getElementById('emailids').innerHTML ="**Invalid E-mail ID";
                setTimeout(() => {
                    document.getElementById("emailids").innerHTML = "";
                  }, 2000);
                return false;
            }
            else if (f.indexOf(" ")!=-1){
                document.getElementById('emailids').innerHTML ="**Invalid E-mail ID";
                setTimeout(() => {
                    document.getElementById("emailids").innerHTML = "";
                  }, 2000);
                return false;
            }
            else
            {
                document.getElementById('emailids').innerHTML ="";
            }

            

            if(d == ""){
				document.getElementById('mobileno').innerHTML =" **Please fill the Mobile Number field";
                setTimeout(() => {
                    document.getElementById("mobileno").innerHTML = "";
                  }, 2000);
                return false;
			}
			if(isNaN(d)){
				document.getElementById('mobileno').innerHTML =" **User must write digits only not characters";
                setTimeout(() => {
                    document.getElementById("mobileno").innerHTML = "";
                  }, 2000);
                return false;
			}
			if(d.length!=10){
				document.getElementById('mobileno').innerHTML =" **Mobile Number must be 10 digits only";
                setTimeout(() => {
                    document.getElementById("mobileno").innerHTML = "";
                  }, 2000);
                return false;
            }
            else if(d==0000000000)
            {
                document.getElementById('mobileno').innerHTML =" **Mobile Number must be 10 digits only";
                setTimeout(() => {
                    document.getElementById("mobileno").innerHTML = "";
                  }, 2000);
                return false;
            }
            else{
                document.getElementById('mobileno').innerHTML ="";
            }
            
           
            

            
            var to = new Date();
            var h = to.getHours() + ":" + to.getMinutes() + ":" + to.getSeconds();
            
            var k={user: b, pass: c, mobileNumber: d, emails: f, strUser1: strUser1, timestamp: h};
            var k = JSON.stringify(k);
            initial6(k);
            document.getElementById("form_register").reset();
            
        }

        function initial6(k){
            let url = base_url + "?req=insert&object="+k; 
            $.get(url,function(data,success){
                if(data=="Form successfully submitted")
                {
                    document.getElementById("temp").innerHTML=data;
                }
                else
                {
                    document.getElementById("temp1").innerHTML=data;
                }
                
            });
        }


        function initial7()
        {
            let url = base_url + "?req=list";
            $.get(url,function(data,success){
                if(data.length == 0)
                {
                    document.getElementById("demo1").innerHTML="<h3><div class='container text-center'>No one registered till now. Be the first one to register.</div></h3>";
                }
                else{
                        var text;
                        text= "<table class='table table-striped table-bordered table-hover'><thead class='thead-dark'>";
                        text=text + "<br><tr><th>Name</th><th>College</th><th>Mobile</th><th>Email</th><th>Event</th><th>Timestamp</th></tr></thead><tbody>";
                        for(i=0;i<data.length;i++)
                        {
                            text= text + "<tr><td>" + data[i].user+ "</td><td>" + data[i].pass + "</td><td>" + data[i].mobileNumber + "</td><td>" + data[i].emails + "</td><td>" + data[i].strUser1  + "</td><td>" + data[i].timestamp + "</td></tr>";
                        }
                        text += "</tbody></table>";
                        document.getElementById("demo1").innerHTML=text;         
                    }   
            });
        }
        