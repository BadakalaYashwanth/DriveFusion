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
C:
└───Neural Network Model
    │   car.js
    │   car.png
    │   controls.js
    │   index.html
    │   main.js
    │   miniMap.js
    │   network.js
    │   sensor.js
    │   style.css
    │   utils.js
    │   visualizer.js
    │
    └───world
        │   car.png
        │   index.html
        │   styles.css
        │
        ├───js
        │   │   viewport.js
        │   │   world.js
        │   │
        │   ├───editors
        │   │       crossingEditor.js
        │   │       graphEditor.js
        │   │       lightEditor.js
        │   │       markingEditor.js
        │   │       parkingEditor.js
        │   │       startEditor.js
        │   │       stopEditor.js
        │   │       targetEditor.js
        │   │       yieldEditor.js
        │   │
        │   ├───items
        │   │       building.js
        │   │       tree.js
        │   │
        │   ├───markings
        │   │       crossing.js
        │   │       light.js
        │   │       marking.js
        │   │       parking.js
        │   │       start.js
        │   │       stop.js
        │   │       target.js
        │   │       yield.js
        │   │
        │   ├───math
        │   │       graph.js
        │   │       osm.js
        │   │       utils.js
        │   │
        │   └───primitives
        │           envelope.js
        │           point.js
        │           polygon.js
        │           segment.js
        │
        └───saves
                big. world

Getting Started

