#pragma strict

function Start () {

}

var explosion : GameObject;

function Update () 
{
	if(Input.GetKeyDown(KeyCode.Space))
	{
		var cameraPosition = transform.position;
		cameraPosition.x -= 10;
		cameraPosition.z -= 10;
		Instantiate(explosion, Vector3(0,0,0), Quaternion.identity);
	}
}