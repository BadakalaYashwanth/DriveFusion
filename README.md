# Neural-Network-Languages-DriveSense-AI

Overview
DriveSense AI is a JavaScript-based project utilizing Neural Network Languages (NNL) to simulate autonomous driving. The project incorporates sensor data to enable cars to navigate a generated environment, demonstrating concepts of AI and machine learning in a visually engaging manner.

Features
Autonomous Car Simulation: Generate multiple AI-driven cars that navigate through a dynamically created world.
Neural Networks: Implement neural networks to control car behavior, with the ability to load, save, and mutate networks.
Dynamic Environment: Automatically generate roads, buildings, and trees for cars to navigate.
Visual Representation: Display car movements and neural network structures in real-time using HTML5 canvas.
MiniMap: An additional minimap for a broader view of the environment.

Microsoft Windows [Version 10.0.22631.3737]
(c) Microsoft Corporation. All rights reserved.

Project Structure

Neural Network Model FOLDER - 
car.js,
controls.js,
index.html,
main.js,
miniMap.js,
network.js,
sensor.js,
style.css,
utils.js,
visualizer.js,
car.png.

WORLD FOLDER -

car.png,
index.html,
styles.css.

JS FOLDER -
viewport.js,
world.js.

EDITORS FOLDER - 
crossingEditor.js,
graphEditor.js,
lightEditor.js,
markingEditor.js,
parkingEditor.js,
startEditor.js,
stopEditor.js,
targetEditor.js,
yieldEditor.js.

ITEM FOLDER -
building.js,
tree.js.

MARKING FOLDER -
crossing.js,
light.js,
marking.js,
parking.js,
start.js,
stop.js,
target.js,
yield.js.
        
MATH FOLDER -
graph.js,
osm.js,
utils.js.
    
PRIMITIVE FOLDER -
envelope.js,
point.js,
polygon.js,
segment.js.
        

Getting Started
1. Clone the repository
git clone https://github.com/BadakalaYashwanth/Neural-Network-Languages-DriveSense-AI.git
2. Open index.html in a web browser to start the simulation.

Usage
Start Simulation: Open the project in a browser to start the car simulation.
Save Best Brain: Click the 'Save' button to save the best-performing car's neural network to local storage.
Discard Brain: Click the 'Discard' button to remove the saved neural network from local storage.

Technical Details
Neural Network Languages (NNL):
Neural Network: Each car is controlled by a neural network, which takes sensor inputs and determines the car's acceleration and steering.
Training: Neural networks are trained through mutation, allowing cars to learn and improve their performance over time.

Sensor Identification:
Sensors: Each car is equipped with sensors that detect distances to the nearest road borders and obstacles.
Data Processing: Sensor data is fed into the neural network, which processes the inputs and adjusts the car's behavior accordingly.

This project was developed with inspiration and guidance from Radu Mariescu-Istodor, which helped me understand the math behind developing the model. His insights were invaluable in creating a real-life view and utilizing sensor NNL effectively. And using the Math behind it (vector 2d).

How It Works

Environment Generation:
Roads, buildings, and trees are generated based on a graph structure.
Roads are represented by segments, and buildings are placed alongside roads with defined spacing.

Car Simulation:
Each car is initialized with a neural network that controls its behavior.
Cars navigate the environment using sensor data, adjusting their speed and direction based on neural network outputs.

Neural Network Training:
Initially, cars are equipped with randomly generated neural networks.
The best-performing car's neural network can be saved and mutated to improve performance over time.

Real-time Visualization:
Car movements and neural network structures are visualized using HTML5 canvas elements.
A minimap provides an overview of the entire environment, enhancing the visualization of car navigation.



