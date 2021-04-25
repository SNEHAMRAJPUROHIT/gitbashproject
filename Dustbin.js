class Dustbin
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		
		
	

		this.image=loadImage("dustbingreen.png")
		this.body=Bodies.rectangle(x,y,100,300,{ isStatic:true})
		

		
		World.add(world, this.body)
		

	}
	display()
	{
			
			var pos=this.body.position;

			

			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			
			
			image( this.image,0,0,300,300);
			pop()

			


			
			
	}

}