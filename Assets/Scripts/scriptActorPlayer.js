#pragma strict

// Player Script

// Inspector Variables
var tagName 			: String;		// allow the designer to setup a tag in the inspector
var rayDistance 		: float = 0;	// length of the ray for our raycast
var score				: int 	= 0;	// score for our player
var gameTime			: float = 20;   // Time game will last
var loadWaitTime		: float = 3.0;	// time before next scene loads
var numberOfPointsToWin : int 	= 5;	// points needed to win game

// Private Variables



function CountDown()
{
	if (--gameTime == 0)	// subtract from gameTime
	{
		CancelInvoke("CountDown");	// cancel countdown when gameTime hits 0
		//yield WaitForSeconds(loadWaitTime);
		
		if (score >= numberOfPointsToWin)
		{
			Application.LoadLevel("sceneScreenWin");
		}
		else
		{
			Application.LoadLevel("sceneScreenLose");	
		}
	}
}

function OnGUI()
{
	GUI.Label (Rect(10, 10, 100, 20), "Score: " + score.ToString());
	GUI.Label (Rect(10, 25, 100, 35), "Time: "  + gameTime.ToString());
}

function Start() 
{
	InvokeRepeating("CountDown", 1.0, 1.0);	// Repeat the countdown every second
}

function Update() // update is called every frame
{	
	if(Input.GetMouseButtonDown(0)) // use mouse button to select gameObjects on the screen
	{
		Debug.Log("YOU CLICKED THE GOD-DAMNED MOUSE");
		var hit:RaycastHit;
		var ray:Ray = Camera.main.ScreenPointToRay(Input.mousePosition);	// get mouse position
		
		if (Physics.Raycast(ray, hit, rayDistance))	// cast a ray against all colliders in the scene
		{
			if(hit.transform.tag == tagName)
			{
//				var position = Vector3(Random.Range(-6.146887, 6.146887), Random.Range(-4.474752, 4.474752), 0);	// new random position for game object
//				hit.transform.position = position;	//move game object to the new location
//				Debug.Log("YOU FUCKING HIT SOME SHIT");				
				var enemyScript = hit.transform.GetComponent(scriptActorEnemy);
				enemyScript.numberOfClicks -= 1;	//reduce the number each click
				// check that the object is at 0 before adding points to the score
				if (enemyScript.numberOfClicks == 0)
				{
					score += enemyScript.enemyPoint;	//add point to our overall score
				}
				
			}
			else
			{
				Debug.Log("This is not an enemy.");
			}
		}
	}

}