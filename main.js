// Minion constructor

function Minion() {
  this.name = "Minion";

  this.move = function () {
    var spaces = Math.floor((Math.random() * 12) + 1);
    console.log(this.name + " has moved forward " + spaces + " spaces");
    return spaces;
  }
}

// Gru constructor

function Gru() {
  this.name = "Gru";

  this.move = function () {
    var spaces = Math.floor((Math.random() * 12) +1);
    console.log(this.name + " has moved forward " + spaces + " spaces");
    return spaces;
  }
}

// Evil Minion constructor

function EvilMinion() {
  this.name = "Evil Minion";

  this.move = function () {
    var spaces = Math.floor((Math.random() * 12) +1);
    console.log(this.name + " has moved forward " + spaces + " spaces");

    if (spaces === 5) {
      $(".agnes").replaceWith('<img class="agnes" src="../images/sad-agnes.png" alt="">');
    }
    return spaces;
  }
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

      minionRescue.minion = new Minion();

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

  renderMinion: function() {
    var current = $(".player1").parent("div").index();
    var counter = minionRescue.minion.move();
    console.info(current + counter);

    if ((current + counter) >= 99){
      $(".player1").remove();
      $("div").eq(99).prepend("<img class='player1' src='images/despicable-me-2-Minion-6.png'>");
      alert("Congratulations! Minion has rescued the sisters before the Evil Minion could get to them!");
    } else {
      $(".player1").remove();
      $("div").eq(current + counter).prev().prepend("<img class='player1' src='images/despicable-me-2-Minion-6.png'>");
    }
  },

  renderGru: function() {
    var current = $(".player2").parent("div").index();
    var counter = minionRescue.gru.move();
    console.info(current + counter);

    if ((current + counter) >= 99) {
      $(".player2").remove();
      $("div").eq(99).prepend("<img class='player2' src='images/gru.png'>");
      alert("Congratulations! Gru has rescued the sisters before the Evil Minion could get to them!");
    } else {
        $(".player2").remove();
        $("div").eq(current + counter).prev().prepend("<img class='player2' src='images/gru.png'>");
    }
  },

  renderEvilMinion: function () {
    var current = $(".player3").parent("div").index();
    var counter = minionRescue.evilminion.move();
    console.info(current + counter);
    $(".player3").remove();

    if ((current + counter) >= 99) {
      $(".player3").remove();
      $("div").eq(99).prepend("<img class='player3' src='images/evil-minion-4.png'>");
      $(".sisters").remove();
      alert('Game over, the Evil Minion has taken the sisters!');
    } else {
        $(".player3").remove();
        $("div").eq(current + counter).prev().prepend("<img class='player3' src='images/evil-minion-4.png'>");
    }
  },
};

$(document).ready(function () {

  minionRescue.init();

});
