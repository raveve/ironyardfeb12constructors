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
    return spaces;
  }
  this.steal = function () {
    if (this.name === "Evil Minion" && this.move === 5) {
      $(".agnes").replaceWith('<img class="agnes" src="../images/sad-agnes.png" alt="">');
      // This .replaceWith does work, tested it in the Console, not sure if the "if" is correct though
      // Original if statement: if (this.name === "Evil Minion" && this.move === 5)
    }
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
      console.log(Minion);

      minionRescue.renderMinion();
    });

    $("#p2-button").on("click", function (event) {
      event.preventDefault();
      console.log("#p2-button click worked");

      minionRescue.gru = new Gru();
      console.log(Gru);

      minionRescue.renderGru();
    });

    $("#p3-button").on("click", function (event) {
      event.preventDefault();
      console.log("#p3-button click worked");

      minionRescue.evilminion = new EvilMinion();
      console.log(EvilMinion);

      minionRescue.renderEvilMinion();
    });
  },

  renderMinion: function() {
    var current = $(".player1").parent("div").index();
    $(".player1").remove();


    if ($(".player1").parent("div").index() >= 99) {
      $("div").eq(99).prepend("<img class='player1' src='images/despicable-me-2-Minion-6.png'>");
      alert("Congratulations! Minion has rescued the sisters before the Evil Minion could get to them!");
    } else {
        $("div").eq(current + minionRescue.minion.move()).prev().prepend("<img class='player1' src='images/despicable-me-2-Minion-6.png'>");
    }
  },

  renderGru: function() {
    var current = $(".player2").parent("div").index();
    $(".player2").remove();

    if ($(".player2").parent("div").index() >= 99) {
      $("div").eq(99).prepend("<img class='player2' src='images/gru.png'>");
      alert("Congratulations! Gru has rescued the sisters before the Evil Minion could get to them!");
    } else {
        $("div").eq(current + minionRescue.gru.move()).prev().prepend("<img class='player2' src='images/gru.png'>");
    }
  },

  renderEvilMinion: function () {
    var current = $(".player3").parent("div").index();
    $(".player3").remove();

    if ($(".player3").parent("div").index() >= 99) {
      $("div").eq(99).prepend("<img class='player3' src='images/evil-minion-4.png'>");
      $(".sisters").remove();
      alert('Game over, the Evil Minion has taken the sisters!');
    } else {
        $("div").eq(current + minionRescue.evilminion.move()).prev().prepend("<img class='player3' src='images/evil-minion-4.png'>");
    }
  },
};

$(document).ready(function () {

  minionRescue.init();

});
