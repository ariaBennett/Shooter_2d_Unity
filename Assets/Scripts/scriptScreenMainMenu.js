#pragma strict
// Main Menu Script

function OnGUI() 
{
	if (GUI.Button(Rect(10,10,100,50), "Start Game") == true)
	{
		print("Start Game");
		Application.LoadLevel("sceneLevel1");
	}
	if (GUI.Button(Rect(10,70,100,50), "Exit Game") == true)
	{
		print("Exit Game");
		Application.Quit();
	}
}