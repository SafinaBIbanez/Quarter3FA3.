function mmmBIRDS() 
{
    //birdsss
    var birds = ["Eurasian Tree Sparrow", "Asian Glossy Starling", "Pigeon"];


    //randomizerr

    //max sighttitgiginss
    var numSightings = [Math.ceil(Math.random() * 20), Math.ceil(Math.random() * 20), Math.ceil(Math.random() * 20)];
    
    var num1 = Math.max(...numSightings);

    var mostSpottedBirds = birds.filter((_, i) => numSightings[i] === num1);
    
    //number 2 (place letter)
    var num2 = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    

    //nubmer 3 (minutes and houuurs)

    //ok total mins??
    var mins = Math.ceil(Math.random() * 180);

    //then too see how many hours
    var hrs = Math.floor(mins / 60);

    //remaining mins after dividingnggnn
    var num3 = mins % 60;

    //then yay output
    var datz = "Today's bird-watching session showed that the species with the most sightings is the: " + mostSpottedBirds.join(", ") + " (" + num1 + ")<br><br>" +
                "The place in Pisay with the most sightings starts with the letter: " + num2 + "<br><br>" +
                "The total observation time was (" + mins + " min): " + hrs + "hr and " + num3 + "min";
    
    document.getElementById("datz").innerHTML = datz;
}