var bluebtn=document.getElementById('bluebtn');
var brownbtn=document.getElementById('brownbtn');
var blackbtn=document.getElementById('blackbtn');
var redbtn=document.getElementById('redbtn');
var img=document.getElementById('clockimg');
var buybtn=document.getElementById('buybtn');


bluebtn.addEventListener('click', function(){
   img.src='/images/blue.png';
});
blackbtn.addEventListener('click', function(){
   img.src='/images/black.png';
});
brownbtn.addEventListener('click', function(){
   img.src='/images/brown.png';
});
redbtn.addEventListener('click', function(){
   img.src='/images/red.png';
});


buybtn.addEventListener('click' , function(){
   alert(`Its on the way to your home !!!
   thanks and for coming to us !!1`);

});
