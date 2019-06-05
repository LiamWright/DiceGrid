// function that builds a grid in the "container"
function createGrid(x) {
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {
            $("#container").append("<div class='grid'></div>");
        };
    };
    $(".grid").width(960/x);
    $(".grid").height(960/x);
};

// function that clears the grid
function clearGrid(){
    $(".grid").remove();
};  

function whiteWash(){
    var square = document.getElementsByClassName("grid");
    for (var i = 0; i < square.length; i++)
    {
        square[i].style.backgroundColor = null;
    }

};

function populateGrid()
{
    var square = document.getElementsByClassName("grid");
    for (var i = 0; i < square.length;)
    {
        var increment = rollDice(0, 5);
        if ((i + increment) <= square.length - 1)
        {
            if(increment == 5)
            {
                for(var y = 1; y <= 5; y++)
                {
                    square[i + y].style.backgroundColor = "black";
                }

                i = i + increment;
            }
            else
            {
                i = i + increment;
                square[i].style.backgroundColor = "black";

            }

        }
        else if (i => square.length) {
            break;

        }
        
    }
}
// function that prompts the user to select the number of boxes in a new grid
// the function then also creates that new grid
function refreshGrid(){
    var z = prompt("How many boxes per side?");
    clearGrid();
    createGrid(z);
};
function rollDice(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
};

$(document).ready(function() {
    createGrid(16);

    $("#generateLayout").click(function(){
        whiteWash();
        populateGrid();
        //Check for existing grid

        //Clear all colours from grid if exist

        //


    });

    // $(".grid").mouseover(function() {
    //     $(this).css("background-color", "black");
    //     });

    $(".newGrid").click(function() {
        refreshGrid();

        // $(".grid").mouseover(function() {
        // $(this).css("background-color", "black");
        // });
    });
});
