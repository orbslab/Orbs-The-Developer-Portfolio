function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("myDiv").style.marginLeft = "250px";
    document.body.style.backgroundColor = "#000";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("myDiv").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}
/****************************
    BlogPage Slide Tools
****************************/

$('#onAdd').click(function(){
  window.location.href ="blog-dashboard.html";
})

/*************************
  Dashboard-TextEditor 
**************************/
var toolbarOptions = [ 
	['bold', 'italic', 'underline', 'strike'],
	['blockquote', 'code-block'],
	[{ 'header': 1 }, { 'header': 2 }],
  	[{ 'list': 'ordered'}, { 'list': 'bullet' }],
  	[{ 'script': 'sub'}, { 'script': 'super' }],
  	[{ 'indent': '-1'}, { 'indent': '+1' }],
  	[{ 'direction': 'rtl' }],
  	[{ 'size': ['small', false, 'large', 'huge'] }],
  	[{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  	[{ 'color': [] }, { 'background': [] }],
  	[{ 'font': [] }],
  	[{ 'align': [] }],
  	['link', 'image', 'video', 'formula']
];

var quill = new Quill('#editor', {
	modules: {
    toolbar: toolbarOptions
	},

	theme: 'snow'
  	
});

$('#onPreview').click(function () {
	$(this).hide();
})

$('#onDiscard').click(function(){
	window.location.href = "blog.html";
})

