let click =  document.getElementsByClassName("click")[0]
            function clickme(){
          
                let inputbox= document.getElementById('get-input').value
               let textvoice= new SpeechSynthesisUtterance(inputbox)
                const voices = speechSynthesis.getVoices();
            textvoice.voice = voices[0];


            speechSynthesis.speak(textvoice)





            }
