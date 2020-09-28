document.getElementById("app").innerHTML = 
`<button id="myBtn">Open modal</button>

<!-- The Modal -->
<div id="myModal" class="modal">

  <!-- Modal content -->
  <div class="modal-content">
    <span class="close">&times;</span>
    <img class="image" src="https://i.imgur.com/5RnmPAv.png" />
    <h1>Let's get going!</h1>
    <p>Follow these tips to get your</p>
    <p>project off to a great start and</p>
    <p>create a truly memorable book!</p>
    <div class="circle-one"></div>
    <div class="circle-two"></div>
    <div class="circle-three"></div>
    <br/>
    <button class="nextBtn">Next</button>

  </div>

</div>`;

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
