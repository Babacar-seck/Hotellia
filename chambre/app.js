var burger = document.getElementById('navbar-toggler-icon');
document.getElementById('menu-responsive').style.display = 'none';

var ouvert = 0;
burger.addEventListener('click', function(){    
	if(ouvert == 0){
		document.getElementById('menu-responsive').style.display = 'block';
		
		
		ouvert = 1; 
	}
	else{
		document.getElementById('menu-responsive').style.display = 'none';
	
		ouvert = 0; 
	}
}); 
        
