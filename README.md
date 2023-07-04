# shiny-engine
Module10-Challenge-6-28-23
Example logos that have been generated are located in the example file.
## Description
This app generates a simple logo in a svg file. This is beneficial for those who may not want to pay a graphic designer big bucks. 
I struggled with creating the test portion in jest. I wasn't exactly sure how  I wanted it to pass, but I gathered inspiration from the example test and went from there. 

## Installation
These installations are required to be able to run my code. 
-code editor (VS CODE)
-GitBash
-node.js
-inquirer
-jest

## Tests
The test is testing the render() method, to ensure it returns a string for the corresponding SVG file with the given shape color.
After adjusting color on shapes.test.js, save and open in GitBash. Run test using "npm run test". You should see that all three shapes (triangle, circle, and square) will pass. 
If needing the test to fail, you can purposely adjust specs in shapes-render.js.

## Usage
Type in " node index.js" in command line to start the inquirer prompt. 
Enter up to three characters
Then choose a text color, either in keyword or hexidecimal. 
Then choose shape.
You will be presented with a list of shapes to choose from: circle, triangle, and square.
Then choose a shape color, either in keyword or hexidecimal. 
When you have entered input for all the prompts
THEN an SVG file is created named `logo.svg`.
Everytime a logo is generated it will have an attached number that will increment if in existance already. 
Once generated, "Generated logo.svg" is printed in the command line.
Your `logo.svg` file will be located in main folder in this case "SHINY-ENGINE".
Upon opening in browser, a 300x200 pixel image that matches the criteria you entered will show. 
![logo2](https://github.com/abisinchan/verbose-potato/assets/132783183/cb1f162b-46f5-4355-93b9-dec9e8507133)


## Link to Demo
https://drive.google.com/file/d/1Cx7LuLbs-ztz74zstE2evrV_q474QHhX/view?usp=sharing

## Credits
n/a

## License
MIT LICENSE

## GITHUB REPO:
https://github.com/abisinchan/shiny-engine.git


