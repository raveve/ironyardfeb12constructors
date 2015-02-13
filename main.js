//Minion constructor

function Minion() {
  this.name = "Minion";

  this.move = function() {
    var spaces = Math.floor(Math.random() * 12);
    console.log(this.name + " has moved forward " + spaces + " spaces")
  }
}

//Gru constructor

function Gru() {
  this.name = "Gru";
}

//Evil Minion constructor

function EvilMinion() {
  this.name = "EvilMinion";
}


var minionRescue = {

  init: function () {
    minionRescue.initEvents();
  },

  initStyling: function () {

  },

  initEvents: function () {
    $("#").on('submit', function (e) {
      e.preventDefault();
      var traits = {
        name: $('#character input[name="name"]').val(),
      };
      myPage.character = new Character(traits);
      myPage.monster = new Monster();
      myPage.renderBoard();

    });


    $("#p1-button").on("click", function (event) {
      event.preventDefault();

      console.log("#p1-button click worked");

      minionRescue.minion = new Minion();

      minionRescue.minion.move();

      minionRescue.renderMinion();

    });

    $("#p2-button").on("click", function (event) {
      event.preventDefault();

      console.log("#p2-button click worked");

      minionRescue.gru = new Gru();

      minionRescue.renderGru();

    });

    $("#p3-button").on("click", function (event) {
      event.preventDefault();

      console.log("#p3-button click worked");

      minionRescue.evilminion = new EvilMinion();

      minionRescue.renderEvilMinion();

    });
  },

  renderMinion: function () {
    $("div").eq(0).prepend("<img class='player' src='images/despicable-me-2-Minion-6.png'>");
  },

  renderGru: function () {
    $("div").prepend("<img class='player' src='images/gru.png'>");
  },

  renderEvilMinion: function () {
    $("div").prepend("<img class='player' src='images/evil-minion-4.png'>");
  }

};

$(document).ready(function () {

  minionRescue.init();

});



// NOTES: Write a function that places the icon in the first <div>. Then, using a function, figure out how to get the icon from the first div to the second. Once you have that figured out you can just iterate over said function the number of times required for the move each time.//
