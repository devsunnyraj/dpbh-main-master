puzzleOptions = document.querySelectorAll(".puzzles-options")


puzzleOptions.forEach(element => {
    element.addEventListener("click",()=>{
        if(element.classList.contains("right")){
            element.classList.add("option-right")
        }
        else{
            element.classList.add("option-wrong")
        }
        element.parentNode.classList.add("disabled-mcq")
    })
});

searchButton = document.querySelector(".searchButton")

const myUrl = "https://www.amazon.in/hz/mobile/mission?p=6bYO3lZH8HcFdJSnUyFwR2FAiSzkDuDr1T1DQodHptQSk7XLhdaCgGVdkwOf7y5ZLeVgYgVMyHoz9yH%2BVyGRyQ1Fie%2B0XXNP3j67O5eXxbUHRAZ7IKEdwmZK61ft6UQu%2FvcFi7a4lhDqeoHrg0DyWbaHh%2B7pFzTCnhcSRzKWksiJuBez535ml%2Bmb2TfqjkYH1H2QkjIf0lKM4RA5qlJmLE2ODZPCfLfecqNszV5AvJfbPdMk6dWLSMU3JHwIwIIDSUgQzTFFCSR9KBkJgDC1FHMdIWo%2FgS0XUAFDR7km1H25W4TEJvPjXkaXJT7zdtAUgxGyG32l7x7L430941na51WO%2B%2FLBsj5Bl3BTjJytlqIxny%2BqWCONqwbRsjXoAvVWKt4cYNZ1UhXf3zc4%2BL%2BRqQ%3D%3D&ref_=ci_mcx_mi&pf_rd_r=2Q0HM4R6531FWYM0PX1B&pf_rd_p=4e979a44-3cbd-4362-a989-377bbd0fea77&pd_rd_r=9700e839-e379-4d8b-ba38-8768ba0c9e70&pd_rd_w=rpr6k&pd_rd_wg=pGbMm"

getDarkPatterns=async(url="http://192.168.137.96:5000/predict",{
    method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    //   body: JSON.stringify({"url": ),
})

searchButton.addEventListener("click",()=>{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "url": "https://www.amazon.in/ref=nav_logo"
    });

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("http://192.168.137.96:5000/predict", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error',error));
})