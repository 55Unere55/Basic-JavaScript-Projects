function slice_Method(){
    var Sentnce = "All work and no play makes Jonny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}

function string_Method(){
    var X =182;
    document.getElementById("Numbers_to_String").innerHTML = X.toString();
}

function precision_Method(){
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

