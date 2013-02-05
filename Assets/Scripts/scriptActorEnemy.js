#pragma strict

// Enemy Script

// Inspector Variables
var shapeColor 			: Color[];			// Color of the object
var numberOfClicks  	: int 		= 2;	// How many times to click on an object before it is destroyed
var respawnWaitTime 	: float 	= 2.0;	// How long before object unhides
var explosion			: Transform;		// load particle effect
var enemyPoint			: int 		= 1;	// point value of the enemy object

// Private Variables
private var storeClicks : int = 0;

function RespawnWaitTime()	// RespawnWaitTIme is used to hide a game object for an amount of time then unhide it
{
	renderer.enabled = false;
	RandomColor();
	yield WaitForSeconds(respawnWaitTime);
	renderer.enabled = true;
}

// RandomColor changes the material of the object out
function RandomColor()	//Random Color is used to change out the material of a game object
{
	if (shapeColor.Length > 0)
	{
		var newColor = Random.Range(0, shapeColor.Length);
		renderer.material.color = shapeColor[newColor];
	}
}

// Start is only called once
function Start()
{
	storeClicks        = numberOfClicks;
	var startPosition  = Vector3(Random.Range(-6.146887, 6.146887), Random.Range(-4.474752, 4.474752), 0);	// new random position for game object
	transform.position = startPosition;	//move game object to the new location
	RandomColor();
}

function Update() // update is called every frame
{
	if (numberOfClicks <= 0)
	{
		if (explosion)
		{
			Instantiate(explosion, transform.position, transform.rotation);		// create an explosion	
		}		
		var position = Vector3(Random.Range(-6.146887, 6.146887), Random.Range(-4.474752, 4.474752), 0);	// new random position for game object
		RespawnWaitTime();
		transform.position = position;	//move game object to the new location
		numberOfClicks = storeClicks;
	}
	
}