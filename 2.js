function submit()
    {
        let x = document.querySelector("#in1").value;
        if(x=="")
        {
           let y = document.querySelector("#val1");
            y.innerHTML = " ENTER VALID USERNAME";
        }
        else
        {
            let y = document.querySelector("#cmt");
            y.innerHTML = "USERNAME"+" - "+x;
        }


        let z = document.querySelector("#in2").value;
        if(z=="")
        {
            let w = document.querySelector("#val2");
            w.innerHTML = "ENTER VALID PASSWORD";   
        }
        else
        {
            let w = document.querySelector("#box");
            w.innerHTML = "PASSWORD"+" - "+z;
        }
    

        document.querySelector("#in1").value = "";
        document.querySelector("#in2").value = "";
    }