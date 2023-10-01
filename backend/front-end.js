    // by default set joke type to 1 i.e. general
    // jokeType = 0;
    document.getElementById(`type${jokeType}`).style.color = "#646cff";
    // set to joke type 1
    function type0(){
        document.getElementById("punchline").style.display = "none";
        // highlight the type in the list 
        document.getElementById("type0").style.color = "#646cff";
        document.getElementById("type1").style.color = "black";
        document.getElementById("type2").style.color = "black";
        jokeType = 0
        // getJokes()
    }
    // set to joke type 2
    function type1(){
        document.getElementById("punchline").style.display = "none";
        document.getElementById("type1").style.color = "#646cff";
        document.getElementById("type0").style.color = "black";
        document.getElementById("type2").style.color = "black";
        jokeType = 1
        // getJokes()
    }
    // set to joke type 3
    function type2(){
        document.getElementById("punchline").style.display = "none";
        document.getElementById("type2").style.color = "#646cff";
        document.getElementById("type1").style.color = "black";
        document.getElementById("type0").style.color = "black";
        jokeType = 2
        // getJokes()
    }
    // // display the punchline to the joke
    // function revealJoke() {
    //     // slide down animation for joke reveal
    //     $('#punchline').slideDown(1000)
    //     document.getElementById("punchline").style.display = "block";
    // }
    
    // // get jokes depending on the type selected by the user
    function getJokes(){
        document.getElementById("punchline").style.display = "none";
        fetch('/jokes')
            .then(response => response.json())
            .then(jokes =>  {
                randomNum = Math.floor(Math.random() * jokes[jokeType].length);
                console.log(jokeType)
                document.getElementById('setup').innerHTML = jokes[jokeType][randomNum].setup;
                document.getElementById('punchline').innerHTML = jokes[jokeType][randomNum].punchline;
            });
    }