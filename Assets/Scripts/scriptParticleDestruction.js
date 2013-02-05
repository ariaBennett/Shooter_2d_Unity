#pragma strict
// destroys the object this script is attached to

// Inspector Variables
var aliveDuration	:	float;

function Wait()
{
	yield WaitForSeconds(aliveDuration);
	Destroy(gameObject);
}

function Update() 
{
	if (aliveDuration)
	{
		Wait();
	}
}