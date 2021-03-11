var activeTab = "color";
var prev = [0, 0, 0];
var now = [0, 0, 0];
$(".btns")
  .find(".color-btn")
  .each((i, it) =>
    $(it).on("click", () => {
      $(it).addClass("active").siblings().removeClass("active");
      activeTab = it.textContent;
      $(".slides")
        .find(".slide")
        .each((ind, item) => {
          $(item).val("125");
        });
    })
  );

function slideFunc(event) {
  $(".board").css(
    activeTab === "color" ? "color" : "backgroundColor",
    `rgb(${$(".red").val()},${$(".green").val()},${$(".blue").val()})`
  );

  var val =
    ($(this).val() - $(this).attr("min")) /
    ($(this).attr("max") - $(this).attr("min"));

  $(this).css(
    `background-image`,
    `-webkit-gradient(linear, left top, right top, ` +
      `color-stop(` +
      val +
      `, ${event.data.color}), ` +
      `color-stop(` +
      val +
      `, #d3d3db)` +
      `)`
  );
}

$(".slides")
  .find(".slide")
  .each((i, it) =>
    $(it).on("change mousemove", { color: it.classList[1] }, slideFunc)
  );
