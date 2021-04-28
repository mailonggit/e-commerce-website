<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
	<title>Mobile Shop</title>
	<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
	<link rel="stylesheet" href="style.css">
</head>
<body>
	<div class = "header">
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
  			<div class="container-fluid">
    			<a class="navbar-brand" href="#"><b>MOBILE SHOP</b></a>
    			<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      				<span class="navbar-toggler-icon"></span>
    			</button>
    			<div class="collapse navbar-collapse" id="navbarSupportedContent">
      				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
        				<li class="nav-item">
          					<a class="nav-link active" aria-current="page" href="#">Home</a>
        				</li>
        				<li class="nav-item">
         					<a class="nav-link" href="#">Link</a>        				
      				</ul>
      				<form class="d-flex">
        				<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        				<button class="btn btn-outline-success" type="submit">Search</button>
      				</form>
    			</div>
  			</div>
		</nav>	
  		<div class="btn-group navbar">
  <button type="button" class="btn btn-primary">Apple</button>
  <button type="button" class="btn btn-primary">Samsung</button>
  <div class="btn-group">
    <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown">
       Sony
    </button>
    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Tablet</a>
      <a class="dropdown-item" href="#">Smartphone</a>
    </div>
  </div>
</div>
  	</div>
	
	
	<div class = "cont">
		<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  			<div class="carousel-inner">
    			<div class="carousel-item active">
      				<img src="https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/4/15/637541042153223624_F-H1_800x300.png" class="d-block w-100" alt="...">
    			</div>
    			<div class="carousel-item">
      				<img src="https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/4/27/637551290032351750_F_H1_800x300.png" class="d-block w-100" alt="...">
    			</div>
   				<div class="carousel-item">
    				<img src="https://images.fpt.shop/unsafe/fit-in/800x300/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2021/4/22/637546534796933342_F-H1_800x300.png" class="d-block w-100" alt="...">
    			</div>
  			</div>
  			<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    			<span class="carousel-control-prev-icon" aria-hidden="true"></span>
    			<span class="visually-hidden">Previous</span>
  			</button>
  			<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    			<span class="carousel-control-next-icon" aria-hidden="true"></span>
    			<span class="visually-hidden">Next</span>
  			</button>
		</div>	
	</div>
	
	<div class="footer">
		<footer class="bg-light text-center text-lg-start">
			<div class="container p-4">
    			<div class="row">
      				<div class="col-lg-6 col-md-12 mb-4 mb-md-0">
        				<h5 class="text-uppercase"><B>MOBILE SHOP</B></h5>
        				<p>We will bring to the best experience for you!/ <br>Thanks for trusting us!        </p>
      				</div>
      				<div class="col-lg-3 col-md-6 mb-4 mb-md-0">
						<ul class="list-unstyled mb-0">
          					<li>
            					<a href="#!" class="text-dark">Introduction</a>
          					</li>
          					<li>
            					<a href="#!" class="text-dark">Frequently Asked Questions for Purchasing</a>
          					</li>
          					<li>
            					<a href="#!" class="text-dark">Privacy Policy</a>
         					</li>
          					<li>
           						<a href="#!" class="text-dark">Look up warranty information</a>
          					</li>
        				</ul>
      				</div>     
      				<div class="col-lg-3 col-md-6 mb-4 mb-md-0">
        				<ul class="list-unstyled">
          					<li>
            					<a href="#!" class="text-dark">Recruitment</a>
        					</li>
          					<li>
            					<a href="#!" class="text-dark">Promotion information</a>
          					</li>
          					<li>
            					<a href="#!" class="text-dark">Shop system</a>
          					</li>
          					<li>
            					<a href="#!" class="text-dark">Return policy</a>
          					</li>
          					<li>
            					<a href="#!" class="text-dark">Return policy</a>
          					</li>
          					<li>
            					<a href="#!" class="text-dark">Guide to installment purchase</a>
          					</li>
        				</ul>
      				</div>
    			</div> 
  			</div> 
  			<div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);"> © 2020 Copyright:
    			<a class="text-dark" href="https://mdbootstrap.com/">Cuongdeptrai.com</a>
  			</div>
		</footer>
		
	</div>

	<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.1/dist/umd/popper.min.js" integrity="sha384-SR1sx49pcuLnqZUnnPwx6FCym0wLsk5JZuNx2bPPENzswTNFaQU1RDvt3wT4gWFG" crossorigin="anonymous"></script>
	<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.min.js" integrity="sha384-j0CNLUeiqtyaRmlzUHCPZ+Gy5fQu0dQ6eZ/xAww941Ai1SxSY+0EQqNXNE6DZiVc" crossorigin="anonymous"></script>
</body>
</html>