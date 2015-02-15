//Player constructor

function Player() {
  this.name = "Minion" || "Gru" || "Evil Minion";

  this.move = function (divs) {
    var spaces = Math.floor((Math.random() * 12) + 1);
    //Writing the random math generator in this manner returns randomly any number between 1 and 12, including 12 and always a whole number.
    console.log(this.name + " has moved forward " + spaces + " spaces");
    evilminion.number("5")
  };
}

//Evil Minion steals toy constructor

function EvilMinion() {
  this.move = "5";

  if ((this.name === "Evil Minion") && (this.move === "5")) {
    $(".agnes").replaceWith('<img class="agnes" src="../images/sad-agnes.png" alt="">');
    //This .replaceWith does work, tested it in the Console.
  };
}

//Evil Minion constructor

function EvilMinion() {
  this.name = "Evil Minion";
}


var minionRescue = {

  init: function () {
    minionRescue.initEvents();
  },

  initStyling: function () {

  },

  initEvents: function () {

    $("#p1-button").on("click", function (event) {
      event.preventDefault();

      console.log("#p1-button click worked");

      minionRescue.player = new Player("Minion");

      minionRescue.renderMinion(minionRescue.player.move);

    });

    $("#p2-button").on("click", function (event) {
      event.preventDefault();

      console.log("#p2-button click worked");

      minionRescue.gru = new Player("Gru");

      minionRescue.renderGru();

    });

    $("#p3-button").on("click", function (event) {
      event.preventDefault();

      console.log("#p3-button click worked");

      minionRescue.evilminion = new Player("Evil Minion");

      minionRescue.renderEvilMinion();

    });
  },

  renderMinion: function () {

    $(".player1").remove();
    $("div").eq(spaces).prev().prepend("<img class='player1' src='images/despicable-me-2-Minion-6.png'>");
  },

  renderGru: function () {

    $(".player2").remove();
    $("div").eq(spaces).prev().prepend("<img class='player2' src='images/gru.png'>");
  },

  renderEvilMinion: function () {

    $(".player3").remove();
    $("div").eq(spaces).prev().prepend("<img class='player3' src='images/evil-minion-4.png'>");
  }

};

$(document).ready(function () {

  minionRescue.init();

});



// NOTES: Write a function that places the icon in the first <div>. Then, using a function, figure out how to get the icon from the first div to the second. Once you have that figured out you can just iterate over said function the number of times required for the move each time.
// Use .prev() / .next() and move *
