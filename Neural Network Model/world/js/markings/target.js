class Target extends Marking {
   constructor(center, directionVector, width, height) {
       super(center, directionVector, width, height);
       this.type = "target";
   }

   draw(ctx) {
       const centerX = this.center.x;
       const centerY = this.center.y;

       // Outer circle (red)
       ctx.beginPath();
       ctx.arc(centerX, centerY, 30, 0, Math.PI * 2);
       ctx.fillStyle = "red";
       ctx.fill();
       ctx.closePath();

       // Middle circle (white)
       ctx.beginPath();
       ctx.arc(centerX, centerY, 20, 0, Math.PI * 2);
       ctx.fillStyle = "white";
       ctx.fill();
       ctx.closePath();

       // Inner circle (red)
       ctx.beginPath();
       ctx.arc(centerX, centerY, 10, 0, Math.PI * 2);
       ctx.fillStyle = "red";
       ctx.fill();
       ctx.closePath();
   }
}
