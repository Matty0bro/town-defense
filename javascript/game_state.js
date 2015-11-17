function runGame(){
context.fillStyle = "green";
	context.fillRect(0, 0, canvas.width, canvas.height);
	
	
	var deltaTime = getDeltaTime();

	drawMap(0,0);
	drawhud();
	//drawTowerInventory();

	if (mouselistener.mouseDown == true) {
		context.fillStyle = "#f00";
		context.font="14px Arial";
		
		context.fillText("MOUSE DOWN - POSITION: " + mouselistener.page_x + " / " + mouselistener.page_y, 5, 40);
		context.fillText("TILE POSITION: " +  pixelToTile(mouselistener.page_x) + " / " + pixelToTile(mouselistener.page_y), 5, 60);
		
		var mouse_x = pixelToTile(mouselistener.page_x);
		var mouse_y = pixelToTile(mouselistener.page_y);
		
		context.fillText("TILE POSITION IN PIXELS: " + tileToPixel(mouse_x) + " / " + tileToPixel(mouse_y), 5, 80);
	}


	//TOWERS
	testTower.update();
	testTower.draw(mouselistener.page_x, mouselistener.page_y);

	//FIRE BULLETS FROM EACH TOWER
	if (testTower.allTowers.length > 0) {
		//console.log("tower length:", testTower.allTowers.lengthj
		for (var i = 0; i < testTower.allTowers.length; i++) {
			console.log("#towers: ", testTower.allTowers.length);
			console.log("index: ", i);


			console.log("shoot count: ", towerShootCount);
			var jitter = Math.random() * 0.2 - 0.1;
			testTower.allTowers[i].thisTowerBullets[towerShootCount].fire(testTower.allTowers[i].x, testTower.allTowers[i].y, 1, jitter);
			//testTower.allTowers[i].thisTowerBullets[towerShootCount].update(deltaTime);
			//testTower.allTowers[i].thisTowerBullets[towerShootCount].draw(10, 10);

			for (var j = 0; j < 50; j++) {

			 console.log(j);
			 var jitter = Math.random() * 0.2 - 0.1;
			 //testTower.allTowers[i].thisTowerBullets[j].fire(testTower.allTowers[i].x, testTower.allTowers[i].y, 1, jitter);
			 testTower.allTowers[i].thisTowerBullets[j].update(deltaTime);
			 testTower.allTowers[i].thisTowerBullets[j].draw(10, 10);
			 }


		}
		towerShootCount++;
		if (towerShootCount > 49) {
			towerShootCount = 0;
		}
	}

	// BULLETS
	//bullet.update(deltaTime);

	//bullet.fire(mouselistener.page_x, mouselistener.page_y, 5, 5 );

	//bullet.draw(10,10);

		
	//ENEMIES
	
}
	