//Player constructor

function Player(name) {
  this.name = "Minion" || "Gru" || "Evil Minion";
}

//Evil Minion steals toy constructor

function EvilMinion() {
  if ((this.name === "Evil Minion") && (evil.move === "5")) {
    $(".agnes").replaceWith('<img class="agnes" src="../images/sad-agnes.png" alt="">');
    //This .replaceWith does work, tested it in the Console.
  };
}

//Game over constructor

function GameOver() {
  if ($(".player3").parent("div").index() === "99") {
    $(".sisters").remove();
    alert('Game over, the Evil Minion has taken the sisters!');
  }
  else if ($(".player1").parent("div").index() === "99") {
    alert("Congratulations! Minion has rescued the sisters before the Evil Minion could get to them!");
  }
  else if ($(".player2").parent("div").index() === "99") {
    alert("Congratulations! Gru has rescued the sisters before the Evil Minion could get to them!");
  };
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

      minionRescue.renderMinion();

    });

    $("#p2-button").on("click", function (event) {
      event.preventDefault();

      console.log("#p2-button click worked");

      minionRescue.renderGru();

    });

    $("#p3-button").on("click", function (event) {
      event.preventDefault();

      console.log("#p3-button click worked");

      minionRescue.renderEvilMinion();

    });
  },

  renderMinion: function () {

      var minion = new Player("Minion");

      var spaces = Math.floor((Math.random() * 12) + 1);
      //Writing the random math generator in this manner returns randomly any number between 1 and 12, including 12 and always a whole number.
      console.log(minion.name + " has moved forward " + spaces + " spaces");

    var current = $(".player1").parent("div").index();
    $(".player1").remove();
    $("div").eq(current + spaces).prev().prepend("<img class='player1' src='images/despicable-me-2-Minion-6.png'>");
  }, //Works for all rolls but the first. Need to figure out a way to move it forward 1 on first roll.

  renderGru: function () {

    var gru = new Player("Gru");

    var spaces = Math.floor((Math.random() * 12) + 1);
    //Writing the random math generator in this manner returns randomly any number between 1 and 12, including 12 and always a whole number.
    console.log(gru.name + " has moved forward " + spaces + " spaces");

    var current = $(".player2").parent("div").index();
    $(".player2").remove();
    $("div").eq(current + spaces).prev().prepend("<img class='player2' src='images/gru.png'>");
  },

  renderEvilMinion: function () {

    var evil = new Player("Evil Minion");

    var spaces = Math.floor((Math.random() * 12) + 1);
    //Writing the random math generator in this manner returns randomly any number between 1 and 12, including 12 and always a whole number.
    console.log(evil.name + " has moved forward " + spaces + " spaces");

    var current = $(".player3").parent("div").index();
    $(".player3").remove();
    $("div").eq(current + spaces).prev().prepend("<img class='player3' src='images/evil-minion-4.png'>");
  }

};

$(document).ready(function () {

  minionRescue.init();

});



// NOTES: Write a function that places the icon in the first <div>. Then, using a function, figure out how to get the icon from the first div to the second. Once you have that figured out you can just iterate over said function the number of times required for the move each time.
// Use .prev() / .next() and move *
