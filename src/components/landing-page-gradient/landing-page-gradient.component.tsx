import { useEffect, useRef, FC } from 'react';
import React from 'react';
import { CanvasContainer } from './landing-page-gradient.styles';

// Type alias for a ball object
type Ball = {
  posX: number;
  posY: number;
  velX: number;
  velY: number;
  ballRadius: number;
  fillColour: string;
};

const LandingPageGradient: FC = () => {
  // Reference to the canvas element
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Ensure canvas exists

    const ctx = canvas.getContext('2d');
    if (!ctx) return; // Ensure the context exists

    // Get the container size to set the canvas size
    const container = document.getElementById('container');
    if (!container) return;

    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;

    // Function to create a ball object
    function createBall(
      posX: number,
      posY: number,
      velX: number,
      velY: number,
      ballRadius: number,
      fillColour: string
    ): Ball {
      return { posX, posY, velX, velY, ballRadius, fillColour };
    }

    // Array of balls
    const balls: Ball[] = [
      createBall(700, 300, 2, 2.5, 270, 'rgba(235, 227, 238, 0.8)'),
      createBall(500, 200, 2.2, 2, 330, 'rgba(46, 39, 151, 0.8)'),
      createBall(150, 150, 1.5, 1.5, 250, 'rgba(107, 189, 155, 0.8)'),
    ];

    // Function to draw a ball on the canvas
    function drawBall(ball: Ball) {
      if (ctx) {
        ctx.beginPath();
        ctx.arc(ball.posX, ball.posY, ball.ballRadius, 0, Math.PI * 2);
        ctx.fillStyle = ball.fillColour;
        ctx.fill();
        ctx.closePath();
      }
    }

    // Function to update a ball's position
    function updateBallPosition(ball: Ball) {
      ball.posX += ball.velX;
      ball.posY += ball.velY;

      // Handle bouncing off the walls
      if (canvas) {
      if (ball.posX + ball.ballRadius > canvas.width) {
        ball.posX = canvas.width - ball.ballRadius;
        ball.velX = -ball.velX;
      } else if (ball.posX - ball.ballRadius < 0) {
        ball.posX = ball.ballRadius;
        ball.velX = -ball.velX;
      }

      if (ball.posY + ball.ballRadius > canvas.height) {
        ball.posY = canvas.height - ball.ballRadius;
        ball.velY = -ball.velY;
      } else if (ball.posY - ball.ballRadius < 0) {
        ball.posY = ball.ballRadius;
        ball.velY = -ball.velY;
      }
    }
    }

    // Animation loop
    function animate() {
      if (ctx && canvas) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
      balls.forEach((ball) => {
        updateBallPosition(ball);
        drawBall(ball);
      });
      requestAnimationFrame(animate);

    }

    // Start the animation
    animate();
  }, []);

  // Return the reference to the canvas element
  return <CanvasContainer ref={canvasRef} />;
};

export default LandingPageGradient;